import React, { Fragment, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderComponent from '../Header';
import { Movies } from '../../views/movies';
import { MyVotes } from '../../views/myVotes';
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
        <HeaderComponent />
        <Content className="app-content" onScroll={onScroll}>
          <Routes>
            <Route exact path="/" element={<Movies yScroll={yScroll} />} />
            <Route
              exact
              path="/search"
              element={<Movies yScroll={yScroll} />}
            />
            <Route exact path="/myList" element={<MyVotes />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Content>
      </Layout>
    </Fragment>
  );
}

export default App;
