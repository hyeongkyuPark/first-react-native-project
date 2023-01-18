import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
// import {ActivityIndicator, Text, View} from 'react-native';
import {fetchUsers} from 'src/apis/users';

const HomeScreen = () => {
  const {data, isLoading} = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : data?.data ? (
        data.data.map(item => <Text>{item.name}</Text>)
      ) : null}
      <Text>test</Text>
    </View>
  );
};

export default HomeScreen;
