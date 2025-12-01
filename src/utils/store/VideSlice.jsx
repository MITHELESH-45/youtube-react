import { createSlice } from "@reduxjs/toolkit";





const videoSlice=createSlice({
     name:"videos",
     initialState:{
        popularVideos:[]
     },
     reducers:{
        addpopularMovies:(state,action)=>{
            state.popularVideos=action.payload;
        }
     }
});


export const{addpopularMovies}=videoSlice.actions;

export default videoSlice.reducer;