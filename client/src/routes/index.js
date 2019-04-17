import Portal from '../views/Portal/portal';
import Home from '../views/Home/home';
import Feed from '../views/Feed/feed';
import Login from '../views/Login/login.js';
import Signup from '../views/Signup/signup';

var indexRoutes = [
    { path: "/portal", name: "Portal", component: Portal },
    { path: "/feed", name: "Feed", component: Feed },
    { path: "/login", name: "Login", component: Login },
    { path: "/signup", name: "Signup", component: Signup },
    { path: "/", name: "Home", component: Home }
  ];
  
  export default indexRoutes;