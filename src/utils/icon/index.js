import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Icon = (props) => {
  const { type, name, size, color } = props;
  if (type === 'FontAwesome') {
    return (
      <FontAwesome
        size={size ? size : 24}
        name={name}
        color={color ? color : 'gray'}
      />
    );
  } else if (type === 'FontAwesome5') {
    return (
      <FontAwesome5
        size={size ? size : 24}
        name={name}
        color={color ? color : 'gray'}
      />
    );
  } else if (type === 'Entypo') {
    return (
      <Entypo
        size={size ? size : 24}
        name={name}
        color={color ? color : 'gray'}
      />
    );
  } else if (type === 'MaterialCommunityIcons') {
    return (
      <MaterialCommunityIcons
        size={size ? size : 24}
        name={name}
        color={color ? color : 'gray'}
      />
    );
  } else if (type === 'MaterialIcons') {
    return (
      <MaterialIcons
        size={size ? size : 24}
        name={name}
        color={color ? color : 'gray'}
      />
    );
  }
};

export default Icon;
