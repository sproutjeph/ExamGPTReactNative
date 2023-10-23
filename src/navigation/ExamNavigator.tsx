import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ExamStackParamList} from '@utils/types';
import Questions from '@views/Questions';
import Exams from '@views/Exams';
import React, {FC} from 'react';
import Books from '@views/Books';
import Videos from '@views/Videos';
import Subscription from '@views/Subscription';

const Stack = createNativeStackNavigator<ExamStackParamList>();

interface Props {}

const ExamNavigator: FC<Props> = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ExamsNav" component={Exams} />
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="Books" component={Books} />
      <Stack.Screen name="Videos" component={Videos} />
      <Stack.Screen name="Subscription" component={Subscription} />
    </Stack.Navigator>
  );
};

export default ExamNavigator;
