import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ProductCards = () => {
  return (
    <View className="mx-4 w-full max-w-xs bg-white border-2 border-red-500 rounded-lg shadow-md mb-4">
      <Image
        className="w-full h-40 rounded-t-lg"
        source={{
          uri: 'https://media.istockphoto.com/id/157374506/photo/sports-car-on-beach.jpg?s=1024x1024&w=is&k=20&c=dOIRPuX4lYLbwXX5wKYEGgdRZS4HJq6mZVOHgILTWII=',
        }}
        alt="product-image"
      />
      <Text className="text-lg font-semibold mt-2 mb-1 pl-2">Product Name</Text>
      <View className="flex flex-row items-center px-2 mb-2">
        <Text className="text-gray-500 mr-2">Ratings (star)</Text>
        <Text className="text-gray-500">Ratings in number</Text>
      </View>
      <View className="flex flex-row justify-between items-center px-2 mb-4">
        <Text className="text-lg font-semibold text-red-500">₹99.99</Text>
        <TouchableOpacity 
         activeOpacity={0.8}
         className="bg-red-500 px-4 py-2 rounded-md">
          <Text className="text-white">Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCards;
