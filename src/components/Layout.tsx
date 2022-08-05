import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import Seo from './Seo';

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

  const navigation = [
    {name: 'Home', href: '/', current: true},
    {name: 'About', href: '/about/', current: false},
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <header>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <div className="inline-block">
                    <StaticImage
                      className="object-none object-center"
                      alt="Alejandro Monasterios Logo"
                      height={35}
                      placeholder="dominantColor"
                      src="../images/am-logo.png"
                      width={70}
                    />
                    <span className="text-white inline-block pt-1.5">
                      {meta.title}
                    </span>
                  </div>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
