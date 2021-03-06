import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const uri = 'https://wjg3rv8ntj.execute-api.us-east-1.amazonaws.com/dev/graphql'

const link = new HttpLink({ uri })

const cache = new InMemoryCache()

const client = new ApolloClient({ link, cache })

export default client