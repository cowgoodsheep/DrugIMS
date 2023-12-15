import React from 'react';
import { Card ,Button} from 'antd';
import { useModel } from '../../utils';
const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};

const UserInfo: React.FC = () => {
  const {setType} = useModel()
const userInfo =JSON.parse(localStorage.getItem('userinfo')) 

const handelClick = () => {
  setType(0)
}
  return (
  <>
  <Card title="个人基本信息">
    <Card.Grid style={gridStyle} className='B'>用户名：</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle} >
      {userInfo.username}
    </Card.Grid>
    <Card.Grid className='B' style={gridStyle}>角色：</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>{userInfo.role}</Card.Grid>
    <Card.Grid className='B' style={gridStyle}>联系方式：</Card.Grid>
    <Card.Grid  hoverable={false} style={gridStyle}>{userInfo.contact_info}</Card.Grid>
    <Card.Grid className='B' style={gridStyle}>地址：</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>{userInfo.address}</Card.Grid>
  </Card>
  <Button type='primary' onClick={handelClick} style={{marginTop:'50px'}}>填写信息</Button>
  </>
)
}

export default UserInfo;