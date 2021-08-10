import React from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Container } from '../../Components';
import { Icon } from '../../utils';
import {
  makeAppointMent,
  cancelAppointMent,
} from '../../Redux/action/appAction';
import { connect } from 'react-redux';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainRoot: {
    flex: 1,
    backgroundColor: '#f6fff5',
  },
  ScrollViewContent: {
    paddingTop: 70,
  },
  image: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    borderRadius: 100,
    resizeMode: 'cover',
    marginRight: 10,
  },
  viewOfProfile: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 10,
    borderColor: 'silver',
  },
  viewOfInformation: {
    width: windowWidth * 0.6 - 30,
  },
  textName: { color: 'black', fontSize: 18, fontWeight: 'bold' },
  textSpecialist: { color: '#406354', fontSize: 16 },
  flexRow: { flexDirection: 'row', alignItems: 'center' },
  textInfo: { color: 'gray', fontSize: 15, marginLeft: 5 },
  widthIcon: { width: 20, alignItems: 'center' },
  textInfo2: {
    color: 'gray',
    fontSize: 14,
    marginLeft: 5,
    width: windowWidth - 65,
    textAlign: 'justify',
  },
  descAndAddress: {
    backgroundColor: 'white',
    padding: 10,
  },
  viewOfButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: windowWidth,
    position: 'absolute',
    bottom: 0,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

const DoctorDetails = (props) => {
  const { doctor, makeAppointMent, cancelAppointMent, apointment } = props;
  const handleAppointMent = (doctor) => {
    const message = `Hi, I’d like to make an appointment for ${doctor.name} today`;
    Linking.openURL(`whatsapp://send?text=${message}&phone=${doctor.phone}`);
  };
  return (
    <View style={styles.mainRoot}>
      <Container>
        <ScrollView style={styles.ScrollViewContent}>
          <View style={styles.viewOfProfile}>
            <Image
              style={styles.image}
              source={{
                uri: doctor?.picture,
              }}
            />
            <View style={styles.viewOfInformation}>
              <Text style={styles.textName}>{doctor?.name}</Text>
              <Text style={styles.textSpecialist}>
                Specialist {doctor?.specialis}
              </Text>
              <View style={styles.flexRow}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="medical-bag"
                  color="silver"
                  size={16}
                />
                <Text style={styles.textInfo}>{doctor?.exp} Tahun</Text>
              </View>
              <View style={styles.flexRow}>
                <Icon
                  type="FontAwesome"
                  name="heart"
                  color="silver"
                  size={15}
                />
                <Text style={styles.textInfo}>{doctor?.rate}%</Text>
              </View>
              <View style={styles.flexRow}>
                <Icon
                  type="FontAwesome"
                  name="phone-square"
                  color="silver"
                  size={16}
                />
                <Text style={styles.textInfo}>{doctor?.phone}</Text>
              </View>
            </View>
          </View>
          <View style={styles.descAndAddress}>
            <View style={[styles.flexRow, { marginBottom: 10 }]}>
              <View style={styles.widthIcon}>
                <Icon
                  type="FontAwesome"
                  name="map-marker"
                  color="gray"
                  size={16}
                />
              </View>
              <Text style={[styles.textInfo2]}>{doctor?.address}</Text>
            </View>
            <View style={styles.flexRow}>
              <View style={styles.widthIcon}>
                <Icon
                  type="MaterialIcons"
                  name="description"
                  color="gray"
                  size={16}
                />
              </View>
              <Text style={styles.textInfo2}>Description :</Text>
            </View>
            <Text style={styles.textInfo2}>{doctor?.desc}</Text>
          </View>
        </ScrollView>
      </Container>
      <View style={styles.viewOfButton}>
        <MyButton
          onPress={() => handleAppointMent(doctor)}
          width={0.8}
          color="#14b383"
          text="Make Appointment"
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    doctor: state.apps.doctor,
    apointment: state.apps.appointment,
  };
};
const mapDispatchToProps = {
  makeAppointMent,
  cancelAppointMent,
};
export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetails);

const MyButton = (props) => {
  const { width, color, text, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: color,
          padding: 10,
          borderRadius: 100,
          width: windowWidth * width,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 14 }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
