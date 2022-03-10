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
  useColorScheme,
  View,
} from 'react-native';


const styles = StyleSheet.create({

  bigBlue: {
    fontSize: 80,
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
            
            items: result
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
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
       
        <View id="get-request-async-await">
          <Text className="total" style={[styles.bigBlue]}>
            {JSON.stringify(this.state.items)}
           ssfdsf sf sf k;llk;\
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    );
  };
} 

 
export default App;
