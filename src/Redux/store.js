import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "Redux/contacts/contactsApi";
import { contactsSlice } from "./contacts/contactsSlice";
import authReducer from "./auth/auth-slice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const authPersistConfig = {
    key: "auth",
    storage,
    whiteList: ["token"],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsSlice.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    contactsApi.middleware,
    ],
});

export const persistor = persistStore(store);