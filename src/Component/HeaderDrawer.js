import React from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import movies from '../Service/index';


function Header({navigation,title}) {
  return (
    <KeyboardAvoidingView>
    <View style={styles.header}> 
   
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.imgHaber}
          source={require('../Image/iconfinder_menu-alt_134216.png')}
        />
      </TouchableOpacity>
      <View style={styles.txtHeader}>
     <Text style={styles.text}>{title}</Text>
     </View>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Image
          style={styles.imgSearch}
          source={require('../Image/loupe.png')}
        />
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: 'rgb(26, 26, 26)',
  },
  header: {
    width: Dimensions.get('window').width,
    height: 70,
    backgroundColor: 'rgb(255, 255, 51)',
    flexDirection: 'row',
  },

  txtHeader: {
    
    justifyContent:'center',
    alignItems:'center',
    fontSize: 30,
    color: 'rgb(26, 26, 0)',
     width: '70%',
  },
 
  input: {
    height: 45,
    borderColor: '#000',
    backgroundColor:'#fff',
    borderWidth: 1,
    borderRadius: 10,
    width: '70%',
    marginHorizontal:10,
    marginVertical:10,
  },
  
  text: {
    marginBottom: 10,
    fontSize: 30,
    marginLeft:50,
    color:'#000'
  },
  rate: {
    flexDirection: 'row',
  },

  imgHaber: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginVertical:15,
    marginHorizontal:5,
  },
  imgSearch: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginVertical:20,
    marginLeft:15,
  },
});
export default Header;
