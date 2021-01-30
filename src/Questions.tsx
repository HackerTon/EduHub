/** Quiz page
 * @format
 */

import React from 'react';
import {Alert, Image, View} from 'react-native';
import {CheckBox, Text} from 'react-native-elements';
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
  const callback = (forward: boolean, qindex: number): Boolean => {
    console.debug({forward, qindex});

    if (!forward) {
      Alert.alert('NOTICE', 'CANNOT GO BACK');
    }

    return forward ? true : false;
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
      <CheckBox title="Dough Cutting" />
      <CheckBox title="John McCarthy" />
      <CheckBox title="William S." />
      <CheckBox title="Rasmus Lerdorf" />
    </>,
    <>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{uri: picQ2}}
      />
      <Text style={{fontSize: 16}}>What are the main goals of AI?</Text>
      <CheckBox title="To Create Expert Systems" />
      <CheckBox title="To implement Human Intelligence in Machine Learning" />
      <CheckBox title="Both A and B" />
      <CheckBox title="None of the Above" />
    </>,
    <>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{uri: picQ3}}
      />
      <Text style={{fontSize: 16}}>What are the main goals of AI?</Text>
      <CheckBox title="Gaming" />
      <CheckBox title="Expert Systems" />
      <CheckBox title="Vision Systems" />
      <CheckBox title="All of the above" />
    </>,
  ];

  return <QuizScreen screenObject={content} callback={callback} />;
};

export const QuestionTwo = () => {
  const callback = (forward: boolean, qindex: number): Boolean => {
    console.debug({forward, qindex});

    if (!forward) {
      Alert.alert('NOTICE', 'CANNOT GO BACK');
    }

    return forward ? true : false;
  };

  const content = [
    <>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{uri: picQ4}}
      />
      <Text style={{fontSize: 16}}>What is the device show above?</Text>
      <CheckBox title="Servo" />
      <CheckBox title="Motor" />
      <CheckBox title="Generator" />
      <CheckBox title="Variable Resistor" />
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
      <CheckBox title="Servo" />
      <CheckBox title="Gyroscope" />
      <CheckBox title="Ultrasonic" />
      <CheckBox title="Optical encoders" />
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
      <CheckBox title="Microcontroller" />
      <CheckBox title="Actuators" />
      <CheckBox title="Servo" />
      <CheckBox title="Gyroscope" />
    </>,
  ];

  return <QuizScreen screenObject={content} callback={callback} />;
};
export const QuestionThree = () => {
  const callback = (forward: boolean, qindex: number): Boolean => {
    console.debug({forward, qindex});

    if (!forward) {
      Alert.alert('NOTICE', 'CANNOT GO BACK');
    }

    return forward ? true : false;
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
      <CheckBox title="It didn't hold very many passengers." />
      <CheckBox title="The speed was too slow." />
      <CheckBox title="Helium was used to lift it." />
      <CheckBox title="Highly flammable hydrogen was used to lift it." />
    </>,
    <>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{uri: picQ7}}
      />
      <Text style={{fontSize: 16}}>
        You're hang-gliding, and it's time to land. What device do you use?
      </Text>
      <CheckBox title="Throttle" />
      <CheckBox title="Ailerons" />
      <CheckBox title="Spoilers" />
      <CheckBox title="Flaps" />
    </>,
    <>
      <Image
        style={{width: 100, height: 100, alignSelf: 'center'}}
        source={{uri: picQ8}}
      />
      <Text style={{fontSize: 16}}>
        Who first crossed the English Channel in an airplane?
      </Text>
      <CheckBox title="Wilbur Wright" />
      <CheckBox title="Louis Bleriot" />
      <CheckBox title="Amelia Earhart" />
      <CheckBox title="Charles Lindbergh" />
    </>,
  ];

  return <QuizScreen screenObject={content} callback={callback} />;
};
