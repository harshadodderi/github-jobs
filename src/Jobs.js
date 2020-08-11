import React, { useState } from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
function Jobs({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <Card className='mb-2'>
      <Card.Body>
        <div className='d-flex justify-content-between'>
          <div>
            <Card.Title>
              {job.title} -
              <span className='text-muted font-weight-light'>
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className='text-muted mb-2'>
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <h5>
              <Badge variant='secondary' className='mr-2'>
                {job.type}
              </Badge>
              <Badge variant='secondary'>{job.location}</Badge>
              <div style={{ wordBreak: 'break-all' }} className='mt-2'>
                <ReactMarkdown source={job.how_to_apply} />
              </div>
            </h5>
          </div>
          <img
            className='d-none d-md-block'
            height='50'
            src={job.company_logo}
            alt={job.company}
          />
        </div>
        <Card.Text>
          <Button variant='primary' onClick={() => setOpen((ele) => !ele)}>
            {open ? 'Hide Details' : 'View Details'}
          </Button>
          <Collapse in={open}>
            <div className='mt-4'>
              <h6>
                <ReactMarkdown source={job.description} />
              </h6>
            </div>
          </Collapse>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Jobs;
