import React from 'react';
import {sendMessageCreate, updateNewMessageBodyCreate} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: () => {
            dispatch(sendMessageCreate());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreate(body))
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;



