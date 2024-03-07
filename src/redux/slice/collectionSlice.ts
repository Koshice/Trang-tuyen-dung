import { ICollection } from "../../types";
import { getCollections } from "../actions/collectionActions";
import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const collectionFetchData = createAsyncThunk(
  'collections/fetchData',
  async () => {
    const result = await getCollections() as ICollection[]
    return result; 
  }
);

export interface CollectionState {
  collections: ICollection[]
  loading: boolean
  searchQuery: string
}

const initialState: CollectionState = {
  collections: [],
  loading: false,
  searchQuery: ''
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    create:( state, action: PayloadAction<ICollection>) => {
      state.collections.unshift(action.payload)
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(collectionFetchData.pending, (state) => {
        state.loading = true;
        console.log('Pending');
      })
      .addCase(setSearchQuery, (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload;
      })
      .addCase(collectionFetchData.fulfilled, (state, action: PayloadAction<ICollection[]>) => {
        state.collections = action.payload.filter(item => 
          (item.company && item.company.toLowerCase().includes(state.searchQuery.toLowerCase())) ||
          (item.nameJob && item.nameJob.toLowerCase().includes(state.searchQuery.toLowerCase()))
        );
        console.log('Fulfilled');
        state.loading = false;
      })
    }
})

export const setSearchQuery = createAction<string>('collection/setSearchQuery');

export const { create } = collectionSlice.actions;

export default collectionSlice.reducer
