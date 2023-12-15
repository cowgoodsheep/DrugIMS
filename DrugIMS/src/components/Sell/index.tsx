import React, { useEffect, useState } from 'react'
import {  Space, Tag } from 'antd';
import MyTable from '../MyTable';
import { getAllXiaoshou } from '../../api/Api';
import { addOneDay } from '../../utils';

const columns = [
    {
        title: '销售ID',
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
        title: '客户名称',
        dataIndex: 'username',
        key: 'username',
        width: 100
    },
    {
        title: '销售日期',
        dataIndex: 'sales_date',
        key: 'sales_date',
        width: 100
    }, {
        title: '销售数量',
        dataIndex: 'sales_quantity',
        key: 'sales_quantity',
        width: 100
    }, {
        title: '销售单价',
        dataIndex: 'sales_unit_price',
        key: 'sales_unit_price',
        width: 100
    }, 
    {
        title: '销售金额',
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
        setLoading(true)
        const data = await getAllXiaoshou(searchValue)
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
