import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{flex:1}}>
      <ScrollView style={styles.container}>
        <StatusBar hidden />
        <View style={{width: '100%',height: '100%', alignItems:'center', paddingTop:20}}>
          
          <View style={styles.box}>
            <View style={{width:'50%',alignItems:'flex-start',paddingLeft:32}}>
              <Text style={{fontWeight:500, fontSize:14, color:'#AEAEB3',paddingTop:34}}>AUDI</Text>
              <Text style={{fontWeight:500, fontSize:20, color:'#47474D'}}>RS 3 Coupé</Text>
              <Text style={{fontWeight:500, fontSize:18, color:'#DC1637',paddingTop:26}}>R$ 342.000,00</Text>
            </View>
            <View style={{width:'50%'}}></View>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#1B1B1F'}}}>
        <Stack.Screen name="CarWish" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
  },

  box: {
    backgroundColor: '#FFFFFF',
    height:180,
    width:'88%',
    flexDirection: 'row',
    
  },
});