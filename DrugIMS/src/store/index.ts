//store.js
import { configureStore } from '@reduxjs/toolkit'
import modelReducer from './reducers/model'

// 生成store
const store = configureStore({
	// 将所有子模块匹配值在这里
	reducer: {
		model: modelReducer
	}
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;