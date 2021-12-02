import React from 'react'
import isEmpty from '../../../validator/isEmpty';
import { SET_CURRENT_USER } from '../types';

const initialState = {
    authenticate: false,
    user: {}
}
export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return{
                ...state,
                authenticate: !isEmpty(action.payload),
                user: action.payload
            }
    
        default:
            return state;
    }
}


