import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from '../../utils';

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: '100%',
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNotFound: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'silver',
  },
});

const CardDataNone = (props) => {
  const { message } = props;
  return (
    <View style={styles.card}>
      <Icon type="Entypo" name="emoji-sad" color="silver" size={40} />
      <Text style={styles.textNotFound}>{message}</Text>
    </View>
  );
};

export default CardDataNone;
