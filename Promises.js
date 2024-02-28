function fetchData() {
  return new Promise((resolve, reject) => {
    // Replace 'https://api.example.com/data' with your actual API endpoint
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        resolve(data); // Resolve with the fetched data
      })
      .catch(error => {
        reject(error); // Reject with an error object
      });
  });
}

// Using the promise to fetch data
fetchData()
  .then(fetchedData => {
    console.log('Fetched data:', fetchedData);
  })
  .catch(error => {
    console.error('Error during data fetch:', error);
  });
