import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from '../../utils';

const styles = StyleSheet.create({
  specialityCard: {
    elevation: 2,
    padding: 10,
    width: 100,
    height: 80,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  specialityText: { marginLeft: 5, fontSize: 12, color: 'gray' },
  viewOfText: { height: 40, flexDirection: 'row', alignItems: 'center' },
});
const CardSpecialicity = (props) => {
  const { icon, type, spaceLeft, spaceRight } = props;
  return (
    <View
      style={[
        styles.specialityCard,
        {
          marginLeft: spaceLeft ? spaceLeft : 0,
          marginRight: spaceRight ? spaceRight : 0,
        },
      ]}
    >
      <Icon
        name={icon?.icon}
        type={icon?.iconType}
        color={icon?.color}
        size={24}
      />
      <View style={styles.viewOfText}>
        <Text style={styles.specialityText}>{type}</Text>
      </View>
    </View>
  );
};

export default CardSpecialicity;
