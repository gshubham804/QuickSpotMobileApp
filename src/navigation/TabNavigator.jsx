import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import History from '../screens/History';
import User from '../screens/User';
import Fav from '../screens/Fav';
import {Heart, House, ShoppingBagOpen, UserCircle} from 'phosphor-react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: 'absolute',
          // left: 0,
          // right: 0,
          // bottom: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <House
              weight="fill"
              name="home"
              size={25}
              color={focused ? '#FF0000' : '#F87171'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={Fav}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Heart
              weight="fill"
              name="fav"
              size={25}
              color={focused ? '#FF0000' : '#F87171'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={History}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <ShoppingBagOpen
              weight="fill"
              name="Booking"
              size={25}
              color={focused ? '#FF0000' : '#F87171'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <UserCircle
              weight="fill"
              name="user"
              size={25}
              color={focused ? '#FF0000' : '#F87171'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
