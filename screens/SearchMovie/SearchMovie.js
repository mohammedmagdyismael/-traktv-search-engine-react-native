import React, {Component} from 'react';
import { View, TextInput, Text, ScrollView  } from 'react-native';
import { screenView } from './SearchMovie.styles';
import axios from 'axios';

class SplashScreen extends Component {

  constructor(){
    super();
    this.state = {
      movies: [],
    }
  }

  getMoviesResults ( inputname ){
    axios.get('https://api.trakt.tv/search/movie',
            {
                params: {
                    query: inputname,
                    page : 1,
                    limit : 100
                },
                headers: {  
                    'trakt-api-key': 'b6ab67a5ef6dce15759eb426151e0fb84e81572ff1f55c2909f2ced677099bc5',
                    'trakt-api-version': '2', 
                    'Content-Type': 'application/json'
                }
            }
        ).then(    
            result => {
              let movies = result.data.map((movie, id)=>{
                return(
                  <View
                    key={id}
                    style={{
                      flexDirection: "row",
                      padding: 10,
                      width: '100%',
                    }}
                  >
                  <Text
                  style={{
                    overflow:"hidden", maxWidth:100
                  }}
                  

                  >{movie.movie.title}</Text>
                  <Text
                      style={{marginLeft: 'auto'}}
                    
                  >{movie.movie.year}</Text>
                  </View>
                )
                
              });
              this.setState({movies:movies});
            }
          );
  }

  render(){ 
    const {movies} = this.state;
    return (
        <View style={screenView.container}>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              width: '100%',
              position: 'absolute',
              top:65,
            }}
          >
          <Text> Type movie name </Text>
          <TextInput
            onChangeText={(inputName)=>this.getMoviesResults(inputName)}
            placeholder='movie name'
            style={{ height: 25, borderColor: 'gray', borderWidth: 1, width: '65%'}}

          />
          </View>

          <ScrollView
            style={{
              flexDirection: "column",
              padding: 10,
              width: '100%', 
              top:110,
            }}
          >
            {movies}
            </ScrollView>
        </View>
    );
  }
}

export default SplashScreen;



