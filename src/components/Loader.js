import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";

const Loader = () => {
  return (
    <MDBSpinner role='status'>
      <span className='visually-hidden'>Loading...</span>
    </MDBSpinner>
  );
};

export default Loader;
