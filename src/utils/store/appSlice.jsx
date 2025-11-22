import { createSlice } from "@reduxjs/toolkit";


const appSlice=createSlice({
    name:"app",
    initialState:{
        isSideBar:true
    },
    reducers:{
        toggleSideBar:(state)=>{
            state.isSideBar=!state.isSideBar;
        }
    }
});

export const{toggleSideBar}=appSlice.actions
export default appSlice.reducer;