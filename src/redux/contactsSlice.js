import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    contacts: []
}

const contactSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload)
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        }
    }
})

export const contactsReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;

// export const contactsReducer = (state = INITIAL_STATE, actions) => {
//     switch (actions.type) {
//         case "contacts/add":
//             return {
//                 ...state,
//                 contacts: [...state.contacts, actions.payload]
//             }
//         case "contacts/delete":
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact => contact.id !== actions.payload)
//             }
//         default:
//             return state;
//     }
// }

// export const addContact = (payload) => {
//     return {
//         type: "contacts/add",
//         payload,
//     };
// };

// export const deleteContact = (contactsId) => {
//     return {
//         type: "contacts/delete",
//         payload: contactsId,
//     }
// }