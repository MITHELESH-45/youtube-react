import { createSlice } from "@reduxjs/toolkit";


const appSlice=createSlice({
    name:"app",
    initialState:{
        isSideBar:true
    },
    reducers:{
        toggleSideBar:(state)=>{
            state.isSideBar=!state.isSideBar;
        },
        closeSideBar:(state)=>{
            state.isSideBar=false;
        },
        openSideBar:(state)=>{
            state.isSideBar=true;
        }
    }
});

export const{toggleSideBar,closeSideBar,openSideBar}=appSlice.actions
export default appSlice.reducer;