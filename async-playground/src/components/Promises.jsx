import React, { useEffect, useState } from 'react';

function Promises() {
    const apiUrl = 'https://swapi.dev/api/people/2';

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);

        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const fetchedData = await response.json();
                setData(fetchedData);
                setLoading(false);
                resolve(fetchedData);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
                reject(error);
            }
        });
    };

    return (
        <div className='container'>
            <div>
                <h1>Promises</h1>
                <p>
                    <strong>What are Promises?</strong>
                    <br />
                    Promises provide a structured way to work with asynchronous code and represent the eventual completion or failure of a task.
                </p>

                <h1>Data Fetched:</h1>
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
                                {/* Add more properties here */}
                            </div>
                        </div>
                    )
                )}

                <p>
                    <strong>Code Example - Creating and Using Promises with API Call:</strong>
                </p>
                <pre>
                    {`
const fetchData = () => {
    setLoading(true);

    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const fetchedData = await response.json();
            setData(fetchedData);
            setLoading(false);
            resolve(fetchedData);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
            reject(error);
        }
    });
};
`}
                </pre>
            </div>

        </div>
    );
}

export default Promises;
