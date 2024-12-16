import React from 'react';
import { Icon, Touchable, useTheme } from '@draftbit/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { systemWeights } from 'react-native-typography';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from './screens/HomeScreen';
import ItemDetailsScreen from './screens/ItemDetailsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import OrdersScreen from './screens/OrdersScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import palettes from './themes/palettes';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function DefaultDrawerIcon({ tintColor, navigation }) {
  return (
    <Touchable
      onPress={() => navigation.toggleDrawer()}
      style={[styles.headerContainer, styles.headerContainerLeft]}
    >
      <Icon
        name="EvilIcons/navicon"
        size={27}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </Touchable>
  );
}

function BottomTabNavigator() {
  const theme = useTheme();

  const tabBarOrDrawerIcons = {
    HomeScreen: 'AntDesign/home',
    OrdersScreen: 'Ionicons/cart-outline',
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ navigation }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.branding.primary,
        tabBarStyle: { borderTopColor: 'transparent' },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/home"
              size={25}
              color={focused ? theme.colors.branding.primary : color}
            />
          ),
          title: 'Home',
        })}
      />
      <Tab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/cart-outline"
              size={25}
              color={focused ? theme.colors.branding.primary : color}
            />
          ),
          title: 'Orders',
        })}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#FFFFFF',
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        initialRouteName="OnboardingScreen"
        screenOptions={({ navigation }) => ({
          cardStyle: { flex: 1 },
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
          headerMode: 'none',
          headerShown: false,
        })}
      >
        <Stack.Screen
          name="ItemDetailsScreen"
          component={ItemDetailsScreen}
          options={({ navigation }) => ({
            title: 'Item Details',
          })}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={({ navigation }) => ({
            title: 'Welcome Screen',
          })}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={({ navigation }) => ({
            title: 'Notifications',
          })}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={({ navigation }) => ({
            title: 'Bottom Tab Navigator',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
