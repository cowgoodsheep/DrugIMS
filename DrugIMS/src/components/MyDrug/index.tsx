import React, { useEffect, useState } from 'react'
import {  Space, Tag } from 'antd';
import MyTable from '../MyTable';
import { getAllBuy } from '../../api/Api';
import { addOneDay } from '../../utils';

const columns = [
    {
        title: '订单号',
        dataIndex: 'sales_id',
        key: 'sales_id',
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
        title: '购买日期',
        dataIndex: 'sales_date',
        key: 'sales_date',
        width: 100
    },
    {
        title: '数量',
        dataIndex: 'sales_quantity',
        key: 'sales_quantity',
        width: 100
    },
    {
        title: '金额',
        dataIndex: 'sales_amount',
        key: 'sales_amount',
        width: 100
    },
];

export default function PublicDb({ searchValue }:{searchValue:string}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (searchValue === ' ') {
            searchValue = ''
        }
        getData(searchValue)
    }, [searchValue])
    const getData =async (searchValue = '') => {
        setLoading(false)
        const data = await getAllBuy(searchValue)
        data.map((v,i)=>{
            data[i].sales_date = addOneDay(data[i].sales_date.split('T')[0])
        })
        setLoading(false)
       setData(data)
    }

    














    return (
        <>
            <MyTable loading={loading} columns={columns} data={data} />
        </>
    )
}
