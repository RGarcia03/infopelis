import React, { Fragment, useState } from 'react';
import { Layout } from 'antd';
import HeaderComponent from '../Header';
import { Movies } from '../../views/movies';
import './style.scss';

const { Content } = Layout;

function App() {
  const [yScroll, setYScroll] = useState(0);

  const onScroll = (d) => {
    const scrollTop = d.target.offsetHeight + d.target.scrollTop;
    const height = d.target.scrollHeight;
    setYScroll((scrollTop / height) * 100 > 85);
  };

  return (
    <Fragment>
      <Layout className="app">
        <HeaderComponent></HeaderComponent>
        <Content className="app-content" onScroll={onScroll}>
          <Movies yScroll={yScroll} />
        </Content>
      </Layout>
    </Fragment>
  );
}

export default App;
