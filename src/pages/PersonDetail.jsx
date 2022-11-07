import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const PersonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //console.log(id);

  // const {state: person} = useLocation();
  // console.log(person);

  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(person);

  if (error) {
    return <NotFound />;
  } else {
    return (
      <div className="container text-center">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <img src={person?.avatar} className="rounded" alt="" />
        <p>{person?.email}</p>
        <div>
          <button
            className="btn btn-success me-2"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
          <button className="btn btn-warning" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export default PersonDetail;
