import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk("fetchContent", async () => {
  const { data } = await axios.get(` https://public.connectnow.org.uk/applicant-test`);
  console.log(data);
  return data;
});

const initialState = {
  dataArray: [],
  searched: [],
  status: "",
};

export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // setDataArray: (state, action) => {
    //   state.dataArray = [...action.payload];
    // },
    filterTextString: (state, action) => {
      state.dataArray = state.searched.filter((ele) => ele.name.toLowerCase().includes(action.payload));
      console.log(state.searched.filter((ele) => ele.name.toLowerCase().includes(action.payload)));
    },
    filterRange: (state, action) => {
      //   state.dataArray = state.searched.filter((ele) => Math.floor(Math.floor(ele.rating) / 10) == action.payload);
      //   console.log(state.searched.filter((ele) => typeof ele.rating));
      //   console.log(typeof action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.dataArray = [...action.payload];
        state.searched = action.payload;
        state.status = "success";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

// Action creators are generated for each case reducer function
export const { filterTextString, filterRange } = DataSlice.actions;

export default DataSlice.reducer;
