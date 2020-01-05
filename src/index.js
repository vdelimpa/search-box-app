import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import App from './App'
import client from './client'

const Root = () => {
  return (
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
          <App />
        </ApolloProvider>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))