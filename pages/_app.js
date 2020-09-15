import React from 'react'
import App, { Container } from 'next/app'
import MainLayout from '../components/main'

export default class MyApp extends App {

  constructor (props) {
    super(props);
  }
  
  render () {
    const { Component, pageProps } = this.props

    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    )
  }

}