import './index.css';
import TodoForm from './components/TodoForm';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Login from './pages/Login';
import Footer from '../../../../2-full-stack-application/Footer';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

   
    <div className='todo-app'>
      <Login  />  
      <Footer />  
      <TodoForm />
    </div>
    </ApolloProvider>
  );
}

export default App;
