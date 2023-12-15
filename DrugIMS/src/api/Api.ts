import serviceAxios from ".";
let user_id,username,password,contact_info,address
let userinfo = localStorage.getItem('userinfo')
if((userinfo)){
  userinfo = JSON.parse(userinfo)
  user_id= userinfo.user_id
  username=userinfo.username
  password=userinfo.password
  contact_info=userinfo.contact_info
  address=userinfo.address
}
//登录注册
export const register =async (postData) => {
    console.log(postData)
    const {data} =  await serviceAxios.post('/login/register',postData)
        return data
}
export const login =async (postData) => {
      const data =  await serviceAxios.post('/login/login',postData)
      return data
}
//个人信息

export const repairUserInfo =async (postData) => {
  
    postData.username = postData.username||username
    postData.password = postData.password||password
    postData.contact_info = postData.contact_info||contact_info
    postData.address = postData.address||address
    const data =  await serviceAxios.post('/user/setUserInfo',{...postData,targetId:user_id})
    return data
}
//药品信息
export const getAllDrug =async (searchValue) => {
      const data = await serviceAxios.post('/drug/getAll',{searchValue})
    return data
}
export const addDrug =async (postData) => {
    const data = await serviceAxios.post('/drug/addDrug',postData)
  return data
}
export const deleteDrug =async (drug_id) => {
    const data = await serviceAxios.post('/drug/deleteDrug',{drug_id})
  return data
}
export const repairDrug =async (postData) => {
  const {stock_lower_limit,stock_upper_limit,price,drug_description,drug_id} = JSON.parse(localStorage.getItem('drugMsg'))
  postData.stock_lower_limit = postData.stock_lower_limit||stock_lower_limit
  postData.stock_upper_limit = postData.stock_upper_limit||stock_upper_limit
  postData.price = postData.price||price
  postData.drug_description = postData.drug_description||drug_description
    const data = await serviceAxios.post('/drug/repairDrug',{...postData,drug_id})
  return data
}
export const jinhuo =async (postData) => {
const drug_id = +localStorage.getItem('drugId')
    const data = await serviceAxios.post('/drug/jinhuo',{...postData,user_id,drug_id})
  return data
}
export const buyDrug =async (postData) => {
    const data = await serviceAxios.post('/drug/buyDrug',{...postData,user_id})
  return data
}
export const getMax =async () => {
  console.log(123)
const drug_id = +localStorage.getItem('drugId')
  const data = await serviceAxios.post('/drug/getMax',{drug_id})
  const limit = data[1][0]['stock_upper_limit']-data[0][0]['SUM(stock_info.remaining_quantity)']
  console.log(limit,'set')
  return limit
}
export const getValue =async (drug_id) => {
  const data = await serviceAxios.post('/drug/getValue',{drug_id})
  console.log( data[0]['SUM(stock_info.remaining_quantity)'])
  return data[0]['SUM(stock_info.remaining_quantity)']
}
//用户信息
export const getAllUser =async (searchValue) => {
  const data = await serviceAxios.post('/user/getAllUser',{searchValue})
return data
}
//修改用户信息
export const repairUser =async (postData) => {
  const {username,password,role,contact_info,address,user_id} = JSON.parse(localStorage.getItem('userMsg'))
  postData.username = postData.username||username
  postData.password = postData.password||password
  postData.role = postData.role||role
  postData.contact_info = postData.contact_info||contact_info
  postData.address = postData.address||address
  postData.user_id = postData.user_id||user_id
  console.log(postData)
  const data = await serviceAxios.post('/user/repairUser',postData)
return data
}
//删除用户信息
export const deleteUser =async (user_id) => {
  const data = await serviceAxios.post('/user/deleteUser',{user_id})
return data
}
//库存信息
export const getAllKucun =async (searchValue) => {
    const data =  await serviceAxios.post('/table/getKucun',{searchValue})
    return data
}

//销售信息
export const getAllXiaoshou =async (searchValue) => {
    const data =  await serviceAxios.post('/table/getXiaoshou',{searchValue})
    return data
}
//入库信息
export const getAllRuku =async (searchValue) => {
    const data =  await serviceAxios.post('/table/getRuku',{searchValue})
    return data
}
//我的进货信息
export const getMyRuku =async () => {
  const startDate = localStorage.getItem('startDate')
  const endDate = localStorage.getItem('endDate')
    const data =  await serviceAxios.post('/table/getMyRuku',{user_id,startDate,endDate})
  return data
}
//我的购买信息
export const getAllBuy =async (searchValue) => {
    const data =  await serviceAxios.post('/table/getBuy',{user_id,searchValue})
    return data
}
