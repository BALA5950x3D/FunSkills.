import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from "../screens/HomeScreen";
import Login from "../screens/Login";
import SignUp from "../screens/Signup";
import CourseSelector from "../screens/CourseSelector";
import CoursesEnrolled from "../screens/CoursesEnrolled";
import PostListing from "../screens/PostListing";
import Settings from "../screens/Settings";

const Screens = {
    Login: {
        screen: Login
    },
    
    SignUp: {
        screen: SignUp
    },
    
    Home: {
        screen: Home
    },  
    
    CourseSelector: {
        screen: CourseSelector
    },  
    
    CoursesEnrolled: {
        screen: CoursesEnrolled
    },
    
    PostListing: {
        screen: PostListing
    },
    
    Settings: {
        screen: Settings
    },
};

const HomeStack = createStackNavigator(Screens);

export default createAppContainer(HomeStack);