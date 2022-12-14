import {createStaticKNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SplashScreen from '../screens/SplashScreen';

const screens = {
    SplashScreen: {
        screen: SplashScreen
    }
}

const AppStack = createStaticKNavigator(screens);

export default createAppContainer(AppStack);