import React, { useEffect, useState } from 'react'
import {  Space, Tag } from 'antd';
import MyTable from '../MyTable';
import { getAllRuku } from '../../api/Api';
import { addOneDay } from '../../utils';

const columns = [
    {
        title: '进货单ID',
        dataIndex: 'purchase_id',
        key: 'purchase_id',
        fixed: 'left',
        width: 100
    },
    {
        title: '供应商ID',
        dataIndex: 'user_id',
        key: 'user_id',
        fixed: 'left',
        width: 100
    },
    {
        title: '供应商名称',
        dataIndex: 'username',
        key: 'username',
        fixed: 'left',
        width: 100
    },
    {
        title: '进货日期',
        dataIndex: 'purchase_date',
        key: 'purchase_date',
        width: 100
    },
    {
        title: '进货总金额',
        dataIndex: 'purchase_total_amount',
        key: 'purchase_total_amount',
        width: 100
    },
    {
        title: '备注',
        dataIndex: 'note',
        key: 'note',
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
    const getData = async(searchValue = '') => {
        setLoading(false)
        const data = await getAllRuku(searchValue)
        data.map((v,i)=>{
            data[i].purchase_date = addOneDay(data[i].purchase_date.split('T')[0])
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
