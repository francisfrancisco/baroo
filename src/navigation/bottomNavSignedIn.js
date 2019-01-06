import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { PostFeed, NewItem, Profile, Chat, CamRoll, Cam, NewItemForm } from '../components/containers';

const NewItemStack = createStackNavigator({
  CamRoll: CamRoll,
  Camera: Cam,
  // NewItemForm: Tabs
})

const Tabs = createBottomTabNavigator({
    Home: PostFeed,
    Chat: Chat,
    NewItem: NewItemStack,
    //SavedItemFeed???
    Profile: Profile
},{
  tabBarOptions: {
    activeBackgroundColor: 'darkgreen'
  }
})

const BottomNavIn = createAppContainer(Tabs);

export default BottomNavIn