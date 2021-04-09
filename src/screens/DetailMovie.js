/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import Header from '../Component/Header';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
} from 'react-native';

import { getDetail,getState } from '../Redux/Selector';
import { connect } from 'react-redux';

const widthWindow = Dimensions.get('window').width;

const DetailMovie = (props) => {
  const {id}=props.route.params
  useEffect(()=>{
      dispatch({ type: "API_CALL_REQUEST" })
  },[])

 
  const data = props.movies
  const urlImage = 'https://image.tmdb.org/t/p/w500/';
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header
          title={'MovieDetail'}
          onBack={() => props.navigation.goBack()}
          navigation={props.navigation}
        />
        <View style={styles.containerImage}>
          <Image
            style={styles.image}
            source={{uri: urlImage + data[0].poster_path}}
          />
        </View>
        <View>
          <View style={styles.title}>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
              <Text style={styles.txtTitle}>{data[0].title}</Text>

              <Text style={styles.txtYear}>
                ( Movies-{data[0].release_date})
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.overview}>
          <View>
            <Text style={styles.txtItem}>Overview:</Text>
            <Text style={styles.txtContent}> {data[0].overview}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.txtItem}>Population:</Text>
            <Text style={styles.txtContent1}> {data[0].popularity}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.txtItem}>Vote Count:</Text>
            <Text style={styles.txtContent1}> {data[0].vote_count}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(26, 26, 26)',
  },
  title: {
    width: '100%',

    height: 60,
    backgroundColor: 'rgb(38, 38, 38)',

    flexDirection: 'row',
  },
  overview: {
    marginTop: 30,
    width: '100%',

    flex: 1,
    backgroundColor: 'rgb(38, 38, 38)',
    paddingTop: 10,
    paddingVertical: 15,
    paddingLeft: 10,
  },
  txtItem: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 1,
  },
  txtContent: {
    color: '#fff',
    marginTop: 10,
    fontSize: 15,
    letterSpacing: 1,
    lineHeight: 25,
  },
  txtContent1: {
    color: '#fff',
    paddingTop: 3,
    fontSize: 15,
    letterSpacing: 1,
    lineHeight: 25,
  },
  txtTitle: {
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1,
  },
  txtYear: {
    fontSize: 15,
    color: '#fff',
    letterSpacing: 1,
  },
  containerImage: {
    width: widthWindow,
    height: 430,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: widthWindow,
    height: 400,
    resizeMode: 'contain',
  },
});
const mapStateToProps=(state,ownProps)=>{
  console.log(ownProps.route.params.id) 
    const id=ownProps.route.params.id
    const movies=getDetail(state,id)
    return{
      movies:movies,
    }
}

export default connect(mapStateToProps)(DetailMovie);
