import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {ItemDataType} from './Type';

const Post = ({navigation}: {navigation: any}) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
      });
  }, []);
  console.log(data);
  const renderItem = ({item}: {item: ItemDataType}) => {
    return (
      <View style={{width: '100%'}}>
        <View>
          <Text style={{color: '#ECECEC', width: '100%'}}>
            _______________________________________________
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PostDetails', {id: item.id});
            }}
            style={{width: '55%'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: '#444444',
                marginVertical: 10,
                marginLeft: 5,
              }}>
              {item.id}. {item.title}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View style={styles.topView}>
        <Text style={styles.topTitle}>Posts</Text>
      </View>

      <View style={styles.middleView}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.btnText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Post;

const styles = StyleSheet.create({
  topView: {
    marginTop: 25,
  },
  topTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fe3c72',
    alignSelf: 'center',
  },

  middleView: {
    flex: 1,
    marginHorizontal: 20,
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#fe3c72',
    marginBottom: 20,
    paddingHorizontal: 100,
    paddingVertical: 10,
    borderRadius: 30,
    width: '70%',
    alignSelf: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});
