import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_LIST } from '../utils/queries';

// import {
//   Jumbotron,
//   Container,
//   CardColumns,
//   Card,
//   Button,
// } from 'react-bootstrap';

// import Auth from "../utils/auth";
// import {LoginForm} from "../components/LoginForm";

const Home = () => {
  const { loading, data, } = useQuery(QUERY_LIST, {
    fetchPolicy: "no-cache"
  });

  const matchupList = data?.name || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to To Do List App!</h1>
      </div>
     
      <div className="card-footer text-center m-3">
        <h2>Ready to create Your To Do List?</h2>
        <Link to="/todo">
          <button className="btn btn-lg btn-danger">Create To Do list!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;