import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ExamStackParamList} from '@utils/types';
import Questions from '@views/Questions';
import Exams from '@views/Exams';
import React, {FC} from 'react';

const Stack = createNativeStackNavigator<ExamStackParamList>();

interface Props {}

const ExamNavigator: FC<Props> = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ExamsNav" component={Exams} />
      <Stack.Screen name="Questions" component={Questions} />
    </Stack.Navigator>
  );
};

export default ExamNavigator;