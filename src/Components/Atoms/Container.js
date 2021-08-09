import React from 'react';
import { View } from 'react-native';

const Container = (props) => {
  const { fluid, children } = props;
  return <View style={{ paddingHorizontal: fluid ? 0 : 15 }}>{children}</View>;
};

export default Container;
