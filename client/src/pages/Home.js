import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_LIST } from '../utils/queries';

const Home = () => {
  const { data } = useQuery(QUERY_LIST, {
    fetchPolicy: "no-cache"
  });

  return (
    <div className="card bg-white card-rounded m-5 w-60">
      <div className="card-header bg-secondary text-center text-light">
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