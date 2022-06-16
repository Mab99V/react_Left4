import React from 'react';
import Infected from './Infected';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    infected {
       id
       name
       ability
    }
  }
`
;


const List = () => {

  const { data } = useQuery(FEED_QUERY);

    return (
      <div className="container">
        <div className="row">
          <div className="col md-4 text-center">
            <h1>
              Infected
            </h1>
          </div>
        </div>
       <div className="row">
          <div className="col md-4">
          
           {data && ( <> {data.infected.map((infected) => ( <Infected key={infected.id} infected={infected} />  ))} </> )}
         
          </div>
    </div> 
        
        <br/>
        <br/>

        <Link to="/create">
             <div className="d-grid gap-2">
             <img src="./cr.gif"   className="d-block w-25" alt=""/> 
               <button className="btn btn-danger" type="button">To return</button>
             </div>
          </Link>
          
        


      
      </div>

   );
};

export default List;