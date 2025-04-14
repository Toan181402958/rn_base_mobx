// import React, {useState} from 'react';
// import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
// import FastImage, {FastImageProps} from 'react-native-fast-image';
// import {styleView} from '../styles/styleView';
// import R from '@src/assets/R';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// const FstImage = (props: FastImageProps) => {
//   const [imageLoading, setImageLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [reloadKey, useReloadKey] = useState(new Date().getTime().toString());
//   const reloadImage = () => {
//     useReloadKey(new Date().getTime().toString());
//   };
//   var {source} = props;

//   if (typeof source === 'object') {
//     source = source.uri
//       ? {
//           ...source,
//           priority: FastImage.priority.high,
//           uri: source.uri,
//           cache: FastImage.cacheControl.immutable,
//         }
//       : null;
//   }

//   return (
//     <FastImage
//       {...props}
//       children={
//         !!imageLoading ? (
//           <SkeletonPlaceholder borderRadius={4}>
//             <View style={props.style}></View>
//           </SkeletonPlaceholder>
//         ) : error ? (
//           <View style={[styles.box_error, props.style]}>
//             <Text children={R.strings().error} />
//           </View>
//         ) : (
//           props.children
//         )
//       }
//       onLoadStart={() => {
//         setError(false);
//         setImageLoading(true);
//       }}
//       onLoadEnd={() => {
//         // setImageLoading(false);
//         // setError(false);
//       }}
//       onLoad={event => {
//         setImageLoading(false);
//         setError(false);
//       }}
//       onError={() => {
//         setError(true);
//         setImageLoading(false);
//       }}
//       source={source}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   box_loading: {
//     backgroundColor: 'rgba(0, 0, 0, 0.2)',
//     flex: 1,
//     overflow: 'hidden',
//   },
//   box_error: {
//     flex: 1,
//     backgroundColor: 'gray',
//     ...styleView.centerItem,
//   },
// });

// export default FstImage;

import React, {useMemo, useState} from 'react';
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  StyleProp,
  ImageStyle,
  StyleSheet,
  Text,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useImmer} from 'use-immer';
import R from '@src/assets/R';
import {ImageProps} from '@src/shared/types/fstImage.props';

type ImageState = {
  loaded: boolean;
  waiting: boolean;
  failed: boolean;
  loading: boolean;
};

const MyFstImage: React.FC<ImageProps> = (props: ImageProps) => {
  const [imageState, setImageState] = useImmer<ImageState>({
    loaded: false,
    waiting: true,
    failed: false,
    loading: false,
  });
  // const [reloadKey, useReloadKey] = useState(new Date().getTime().toString())
  // const reloadImage = () => {
  //   useReloadKey(new Date().getTime().toString())
  // }
  const {
    style: styleOverride = {},
    resizeMode = 'cover',
    containerStyle,
  } = props;
  var {source} = props;
  const style: StyleProp<ImageStyle> = useMemo(
    () => styleOverride,
    [styleOverride],
  );

  const imageSource = React.useMemo(() => {
    if (typeof source === 'object') {
      return source.uri
        ? {
            ...source,
            priority: FastImage.priority.high,
            uri: source.uri,
          }
        : props.defaultSource || R.images.ic_home;
    }
    return source;
  }, [source, props.defaultSource]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setImageState(draft => {
        draft.waiting = false;
      });
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  React.useEffect(() => {
    if (!imageState.waiting && !imageState.loaded) {
      const loadStart = () => {
        setImageState(draft => {
          draft.failed = false;
          draft.loading = true;
        });
      };
      loadStart();
    }
  }, [imageState.waiting, imageState.loaded, setImageState]);

  const handleLoadEnd = React.useCallback(() => {
    setImageState(draft => {
      draft.failed = false;
      draft.loaded = true;
      draft.loading = false;
    });
  }, [setImageState]);
  const handleError = React.useCallback(() => {
    setImageState(draft => {
      draft.failed = true;
      draft.loading = false;
    });
  }, [setImageState]);
  return (
    <FastImage
      {...props}
      style={style}
      resizeMode={resizeMode}
      onLoadEnd={handleLoadEnd}
      onError={handleError}
      source={imageSource}>
      {imageState.loading ? (
        <View style={styles.containerLoading}>
          <ActivityIndicator color={'gray'} style={styles.flex} />
        </View>
      ) : imageState.failed ? (
        <TouchableOpacity
          style={styles.containerReload}
          // onPress={reloadImage}
        >
          {/* <Image
              style={styles.imageRetry}
              source={R.images.ic_add}
              resizeMode="center"
            /> */}
        </TouchableOpacity>
      ) : (
        props.children
      )}
    </FastImage>
  );
};

const FstImage = React.memo(MyFstImage);
export default FstImage;

const styles = StyleSheet.create({
  containerLoading: {
    backgroundColor: 'transparent',
    flex: 1,
    overflow: 'hidden',
  },
  containerReload: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  flex: {
    flex: 1,
  },
  imageRetry: {
    alignSelf: 'center',
  },
});
