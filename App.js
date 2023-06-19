import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{flex:1}}>
      <ScrollView style={styles.container}>
        <StatusBar hidden />
        <View style={{width: '100%',height: '100%', alignItems:'center', paddingTop:20}}>
            

          <TouchableOpacity style={styles.box}>
            <View style={{width:'50%',alignItems:'flex-start',paddingLeft:32}}>
              <Text style={{fontWeight:500, fontSize:11, color:'#AEAEB3',paddingTop:26}}>AUDI</Text>
              <Text style={{fontWeight:500, fontSize:17, color:'#47474D'}}>RS 3 Coupé</Text>
              <View style={styles.gasolina}>
                <Text style={{fontWeight:500, fontSize:15,color:'#47474D'}}>Fuel <Image source={require('./images/gasolina.png')}/></Text>
              </View>
              <Text style={{fontWeight:500, fontSize:15, color:'#DC1637'}}>R$ 342.000,00</Text>
            </View>
            <View style={{width:'50%'}}>
              <View style={styles.imgCarro}>
                <Image source={require('./images/Audi.png')}/>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <View style={{width:'50%',alignItems:'flex-start',paddingLeft:32}}>
              <Text style={{fontWeight:500, fontSize:11, color:'#AEAEB3',paddingTop:26}}>PORSCHE</Text>
              <Text style={{fontWeight:500, fontSize:17, color:'#47474D'}}>Panamera</Text>
              <View style={styles.gasolina}>
                <Text style={{fontWeight:500, fontSize:15,color:'#47474D'}}>Fuel <Image source={require('./images/gasolina.png')}/></Text>
              </View>
              <Text style={{fontWeight:500, fontSize:15, color:'#DC1637'}}>R$ 420.000,00</Text>
            </View>
            <View style={{width:'50%'}}>
              <View style={styles.imgCarro}>
                <Image source={require('./images/Porche.png')}/>
              </View>
            </View>
          </TouchableOpacity>

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
    height:150,
    width:'88%',
    flexDirection: 'row',
    marginBottom:20
  },

  imgCarro: {
    width:'100%',
    height:'100%',
    display:'flex',
    justifyContent:'center',
  },

  gasolina: {
    paddingTop:16,
  },

  eletrico: {
    paddingTop:16,
  },
});