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
      <TouchableOpacity style={styles.btBack} onPress={onBack}>
        <Text style={styles.txtBt}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.txtHeader}>{title}</Text>
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
    marginLeft: 90,
    marginTop: 8,
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
    marginLeft: 30,
    marginTop: 15,
  },
});

export default Header;
