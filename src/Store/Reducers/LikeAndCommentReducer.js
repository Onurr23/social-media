import initialState from "./initialState";

export function likeAndCommentReducer(state=initialState.like,action) {

    if (action.type==='LIKED'){

        return action.payload

    } else if(action.type === 'COMMENTED'){

        return action.payload;

    }else {

        return state;

    }
}

export default likeAndCommentReducer;