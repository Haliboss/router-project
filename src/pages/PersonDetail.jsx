import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const PersonDetail = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id)

  const {state: person} = useLocation();
  console.log(person);
  
  return (
    <div className="container text-center">
      <h3>{person.first_name}</h3>
      <img src={person.avatar} className="rounded" alt="img" />
      <p>{person.email}</p>
      <div>
        <button className="btn btn-success me-2" onClick={() => navigate("/")}>
          Go Home
        </button>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
