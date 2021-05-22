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

const Quiz = ({navigation}) => {
  const n = 8;
  function renderQuiz() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../assets/images/ge.jpg')}>
          <View style={styles.containerNew}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OnBoard');
              }}
              style={styles.container2}>
              <View style={styles.firstCard}>
                <Image
                  style={{height: '100%', width: '50%'}}
                  source={require('../assets/3d-flame-student-presenting-a-diagram.png')}
                />
                <View>
                  <Text style={styles.title}>
                    Complete Quiz{'\n'}To get Rewards
                  </Text>
                  <Text style={styles.title3}>
                    Complete Quiz{'\n'}To get Rewards{'\n'} Complete Quiz{'\n'}
                    To get Rewards
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.container2}>
              {/* <Text style={{color: COLORS.third}}>Please elect answer</Text> */}
              <View style={styles.container3}>
                <View style={styles.number}>
                  <Text style={{color: COLORS.third}}>1</Text>
                </View>
                <View style={styles.number1}>
                  <Text style={{color: COLORS.third}}>2</Text>
                </View>
                <View style={styles.number}>
                  <Text style={{color: COLORS.third}}>3</Text>
                </View>
                <View style={styles.number}>
                  <Text style={{color: COLORS.third}}>4</Text>
                </View>
                <View style={styles.number}>
                  <Text style={{color: COLORS.third}}>5</Text>
                </View>
                <View style={styles.number}>
                  <Text style={{color: COLORS.third}}>6</Text>
                </View>
                <View style={styles.number}>
                  <Text style={{color: COLORS.third}}>7</Text>
                </View>
                <View style={styles.number}>
                  <Text style={{color: COLORS.third}}>8</Text>
                </View>
              </View>
              <View style={styles.container4}>
                <View>
                  <Text style={{color: COLORS.third, fontWeight: 'bold'}}>
                    How many legs does a spider have?
                  </Text>
                </View>
                <View style={styles.container3}>
                  <View style={styles.answerBtn}>
                    <Text style={{color: COLORS.third}}>One</Text>
                  </View>
                  <View style={styles.answerBtn}>
                    <Text style={{color: COLORS.third}}>Five</Text>
                  </View>
                  <View style={styles.answerBtn}>
                    <Text style={{color: COLORS.third}}>Eight</Text>
                  </View>
                  <View style={styles.answerBtn}>
                    <Text style={{color: COLORS.third}}>Five</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Home')}>
                  <Text style={styles.buttonTextStyle}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }

  return <SafeAreaView style={styles.container}>{renderQuiz()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: COLORS.primary,
    borderWidth: 0,
    color: COLORS.third,
    borderColor: '#00BFA6',
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  number: {
    height: SIZES.height / 20,
    width: SIZES.height / 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  number1: {
    height: SIZES.height / 20,
    width: SIZES.height / 20,
    backgroundColor: COLORS.fourth,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  answerBtn: {
    height: SIZES.height / 20,
    width: SIZES.width / 2.5,
    backgroundColor: COLORS.fourth,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 10,
  },
  containerNew: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  firstCard: {
    display: 'flex',
    height: SIZES.height / 4,
    width: '80%',
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  secondCard: {
    display: 'flex',
    height: SIZES.height / 5,
    width: '40%',
    backgroundColor: COLORS.primary,
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    flex: 1,
    // marginTop: -SIZES.height / 3,
    width: SIZES.width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 10,
    // alignItems: 'center',
  },
  containerRow: {
    flex: 1,
    display: 'flex',
    // marginTop: -SIZES.height / 3,
    width: SIZES.width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container4: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    // height: SIZES.height / 15,
    // alignItems: 'center',
  },
  title: {
    marginTop: -26,
    fontSize: 15,
    padding: 15,
    color: COLORS.third,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title3: {
    fontSize: 10,
    padding: 15,
    color: COLORS.third,
    textAlign: 'center',
  },
  title2: {
    fontSize: 15,
    padding: 10,
    color: COLORS.secondary,
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

export default Quiz;