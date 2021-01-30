/** Quiz page
 * @format
 */

import React from 'react';
import {Alert, Image} from 'react-native';
import {CheckBox, Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import pic11 from './img/s1q1.jpg';
import pic12 from './img/s1q2.jpg';
import pic13 from './img/s1q3.jpg';
import pic21 from './img/s2q1.jpg';
import pic22 from './img/s2q2.jpg';
import pic23 from './img/s2q3.jpg';
import pic31 from './img/s3q1.jpg';
import pic32 from './img/s3q2.jpg';
import pic33 from './img/s3q3.jpg';
import {QuizScreen} from './Quiz';
import AsyncStorage from '@react-native-async-storage/async-storage';

// AI set
const picQ1 = Image.resolveAssetSource(pic11).uri;
const picQ2 = Image.resolveAssetSource(pic12).uri;
const picQ3 = Image.resolveAssetSource(pic13).uri;

// Robotics set
const picQ4 = Image.resolveAssetSource(pic21).uri;
const picQ5 = Image.resolveAssetSource(pic22).uri;
const picQ6 = Image.resolveAssetSource(pic23).uri;

// Aerospace set
const picQ7 = Image.resolveAssetSource(pic31).uri;
const picQ8 = Image.resolveAssetSource(pic32).uri;
const picQ9 = Image.resolveAssetSource(pic33).uri;

export const QuestionOne = () => {
  const navigation = useNavigation();
  const [btn1, setBtn1] = React.useState(false);
  const [btn2, setBtn2] = React.useState(false);
  const [btn3, setBtn3] = React.useState(false);
  const [btn4, setBtn4] = React.useState(false);

  const callback = (forward: boolean, qindex: number): Boolean => {
    console.debug({forward, qindex});

    if (!forward) {
      return true;
    }

    let trg = false;

    switch (qindex) {
      case 0:
        trg = btn2;
        trg ? reset() : null;
        return trg;
      case 1:
        trg = btn3;
        trg ? reset() : null;
        return trg;
      case 2:
        trg = btn4;
        return trg;
      case 3:
        // save game data into asyncstorage
        AsyncStorage.getItem('gamepoint')
          .then((value) => {
            AsyncStorage.setItem(
              'gamepoint',
              value == null ? '1' : '' + (parseInt(value) + 1),
            )
              .then(() => {
                console.log('saved');
              })
              .catch((e) => console.error(e));
          })
          .catch((e) => console.error(e));
        navigation.navigate('Profile');
        return true;
      default:
        return true;
    }
  };

  const reset = () => {
    setBtn1(false);
    setBtn2(false);
    setBtn3(false);
    setBtn4(false);
  };

  const checkActiveBtn = (idxBtn: number) => {
    const check = btn1 || btn2 || btn3 || btn4;

    if (check) {
      switch (idxBtn) {
        case 1:
          setBtn1(false);
          break;
        case 2:
          setBtn2(false);
          break;
        case 3:
          setBtn3(false);
          break;
        case 4:
          setBtn4(false);
          break;
      }
    } else {
      switch (idxBtn) {
        case 1:
          setBtn1(true);
          break;
        case 2:
          setBtn2(true);
          break;
        case 3:
          setBtn3(true);
          break;
        case 4:
          setBtn4(true);
          break;
      }
    }
  };

  const content = [
    <>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{uri: picQ1}}
      />
      <Text style={{fontSize: 16}}>
        Who is the father of Artificial Intelligence?
      </Text>
      <CheckBox
        title="Dough Cutting"
        checked={btn1}
        onPress={() => checkActiveBtn(1)}
      />
      <CheckBox
        title="John McCarthy"
        checked={btn2}
        onPress={() => checkActiveBtn(2)}
      />
      <CheckBox
        title="William S."
        checked={btn3}
        onPress={() => checkActiveBtn(3)}
      />
      <CheckBox
        title="Rasmus Lerdorf"
        checked={btn4}
        onPress={() => checkActiveBtn(4)}
      />
    </>,
    <>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{uri: picQ2}}
      />
      <Text style={{fontSize: 16}}>What are the main goals of AI?</Text>
      <CheckBox
        title="To Create Expert Systems"
        checked={btn1}
        onPress={() => checkActiveBtn(1)}
      />
      <CheckBox
        title="To implement Human Intelligence in Machine Learning"
        checked={btn2}
        onPress={() => checkActiveBtn(2)}
      />
      <CheckBox
        title="Both A and B"
        checked={btn3}
        onPress={() => checkActiveBtn(3)}
      />
      <CheckBox
        title="None of the Above"
        checked={btn4}
        onPress={() => checkActiveBtn(4)}
      />
    </>,
    <>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{uri: picQ3}}
      />
      <Text style={{fontSize: 16}}>What are the main goals of AI?</Text>
      <CheckBox
        title="Gaming"
        checked={btn1}
        onPress={() => checkActiveBtn(1)}
      />
      <CheckBox
        title="Expert Systems"
        checked={btn2}
        onPress={() => checkActiveBtn(2)}
      />
      <CheckBox
        title="Vision Systems"
        checked={btn3}
        onPress={() => checkActiveBtn(3)}
      />
      <CheckBox
        title="All of the above"
        checked={btn4}
        onPress={() => checkActiveBtn(4)}
      />
    </>,
  ];

  return <QuizScreen screenObject={content} callback={callback} />;
};

