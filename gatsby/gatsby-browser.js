import React from 'react'
import Layout from './src/components/Layout'
import { Helmet } from 'react-helmet';

export function wrapPageElement({element, props}) {
  return ( 
    <Layout {...props}>
      <Helmet>
        <title>Graham Hagenah</title>
        <meta name="description" content="Web projects created by Graham Hagenah" />
      </Helmet>
      {element}
    </Layout>
  )
}