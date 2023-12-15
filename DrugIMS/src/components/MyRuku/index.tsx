import React, { useEffect, useState } from 'react'
import {  Space, Tag,Popconfirm,Button } from 'antd';
import MyTable from '../MyTable';
import { deleteUser, getMyRuku } from '../../api/Api';
import { useModel } from '../../utils';
import { addOneDay } from '../../utils';

export default function PublicDb({ searchValue,change }:{searchValue:string}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {setType} = useModel()
    useEffect(() => {
        if (searchValue === ' ') {
            searchValue = ''
        }
        getData()
    }, [searchValue])
    useEffect(()=>{
        getData()
    },[change])
    const getData =async () => {
        setLoading(false)
        const data = await getMyRuku()
        data.map((v,i)=>{
            data[i].purchase_date = addOneDay(data[i].purchase_date.split('T')[0])
        })
        setLoading(false)
       setData(data)
    }

    const columns = [
        {
            title: '进货ID',
            dataIndex: 'purchase_id',
            key: 'purchase_id',
            fixed: 'left',
            width: 100
        },
        {
            title: '进货日期',
            dataIndex: 'purchase_date',
            key: 'purchase_date',
            fixed: 'left',
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
        width: 100,
        }
    ];
    














    return (
        <>
            <MyTable loading={loading} columns={columns} data={data} />
        </>
    )
}
