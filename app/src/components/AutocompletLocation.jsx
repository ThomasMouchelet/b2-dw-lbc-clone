import React, { useState, useRef, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const AutocompleteInput = () => {
    const apiKey = "AIzaSyBhMEe_FExXVMxyFWE_lPKul3Yo2Cy5tgc"
    const [address, setAddress] = useState('');
    const autocompleteRef = useRef(null);

    useEffect(() => {
        console.log('useEffect');
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=fr`
        document.body.appendChild(script)
        script.async = true
        script.defer = true
        script.onload = () => {
            handleScriptLoad()
        }
    }, [])

  const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
    console.log("place: ", place);
    setAddress(place.formatted_address);
  }

  const handleInputChange = (event) => {
    setAddress(event.target.value);
  }

  const handleScriptLoad = () => {
    console.log('handleScriptLoad');
    
    autocompleteRef.current = new window.google.maps.places.Autocomplete(
      document.getElementById('autocomplete-input')
    );
    
    autocompleteRef.current.addListener('place_changed', handlePlaceSelect);
  }

  return (
    <>
      <Autocomplete        
        id="autocomplete-input"
        options={[]}
        value={address}
        onChange={handleInputChange}
        ref={autocompleteRef}
        renderInput={(params) => <TextField {...params} label="Enter an address" />}
      />
      {/* <input
        id="autocomplete-input"
        type="text"
        placeholder="Enter an address"
        value={address}
        onChange={handleInputChange}
        ref={autocompleteRef}
      /> */}
    </>
  );
};

export default AutocompleteInput;
