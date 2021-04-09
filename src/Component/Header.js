import React, {defaultProps} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image
} from 'react-native';
function Header({title, onBack,navigation}) {
  return (
    <View style={styles.header}>
      
          <TouchableOpacity style={styles.btBack} onPress={()=>navigation.goBack()}>
        <Image style={styles.imgBack} source={require('../Image/icons8-go-back-64.png')}></Image>
      </TouchableOpacity> 
        
      <Text style={styles.txtHeader}>Detail Movie</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Image
          style={styles.imgSearch}
          source={require('../Image/loupe.png')}
        />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'rgb(255, 255, 51)',
    flexDirection: 'row',
  },
  txtHeader: {
    width:'60%',
    marginTop: 8,
    marginLeft:100,
    fontSize: 30,
    color: '#000',
  },
  txtBt: {
    fontSize: 20,
    color: '#000',
  },
  
  btBack: {
    marginLeft: 20,
    marginTop: 15,
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
  },
  imgSearch: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    
    marginTop: 15,
  },
   btBack:{
  
    position:'absolute',
    top:5,
    
    left:5

  },
 
  imgBack: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
   
  },
});

export default Header;
