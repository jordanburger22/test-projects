import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Async from './components/Async';
import Callbacks from './components/Callbacks';
import PromiseAll from './components/PromiseAll';
import Promises from './components/Promises';

function App() {
  return (
    <Router>
      <div>
        {/* Header block with links */}
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/callbacks">Callbacks</Link>
              </li>
              <li>
                <Link to="/promises">Promises</Link>
              </li>
              <li>
                <Link to="/async">Async/Await</Link>
              </li>
              <li>
                <Link to="/promiseall">Promise.all</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          {/* Route for Callbacks component */}
          <Route path="/callbacks" element={<Callbacks />} />

          {/* Route for Promises component */}
          <Route path="/promises" element={<Promises />} />

          {/* Route for Async component */}
          <Route path="/async" element={<Async />} />

          {/* Route for PromiseAll component */}
          <Route path="/promiseall" element={<PromiseAll />} />

          {/* Default route, you can set a home or landing page here */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className='container'>
      <h1>Differences Between Async/await, Promises, and Callbacks</h1>

      <h2>Callbacks:</h2>
      <p>
        <strong>What Are Callbacks?</strong> Callbacks are functions that are passed as arguments to other functions and are executed after the completion of that function. They are a way to handle asynchronous operations in JavaScript.
      </p>
      <p>
        <strong>How They Work:</strong> You define a function (the callback) that will be executed when an asynchronous task is complete. You pass this callback function as an argument to the function that initiates the asynchronous task. When the asynchronous task is done, the callback function is invoked.
      </p>
      <p>
        <strong>Use Cases:</strong> Callbacks are commonly used in scenarios like handling file I/O, making HTTP requests, or responding to user interactions. They are especially prevalent in Node.js and browser JavaScript for handling non-blocking operations.
      </p>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Simiplicity in basic cases.</li>
        <li>Good for handling one-off asynchronous tasks.</li>
        <li>Compatible with older browsers.</li>
      </ul>
      <p>
        <strong>Cons:</strong>
      </p>
      <ul>
        <li>Callback hell (nested callbacks) can lead to complex and hard-to-read code.</li>
        <li>Error handling can become cumbersome when multiple callbacks are involved.</li>
        <li>Lack of structured flow control.</li>
      </ul>

      <h2>Promises:</h2>
      <p>
        <strong>What Are Promises?</strong> Promises provide a structured way to handle asynchronous operations in JavaScript. A Promise represents a future value, which can be either resolved with a value or rejected with an error.
      </p>
      <p>
        <strong>How They Work:</strong> You create a Promise object with two callbacks: `resolve` and `reject`. The asynchronous task is initiated, and when it completes successfully, you call `resolve` with the result. If it fails, you call `reject` with an error. You can use `.then()` to handle the resolved value and `.catch()` to handle errors.
      </p>
      <p>
        <strong>Use Cases:</strong> Promises are widely used for HTTP requests, database operations, and any task that may take some time to complete. They are a more structured alternative to callbacks and are especially popular for handling multiple asynchronous tasks in sequence or parallel.
      </p>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Improved readability and maintainability compared to callbacks.</li>
        <li>Easy error handling with `.catch()`.</li>
        <li>Support for chaining multiple asynchronous operations with `.then()`.</li>
      </ul>
      <p>
        <strong>Cons:</strong>
      </p>
      <ul>
        <li>Slightly more verbose syntax compared to async/await.</li>
        <li>Requires familiarity with Promise concepts.</li>
      </ul>

      <h2>Async/Await:</h2>
      <p>
        <strong>What Is Async/Await?</strong> Async/await is a more recent addition to JavaScript, introduced in ECMAScript 2017 (ES8). It provides a way to write asynchronous code in a more synchronous and readable manner.
      </p>
      <p>
        <strong>How They Work:</strong> You declare a function as `async` to indicate that it contains asynchronous operations. Inside the async function, you can use the `await` keyword before a Promise to pause execution until the Promise is resolved. Error handling can be done using `try...catch`.
      </p>
      <p>
        <strong>Use Cases:</strong> Async/await is the preferred choice for handling asynchronous tasks in modern JavaScript. It's especially useful when dealing with multiple asynchronous operations that need to be coordinated or when you want to make asynchronous code more readable.
      </p>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Provides a linear and synchronous-like code structure.</li>
        <li>Improved error handling with `try...catch`.</li>
        <li>Easier to understand and debug compared to callbacks and Promises.</li>
      </ul>
      <p>
        <strong>Cons:</strong>
      </p>
      <ul>
        <li>Not supported in older JavaScript environments (requires modern ES6+ support).</li>
        <li>May require transpilation for compatibility with older browsers.</li>
      </ul>
    </div>
  );
}


export default App;

