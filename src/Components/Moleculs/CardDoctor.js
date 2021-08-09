import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from '../../utils';

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: '100%',
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    resizeMode: 'cover',
    marginRight: 10,
  },
  textName: { color: 'black', fontSize: 14, fontWeight: 'bold' },
  textSpecialist: { color: '#406354', fontSize: 14 },
  flexRow: { flexDirection: 'row', alignItems: 'center' },
  textInfo: { color: 'gray', fontSize: 13, marginLeft: 5 },
});

const CardDoctor = (props) => {
  const { name, specialis, rate, exp, picture } = props;
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: picture,
        }}
      />
      <View>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textSpecialist}>Specialist {specialis}</Text>
        <View style={styles.flexRow}>
          <Icon
            type="MaterialCommunityIcons"
            name="medical-bag"
            color="silver"
            size={16}
          />
          <Text style={styles.textInfo}>{exp} Tahun</Text>
        </View>
        <View style={styles.flexRow}>
          <Icon type="FontAwesome" name="heart" color="silver" size={15} />
          <Text style={styles.textInfo}>{rate}%</Text>
        </View>
      </View>
    </View>
  );
};

export default CardDoctor;
