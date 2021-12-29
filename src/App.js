// NPM Imports
import axios from 'axios';
import { useState, useEffect } from 'react';

// Material UI Imports
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

// My Modules
import KitList from './components/KitList';

// CSS Imports
import './App.css';

// Logo import
import BiobotLogo from './logo.svg';

function App() {

  // State Variables
  const [kits, setKits] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState(null);

  // Autocomplete filtering options
  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    limit: 10,
  });

  // On page load, get all kits
  useEffect( () => {
    getAllKits();
  }, []);

  // Search Function
  useEffect( () => {

    if (selected === null) {
      getAllKits();
    } else {
      searchForKit();
    }
    
  }, [selected]);


  const getAllKits = () => {

    // Use axios to run a get request
    axios.get('http://localhost:3001/kits').then( (res) => {

      // Update the state with the returned data
      setKits(res.data);
      setSuggestions(res.data);

    }).catch( (err) => {

      // Log the error
      console.log(err);

    }); 
  }

  const searchForKit = () => {

    // Use axios to run a get request with the specified search string
    axios.get(`http://localhost:3001/kits/search/${selected.label_id}`).then( (res) => {

      // Update the state with the returned data
      setKits(res.data);

    }).catch( (err) => {

      // Log the error
      console.log(err);

    });
  }

  return (
    <div>
        <div className='header'>
          {/* <h2>Biobot Take Home Exercise</h2> */}
          <img src={BiobotLogo} alt='Biobot Analytics' />
        </div>

      <div className="container">
        <div className='row jc-center'>
          <Autocomplete
            disablePortal
            id="kits"
            options={suggestions}
            sx={{ width: 300 }}
            renderInput={ (params) => <TextField {...params} label="Enter Kit Label ID" /> }
            getOptionLabel={ (kit) => kit.label_id }
            isOptionEqualToValue={ (option, value) => option.id === value.id }

            value={selected}
            onChange={(event, newValue) => {
              setSelected(newValue);
            }}

            filterOptions={filterOptions}
          />
        </div>

        <hr />

        <KitList kits={kits} />

      </div>
    </div>
  );
}

export default App;
