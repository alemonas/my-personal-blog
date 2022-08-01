import {Link} from 'gatsby';
import * as React from 'react';

import Layout from '../components/Layout';

function IndexPage() {
  return (
    <Layout>
      <main>
        <h1>index Page</h1>
        <Link to="/about">About this site</Link>
      </main>
    </Layout>
  );
}

export default IndexPage;
