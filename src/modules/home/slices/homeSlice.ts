import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

interface HomeState {
    loading: boolean;
    data: Object
}

const initialState: HomeState = {
    loading: false,
    data: {}
}

export const fetchHome = createAsyncThunk('home/fetch_data', async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return await res.json()
})

const homeSlice = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHome.pending, (state) => {
            console.log("🚀 ~ builder.pending ~ state:", state)
        })
        .addCase(fetchHome.fulfilled, (state, action) => {
            console.log("🚀 ~ .fulfilled ~ action:", action)
        })
        .addCase(fetchHome.rejected, (state, action) => {
        console.log("🚀 ~ .addCase ~ rejected:", action)

        });
    },
})
const {reducer: homeReducer, actions}  = homeSlice
export const homeState = (state: any) => state.homeReducer
export default homeReducer