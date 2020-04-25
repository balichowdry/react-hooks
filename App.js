/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {PopUpProvider} from './src/popUp/PopUpContext';
import PopUp from './src/popUp/PopUp';
import AppNavigation from './src/AppNavigator';


const App: () => React$Node = () => {
  return (
      <>
        <PopUpProvider>
          <PopUp />
          <AppNavigation />
        </PopUpProvider>
      </>
  );
};

export default App;
