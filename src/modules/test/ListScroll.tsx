import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenWrapper from '@src/shared/ui/components/ScreenWrapper';
import {styleView} from '@src/shared/ui/styles/styleView';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  RefreshControl,
  Image,
} from 'react-native';
import reactotron from 'reactotron-react-native';

const ITEM_HEIGHT = 360;
const PAGE_SIZE = 20;
const CACHE_KEY = 'CACHED_LIST_DATA';
type Props = {};
const fetchMockData = (
  page: number,
): Promise<Array<{id: string; title: string}>> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const start = page * PAGE_SIZE;
      const data = Array.from({length: PAGE_SIZE}, (_, i) => ({
        id: `item-${start + i}`,
        title: `Item ${start + i}`,
      }));
      resolve(data);
    }, 1000);
  });
};
const generateMockData = (start: number, count: number) =>
  Array.from({length: count}, (_, i) => ({
    id: `${start + i}`,
    title: `Post ${start + i}`,
    image: 'https://picsum.photos/400/300?random=' + (start + i),
  }));
const ListScroll = (props: Props) => {
  const {} = props;
  const [data, setData] = useState<
    Array<{id: string; title: string; image: string}>
  >(generateMockData(1, 10));
  const [page, setPage] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadCache = async () => {
    try {
      const json = await AsyncStorage.getItem(CACHE_KEY);
      if (json) {
        const cachedData = JSON.parse(json);
        setData(cachedData);
      }
    } catch (err) {
      console.log('err');
    }
  };
  const loadDataInit = async () => {
    const initData = await fetchMockData(0);
    setData(initData);
    setPage(1);
    setHasMore(true);
    saveCache(initData);
  };

  const saveCache = async (data: Array<any>) => {
    try {
      await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch (err) {
      console.log('err');
    }
  };

  const loadMoreData = async () => {
    reactotron.log('log load more');
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    const moreData = await fetchMockData(page);
    if (moreData.length < PAGE_SIZE) setHasMore(false);
    setData(prev => [...prev, ...moreData]);
    setPage(prev => prev + 1);
    setLoadingMore(false);
  };
  const handleRefresh = async () => {
    setRefreshing(true);
    await loadDataInit();
    setRefreshing(false);
  };
  useEffect(() => {
    // loadCache().then(() => {
    //   loadDataInit();
    // });
  }, []);

  const getItemLayout = useCallback(
    (val: any, index: number) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.card}>
      <Image
        source={{uri: item.image}}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
  const keyExtractor = useCallback((item: {id: string}) => item.id, []);
  const onViewableItemsChanged = useRef(({viewableItems, changed}) => {
    console.log('Các item đang hiển thị:', viewableItems);
    console.log('Các item thay đổi trạng thái:', changed);
  }).current;
  const loadMore = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);

    // Giả lập delay
    setTimeout(() => {
      const next = generateMockData(data.length + 1, 10);
      setData(prev => [...prev, ...next]);
      if (data.length + next.length >= 50) setHasMore(false); // Giới hạn dữ liệu
      setLoadingMore(false);
    }, 1500);
  };
  return (
    <ScreenWrapper
      title="ListScroll"
      back
      children={
        <View style={styles.container}>
          <FlatList
            style={{width: '100%'}}
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            // getItemLayout={getItemLayout}
            getItemLayout={(_, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index,
            })}
            initialNumToRender={5}
            maxToRenderPerBatch={8}
            windowSize={5}
            removeClippedSubviews={true}
            onEndReached={loadMore}
            // onEndReached={loadMoreData}
            onEndReachedThreshold={0.3}
            scrollEventThrottle={16}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 50,
              waitForInteraction: true,
            }}
          />
        </View>
      }
    />
  );
};

const ListItem = React.memo(({title}: {title: string}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    ...styleView.centerItem,
  },
  title: {
    fontSize: 18,
  },
  card: {
    height: ITEM_HEIGHT,
    marginVertical: 4,
    backgroundColor: '#fff',
    elevation: 2,
    padding: 10,
  },
  image: {
    height: 200,
    borderRadius: 8,
  },
});

export default ListScroll;
