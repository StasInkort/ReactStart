import React from 'react';
import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";

const Navbar = () =>{
    return <div className={classes.navbar}>
        <div><Link to="/profile">Profile</Link></div>
        <div><Link to="/dialogs">Message</Link></div>
        <div><Link to="/news">News</Link></div>
        <div><Link to="/music">Music</Link></div>
        <div><Link to="/settings">Settings</Link></div>
    </div>
}
export {Navbar};