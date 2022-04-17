import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Layout } from 'antd';
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
      <span className="header-title" onClick={onClickLogo}>
        InfoPelis
      </span>
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
