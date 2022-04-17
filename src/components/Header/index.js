import React from 'react';
import { Input, Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './style.scss';

const { Header } = Layout;

function HeaderComponent() {
  return (
    <Header className="header">
      <span className="header-title">InfoPelis</span>
      <Input
        className="header-input"
        placeholder="Buscar..."
        suffix={<SearchOutlined />}
      />
    </Header>
  );
}

export default HeaderComponent;
