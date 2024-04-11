import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

const filters = [
  'All',
  'Car wash',
  'Near me',
  'Near metro station',
  'Near hospitals',
  'Near bus stand',
  'Having CCTV',
];

const FilterTags = () => {
  return (
    <>
      <View className="flex flex-row mx-2 mt-1 mb-4">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {filters.map((tag, index) => (
            <>
              <TouchableOpacity
                activeOpacity={0.8}
                key={index}
                className="bg-slate-500 mx-2
           px-4 py-2 text-white rounded-full
            text-lg">
                <Text className="text-white">{tag}</Text>
              </TouchableOpacity>
            </>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default FilterTags;
