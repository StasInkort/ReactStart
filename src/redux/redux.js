import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state : {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Blabla', likesCount: 11},
                {id: 3, message: 'Dada', likesCount: 11},
                {id: 4, message: 'D3244eada', likesCount: 1431}
            ],
            newPostText: "Stas"
        },


        messagePage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: [

            ]
        }
    },

    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);

        this._callSubscriber(this._state);

    }
}
export default store;
