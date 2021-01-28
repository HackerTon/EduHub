import React from 'react';
import {View, Image} from 'react-native';
import * as Progress from 'react-native-progress';
import {Button, Icon, Text} from 'react-native-elements';
import picture from './img/human_alex.jpg';

const HomeScreen = ({navigation}) => {
  //   useEffect(() => {
  //     const subscribe = firestore()
  //       .collection('history')
  //       .orderBy('timecode', 'desc')
  //       .onSnapshot((snapshot) => {
  //         let history: any[] = [];
  //         snapshot.forEach((document) => {
  //           history.push({...document.data(), id: document.id});
  //           setHistory(history);
  //         });
  //       });

  //     return () => subscribe();
  //   }, []);

  //   const WriteHistory = (item) => {
  //     firestore()
  //       .collection('history')
  //       .doc(item.id)
  //       .delete()
  //       .catch(() => Alert.alert('Warning', 'Write failure.'));
  //   };

  //   const RenderItem = ({item}) => (
  //     <LongPressGestureHandler
  //       onHandlerStateChange={({nativeEvent}) => {
  //         if (nativeEvent.state === State.ACTIVE) {
  //         }
  //       }}>
  //       <ListItem
  //         containerStyle={{
  //           margin: 10,
  //           backgroundColor: '#191919',
  //           borderRadius: 8,
  //           elevation: 1,
  //         }}>
  //         <ListItem.Content>
  //           <ListItem.Title h4>
  //             {/* {moment(item.timecode).format('ll')} */}
  //           </ListItem.Title>
  //           <ListItem.Subtitle style={{color: 'white'}}>
  //             {item.txt}
  //           </ListItem.Subtitle>
  //         </ListItem.Content>
  //       </ListItem>
  //     </LongPressGestureHandler>
  //   );

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
        source={require('./img/human_alex.jpg')}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        LAM KEN LUN
      </Text>
      <View style={{flexDirection: 'row', marginTop: 10, alignSelf: 'center'}}>
        <Image
          style={{
            width: 70,
            height: 32,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          source={require('./img/crown.png')}
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

// const HomeNavigator = () => {
//   const tabBarOptions: BottomTabBarOptions = {
//     style: {
//       backgroundColor: '#191919',
//       borderTopWidth: 1,
//       borderTopColor: 'grey',
//     },
//   };

//   const homeOptions: BottomTabNavigationOptions = {
//     tabBarIcon: ({focused}) => {
//       let color = focused ? '#BB86FC' : '#8E8E8F';
//       return <Icon name="home" type="feather" color={color}></Icon>;
//     },
//     tabBarLabel: ({focused}) => {
//       let color = focused ? '#BB86FC' : '#8E8E8F';
//       return <Text style={{color}}>Home</Text>;
//     },
//   };

//   const regisOptions: BottomTabNavigationOptions = {
//     tabBarIcon: ({focused}) => {
//       let color = focused ? '#BB86FC' : '#8E8E8F';
//       return <Icon name="user" type="feather" color={color}></Icon>;
//     },
//     tabBarLabel: ({focused}) => {
//       let color = focused ? '#BB86FC' : '#8E8E8F';
//       return <Text style={{color}}>User</Text>;
//     },
//   };

//   return (
//     <Tab.Navigator tabBarOptions={tabBarOptions}>
//       <Tab.Screen name="Home" component={HomeScreen} options={homeOptions} />
//       <Tab.Screen
//         name="Registration"
//         component={RegistrationScreen}
//         options={regisOptions}
//       />
//     </Tab.Navigator>
//   );
// };

export default HomeScreen;
