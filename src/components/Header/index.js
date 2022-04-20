import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Layout, Menu } from 'antd';
import './style.scss';

const { Header } = Layout;
const { Search } = Input;

function HeaderComponent(props) {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate('/');
  };

  return (
    <Header className="header">
      <div className="header-right-side">
        <span className="header-right-side-title" onClick={onClickLogo}>
          InfoPelis
        </span>

        <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['home']}>
          <Menu.Item key="home" onClick={() => navigate('/')}>
            Inicio
          </Menu.Item>
          <Menu.Item key="myVotes" onClick={() => navigate('/myList')}>
            Mis valoraciones
          </Menu.Item>
        </Menu>
      </div>

      <Search
        className="header-input"
        placeholder="Buscar..."
        allowClear
        onSearch={props.onSearch}
      />
    </Header>
  );
}

export default HeaderComponent;
