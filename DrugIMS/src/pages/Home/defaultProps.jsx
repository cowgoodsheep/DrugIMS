import React from 'react';
import logo from './R-C.jpg'
let userinfo = localStorage.getItem('userinfo')
let role
if((userinfo)){
  userinfo = JSON.parse(userinfo)
  role= userinfo.role
  }
const defaultProps = {
    title: '药品存销信息管理系统',
    logo: logo,
    route: {
        path: '/',
        routes: [
            {
                path: '/user',
                name: '用户信息',
                access: 'canAdmin',
                hideInMenu:role!=='管理员'
            },
            {
                path: '/drug',
                name: '药品信息',
                access: 'canAdmin',
            },
            {
                name: '药品库存',
                path: '/inventory',
                hideInMenu:role!=='管理员'
            },    {
                name: '销售信息',
                path: '/sellMsg',
                hideInMenu:role!=='管理员'

            }, 
            {
                name: '入库信息',
                path: '/addMsg',
                hideInMenu:role!=='管理员'

            }, 
            {
                name: '我的购买记录',
                path: '/myDrug',
                hideInMenu:role!=='客户'
            }, 
            {
                name: '我的进货记录',
                path: '/myinput',
                hideInMenu:role!=='供应商'
            }, 
        ],
    },
    location: {
        pathname: '/',
    },
};
export default defaultProps;