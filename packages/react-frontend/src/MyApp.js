import React, {useState, useEffect} from 'react';
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  const [characters, setCharacters] = useState([]); 
    
    function removeOneCharacter (index) {
      const person = characters.find((character, i) => {return i === index});
	    const updated = characters.filter((character, i) => {
	        return i !== index
	    });
    deleteUser(person).then((res) => res.status == 204 ?
      res.json() : undefined)
      .then((json) => {
        if (json) setCharacters(updated);
      })
      .catch((error) => {
        console.log(error);
      })
	}
	
  	function updateList(person) {
    postUser(person).then((res) => res.status == 201 ?
      res.json() : undefined)
      .then((json) => {
        if (json) setCharacters([...characters, person]);
      })
      .catch((error) => {
        console.log(error);
      })
    
  }

  function fetchUsers() {
    const promise = fetch("http://localhost:8000/users");
    return promise;
  }

  function postUser(person) {
    const promise = fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
    return promise;
  }

  function deleteUser(person) {
    const promise = fetch(`http://localhost:8000/users/${person.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
    return promise;
  }

  useEffect(() => {
    fetchUsers().then((res) => res.json()).then((json) => setCharacters(json["users_list"]))
      .catch((error) => {console.log(error);});
  }, []);
    
  return (
  <div className="container">
    <Table characterData={characters} 
	    removeCharacter={removeOneCharacter} />
    <Form handleSubmit={updateList} />
    
  </div>
)
}

export default MyApp;