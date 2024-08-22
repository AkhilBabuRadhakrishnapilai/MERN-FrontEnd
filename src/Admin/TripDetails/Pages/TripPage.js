import React from 'react';
import Button from 'react-bootstrap/Button';

const TripPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto">
          <Button variant='primary' >
            Add Trip
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TripPage
