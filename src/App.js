import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Jobs from './Jobs';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);
  return (
    <Container className='my-4'>
      <h1 className='mb-4'>Github Jobs</h1>
      {loading && <h1>Loading</h1>}
      {error && <h1>Try refreshing</h1>}
      <h1>
        {jobs.map((job) => {
          return <Jobs key={job.id} job={job}></Jobs>;
        })}
      </h1>
    </Container>
  );
}

export default App;
