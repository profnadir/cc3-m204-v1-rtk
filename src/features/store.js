import  { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    livres : []
}

const livreSlice = createSlice({
    name : 'livre',
    initialState,
    reducers:{
        ajouter : (state,action) => {
            state.livres.push(action.payload)
        },
        supprimer : (state,action) => {
            state.livres = state.livres.filter(l=>l.ref !== action.payload)
        }
    }
})

const store = configureStore({
    reducer:{
        livre : livreSlice.reducer
    }
})

export const {ajouter,supprimer} = livreSlice.actions;
export const {livreReducer} = livreSlice.reducer;
export default store;