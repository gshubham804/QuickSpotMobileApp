import {MagnifyingGlass} from 'phosphor-react-native';
import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Search = () => {
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView>
      <View
        className="mx-2 pl-6 rounded-full h-16 flex flex-row
      justify-between items-center bg-slate-300 my-4">
        <TextInput
          className="focus:outline-2 focus:outline-red-500"
          placeholder="Search with parking name or pincode"
          onChangeText={onChangeText}
          value={text}
        />
        <TouchableOpacity className="bg-slate-200 p-5 rounded-full">
          <Text>
            <MagnifyingGlass size={25} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Search;