export const QuestionTwo = () => {
  const navigation = useNavigation();
  const [btn1, setBtn1] = React.useState(false);
  const [btn2, setBtn2] = React.useState(false);
  const [btn3, setBtn3] = React.useState(false);
  const [btn4, setBtn4] = React.useState(false);

  const callback = (forward: boolean, qindex: number): Boolean => {
    console.debug({forward, qindex});

    if (!forward) {
      return true;
    }

    let trg = false;

    switch (qindex) {
      case 0:
        trg = btn1;
        trg ? reset() : null;
        return trg;
      case 1:
        trg = btn3;
        trg ? reset() : null;
        return trg;
      case 2:
        trg = btn4;
        return trg;
      case 3:
        // save game data into asyncstorage
        AsyncStorage.getItem('gamepoint')
          .then((value) => {
            AsyncStorage.setItem(
              'gamepoint',
              value == null ? '1' : '' + (parseInt(value) + 1),
            )
              .then(() => {
                console.log('saved');
              })
              .catch((e) => console.error(e));
          })
          .catch((e) => console.error(e));
        navigation.navigate('Profile');
        return true;
      default:
        return true;
    }
  };

  const reset = () => {
    setBtn1(false);
    setBtn2(false);
    setBtn3(false);
    setBtn4(false);
  };

  const checkActiveBtn = (idxBtn: number) => {
    const check = btn1 || btn2 || btn3 || btn4;

    if (check) {
      switch (idxBtn) {
        case 1:
          setBtn1(false);
          break;
        case 2:
          setBtn2(false);
          break;
        case 3:
          setBtn3(false);
          break;
        case 4:
          setBtn4(false);
          break;
      }
    } else {
      switch (idxBtn) {
        case 1:
          setBtn1(true);
          break;
        case 2:
          setBtn2(true);
          break;
        case 3:
          setBtn3(true);
          break;
        case 4:
          setBtn4(true);
          break;
      }
    }
  };

  const content = [
    <>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{uri: picQ4}}
      />
      <Text style={{fontSize: 16}}>What is the device show above?</Text>
      <CheckBox
        title="Servo"
        checked={btn1}
        onPress={() => checkActiveBtn(1)}
      />
      <CheckBox
        title="Motor"
        checked={btn2}
        onPress={() => checkActiveBtn(2)}
      />
      <CheckBox
        title="Generator"
        checked={btn3}
        onPress={() => checkActiveBtn(3)}
      />
      <CheckBox
        title="Variable Resistor"
        checked={btn4}
        onPress={() => checkActiveBtn(4)}
      />
    </>,
    <>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{uri: picQ5}}
      />
      <Text style={{fontSize: 16}}>
        Sends pulses of sound out and reports the time at which the echo returns
        back to the sensor.
      </Text>
      <CheckBox
        title="Servo"
        checked={btn1}
        onPress={() => checkActiveBtn(1)}
      />
      <CheckBox
        title="Gyroscope"
        checked={btn2}
        onPress={() => checkActiveBtn(2)}
      />
      <CheckBox
        title="Ultrasonic"
        checked={btn3}
        onPress={() => checkActiveBtn(3)}
      />
      <CheckBox
        title="Optical encoders"
        checked={btn4}
        onPress={() => checkActiveBtn(4)}
      />
    </>,
    <>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{uri: picQ6}}
      />
      <Text style={{fontSize: 16}}>
        A device for measuring or maintaining orientation, based on the
        principles of angular momentum.
      </Text>
      <CheckBox
        title="Microcontroller"
        checked={btn1}
        onPress={() => checkActiveBtn(1)}
      />
      <CheckBox
        title="Actuators"
        checked={btn2}
        onPress={() => checkActiveBtn(2)}
      />
      <CheckBox
        title="Servo"
        checked={btn3}
        onPress={() => checkActiveBtn(3)}
      />
      <CheckBox
        title="Gyroscope"
        checked={btn4}
        onPress={() => checkActiveBtn(4)}
      />
    </>,
  ];

  return <QuizScreen screenObject={content} callback={callback} />;
};
export const QuestionThree = () => {
  const navigation = useNavigation();
  const [btn1, setBtn1] = React.useState(false);
  const [btn2, setBtn2] = React.useState(false);
  const [btn3, setBtn3] = React.useState(false);
  const [btn4, setBtn4] = React.useState(false);

  const callback = (forward: boolean, qindex: number): Boolean => {
    console.debug({forward, qindex});

    if (!forward) {
      return true;
    }

    let trg = false;

    switch (qindex) {
      case 0:
        trg = btn4;
        reset();
        return trg;
      case 1:
        trg = btn3;
        reset();
        return trg;
      case 2:
        trg = btn2;
        return trg;
      case 3:
        // save game data into asyncstorage
        AsyncStorage.getItem('gamepoint')
          .then((value) => {
            AsyncStorage.setItem(
              'gamepoint',
              value == null ? '1' : '' + (parseInt(value) + 1),
            )
              .then(() => {
                console.log('saved');
              })
              .catch((e) => console.error(e));
          })
          .catch((e) => console.error(e));
        navigation.navigate('Profile');
        return true;
      default:
        return true;
    }
  };

  const reset = () => {
    setBtn1(false);
    setBtn2(false);
    setBtn3(false);
    setBtn4(false);
  };

  const checkActiveBtn = (idxBtn: number) => {
    const check = btn1 || btn2 || btn3 || btn4;

    if (check) {
      switch (idxBtn) {
        case 1:
          setBtn1(false);
          break;
        case 2:
          setBtn2(false);
          break;
        case 3:
          setBtn3(false);
          break;
        case 4:
          setBtn4(false);
          break;
      }
    } else {
      switch (idxBtn) {
        case 1:
          setBtn1(true);
          break;
        case 2:
          setBtn2(true);
          break;
        case 3:
          setBtn3(true);
          break;
        case 4:
          setBtn4(true);
          break;
      }
    }
  };

  const content = [
    <>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{uri: picQ9}}
      />
      <Text style={{fontSize: 16}}>
        What was the main disadvantage of the Zeppelin?
      </Text>
      <CheckBox
        title="It didn't hold very many passengers."
        checked={btn1}
        onPress={() => checkActiveBtn(1)}
      />
      <CheckBox
        title="The speed was too slow."
        checked={btn2}
        onPress={() => checkActiveBtn(2)}
      />
      <CheckBox
        title="Helium was used to lift it."
        checked={btn3}
        onPress={() => checkActiveBtn(3)}
      />
      <CheckBox
        title="Highly flammable hydrogen was used to lift it."
        checked={btn4}
        onPress={() => checkActiveBtn(4)}
      />
    </>,
    <>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{uri: picQ7}}
      />
      <Text style={{fontSize: 16}}>
        You're hang-gliding, and it's time to land. What device do you use?
      </Text>
      <CheckBox
        title="Throttle"
        checked={btn1}
        onPress={() => checkActiveBtn(1)}
      />
      <CheckBox
        title="Ailerons"
        checked={btn2}
        onPress={() => checkActiveBtn(2)}
      />
      <CheckBox
        title="Spoilers"
        checked={btn3}
        onPress={() => checkActiveBtn(3)}
      />
      <CheckBox
        title="Flaps"
        checked={btn4}
        onPress={() => checkActiveBtn(4)}
      />
    </>,
    <>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{uri: picQ8}}
      />
      <Text style={{fontSize: 16}}>
        Who first crossed the English Channel in an airplane?
      </Text>
      <CheckBox
        title="Wilbur Wright"
        checked={btn1}
        onPress={() => checkActiveBtn(1)}
      />
      <CheckBox
        title="Louis Bleriot"
        checked={btn2}
        onPress={() => checkActiveBtn(2)}
      />
      <CheckBox
        title="Amelia Earhart"
        checked={btn3}
        onPress={() => checkActiveBtn(3)}
      />
      <CheckBox
        title="Charles Lindbergh"
        checked={btn4}
        onPress={() => checkActiveBtn(4)}
      />
    </>,
  ];

  return <QuizScreen screenObject={content} callback={callback} />;
};
