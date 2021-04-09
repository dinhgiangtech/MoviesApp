/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import Header from '../Component/Header';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import movies from '../Service/index';
import {getState} from '../Redux/Selector'
import { connect } from 'react-redux';
const widthWindow = Dimensions.get('window').width;
const urlImage = 'https://image.tmdb.org/t/p/w500/';

function ItemList(props) {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('DetailMovie', {id: props.data.id})
      }>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={{uri: urlImage + props.data.poster_path}}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>{props.data.title}</Text>
          <View style={styles.rate}>
            <Text style={styles.text}>{props.data.vote_average}</Text>
            <Image
              style={styles.imgStar}
              source={require('../Image/star.png')}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const searchEngine = ({navigation, route,movies }) => {
  const [dataSearch, setDataSearch] = useState([]);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(true);
  function searchFilterFunction(text) {
    if (text) {
      const newData = movies.filter(function(item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setDataSearch(newData);
      setSearch(text);
      if (newData.length===0) {
        setResult(result=>result=!result)
        console.log(newData.length)
      }
      else{setResult(result=>result=true)}
      return Keyboard.dismiss;
    } else {
      setSearch(text);
      return Keyboard.dismiss;
    }
  }

  return (
    
      <View style={styles.wrap}>
        <KeyboardAvoidingView>
         
          <View style={styles.containerInput}>
             <TouchableOpacity style={styles.btBack} onPress={()=>navigation.goBack()}>
        <Image style={styles.imgBack} source={require('../Image/icons8-go-back-64.png')}></Image>
      </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder={'Search'}
              value={search}
              onChangeText={text => searchFilterFunction(text)}></TextInput>
            <TouchableOpacity
              onPress={(() => searchFilterFunction(search), Keyboard.dismiss)}>
              <Image
                style={styles.imgSearch}
                source={require('../Image/loupe.png')}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <View>
          {result ? 
            <FlatList
              data={dataSearch}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <ItemList data={item} navigation={navigation} />
              )}></FlatList>
       
           :      <View style={{paddingLeft:20}}><Text style={{fontSize: 20}}>No search results</Text></View>
            
          }
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  containerInput: {
    width: '100%',
    height: 60,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  wrap: {
    flex: 1,
    backgroundColor: '#fff',

    paddingTop: 10,
  },
  container: {
    paddingTop: 10,
    backgroundColor: 'rgb(204, 204, 204)',

    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    overflow: 'hidden',
  },
  input: {
    height: 50,
    borderColor: '#000',
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: '70%',
    marginBottom: 10,
    fontSize:20,
    marginLeft:60
  },
  btBack:{
  
    position:'absolute',
    top:0,
    
    left:5

  },
  imgSearch: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 20,
    marginTop: 15,
  },
  imgBack: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
   
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
  },

  content: {
    marginLeft: 10,
    marginTop: 20,
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
  },
  rate: {
    flexDirection: 'row',
  },
  imgStar: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginLeft: 5,
    marginTop: 2,
  },
});
const mapStateToProps=(state)=>({
  movies:getState(state)
})

export default connect(mapStateToProps)(searchEngine);
