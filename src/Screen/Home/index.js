import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Container, CardSpecialicity, CardDoctor } from '../../Components';
import dataJSON from '../../assets/data';
import { Icon } from '../../utils';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  containerCarrousel: { flex: 1, backgroundColor: '#f6fff5' },
  flexCenter: { flexDirection: 'row', justifyContent: 'center' },
  titleText: { fontWeight: 'bold', color: '#404040', fontSize: 14 },
  containerDoctor: {
    paddingVertical: 20,
  },
});
const data = {
  activeIndex: 0,
  carouselItems: dataJSON.banner,
};

const Home = () => {
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          height: 250,
          margin: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '80%',
            borderRadius: 10,
            resizeMode: 'cover',
          }}
          source={{
            uri: item.link,
          }}
        />
      </View>
    );
  };
  return (
    <View style={styles.containerCarrousel}>
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
              <CardSpecialicity key={index} icon={item.icon} type={item.type} />
            ))}
            <CardSpecialicity
              icon={{ icon: 'more', iconType: 'MaterialIcons', color: 'gray' }}
              type="See More"
              size={24}
            />
            <View style={{ width: 15 }} />
          </ScrollView>
        </Container>
        <Container>
          <View style={styles.containerDoctor}>
            <Text style={styles.titleText}>List Doctor</Text>
            {dataJSON.doctors.map((docter, index) => (
              <CardDoctor key={index} {...docter} />
            ))}
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'right',
                fontSize: 13,
                color: '#406354',
                marginHorizontal: 5,
                marginTop: 10,
              }}
            >
              See More
            </Text>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default Home;
