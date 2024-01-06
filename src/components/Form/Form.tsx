import React, { FormEvent, useRef, useState } from "react";

const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: " ", age: 0 };

  //   const handleSubmit = (event: FormEvent) => {
  //     //prevent the form to be send to the server
  //     event.preventDefault();
  //     if (nameRef.current !== null) {
  //       person.name = nameRef.current.value;
  //     }
  //     if (ageRef.current !== null) {
  //       person.age = parseInt(ageRef.current.value);
  //     }
  //     console.log(person);
  //   };

  const [person, setPerson] = useState({
    name: " ",
    age: " ",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    //Il faut mettre ref ={nameRef} dans la balise input pour utiliser la méthode des ref
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="from-label">
          Name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value })
          }
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
