import * as React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';

import Seo from './Seo';

import '../styles/global.css';
// import * as styles from '../styles/layout.module.css';

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}

export default function Layout({
  children,
  title,
  description,
  image,
  path,
}: Props) {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <header>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
