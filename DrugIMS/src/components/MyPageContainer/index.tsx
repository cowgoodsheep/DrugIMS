import React, { useEffect, useMemo, useState, } from 'react'
import { Input, theme, Button, Upload, message, Form, Modal, Spin,DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import {
  SearchOutlined, UploadOutlined
} from '@ant-design/icons';
import {
  PageContainer,
  ProCard,
} from '@ant-design/pro-components';
import SearchInputList from './SearchInputList';
import MyModel from '../MyModel';
import AuList from '../AuList';
import UserInfo from '../UserInfo';
import Drug from '../Drug';
import MyDrug from '../MyDrug';
import Kucun from '../KuCun'
import Sell from '../Sell';
import Ruku from '../Ruku'
import User from '../User'
import MyRuku from '../MyRuku'
import { useModel } from '../../utils';
import dayjs from 'dayjs';
import { getMyRuku } from '../../api/Api';
const MyPageContainer = ({ pathname }:{[key:string]:string}) => {
  const [searchValue, setSearchValue] = useState('')
  const {setType} = useModel()
  const [temp,setTemp] = useState(0)
  const role = JSON.parse(localStorage.getItem('userinfo')).role
  const which = useMemo(()=>{
    return pathname.split('/')[1]
  },[pathname])
  useEffect(()=>{
    setSearchValue('')
    localStorage.setItem('startDate','')
    localStorage.setItem('endDate','')
  },[pathname])
  const onChange = (e)=>{
    const startDate = dayjs(e[0]).format('YYYY-MM-DD');
    const endDate = dayjs(e[1]).format('YYYY-MM-DD');
    localStorage.setItem('startDate',startDate)
    localStorage.setItem('endDate',endDate)
    setTemp(pre=>pre+1)
  }
  
  // eslint-disable-next-line @typescript-eslint/ban-types
  const Operate = ({ which,  setSearchValue }:{which:string,setSearchValue:Function,}) => {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
        }}
      >
        {pathname==='/myinput'? <RangePicker onChange={onChange} style={{marginRight:'20px'}}/>:<></>}
        {pathname!=='/myinput'?<SearchInput placeholder={SearchInputList[which]} setSearchValue={setSearchValue} />:<></>}
        {which === 'drug' &&role==='管理员'?
            <Button onClick={() => setType(1)}>添加药品信息</Button>
            :''
        }

      </div>
    );
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  const SearchInput = ({ placeholder, setSearchValue }:{placeholder:string,setSearchValue:Function}) => {
    const { token } = theme.useToken();
    return (
      <div
        key="SearchOutlined"
        aria-hidden
        style={{
          display: 'flex',
          alignItems: 'center',
          marginInlineEnd: 24,
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <Input
          style={{
            borderRadius: 4,
            marginInlineEnd: 12,
            backgroundColor: token.colorBgTextHover,
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') { setSearchValue(e.target.value) }
          }}
          onChange={(e) => {
            if (!e.target.value) { setSearchValue('') }
          }}
          prefix={
            <SearchOutlined
              style={{
                color: token.colorTextLightSolid,
              }}
            />
          }
          placeholder={placeholder}
          bordered={false}
        />
      </div>
    );
  };
  return (
    <div
      style={{
        width: '100%',
      }}
    >
        <MyModel />
      <PageContainer
        token={{
          paddingInlinePageContainerContent: 40,
        }}
        
        extra={which === 'userMsg'?'':<Operate which={which} setSearchValue={setSearchValue}  />}
      >
        <ProCard
          style={{
            height: '100%',
            minHeight: 800,
            overflow: 'auto'
          }}
        >
            {which === 'drug' ? <Drug searchValue={searchValue} /> :
            which === 'myDrug' ? <MyDrug searchValue={searchValue} /> :
            which === 'inventory' ? <Kucun searchValue={searchValue} /> :
            which === 'sellMsg' ? <Sell searchValue={searchValue} /> :
            which === 'addMsg' ? <Ruku searchValue={searchValue} /> :
          which === 'user' ? <User searchValue={searchValue} /> :
          which === 'myinput' ? <MyRuku searchValue={searchValue} change={temp}/> :
          <UserInfo/>}
          <div />
        </ProCard>
      </PageContainer>
    </div>
  );
};
export default MyPageContainer