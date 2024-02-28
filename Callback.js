function fetchDataWithCallback(successCallback, errorCallback) {
  // Replace 'https://api.example.com/data' with your actual API endpoint
  fetch('https://api.example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      successCallback(data); // Call the success callback with the fetched data
    })
    .catch(error => {
      errorCallback(error); // Call the error callback with an error object
    });
}

// Using the callback to fetch data
fetchDataWithCallback(
  function (fetchedData) {
    console.log('Fetched data:', fetchedData);
  },
  function (error) {
    console.error('Error during data fetch:', error);
  }
);
