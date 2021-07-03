/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import useSound from 'react-native-use-sound';
import {icons, images, SIZES, COLORS, FONTS} from '../constants';

const Iq = ({navigation}) => {
  useEffect(() => {
    handlePlay();
  }, []);

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        {answerText: 'New York', isCorrect: false},
        {answerText: 'Paris', isCorrect: true},
        {answerText: 'Dublin', isCorrect: false},
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        {answerText: 'Jeff Bezos', isCorrect: false},
        {answerText: 'Elon Musk', isCorrect: true},
        {answerText: 'Tony Stark', isCorrect: false},
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        {answerText: 'Apple', isCorrect: true},
        {answerText: 'Intel', isCorrect: false},
        {answerText: 'Microsoft', isCorrect: false},
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        {answerText: '1', isCorrect: false},
        {answerText: '4', isCorrect: false},
        {answerText: '7', isCorrect: true},
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [modalVisible, setModalVisible] = useState(true);
  const [currQuiz, setCurrQuiz] = useState(1);

  const numbers = [1, 2, 3, 4];

  const [play, pause, stop, data] = useSound(
    'https://assets.mixkit.co/sfx/preview/mixkit-tick-tock-clock-timer-1045.mp3',
  );
  const handlePlay = () => {
    console.log('play');
    play();
  };
  const handlePlay2 = () => {
    setModalVisible(!modalVisible);
    console.log('play');
    play();
  };
  const navi = () => {
    console.log('navi');
    navigation.navigate('IQResults');
  };

  const handleAnswerOptionClick = isCorrect => {
    console.log(currQuiz);
    if (currQuiz < 4) {
      if (!isCorrect) {
        console.log('wrong');
        // handlePlay();
      }
      if (isCorrect) {
        console.log('correct');
        // handlePlay();
        setScore(score + 1);
      }
      setCurrQuiz(currQuiz + 1);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    } else {
      pause();
      setTimeout(() => {
        navi();
      }, 200);
    }
  };
  function renderQuiz() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../assets/IQBACK.jpeg')}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Number of questions and current question is highlighted
                </Text>
                <Image
                  style={{width: 300, resizeMode: 'contain'}}
                  source={require('../assets/images/help/1.png')}
                />
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 15,
                  }}
                />
                <Text style={styles.modalText}> current questions</Text>
                <Image
                  style={{width: 300, resizeMode: 'contain'}}
                  source={require('../assets/images/help/2.png')}
                />
                <Text style={styles.modalText}>
                  These are the answers! Press the correct answer to gain score.
                </Text>
                <Image
                  style={{width: 300, height: 200, resizeMode: 'contain'}}
                  source={require('../assets/images/help/3.png')}
                />
                <TouchableOpacity
                  style={styles.buttonStyle2}
                  activeOpacity={0.5}
                  onPress={() => handlePlay2()}>
                  <Text style={styles.buttonTextStyle}>close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={styles.containerNew}>
            <View style={styles.container2}>
              {/* <Text style={{color: COLORS.third}}>Please elect answer</Text> */}
              <View style={styles.container3}>
                {numbers.map((number, i) => (
                  <View
                    key={i}
                    style={[
                      styles.number1,
                      {
                        backgroundColor:
                          currQuiz !== number ? COLORS.primary : COLORS.fourth,
                      },
                    ]}>
                    <Text style={{color: COLORS.third}}>{number}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View
              style={{
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.fourth,
                padding: 10,
                marginTop: SIZES.height / 15,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  // fontWeight: 'bold',
                  fontSize: 20,
                  fontFamily: 'Oh Whale - TTF',
                }}>
                {questions[currentQuestion].questionText}
              </Text>
            </View>

            <View style={styles.firstCard}>
              <ImageBackground
                style={{height: '100%', width: '100%'}}
                source={require('../assets/qizFrame.png')}>
                <View
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    // padding: 10,
                  }}>
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption, i) => (
                      <TouchableOpacity
                        key={i}
                        onPress={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }>
                        <Text
                          style={{
                            color: COLORS.secondary,
                            // fontWeight: 'bold',
                            fontFamily: 'Oh Whale - TTF',
                            fontSize: 20,
                            // marginTop: SIZES.height / 10,
                          }}>
                          {answerOption.answerText}
                        </Text>
                      </TouchableOpacity>
                    ),
                  )}
                </View>
              </ImageBackground>
              <View
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('IQResults')}>
                  <Text style={styles.buttonTextStyle}>Continue</Text>
                </TouchableOpacity> */}
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
  line: {
    color: '#F3FF',
    width: 100,
    height: 10,
  },
  modalText: {
    marginBottom: -15,
    textAlign: 'left',
    color: '#a1a1a1',
  },
  buttonStyle: {
    backgroundColor: COLORS.fourth,
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
  buttonStyle2: {
    backgroundColor: COLORS.fourth,
    borderWidth: 0,
    color: COLORS.third,
    borderColor: '#00BFA6',
    height: 30,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  number: {
    height: SIZES.height / 20,
    width: SIZES.height / 20,
    // backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  number1: {
    height: SIZES.height / 20,
    width: SIZES.height / 20,
    // backgroundColor: COLORS.primary,
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
    // flex: 1,
    // display: 'flex',
    // justifyContent: 'center',
    // flexDirection: 'column',
  },
  firstCard: {
    // flex: 2,
    height: SIZES.height / 1.6,
    width: '100%',
    padding: 5,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Iq;