/** Quiz page
 * @format
 */

import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {Button, Icon, Text} from 'react-native-elements';
import * as Progress from 'react-native-progress';

const deviceWidth = Dimensions.get('window').width;

const containerStyle = {
  backgroundColor: '#191919',
  borderRadius: 4,
  elevation: 1,
  margin: 10,
  padding: 5,
};

const QuestionTwo = () => {
  const input = React.useRef(null);
  const [prg, setPrg] = React.useState(0);

  const movePage = (foward: boolean) => {
    if (foward) {
      if (prg < deviceWidth * 3) {
        input.current.scrollTo({x: prg + deviceWidth, y: 0, animated: true});
        setPrg(prg + deviceWidth);
      }
    } else {
      if (prg > 0) {
        input.current.scrollTo({x: prg - deviceWidth, y: 0, animated: true});
        setPrg(prg - deviceWidth);
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#121212', elevation: 0}}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        ref={input}>
        <ScrollView
          style={{width: deviceWidth}}
          contentContainerStyle={containerStyle}></ScrollView>
        <ScrollView
          style={{width: deviceWidth}}
          contentContainerStyle={containerStyle}></ScrollView>
        <ScrollView
          style={{width: deviceWidth}}
          contentContainerStyle={containerStyle}></ScrollView>
        <ScrollView
          style={{width: deviceWidth}}
          contentContainerStyle={containerStyle}>
          <Text style={{alignSelf: 'center'}}>Final</Text>
        </ScrollView>
      </ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button
          type="clear"
          icon={
            <Icon
              name="navigate-before"
              size={40}
              color="white"
              style={{opacity: 0.87}}
            />
          }
          onPress={() => movePage(false)}
        />
        <Progress.Bar
          style={{alignSelf: 'center'}}
          width={200}
          progress={prg / (deviceWidth * 3)}
          borderColor="#03DAC5"
          color="#03DAC5"
          borderRadius={10}
          useNativeDriver={true}
        />
        <Button
          type="clear"
          icon={
            <Icon
              name="navigate-next"
              size={40}
              color="white"
              style={{opacity: 0.87}}
            />
          }
          onPress={() => movePage(true)}
        />
      </View>
    </View>
  );
};

export default QuestionTwo;
