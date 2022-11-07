import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PersonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //console.log(id);

  // const {state: person} = useLocation();
  // console.log(person);

  const [person, setPerson] = useState("");

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(person);

  return (
    <div className="container text-center">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img src={person?.avatar} className="rounded" alt="" />
      <p>{person?.email}</p>
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
