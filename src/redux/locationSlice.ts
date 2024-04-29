import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    location:{},
   };

   export const locationSlice = createSlice({
    name:"location",
    initialState,
    reducers:{
        getLocation(state,action){
            state.location = action.payload.location
        }
    }
   })

//    middleware functions

export function handle_get_Location(latitude, longtitude){
    console.log(latitude, longtitude)
    return async(dispatch)=>{
        await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longtitude}&zoom=18&addressdetails=1`,
        {
            headers: {
              "Content-Type": "application/json",
            },
        }
        ).then(function(res){
            console.log(res?.data?.display_name)
            dispatch(locationSlice.actions.getLocation({
                location:res?.data?.display_name
            }))
        }).catch(function(error){
            console.log(error);
        })
    }
}