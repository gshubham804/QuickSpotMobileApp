import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import Location from '../components/Location';
import Search from '../components/Search';
import FilterTags from '../components/FilterTags';
import ProductCards from '../components/ProductCards';

const Home = () => {
  return (
    <SafeAreaView >
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
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, maxime
        natus id recusandae quos veniam laborum magnam, enim ipsam vero,
        quisquam ab nihil tenetur provident tempore quasi itaque corporis
        deleniti necessitatibus sunt et maiores dolorem laudantium! Cum earum
        vitae repudiandae similique quaerat molestias eius corrupti aspernatur
        eveniet quam error minima tenetur, distinctio dicta maiores mollitia
        suscipit quia quasi tempora tempore. A, eaque dolores nobis praesentium,
        delectus sapiente, repudiandae cumque earum accusantium assumenda
        corrupti quae perferendis? Magni laboriosam, incidunt molestias amet
        repudiandae laudantium mollitia quibusdam! Amet unde nobis consequatur
        possimus dolorum quasi incidunt esse reiciendis natus neque nesciunt est
        illo ullam voluptatibus consequuntur deleniti fugit adipisci quia
        explicabo facilis exercitationem fugiat magni, omnis non? Eum molestiae
        saepe natus debitis blanditiis aut laudantium ipsam, officiis doloribus
        esse iure eligendi. Dolorum et ipsum nulla debitis quas, voluptas est
        deleniti maiores. Laudantium dicta iure ut explicabo quaerat iste
        laboriosam neque nam consequuntur possimus veritatis atque sunt
        delectus, expedita corporis? Qui quasi ut quia est ab facere distinctio!
        At harum consequatur sed praesentium cum fugiat quod, rerum, quos nemo
        soluta incidunt nihil autem vitae temporibus saepe dignissimos eius
        debitis deleniti voluptate provident illo sit? Sapiente quia reiciendis
        repellendus cupiditate quisquam sed minima minus, cumque aspernatur.
      </Text>
    </SafeAreaView>
  );
};

export default Home;
