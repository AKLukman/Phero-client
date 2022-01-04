import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Contact from "./Pages/contact/Contact";
import BuyerDetails from "./Pages/Dashboard/Buyer/BuyerDetails/BuyerDetails";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Profiles from "./Pages/Dashboard/Seller/Profiles/Profiles";
import SellerDetails from "./Pages/Dashboard/Seller/SellerDetails/SellerDetails";
import Home from "./Pages/Home/Home/Home";
import BidForJob from "./Pages/Job's/BidForJob/BidForJob";
import Jobs from "./Pages/Job's/Jobs";
// import AdminRoute from "./Pages/LogIn/AdminRoute/AdminRoute";
import LogIn from "./Pages/LogIn/LogIn/LogIn";
import PrivateRoute from "./Pages/LogIn/PrivateRoute/PrivateRoute";
import Register from "./Pages/LogIn/Register/Register";
import Punishment from "./Pages/Punishment/Punishment";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            {/* <AdminRoute exact path="/">
              <Home></Home>
            </AdminRoute> */}
            {/* <AdminRoute path="/home">
              <Home></Home>
            </AdminRoute> */}
            {/* <Route path="/contact">
              <Contact></Contact>
            </Route> */}

            <PrivateRoute path="/jobs">
              <Jobs></Jobs>
            </PrivateRoute>
            {/* <PrivateRoute path="/complain">
              <Comp
            </PrivateRoute> */}

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/developers">
              <Profiles></Profiles>
            </PrivateRoute>
            <PrivateRoute path="/sellerProfile/:sellerId">
              <SellerDetails></SellerDetails>
            </PrivateRoute>
            <PrivateRoute path="/buyerDetails/:jobsId">
              <BuyerDetails></BuyerDetails>
            </PrivateRoute>
            <PrivateRoute path="/bidding/:jobsDetails">
              <BidForJob></BidForJob>
            </PrivateRoute>
            {/* <AdminRoute path="/blocked">
              <Punishment></Punishment>
            </AdminRoute> */}
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
