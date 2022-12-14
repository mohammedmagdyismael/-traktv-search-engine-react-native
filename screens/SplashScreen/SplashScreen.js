import React, {Component} from 'react';
import { View, Image } from 'react-native';
import { screenView, introLogo } from './SplashScreen.styles';

class SplashScreen extends Component {

  constructor(){
    super();
    this.state = {
    }
  }
  componentDidMount(){
     setTimeout(()=>{
      this.props.navigation.navigate('Search', { name: 'Search' });
    },3000)
  }
  render(){ 
    return (
        <View style={screenView.container}>
            <Image
            style={introLogo.container}
            source={require('../../assets/whitelogowithdotcom.png')}
            />
        </View>
    );
  }
}

export default SplashScreen;



