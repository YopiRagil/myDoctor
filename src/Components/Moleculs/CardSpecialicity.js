import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from '../../utils';

const styles = StyleSheet.create({
  specialityCard: {
    elevation: 2,
    padding: 10,
    width: 80,
    height: 70,
    marginLeft: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  specialityText: { marginLeft: 5, fontSize: 12, color: 'gray' },
});
const CardSpecialicity = (props) => {
  const { icon, type } = props;
  return (
    <View style={styles.specialityCard}>
      <Icon
        name={icon?.icon}
        type={icon?.iconType}
        color={icon?.color}
        size={24}
      />
      <Text style={styles.specialityText}>{type}</Text>
    </View>
  );
};

export default CardSpecialicity;
