import React from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../Component/HeaderDrawer'
import {DCMovies as movies} from '../Service/index';
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


const OscarMovies = ({navigation}) => {
  return (
    <View style={styles.wrap}>
      <Header title={"DC Movies"}  navigation={navigation} />
      <View>
        <FlatList
          data={movies}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemList data={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: 'rgb(26, 26, 26)',
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'rgb(255, 255, 51)',
    flexDirection: 'row',
  },

  txtHeader: {
    marginLeft: 85,
    marginTop: 8,
    fontSize: 30,
    color: 'rgb(26, 26, 0)',
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
  },
  container: {
    padding: 10,
    backgroundColor: 'rgb(204, 204, 204)',
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 7,
    overflow: 'hidden',
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
  imgHaber: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginLeft: 13,
    marginTop: 10,
  },
  imgSearch: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 20,
    marginTop: 15,
  },
});
export default OscarMovies;
