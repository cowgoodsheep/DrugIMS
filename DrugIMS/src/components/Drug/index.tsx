import React, { useEffect, useState } from 'react'
import {  Space, Tag,InputNumber, message,Popconfirm,Button ,Tooltip} from 'antd';
import MyTable from '../MyTable';
import { getAllDrug,buyDrug,deleteDrug,getValue,getMax } from '../../api/Api';
import { useModel } from '../../utils';
export default function Drug({ searchValue }:{searchValue:string}) {
    const [loading, setLoading] = useState(false)
    const [count,setCount] = useState(1)
    const [data, setData] = useState([])
    const role = JSON.parse(localStorage.getItem('userinfo')).role
    const {setType,setMax} = useModel()
       const handleBuy =async(record) => {
          const data = await buyDrug({...record,sales_quantity:count,sales_unit_price:record.price})
           if(!data){
          message.warning('药品库存不足，购买失败！')
           }else{
            message.success('购买成功！')

           }
       }
       const handleJinhuo = async (drug_id) => {
        setType(2);
        localStorage.setItem('drugId',drug_id);
        const max = await getMax()
        console.log(max,'set')
        setMax(max)
       }
    const columns = [
        {
            title: '药品图片',
            // dataIndex: 'drug_id',
            key: 'drug_pic',
            fixed: 'left',
            width: 120,
            render:(_,record)=>(<img src={record.img} style={{width:'120px'}} id='imgPreview'></img>)
        },
        {
            title: '药品ID',
            dataIndex: 'drug_id',
            key: 'drug_id',
            fixed: 'left',
            width: 100
        },
        {
            title: '药品名称',
            dataIndex: 'drug_name',
            key: 'drug_name',
            fixed: 'left',
            width: 100
        },
        {
            title: '药品说明',
            dataIndex: 'drug_description',
            key: 'drug_description',
            width: 200
        },
        {
            title: '生产厂家',
            dataIndex: 'manufacturer',
            key: 'manufacturer',
            width: 100
        },
        {
            title: '药品库存下限',
            dataIndex: 'stock_lower_limit',
            key: 'stock_lower_limit',
            width: 100,
        },
        {
            title: '药品库存上限',
            dataIndex: 'stock_upper_limit',
            key: 'stock_upper_limit',
            width: 100,

        },
        {
            title: '售价',
            dataIndex: 'price',
            key: 'price',
            width: 50
        }, 
       
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    {role==='客户'?<><InputNumber  min={1} defaultValue={1} onChange={(value)=>setCount(value)}/>
                    <Popconfirm
    title="你确定要购买吗"
    onConfirm={()=>handleBuy(record)}
    okText="Yes"
    cancelText="No"
  >
    <Button>购买</Button>
  </Popconfirm></>:
  role==='供应商'? 
  <Button onClick={()=>handleJinhuo(record.drug_id)}>进货</Button>
:<><Button onClick={()=>{setType(3);localStorage.setItem('drugMsg',JSON.stringify(record))}}>修改</Button><Popconfirm
title="你确定要删除吗"
onConfirm={()=>{deleteDrug(record.drug_id);location.reload()}}
okText="Yes"
cancelText="No"
><Button danger>删除</Button></Popconfirm></>
  }
                    
                </Space>
            ),
            width: 200
        },
    ];
   

    useEffect(() => {
        if (searchValue === ' ') {
            searchValue = ''
        }
        getData(searchValue)
    }, [searchValue])
    const getData =async(searchValue = '') => {
        setLoading(true)
         const data = await getAllDrug(searchValue)
         const promises = data.map(async item => {
            const value = await getValue(item.drug_id);
            if(!item.drug_description||item.drug_description==='null'){
                item.drug_description = '暂无说明'
            }
            if (value&&value < item.stock_lower_limit) {
              item.stock_lower_limit = <>{item.stock_lower_limit} <Tooltip title="商品剩余量少于库存下限！">
              <i style={{width:'20px',paddingLeft:'5px',height:'10px',textAlign:'center',borderRadius:'10px',border:'1px solid black',background:'red',color:'white'}}>！</i>
            </Tooltip></>;
            }
            return item;
          });
          Promise.all(promises).then(newData => {
        setLoading(false)
            setData(newData);
          }).catch(error => {
            console.error(error);
          });
       
    }

    














    return (
        <>
            <MyTable loading={loading} columns={columns} data={data} />
        </>
    )
}
