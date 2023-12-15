import {setMax as setMaxAction,setOpen as setOpenAction,setType as setTypeAction} from '../store/reducers/model';
import {useAppDispatch,useAppSelector} from './declare'
export const useModel =  () => {
  const model = useAppSelector(state=>state.model)
  const dispath = useAppDispatch()
  const {type,open,titleMap,max} = model
  const setType= (type:number) => {
    dispath(setTypeAction(type))
    setOpen(true)
  }
  const setOpen= (state:boolean) => {
    dispath(setOpenAction(state))
  }
  const setMax =  (max:number) => {
    dispath(setMaxAction(max))
  }
  return {
    setOpen,setType,type,open,titleMap,max,setMax
  }
}
export const addOneDay=(dateStr)=>{
  var parts = dateStr.split('-');
  var year = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10) - 1;  // 月份从0开始计数
  var day = parseInt(parts[2], 10);

  var date = new Date(year, month, day);
  date.setDate(date.getDate() + 1);

  var nextDay = date.getFullYear() + '-' 
                + ('0' + (date.getMonth() + 1)).slice(-2) + '-' 
                + ('0' + date.getDate()).slice(-2);

  return nextDay;
}