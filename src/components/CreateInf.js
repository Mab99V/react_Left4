
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';



const CREATE_INF_MUTATION = gql`
  mutation createInfected(
    $name: String ,
    $ability: String
    
  ) {
    createInfected( name: $name, ability: $ability) {
      id
      name
      ability
      
    }
  }
`;




const CreateInf = () => {
  
  const [formState, setFormState] = useState({
    name: '',
    ability: ''
  
  });

  const navigate = useNavigate();

  const [createInf] = useMutation(CREATE_INF_MUTATION, {
    variables: {
      ability: formState.ability,
      name: formState.name
    },
    onCompleted: () => navigate('/')
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col md-4">
          <br/>
          <br/>
           <form onSubmit={(e) => { e.preventDefault(); createInf();}}>
              <div className="row">
                <div className="col md-4">
                  <p>
                    Enter ability infected
                  </p>
                   < input className="mb2 text-center" value={formState.ability} onChange={(e) => setFormState({
                     ...formState, ability: e.target.value })} type="text" placeholder="Enter ability" />
                </div>
              </div>
              <br/>
              <br/>
              <div className="row">
                <div className="col md-4">
                  <p>
                    Enter name infected
                  </p>
                  < input className="mb2 text-center" value={formState.name} onChange={(e) => setFormState({
                    ...formState,
                    name:e.target.value})} type="text" placeholder="Enter name" />
                </div>
              </div>
              <br/>
              <br/>
              <div className="row">
                <div className="col md-4">
                 
                    <div className="d-grid gap-2">
                        
                        <button className="btn btn-success"   type="submit">Add Infected</button>
                    </div>
                 
                </div>
              </div>
                         
           
           </form>

        </div>
      </div>
    <div>
  </div>
   </div>
  );
};

export default CreateInf;