/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../constants';

const Home = ({navigation}) => {
  function renderHome() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={{flex: 1, backgroundColor: COLORS.primary}}
          source={require('../assets/kisspng-cartoon-house-drawing-2017-cartoon-tree-house-road-5a83c9eb52b914.6045599315185863473388.png')}>
          <View style={styles.containerNew}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('IQ');
              }}>
              <ImageBackground
                style={{height: '100%', width: '100%'}}
                source={require('../assets/teacher.png')}>
                <Text style={styles.title}>
                  Tap! {'\n'}to start IQ{'\n'}TEST
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }

  return <SafeAreaView style={styles.container}>{renderHome()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  containerNew: {
    height: SIZES.height / 2,
    marginTop: SIZES.height / 3,
  },
  firstCard: {
    display: 'flex',
    height: SIZES.height / 6,
    width: '80%',
    backgroundColor: COLORS.fourth,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SMARC___',
    marginTop: SIZES.height / 8.5,
    fontSize: 35,
    marginRight: SIZES.width / 2.7,
    color: COLORS.white,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  title2: {
    fontSize: 15,
    padding: 10,
    color: COLORS.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
