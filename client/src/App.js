import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoForm from './components/TodoForm';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Login from './pages/Login';
import Home from './pages/Home';
import TodoList from './components/TodoList';
// import SignupForm from './components/SignupForm';
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<Login />}
            />
            <Route 
              path="/home" 
              element={<Home />}
            />
             <Route 
              path="/todo" 
              element={< TodoList />}
            />
            
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

// function App() {
//   return (
//     <ApolloProvider client={client}>

   
//     <div className='todo-app'>
//       <Login  />    
//       <Home />
//          </div>
         
         
//     </ApolloProvider>
