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
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
       
       
          <View className="total" style={[styles.bigBlue]}>

          {this.state.items && this.state.items.length >= 1 ?

            this.state.items.map(function(item){
              return <Text  style={[styles.bigBlue]} key={item.id}> { item.email } </Text>
            })

           : 

           <Text> "==" </Text> 

         }
           
          </View>
       
      </ScrollView>
    </SafeAreaView>
    );
  };
} 

 
export default App;
