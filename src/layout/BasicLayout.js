import React from 'react';
import {
  Layout,
} from 'antd';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

function BasicLayout(props) {
  const { children } = props;
  console.log(children, props);
  return (
    <Layout>
      <Layout.Header>
        <GlobalHeader />
      </Layout.Header>
      <Layout.Content>
        {children}
      </Layout.Content>
      <Layout.Footer>
        <GlobalFooter />
      </Layout.Footer>
    </Layout>
  )
}

export default BasicLayout;
