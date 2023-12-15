import {
  LogoutOutlined, UserOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  ProConfigProvider,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { Dropdown } from 'antd';
import React, { useState, useEffect } from 'react';
import defaultProps from './defaultProps.jsx';
import MyPageContainer from '../../components/MyPageContainer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    // splitMenus: true,
  });
  const navigate = useNavigate();
  const path = sessionStorage.getItem('pathname')||'/userMsg'
  //历史记录
  const [pathname, setPathname] = useState(path);
  useEffect(() => {
      sessionStorage.setItem('pathname', pathname)
  }, [pathname])
  const username= JSON.parse(localStorage.getItem('userinfo')).username

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProConfigProvider hashed={false}>
        <ProLayout
          {...settings}
          prefixCls="my-prefix"
          {...defaultProps}
          location={{
            pathname,
          }}
          siderMenuType="group"
          menu={{
            collapsedShowGroupTitle: true,
          }}
          avatarProps={{
            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
            size: 'small',
            title: username,
            render: (props, dom) => {
              return (
                <Dropdown
                  menu={{
                    items: [
                     
                      {
                        key: 'usermsg',
                        icon: <UserOutlined />,
                        label: <div onClick={() => { setPathname('/userMsg')}}>个人信息</div>,
                      },
                      {
                        key: 'logout',
                        icon: <LogoutOutlined />,
                        label: <div onClick={() => { localStorage.clear(); navigate('/login'); }}>退出登录</div>,
                      },
                    ],
                  }}
                >
                  {dom}
                </Dropdown>
              );
            },
          }}
          menuFooterRender={(props) => {
            if (props?.collapsed) return undefined;
            return (
              <div
                style={{
                  textAlign: 'center',
                  paddingBlockStart: 12,
                }}
              >
                <div>© 2023 Made by LiuHaoyang</div>
              </div>
            );
          }}
          onMenuHeaderClick={(e) => { }}
          menuItemRender={(item, dom) => 
          ( <div
                onClick={() => {
                  setPathname(item.path || '/userMsg');
                }}
              >
                {dom}
              </div>)
          }
        >
          <MyPageContainer pathname={pathname} />

          <SettingDrawer
            pathname={pathname}
            enableDarkTheme
            getContainer={() => document.getElementById('test-pro-layout')}
            settings={settings}
            onSettingChange={(changeSetting) => {
              setSetting(changeSetting);
            }}
            disableUrlParams={false}
          />
        </ProLayout>
      </ProConfigProvider>
    </div>
  );
};
export default Home