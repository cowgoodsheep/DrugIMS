import React, { useEffect, useState } from 'react'
import {  Space, Tag,Popconfirm,Button } from 'antd';
import MyTable from '../MyTable';
import { deleteUser, getAllUser } from '../../api/Api';
import { useModel } from '../../utils';

export default function PublicDb({ searchValue }:{searchValue:string}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {setType} = useModel()
    useEffect(() => {
        if (searchValue === ' ') {
            searchValue = ''
        }
        getData(searchValue)
    }, [searchValue])
    const getData =async (searchValue = '') => {
        setLoading(false)
        const data = await getAllUser(searchValue)
        setLoading(false)
       setData(data)
    }

    const columns = [
        {
            title: '用户ID',
            dataIndex: 'user_id',
            key: 'user_id',
            fixed: 'left',
            width: 100
        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
            fixed: 'left',
            width: 100
        },
        {
            title: '密码',
            dataIndex: 'password',
            key: 'password',
            width: 100
        },
        {
        title: '角色',
        dataIndex: 'role',
        key: 'role',
        width: 100,
        filters: [
         {
          text: '客户',
        value: '客户',
          },
          {
         text: '供应商',
         value: '供应商',
           },
         {
           text: '管理员',
            value: '管理员',
              },
            ],
          onFilter: (value, record) => record.role.indexOf(value) === 0,
        },
        {
            title: '联系方式',
            dataIndex: 'contact_info',
            key: 'contact_info',
            width: 100
        },
        {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
            width: 100
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">         
    <Button onClick={()=>{setType(4);localStorage.setItem('userMsg',JSON.stringify(record))}}>修改</Button>
    <Popconfirm
    title="你确定要删除吗"
    onConfirm={()=>{deleteUser(record.user_id);location.reload()}}
    okText="Yes"
    cancelText="No"
    ><Button danger>删除</Button></Popconfirm>
                </Space>
            ),
            width: 200
        },
    ];
    














    return (
        <>
            <MyTable loading={loading} columns={columns} data={data} />
        </>
    )
}
