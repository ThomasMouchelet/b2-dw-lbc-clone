import React, { useState, useRef, useEffect } from 'react';
import {TextField, Autocomplete} from "@mui/material";

const AutocompletLocationMui = () => {
  const [query, setQuery] = useState({description: ""});
  const [predictions, setPredictions] = useState([]);
  const autoCompleteService = useRef(null);
  const YOUR_API_KEY = "AIzaSyBhMEe_FExXVMxyFWE_lPKul3Yo2Cy5tgc" 

  const handleScriptLoad = () => {
    autoCompleteService.current = new window.google.maps.places.AutocompleteService();
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      handleScriptLoad()
    }
    document.body.appendChild(script);
}, [])

  const handleInputChange = (event) => {
    if (event?.target) {
        setQuery({
            description: event.target.value,
        });
    }
    if (autoCompleteService.current) {
        if (event?.target) {
          autoCompleteService.current.getPlacePredictions(
            {
              input: event.target.value,
            },
            handlePredictions
          );
        }
    }
  };

  const handlePredictions = (results, status) => {
    console.log("handlePredictions")
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      setPredictions([...results]);
    }
  };

  const handlePredictionClick = (prediction) => {
    console.log("handlePredictionClick : ", prediction)
    setQuery({...prediction});
    setPredictions([]);
  };

  const renderPredictions = () => {
    return (
      <Autocomplete
      freeSolo
        value={query}
        options={predictions}
        onInputChange={handleInputChange}
        getOptionLabel={(option) => option.description}
        renderOption={(props, option) => (
          <li key={props.id} onClick={() => handlePredictionClick(option)}>
            {option.description}
          </li>
        )}
        onClose={() => setPredictions([])}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter a location"
            variant="outlined"
            fullWidth
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    );
  };

  return (
    <div>
      {renderPredictions()}
    </div>
  );
};

export default AutocompletLocationMui;
