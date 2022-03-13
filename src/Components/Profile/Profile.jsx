import React from 'react';
import classes from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostscontainer";

const Profile = (props) =>{

    return <div>
        <ProfileInfo />
        <MyPostContainer store={props.store}/>
    </div>
}
export {Profile};