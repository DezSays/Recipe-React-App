

const initialState = {
    favorites: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_TO_FAV'){
        return{
            ...state,
            favorites: state.favorites.concat(action.description)
        }
    }
    
    return state
}

export default reducer