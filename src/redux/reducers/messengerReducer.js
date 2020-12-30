import {SEND_MESSAGE} from '../types'
import {getLastChild} from '../../utils/arrayManipulations'


const initialState = {
    dialogs: [
        {id: 1, name: 'Dimon Staevsky'},
        {id: 2, name: 'Sveta Pahomova'},
        {id: 3, name: 'Kent Djackman'},
        {id: 4, name: 'Denchik Loureatov'}
    ],
    messages: [
        {id:1, message: 'Hi'},
        {id:2, message: 'Like your nothing'},
        {id:3, message: 'Yo'}
    ]
}

export const messengerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let idMessage
            if(state.messages.length !== 0) {
                idMessage = getLastChild(state.messages).id+1
            } else {
                idMessage = 1
            }
            const newMessage = {
                id: idMessage,
                message: action.message
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        default: return state
    }
}