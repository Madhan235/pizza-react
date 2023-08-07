import { createSlice } from "@reduxjs/toolkit";

const optionsSlice = createSlice({
    name:"options",
    initialState:{data:{},selectedData:{}},
    reducers:{
        saveData:(state,action)=>{
  state.data = action.payload;
        },
        saveSelectedData:(state,action)=>{
           console.log(action.payload)
            state.selectedData = action.payload;
       
        },
         
    },
})
 
export const {saveData,saveSelectedData} = optionsSlice.actions;
export default optionsSlice.reducer;
 
