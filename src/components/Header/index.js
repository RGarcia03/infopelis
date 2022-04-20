import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Layout, Menu } from 'antd';
import './style.scss';

const { Header } = Layout;
const { Search } = Input;

function HeaderComponent(props) {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState('home');

  const onClickLogo = () => {
    navigate('/');
    setSelectedKey('home');
  };

  const onSearch = (value) => {
    if (value) {
      navigate(`/search?query=${value}`);
      setSelectedKey(null);
    }
  };

  return (
    <Header className="header">
      <div className="header-right-side">
        <span className="header-right-side-title" onClick={onClickLogo}>
          InfoPelis
        </span>

        <Menu mode="horizontal" theme="dark" selectedKeys={[selectedKey]}>
          <Menu.Item
            key="home"
            onClick={() => {
              navigate('/');
              setSelectedKey('home');
            }}
          >
            Inicio
          </Menu.Item>
          <Menu.Item
            key="myVotes"
            onClick={() => {
              navigate('/myList');
              setSelectedKey('myVotes');
            }}
          >
            Mis valoraciones
          </Menu.Item>
        </Menu>
      </div>

      <Search
        className="header-input"
        placeholder="Buscar..."
        allowClear
        onSearch={onSearch}
      />
    </Header>
  );
}

export default HeaderComponent;
