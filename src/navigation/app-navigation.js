import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/home";
import HeroScreen from "../screens/heroes";
import HeroDetailScreen from "../screens/hero-detail";


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Hero:  HeroScreen,
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
