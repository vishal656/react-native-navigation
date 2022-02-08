import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

const App = createStackNavigator(
  {
    Screen1: { screen: Screen1 },
    Screen2: { screen: Screen2 }
  },
  {
    initalRoute: "Screen1"
  }
);
export default createAppContainer(App);
