/** Home page
 * @format
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert, Image, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import pic2 from './img/crown.png';
import pic1 from './img/human_alex.jpg';

const prof_pic = Image.resolveAssetSource(pic1).uri;
const icon = Image.resolveAssetSource(pic2).uri;

const HomeScreen = () => {
  const [prog, setProg] = React.useState(0);
  const navigation = useNavigation();

  React.useEffect(() => {
    return navigation.addListener('focus', () => {
      setTimeout(
        () =>
          AsyncStorage.getItem('gamepoint')
            .then((value) => {
              console.log({'dict value': value});
              setProg(value == null ? 0 : value / 3);
            })
            .catch((e) => console.error(e)),
        1000,
      );
    });
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#121212',
        elevation: 0,
        paddingTop: 15,
      }}>
      <TouchableWithoutFeedback
        onLongPress={() => {
          AsyncStorage.setItem('gamepoint', '0').then(() => {
            Alert.alert('Game reset!', 'Game has been reset to initial state');
            setProg(0);
          });
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
      </TouchableWithoutFeedback>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        ALEX GATES
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
        progress={prog}
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
