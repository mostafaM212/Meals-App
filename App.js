import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Fonts from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import DrawerNavigation from './components/Navigation/DrawerNavigation';
import { createStore, combineReducers } from "redux";
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';


enableScreens()

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer)
const fetchFonts = () => {

  return Fonts.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={console.warn}
    />
  }

  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
