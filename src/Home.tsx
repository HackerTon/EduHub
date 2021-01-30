/** Home page
 * @format
 */

import React from 'react';
import {View, Image} from 'react-native';
import * as Progress from 'react-native-progress';
import {Button, Icon, Text} from 'react-native-elements';
import pic1 from './img/human_alex.jpg';
import pic2 from './img/crown.png';

const prof_pic = Image.resolveAssetSource(pic1).uri;
const icon = Image.resolveAssetSource(pic2).uri;

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#121212',
        elevation: 0,
        paddingTop: 15,
      }}>
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 500,
          justifyContent: 'center',
          marginTop: '15%',
          alignSelf: 'center',
        }}
        source={{uri: prof_pic}}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        ALEX LIMPEH
      </Text>
      <View style={{flexDirection: 'row', marginTop: 10, alignSelf: 'center'}}>
        <Image
          style={{
            width: 70,
            height: 32,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          source={{uri: icon}}
        />
        <Text style={{paddingLeft: 12, fontSize: 20, fontWeight: 'bold'}}>
          CONQUERER
        </Text>
      </View>
      <Progress.Bar
        style={{alignSelf: 'center', marginTop: 17}}
        width={300}
        height={50}
        progress={0.2}
        borderColor="#03DAC5"
        color="#03DAC5"
        borderRadius={10}
        useNativeDriver={true}
      />
      <Button
        title="Enter The Game"
        type="clear"
        titleStyle={{color: 'black'}}
        containerStyle={{
          backgroundColor: '#03DAC5',
          position: 'absolute',
          right: '5%',
          bottom: 15,
          width: '90%',
          borderRadius: 7,
        }}
        onPress={() => {
          navigation.navigate('Game');
        }}
      />
    </View>
  );
};

export default HomeScreen;
