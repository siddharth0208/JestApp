import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {ItemDataType} from './Type';

const PostDetails = ({
  navigation,
  route,
}: {
  navigation: any;
  route: ItemDataType;
}) => {
  const {id} = route.params;

  const [data, setData] = useState<ItemDataType>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => response.json())
      .then(json => {
        setData(json);
      });
  }, []);

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View style={styles.topView}>
        <Text style={styles.topTitle}>Post Details</Text>
      </View>

      {data != undefined ? (
        <View style={styles.middleView}>
          <Text style={styles.txt}>
            Id - {''}
            {data.id}.
          </Text>
          <Text style={styles.txt}>
            Title - {''}
            {data.title}.
          </Text>
          <Text style={styles.txt}>
            Description -{''} {data.body}.
          </Text>
        </View>
      ) : (
        <View style={styles.indicator}>
          <ActivityIndicator color={'#fe3c72'} size={'large'} />
        </View>
      )}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Post');
        }}
        style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 25, color: 'blue'}}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PostDetails;

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
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 20,
  },
  txt: {
    fontSize: 20,
    marginVertical: 12,
    fontWeight: '500',
    color: '#444444',
  },
  indicator: {
    marginHorizontal: 100,
    marginVertical: 150,
  },
});
