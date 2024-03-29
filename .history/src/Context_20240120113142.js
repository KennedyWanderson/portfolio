import { createContext, useReducer } from "react";

export const themeContext = createContext();

const initialState = {darkMode: true};

const themeReducer = (state, action) => {

    switch(action.type){
        case 'toggle':
            return{darkMode : !state.darkMode};

        default:
            return state;
    }

    export const themeProvider = (props) => {
        const [state, dispatch] = useReducer
    }
}