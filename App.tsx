import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
      <GestureHandlerRootView>
           <MainNavigator />
      </GestureHandlerRootView>
  );
}


 