import React from 'react';
import {Text, View} from 'react-native';

const QuizScreen = () => {
  const [page, setPage] = React.useState(0);

  switch (page) {
    case 0:
      return <QuizAI setPage={setPage} />;
    case 1:
      return (
        <>
          <Text>HELLO</Text>
        </>
      );
    default:
      return (
        <>
          <Text>DEFAULT</Text>
        </>
      );
  }
};

const QuizAI = ({setPage}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: '#121212', elevation: 0}}>
      <Text></Text>
    </View>
  );
};

export default QuizScreen;
