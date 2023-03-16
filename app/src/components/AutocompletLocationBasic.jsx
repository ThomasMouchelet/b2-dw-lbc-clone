import React, { useState, useRef, useEffect } from 'react';

const AutocompletLocationBasic = () => {
  const [query, setQuery] = useState('');
  const [predictions, setPredictions] = useState([]);
  const autoCompleteService = useRef(null);
  const YOUR_API_KEY = "AIzaSyBhMEe_FExXVMxyFWE_lPKul3Yo2Cy5tgc"

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
    setQuery(event.target.value);
    if (autoCompleteService.current) {
      autoCompleteService.current.getPlacePredictions(
        {
          input: event.target.value,
        },
        handlePredictions
      );
    }
  };

  const handlePredictions = (results, status) => {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      setPredictions(results);
    }
  };

  const handlePredictionClick = (prediction) => {
    setQuery(prediction.description);
    setPredictions([]);
  };

  const renderPredictions = () => {
    if (predictions.length === 0) {
      return null;
    }

    return (
      <ul>
        {predictions.map((prediction) => (
          <li key={prediction.place_id} onClick={() => handlePredictionClick(prediction)}>
            {prediction.description}
          </li>
        ))}
      </ul>
    );
  };

  const handleScriptLoad = () => {
    autoCompleteService.current = new window.google.maps.places.AutocompleteService();
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      {renderPredictions()}
    </div>
  );
};

export default AutocompletLocationBasic;
