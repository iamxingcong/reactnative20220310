/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';


const styles = StyleSheet.create({

  bigBlue: {
    fontSize: 25,
    
  }
})

class App extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      
      items: null
    };
  }

  componentDidMount() {
 
   
   
    

     fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            
            items: result.data
          });
        },
        
        (error) => {
          console.log(error)
        }
      )
 }


 render(){

  return (
    <SafeAreaView>
      
      <ScrollView>
       
        

          {this.state.items && this.state.items.length >= 1 ?

            this.state.items.map(function(item){
              return (
                <View key={item.id}>
                <Text  style={[styles.bigBlue]} > { item.email } </Text>
                <Image  
                  source={{uri: `${ item.avatar } `}} 
                  style={{
                    width: 400, 
                    height: 400,
                    resizeMode: 'contain'

                  }} 

                />

                </View>
                )
            })

           : 

           <Text> "==" </Text> 

         }
           
        
       
      </ScrollView>
    </SafeAreaView>
    );
  };
} 

 
export default App;
