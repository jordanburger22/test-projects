import axios from 'axios';
import { useEffect, useState } from 'react';

function PromiseAll() {
    const urls = [
        'https://swapi.dev/api/people/1',
        'https://swapi.dev/api/people/2',
        'https://swapi.dev/api/people/3',
    ];

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const responses = await Promise.all(urls.map((url) => axios.get(url)));
            const fetchedData = responses.map((response) => response.data);
            setData(fetchedData);
            setLoading(false); // Data received, set loading to false
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false); // Error occurred, set loading to false
        }
    };

    return (
        <div className='container'>
            <div>
                <h1>Promise.all</h1>
                <p>
                    <strong>What is `Promise.all`?</strong>
                    <br />
                    `Promise.all` is used to work with multiple promises concurrently. It
                    takes an array of promises and returns a new promise that resolves
                    when all input promises succeed or rejects if any of them fail.
                </p>

                <h1>Data Fetched from URLs:</h1>
                <button onClick={fetchData}>Fetch Data</button>
                {loading ? (
                    <p className='loading'>Loading data...</p>
                ) : (
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>
                                <div className='data-section'>
                                    <h2>Useful Information:</h2>
                                    <p>Name: {item.name}</p>
                                    <p>Height: {item.height}</p>
                                    <p>Mass: {item.mass}</p>
                                    <p>Hair Color: {item.hair_color}</p>
                                    <p>Skin Color: {item.skin_color}</p>
                                    <p>Eye Color: {item.eye_color}</p>
                                    {/* Add more properties here */}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <p>
                    <strong>Code Example - Using `Promise.all` with Multiple API Calls:</strong>
                </p>
                <pre>
                    {`
const axios = require('axios');

const urls = [
  'https://swapi.dev/api/people/1',
  'https://swapi.dev/api/people/2',
  'https://swapi.dev/api/people/3',
];

const fetchAllData = async (urls) => {
  try {
    const responses = await Promise.all(urls.map((url) => axios.get(url)));
    const data = responses.map((response) => response.data);
    console.log("All Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchAllData(urls);
`}
                </pre>
            </div>

        </div>
    );
}

export default PromiseAll;


