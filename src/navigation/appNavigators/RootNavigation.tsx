import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {If} from '../../helpers/if';
import StackNavigaor from './stackNavigators/StackNavigator';


const RootNavigator = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      <If show={isLoggedIn}>
        <StackNavigaor />
      </If>

    </NavigationContainer>
  );
};

export default RootNavigator;
