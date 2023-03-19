import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const DetailsCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharacter(data.result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="http://cdn.shopify.com/s/files/1/0190/5436/2724/articles/star_wars_personajes_1024x1024.jpg?v=1616087475"
              width={500}
            />
          </div>
          <div className="col">
            <h1>{character?.properties?.name}</h1>
            <p>{character?.description}</p>
          </div>
        </div>
      </div>
      <table className="table my-5 lg">
        <thead>
          <tr>
            <th scope="col">Heigh</th>
            <th scope="col">Mass</th>
            <th scope="col">Hair Color</th>
            <th scope="col">Skin Color</th>
            <th scope="col">Eye Color</th>
            <th scope="col">Birth Year</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>            
            <td>{character?.properties?.height}</td>
            <td>{character?.properties?.mass}</td>
            <td>{character?.properties?.hair_color}</td>
            <td>{character?.properties?.skin_color}</td>
            <td>{character?.properties?.eye_color}</td>
            <td>{character?.properties?.birth_year}</td>
            <td>{character?.properties?.gender}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};