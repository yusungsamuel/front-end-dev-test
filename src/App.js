import React from 'react';
import Landing from "./section/landing"
import {Friends} from "./section/friends"
import {Families} from "./section/families"
import {Service} from "./section/service"
import {Future} from "./section/future"
import {Rating} from "./section/rating"
import {Footer} from "./section/footer"
import './App.css';

function App() {
  return (
    <div>
    <Landing></Landing>
    <Friends></Friends>
    <Families></Families>
    <Service></Service>
    <Future></Future>
    <Rating></Rating>
    <Footer></Footer>
    </div>
  );
}

export default App;
