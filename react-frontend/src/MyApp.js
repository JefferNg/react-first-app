import React, {useState} from 'react';
import Table from "./Table";

function MyApp() {
  const [characters, setCharacters] = useState([
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Dee',
        job: 'Aspiring Actress',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
      // the rest of the data
    ]); 
    
    function removeOneCharacter (index) {
	    const updated = characters.filter((character, i) => {
	        return i !== index
	    });
	  setCharacters(updated);
	}
    
  return (
    <div className="container">
        <Table characterData={characters} 
	        removeCharacter={removeOneCharacter} />
    </div>  
)
}

export default MyApp;