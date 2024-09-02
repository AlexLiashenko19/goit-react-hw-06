import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./сontacts/contactsSlice";
import { filterReducer } from "./filter/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});