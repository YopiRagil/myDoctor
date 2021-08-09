import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Container, CardDoctor, CardDataNone } from '../../Components';
import dataJSON from '../../assets/data';
import { Icon } from '../../utils';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainRoot: {
    flex: 1,
    backgroundColor: '#f6fff5',
  },
  flexCenter: { flexDirection: 'row', justifyContent: 'center' },
  containerInput: {
    position: 'absolute',
    top: 0,
    paddingTop: 30,
    zIndex: 2,
    width: windowWidth,
    backgroundColor: '#f6fff5',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 100,
    borderColor: 'silver',
    backgroundColor: 'white',
  },
  ScrollViewContent: {
    paddingTop: 100,
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexCentering: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Doctors = (props) => {
  const { navigation } = props;
  const [search, setSearch] = useState('');
  const dataDoctors = dataJSON.doctors.filter((el) =>
    (el.name + el.specialis).toLowerCase().includes(search.toLowerCase())
  );
  return (
    <View style={styles.mainRoot}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={search}
          placeholder="Search Specialist"
        />
      </View>
      <Container>
        <ScrollView style={styles.ScrollViewContent}>
          <View style={styles.flexColumn}>
            {dataDoctors.length > 0 ? (
              dataDoctors.map((doctor, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate('DoctorDetails')}
                >
                  <CardDoctor {...doctor} />
                </TouchableOpacity>
              ))
            ) : (
              <CardDataNone message={'Doctor Not Found!'} />
            )}
          </View>
        </ScrollView>
      </Container>
    </View>
  );
};

export default Doctors;
