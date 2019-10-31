import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import FloatingHeader from './components/floating-header/floating-header.js'
import TopHeader from './components/top-header/top-header.js'

const AppContainer = styled.div`
  margin: 16px;
  font-family: Arial, Helvetica, sans-serif;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <TopHeader />
        <FloatingHeader />
      </AppContainer>
    )
  }
}

export default hot(module)(App)
