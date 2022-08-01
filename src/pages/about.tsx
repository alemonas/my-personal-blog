import {Link} from 'gatsby';
import * as React from 'react';

import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout
      title="About this page"
      description="More information about this page"
    >
      <h1>About Page</h1>
      <Link to="/">Go to Home</Link>
    </Layout>
  );
}
