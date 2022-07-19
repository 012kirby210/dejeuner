import { View, Text } from 'react-native'
import React, { Fragment } from 'react'
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import RootNavigation from './navigation';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <RootNavigation />
    </ReduxProvider>
  );
}
