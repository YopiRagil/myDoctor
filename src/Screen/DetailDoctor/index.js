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
import { connect, useSelector } from 'react-redux';
import { setDocterDetail } from '../../Redux/action/appAction';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainRoot: {
    flex: 1,
    backgroundColor: '#f6fff5',
  },
  ScrollViewContent: {
    paddingTop: 100,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    resizeMode: 'cover',
    marginRight: 10,
  },
});

const DoctorDetails = (props) => {
  const { doctor } = props;
  console.log('------------', doctor);
  return (
    <View style={styles.mainRoot}>
      <Container>
        <ScrollView style={styles.ScrollViewContent}>
          <Image
            style={styles.image}
            source={{
              uri: doctor.picture,
            }}
          />
          {/*
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
      </View> */}
        </ScrollView>
      </Container>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    doctor: state.apps.doctor,
  };
};
const mapDispatchToProps = {
  setDocterDetail,
};
export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetails);
