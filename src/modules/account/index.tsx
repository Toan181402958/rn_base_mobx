import UIStore from '@src/shared/store/ui';
import React from 'react';
import {View, StyleSheet} from 'react-native';

type Props = {
  uiStore: UIStore;
};
const AccountScreen = (props: Props) => {
  const {} = props;
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountScreen;
