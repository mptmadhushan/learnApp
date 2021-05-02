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
  function renderHeader() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../assets/images/pngtree-cartoon-kid-meadow-green-background-material-image_124473.jpg')}>
          <View style={styles.container}>
            <View style={styles.contentCenter}>
              <Text style={styles.title}>xyz App</Text>
              <TouchableOpacity
                onPress={() => {
                  // navigation.navigate('PreAccident');
                }}
                style={{
                  marginTop: SIZES.height * 0.1,
                  marginLeft: -10,
                  borderRadius: 30,
                  paddingVertical: 15,
                  paddingHorizontal: 25,
                  marginBottom: 20,
                  justifyContent: 'center',
                  backgroundColor: COLORS.primary,
                }}>
                <Text style={{...FONTS.h3, color: COLORS.white}}>
                  component 01
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // createUser();
                  // navigation.navigate('CallAmbulance');
                  // navigation.navigate('Home');
                }}
                style={{
                  marginLeft: 70,
                  elevation: 8,
                  borderRadius: 30,
                  paddingVertical: 15,
                  paddingHorizontal: 25,
                  marginBottom: 20,
                  justifyContent: 'center',
                  backgroundColor: COLORS.primary,
                }}>
                <Text style={{...FONTS.h3, color: COLORS.white}}>
                  component 02
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // createUser();
                  // navigation.navigate('PreAccident');
                  // navigation.navigate('Home');
                }}
                style={{
                  marginTop: SIZES.height * 0.1,
                  marginLeft: 100,
                  borderRadius: 30,
                  paddingVertical: 15,
                  paddingHorizontal: 25,
                  marginBottom: 20,
                  justifyContent: 'center',
                  backgroundColor: COLORS.primary,
                }}>
                <Text style={{...FONTS.h3, color: COLORS.white}}>
                  component 03
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // navigation.navigate('CallAmbulance');
                }}
                style={{
                  marginLeft: -20,
                  elevation: 8,
                  borderRadius: 30,
                  paddingVertical: 15,
                  paddingHorizontal: 25,
                  marginBottom: 20,
                  justifyContent: 'center',
                  backgroundColor: COLORS.primary,
                }}>
                <Text style={{...FONTS.h3, color: COLORS.white}}>
                  component 04
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }

  return <SafeAreaView style={styles.container}>{renderHeader()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: COLORS.lightGray4,
  // },
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
  title: {
    marginTop: 0.16,
    fontSize: 55,
    padding: 15,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    padding: 10,
  },
});

export default Home;
