import axios from 'axios';
import { useEffect, useState } from 'react';

function Callbacks() {
    const apiUrl = 'https://swapi.dev/api/people/2';

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        axios
            .get(apiUrl)
            .then((response) => {
                // Data is fetched successfully
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                // Handle errors
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    };

    return (
        <div className='container'>
            <div>
                <h1>Callbacks</h1>
                <p>
                    Callbacks are a way to handle asynchronous tasks by providing a
                    function to be executed when the task is completed.
                </p>
                <p>
                    <strong>What is a Callback?</strong> In JavaScript, a callback is a
                    function that is passed as an argument to another function and is
                    executed after that function completes its task. It's a way to manage
                    asynchronous operations and ensure that a specific action is taken
                    once the asynchronous task is done.
                </p>

                <h1>Data Fetched with Callbacks:</h1>
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
                    <strong>Code Example - Using Callbacks with API Call:</strong>
                </p>
                <pre>
                    {`
const axios = require('axios');

function fetchDataWithCallback(url, callback) {
  axios
    .get(url)
    .then((response) => {
      // Data is fetched successfully
      callback(response.data);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error fetching data:", error);
    });
}

function handleData(data) {
  console.log("Data:", data);
}

const apiUrl = 'https://swapi.dev/api/people/2';
fetchDataWithCallback(apiUrl, handleData);
`}
                </pre>
            </div>

        </div>
    );
}

export default Callbacks;
