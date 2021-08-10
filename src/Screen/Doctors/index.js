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
import { setDocterDetail } from '../../Redux/action/appAction';
import { connect } from 'react-redux';

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
    height: 120,
  },
  input: {
    height: 40,
    marginHorizontal: 10,
    marginTop: 12,
    marginBottom: 7,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 100,
    borderColor: 'silver',
    backgroundColor: 'white',
  },
  ScrollViewContent: {
    paddingTop: 120,
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexCentering: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAsButton: {
    borderWidth: 1,
    borderColor: '#14b383',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 100,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Doctors = (props) => {
  const { navigation, setDocterDetail } = props;
  const [search, setSearch] = useState('');
  const dataRoutes = props?.route?.params?.data;
  const [filter, setFilter] = useState(dataRoutes ? dataRoutes : '');
  const dataDoctors = dataJSON.doctors.filter(
    (el) =>
      (el.name + el.specialis).toLowerCase().includes(search.toLowerCase()) &&
      (filter ? filter === el.specialis : true)
  );
  const handleClickDoctor = (data) => {
    setDocterDetail(data);
    navigation.navigate('DoctorDetails');
  };
  return (
    <View style={styles.mainRoot}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={search}
          placeholder="Search Specialist"
        />
        <ScrollView horizontal={true}>
          <TouchableOpacity onPress={() => setFilter('')}>
            <View
              style={[
                styles.viewAsButton,
                {
                  backgroundColor: !filter ? 'white' : '#14b383',
                },
              ]}
            >
              <Text style={{ color: !filter ? '#14b383' : 'white' }}>
                All Specialist
              </Text>
            </View>
          </TouchableOpacity>
          {dataJSON.specialis.map((item, idx) => (
            <TouchableOpacity onPress={() => setFilter(item.type)} key={idx}>
              <View
                style={[
                  styles.viewAsButton,
                  {
                    backgroundColor: filter === item.type ? 'white' : '#14b383',
                  },
                ]}
              >
                <Text
                  style={{ color: filter === item.type ? '#14b383' : 'white' }}
                >
                  {item.type}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Container>
        <ScrollView style={styles.ScrollViewContent}>
          <View style={styles.flexColumn}>
            {dataDoctors.length > 0 ? (
              dataDoctors.map((doctor, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleClickDoctor(doctor)}
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

const mapStateToProps = (state) => {
  return {
    apps: state.apps,
  };
};
const mapDispatchToProps = {
  setDocterDetail,
};
export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
