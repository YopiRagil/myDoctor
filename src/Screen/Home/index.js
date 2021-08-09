import * as React from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Container, CardSpecialicity, CardDoctor } from '../../Components';
import dataJSON from '../../assets/data';
import { setDocterDetail } from '../../Redux/action/appAction';
import { connect } from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainRoot: {
    flex: 1,
    backgroundColor: '#f6fff5',
  },
  flexCenter: { flexDirection: 'row', justifyContent: 'center' },
  titleText: { fontWeight: 'bold', color: '#404040', fontSize: 14 },
  containerDoctor: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  textSeeMore: {
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 13,
    color: '#406354',
    marginHorizontal: 5,
    marginTop: 10,
  },
  imageCarrousel: {
    width: '100%',
    height: '80%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  viewCarrousel: {
    height: 250,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const data = {
  activeIndex: 0,
  carouselItems: dataJSON.banner,
};

const Home = (props) => {
  const { navigation, setDocterDetail } = props;
  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.viewCarrousel}>
        <Image
          style={styles.imageCarrousel}
          source={{
            uri: item.link,
          }}
        />
      </View>
    );
  };
  const handleClickDoctor = (data) => {
    setDocterDetail(data);
    navigation.navigate('DoctorDetails');
  };

  return (
    <View style={styles.mainRoot}>
      <ScrollView>
        <View style={styles.flexCenter}>
          <Carousel
            layout={'default'}
            autoplay={true}
            autoplayDelay={1000}
            loop={true}
            ref={(ref) => (carousel = ref)}
            data={data.carouselItems}
            sliderWidth={windowWidth}
            itemWidth={windowWidth}
            sliderHeight={250}
            itemHeight={250}
            renderItem={renderItem}
          />
        </View>
        <Container fluid>
          <Text style={[styles.titleText, { marginHorizontal: 15 }]}>
            Find Doctor By Speciality
          </Text>
          <ScrollView horizontal={true}>
            {dataJSON.specialis.map((item, index) => (
              <CardSpecialicity
                spaceLeft={15}
                spaceRight={0}
                key={index}
                icon={item.icon}
                type={item.type}
              />
            ))}
            <TouchableOpacity onPress={() => navigation.navigate('Specialist')}>
              <CardSpecialicity
                spaceLeft={15}
                spaceRight={15}
                icon={{
                  icon: 'more-horiz',
                  iconType: 'MaterialIcons',
                  color: 'gray',
                }}
                type="See More"
                size={24}
              />
            </TouchableOpacity>
            <View style={{ width: 15 }} />
          </ScrollView>
        </Container>
        <Container>
          <View style={styles.containerDoctor}>
            <Text style={styles.titleText}>List Doctor</Text>
            {dataJSON.doctors.map((docter, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleClickDoctor(docter)}
              >
                <CardDoctor {...docter} />
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => navigation.navigate('Doctors')}>
              <Text style={styles.textSeeMore}>See More</Text>
            </TouchableOpacity>
          </View>
        </Container>
      </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
