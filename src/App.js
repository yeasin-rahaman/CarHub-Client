import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import ContactUs from './pages/ContactUS/ContactUs';
import Signup from './pages/SignUp/Signup';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Home from './pages/Home/Home/Home';
import Services from './pages/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import Admin from './Admin/Admin/Admin';
import CustomerDashboard from './CustomerDashboard/CustomerDashboard';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';



function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/customerDashboard">
              <CustomerDashboard></CustomerDashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
