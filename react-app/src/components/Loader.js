import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

function Loader() {
  return (
    <div className="h-100 loader d-flex justify-content-center align-items-center">
        <FontAwesomeIcon color="darkgray" size="3x" className="fa-spin" icon={faCog} />
    </div>
  );
}

export default Loader;
