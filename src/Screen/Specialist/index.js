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
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Container, CardSpecialicity, CardDataNone } from '../../Components';
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
  flexWrapped: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  flexCentering: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Specialist = () => {
  const [search, setSearch] = useState('');
  const dataSpecialists = dataJSON.specialis.filter((el) =>
    el.type.toLowerCase().includes(search.toLowerCase())
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
          <View style={styles.flexWrapped}>
            {dataSpecialists.length > 0 ? (
              dataSpecialists.map((specialist, index) => (
                <View key={index} style={styles.flexCentering}>
                  <CardSpecialicity
                    spaceRight={0}
                    icon={specialist.icon}
                    type={specialist.type}
                  />
                </View>
              ))
            ) : (
              <CardDataNone message={'Specialist Not Found!'} />
            )}
          </View>
        </ScrollView>
      </Container>
    </View>
  );
};

export default Specialist;
