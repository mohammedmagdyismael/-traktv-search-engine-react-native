import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react'; 

/**
 * Screens
 */
import SplashScreen from './screens/SplashScreen/SplashScreen';
import SearchMovie from './screens/SearchMovie/SearchMovie';

const Stack = createStackNavigator();


class App extends Component {

  constructor(){
    super();
    this.state = {
    }
  }
  render(){ 
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={({ route, navigation }) => ({
            headerShown: false,
          })}
        >
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
          />
          <Stack.Screen
            name="Search"
            component={SearchMovie}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;



