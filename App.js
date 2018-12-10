import React from 'react';
import {createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import AppNavigator from './src/navigation';

const AppContainer = createAppContainer(AppNavigator);

class App extends React.PureComponent {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}><AppContainer /></Provider>
    );
  }
}

export default App;
