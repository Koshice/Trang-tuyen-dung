import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import questionSlice from './slice/questionSlice'
import collectionSlice from './slice/collectionSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    collections: collectionSlice,
    questions: questionSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch