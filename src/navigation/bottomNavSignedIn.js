import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { PostFeed, NewItem, Profile, Chat } from '../components/containers';


const Tabs = createBottomTabNavigator({
    Home: PostFeed,
    Chat: Chat,
    NewItem: NewItem,
    //SavedItemFeed???
    Profile: Profile
},{
  tabBarOptions: {
    activeBackgroundColor: 'darkgreen'
  }
})

const BottomNavIn = createAppContainer(Tabs);

export default BottomNavIn