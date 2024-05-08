import React, { useContext, useState } from 'react';
import type { MenuProps } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { ThemeContext } from './page';
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: '',
        key: 'page1',
        icon: <MailOutlined>
            <Link to="/">Navigation One</Link>
        </MailOutlined>,
    },
    {
        label: 'Navigation Two',
        key: 'page2',
        icon: <MailOutlined>
            <Link to="/About">Navigation About</Link>
        </MailOutlined>,
    },
    {
        label: 'Navigation Three',
        key: 'page3',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Navigation Four',
        key: 'page4',
        icon: <AppstoreOutlined />,
    },
];

const Navigation: React.FC = () => {
    const [current, setCurrent] = useState('mail');
    const theme = useContext(ThemeContext);
  
    const onClick: MenuProps['onClick'] = (e) => {
      setCurrent(e.key);
    };
  
    return (
        <div style={{backgroundColor: theme === 'light' ? 'white' : '#23283e'}}>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{backgroundColor: theme === 'light' ? 'white' : '#23283e'}} />
        </div>
    );
  };

  export default Navigation;