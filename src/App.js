import React from 'react';
import './App.css';
import BookingPage from './components/BookingPage/BookingPage';
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HotelPage from './components/HotelPage/HotelPage';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/bookingPage/:id">
            <BookingPage />
          </Route>
          <Route path="/hotelPage/:id">
            <HotelPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
