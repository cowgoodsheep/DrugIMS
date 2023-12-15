import { createSlice } from '@reduxjs/toolkit'
const initialState:{open:boolean,type:number,titleMap:{[key:number]:string}} = {
	open:false,
    type:0,
	max:99999,
	titleMap:{0:'修改信息',1:'添加药品信息',2:"药品入库",3:'修改药品信息',4:'修改用户信息'}
}
const countSlice = createSlice({
	name: 'model', 
	initialState,
	reducers: { // 一个个的action操作
		setOpen(state, action){
			state.open = action.payload
		},
		setType(state, action){
			state.type = action.payload
		},
		setMax(state, action){
			state.max = action.payload
		},
	}
})
export const {setOpen,setType,setMax} = countSlice.actions
export default countSlice.reducer