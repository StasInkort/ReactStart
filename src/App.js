import React from 'react';
import './App.css';
import { Route , Routes } from "react-router-dom";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Footer} from "./Components/Footer/Footer";

import DialogsContainer from "./Components/Dialogs/DialogsContainer";



const App = (props) =>{

  return <div className="app-wrapper">
    <Header />
    <Navbar />
    <div className="app-wrapper-content">
      <Routes>
        <Route path='/profile' element={<Profile store={props.store} />}/>
        <Route path='/dialogs' element={<DialogsContainer  store={props.store} />} />
        <Route path='/news' element={<News />}/>
        <Route path='/music' element={<Music />}/>
        <Route path='/settings' element={<Settings />}/>
      </Routes>

    </div>
    <Footer />
  </div>
}
export default App;