import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'dark',
    sidebarOpen: false,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload;
        },
        setSidebarOpen: (state, action) => {
            state.sidebarOpen = action.payload;
        },
    },
})

export const { setMode, setSidebarOpen } = globalSlice.actions;

export default globalSlice.reducer;