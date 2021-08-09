import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/Redux';
import Routes from './src/Router/Router';
import { View } from 'react-native';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {Routes.map((route, index) => (
            <Stack.Screen
              key={index}
              name={route.name}
              options={{ headerShown: false }}
              component={route.component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}

export default App;
