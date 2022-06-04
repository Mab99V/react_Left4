import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col md-4">
           <div className=" text-center" >
             <br/>
             <br/>
             <h2>
               Left4Dead
             </h2>
          </div>
          <br />
          <br />
          <Link to="/conocelos">
            <div className="d-grid gap-2">
              <button className="btn btn-outline-success" type="button">Added Infected</button>
            </div>
          </Link>
          <br/>
          <br/>
          <Link to="/create">
             <div className="d-grid gap-2">
               <button className="btn btn-outline-success" type="button">Created Infected</button>
             </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Header;