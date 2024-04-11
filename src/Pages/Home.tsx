import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import Location from '../components/Location';
import Search from '../components/Search';
import FilterTags from '../components/FilterTags';
import ProductCards from '../components/ProductCards';

const Home = () => {
  return (
    <SafeAreaView>
        <Location />
        <Search />
        <FilterTags />
        <View className="mb-6">
          <Text className="text-xl font-bold mx-4 mb-2">Recommended</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {[...Array(4)].map((ele, idx) => (
            <ProductCards key={idx} />
          ))}
      </ScrollView>
        </View>

        <View className="mb-6">
          <Text className="text-xl font-bold mx-4 mb-2">Popular</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {[...Array(4)].map((ele, idx) => (
            <ProductCards key={idx} />
          ))}
      </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default Home;
