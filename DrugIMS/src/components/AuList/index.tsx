import React, { useEffect, useState } from 'react'
import {  Space, Tag } from 'antd';
import MyTable from '../MyTable';
const columns = [
    {
        title: 'ID',
        dataIndex: 'ID',
        key: 'ID',
        fixed: 'left',
        width: 100
    },
    {
        title: '账号',
        dataIndex: 'account',
        key: 'account',
        fixed: 'left',
        width: 100
    },
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        width: 100
    },
    {
        title: '设备序列号',
        dataIndex: 'series',
        key: 'series',
        width: 100
    },
    {
        title: '设备型号',
        dataIndex: 'size',
        key: 'size',
        width: 100
    }, {
        title: '客户名称',
        dataIndex: 'name',
        key: 'name',
        width: 100
    }, {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
        width: 100
    }, {
        title: '联系人',
        dataIndex: 'people',
        key: 'people',
        width: 100
    }, {
        title: '联系号码',
        dataIndex: 'phone',
        key: 'phone',
        width: 100
    }, {
        title: '安装网点',
        dataIndex: 'net',
        key: 'net',
        width: 100
    }, {
        title: '机器码',
        dataIndex: 'mcode',
        key: 'mcode',
        width: 200
    }, {
        title: '授权码',
        dataIndex: 'aucode',
        key: 'aucode',
        width: 200

    }, {
        title: '机器码文件',
        dataIndex: 'mfile',
        key: 'mfile',
        width: 200

    }, {
        title: '授权码文件',
        dataIndex: 'aufile',
        key: 'aufile',
        width: 200

    },
];
const temp = {}
columns.map(v=>{
    temp[v.dataIndex] = 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest'
})
const data2 =[temp,temp,temp,temp,temp,temp,temp,temp,temp,temp]
export default function PublicDb({ searchValue }:{searchValue:string}) {
    const [data, setData] = useState(data2)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (searchValue === ' ') {
            searchValue = ''
        }
        getData(searchValue)
    }, [searchValue])
    const getData = (searchValue = '') => {
        setLoading(false)
        // serviceAxios.get(`admin/public_db/search?id=${NotaNumber(searchValue) ? '' : searchValue}&dbName=${NotaNumber(searchValue) ? searchValue : ''}`)
        //     .then((res) => {
        //         setLoading(false)
        //         setData(res.data.map((v, i) => (
        //             {
        //                 ...v,
        //                 key: i, createTime: v.createTime ? v.createTime.split('T')[0] + ' ' + v.createTime.split('T')[1].split('.')[0] : '',
        //                 updateTime: v.updateTime ? v.updateTime.split('T')[0] + ' ' + v.updateTime.split('T')[1].split('.')[0] : '',
        //                 tags: v.isDeleted ? ['deleted'] : ['normal']
        //             })))
        //     })
    }

    














    return (
        <>
            <MyTable loading={loading} columns={columns} data={data} />
        </>
    )
}
