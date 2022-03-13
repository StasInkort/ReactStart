import React from 'react';
import {DialogName} from "./Dialogitem/DialogName";
import {Message} from "./Message/Message";
import classes from "./Dialogs.module.css"



const Dialogs = (props) => {

    let dialogsElements =  props.dialogPage.dialogs.map( d => <DialogName name={d.name} id={d.id} />  );
    let messagesElements = props.dialogPage.messages.map( m => <Message message={m.message}/> );
    let newMessageBody  = props.dialogPage.newMessageBody;

    let onSendMessageClick = () =>{
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} >
                { dialogsElements }
            </div>
            <div  className={classes.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>

            </div>
        </div>
    )
}

export {Dialogs};


