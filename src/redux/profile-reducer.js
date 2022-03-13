const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Blabla', likesCount: 11},
        {id: 3, message: 'Dada', likesCount: 11},
        {id: 4, message: 'D3244eada', likesCount: 1431}
    ],
    newPostText: "Stas"
};
const profileReducer = (state = initialState , action ) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
}
export const addPostActionCreate = () =>({type: ADD_POST})
export const updateNewPostTextActionCreate = (text) =>({
    type : UPDATE_NEW_POST_TEXT,
    newText: text
})
export default profileReducer;