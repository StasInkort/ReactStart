import React from 'react';
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText: (text) =>{
            let  action = updateNewPostTextActionCreate(text);
            dispatch(action);
        },

        addPost: () =>{
            dispatch(addPostActionCreate());
        }

    }
}
const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostContainer;


