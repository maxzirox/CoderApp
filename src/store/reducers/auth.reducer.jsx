import { SIGNUP, SIGNIN, GET_IMAGE, LOG_OUT, CHANGE_PASS } from "../actions/auth.action";

const INITIAL_STATE = {
    token: null,
    userId: null,
    data: [],
    image: null,
    url: '',
};

export const AuthReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case SIGNUP:
            return{
                ...state,
                //token: action.token,
                //userId: action.userId,
                //data: action.data
            };
        case SIGNIN:
            return{
                ...state,
                token: action.token,
                userId: action.userId,
                data: action.data
            }
        case GET_IMAGE:
            return{
                ...state,
                url: action.url
            }
        case LOG_OUT:
            return{
                ...state,
                token: action.token
            }
        case CHANGE_PASS:
            return{
               ...state
            }
        default:
            return state
    }
}