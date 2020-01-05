import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import SearchBox from './components/SearchBox'
import client from './client'
import './index.css'

const App = () => (
  <div className="main">
    <div className="information">
      <a className="githubLink" href="https://github.com/vdelimpa/search-box-app" alt="Github Repo Source Code Page">
        <p>⚙ View source code</p>
      </a>
      <p className="creator">|  🛠 Made by
        <a href="https://www.linkedin.com/in/vdelimpasi/" alt="Vasiliki Delimpasi's LinkedIn Profile"> Vasiliki Delimpasi</a>
      </p>
    </div>
      <ApolloProvider client={client}>
        <div className="container">
          <SearchBox /> 
        </div>
      </ApolloProvider>
  </div>
)

export default App