/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
// import {Avatar} from 'react-native-elements';
import {icons, images, SIZES, COLORS, FONTS} from '../constants';
import CheckBox from '@react-native-community/checkbox';

const LeaderBoard = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const users = [
    {
      name: 'STAGE 1',
      rating: '999+',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    },
    {
      name: 'STAGE 2',
      rating: '949+',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    },
  ];
  function renderQuiz() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <ImageBackground
          style={{flex: 1}}
          source={require('../assets/CONGRATS.png')}> */}
        <ImageBackground
          style={{flex: 1}}
          source={require('../assets/6ob.gif')}>
          <View style={{alignItems: 'center', marginTop: 40}}>
            <View style={styles.leaderBack}>
              <View>
                <Text style={styles.title2}>Previous Score</Text>
                <Text style={styles.title4}>70%</Text>
              </View>
              <View>
                <Image
                  style={{height: 100, width: 100, objectFit: 'contain'}}
                  source={require('../assets/staticnew.png')}
                />
                <Text style={styles.title6}>STATISTICS</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 40}}>
            <View style={styles.leaderBack}>
              <View>
                <Text style={styles.title2}>Current Score</Text>
                <Text style={styles.title4}>80%</Text>
                <Text style={styles.title5}>Progress: 10% ⬆️ </Text>
                <Text style={styles.title5}>Comment: Improve</Text>
              </View>
              <View>
                <Image
                  style={{height: 100, width: 100, objectFit: 'contain'}}
                  source={require('../assets/staticnew.png')}
                />
                <Text style={styles.title6}>STATISTICS</Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 40}}>
            <View style={styles.leaderBack}>
              <View>
                <Text style={styles.title2}>Compared Score</Text>
                {/* <Text style={styles.title4}>80%</Text> */}
                <Text style={styles.title5}>Progress: 5% 🔻 </Text>
                <Text style={styles.title5}>
                  Comment: Ea reprehenderit in sit in.
                </Text>
              </View>
              <View>
                <Image
                  style={{height: 100, width: 100, objectFit: 'contain'}}
                  source={require('../assets/staticnew.png')}
                />
                <Text style={styles.title6}>STATISTICS</Text>
              </View>
            </View>
          </View>
          {/* <View style={{alignItems: 'center', marginTop: 40}}>
            <View style={styles.leaderBack}>
              <View>
                <Text style={styles.title4}>Summary</Text>
                <Text style={styles.title4}>Review</Text>
                <Text style={styles.title4}>Remark</Text>
                <Text style={styles.title4}>Other</Text>
              </View>
              <View>
                <Text style={styles.title4}>:Summary</Text>
                <Text style={styles.title4}>:Review</Text>
                <Text style={styles.title4}>:Remark</Text>
                <Text style={styles.title4}>:Other</Text>
              </View>
            </View>
          </View> */}
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.title6}>
              Parent should mark this to contine
            </Text>
          </View>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.buttonStyle2}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Final')}>
              <Text style={styles.buttonTextStyle}>Next</Text>
            </TouchableOpacity>
          </View>
          {/* </ImageBackground> */}
        </ImageBackground>
      </SafeAreaView>
    );
  }

  return <SafeAreaView style={styles.container}>{renderQuiz()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  number: {
    height: SIZES.height / 25,
    width: SIZES.height / 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: COLORS.fourth,
    borderWidth: 0,
    color: COLORS.third,
    borderColor: '#00BFA6',
    height: 40,
    width: SIZES.width / 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 10,
  },
  buttonStyle2: {
    backgroundColor: COLORS.fourth,
    borderWidth: 0,
    color: COLORS.third,
    borderColor: '#ff6150',
    height: 40,
    width: SIZES.width / 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  leaderBack: {
    marginTop: 8,
    display: 'flex',
    height: SIZES.height / 5,
    width: '90%',
    backgroundColor: COLORS.fourth,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    backgroundColor: COLORS.primary,
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
    marginTop: SIZES.height / 6.5,
    fontSize: 25,
    padding: 15,
    color: COLORS.third,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  title3: {
    fontSize: 12,
    padding: 15,
    color: COLORS.third,
    textAlign: 'center',
  },
  title2: {
    fontSize: 25,
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  title4: {
    fontSize: 20,
    // padding: 15,
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  title5: {
    fontSize: 15,
    // padding: 15,
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  title6: {
    fontSize: 15,
    // padding: 15,
    color: COLORS.white,
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

export default LeaderBoard;
