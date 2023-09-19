import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Async() {
    const apiUrl = 'https://swapi.dev/api/people/2';

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(apiUrl);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    return (
        <div className='container'>
            <div>
                <h1>Async/Await</h1>
                <p>
                    Async/await allows you to write asynchronous code in a linear,
                    synchronous-like manner. You declare a function as <code>async</code>{' '}
                    to indicate it contains asynchronous operations. You can use the{' '}
                    <code>await</code> keyword inside this function to pause execution
                    until a promise is resolved.
                </p>
                <h1>Async Component</h1>
                <button onClick={fetchData}>Fetch Data</button>
                {loading ? (
                    <p className='loading'>Loading data...</p>
                ) : (
                    data && (
                        <div className='data-section'>
                            <h2>Useful Information:</h2>
                            <div>
                                <p>Name: {data.name}</p>
                                <p>Height: {data.height}</p>
                                <p>Mass: {data.mass}</p>
                                <p>Hair Color: {data.hair_color}</p>
                                <p>Skin Color: {data.skin_color}</p>
                                <p>Eye Color: {data.eye_color}</p>
                                {/* You can add more properties here */}
                            </div>
                        </div>
                    )
                )}
                <p>
                    <strong>Code Example - Using Async/Await with API Call:</strong>
                </p>
                <pre>
                    {`
import axios from 'axios';

async function fetchDataWithAsyncAwait(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const apiUrl = 'https://swapi.dev/api/people/2';
(async () => {
  try {
    const data = await fetchDataWithAsyncAwait(apiUrl);
    console.log("Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();
`}
                </pre>
            </div>
        </div>
    );
}

export default Async;
