import React from 'react';
import classes from './../Dialogs.module.css';
import {Link} from "react-router-dom";

const DialogName = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={classes.dialogs + ' ' + classes.active}>
        <Link to={path}>{props.name}</Link>
    </div>
};

export {DialogName};
