import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';
// import QuoteDAppABI from './QuoteDApp.json'; // Import the ABI

// const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your contract address
// const provider = new ethers.providers.Web3Provider(window.ethereum);
// const signer = provider.getSigner();
// const contract = new ethers.Contract(contractAddress, QuoteDAppABI.abi, signer);

// function App() {
//   const [username, setUsername] = useState('');
//   const [content, setContent] = useState('');
//   const [quotes, setQuotes] = useState([]);

//   useEffect(() => {
//     loadQuotes();
//   }, []);

//   const loadQuotes = async () => {
//     const count = await contract.getQuoteCount();
//     const quotesArray = [];

//     for (let i = 0; i < count; i++) {
//       const quote = await contract.getQuote(i);
//       quotesArray.push(quote);
//     }

//     setQuotes(quotesArray);
//   };

//   const addQuote = async (e) => {
//     e.preventDefault();
//     await contract.addQuote(username, content);
//     loadQuotes();
//   };

//   return (
//     <div>
//       <h1>Quote DApp</h1>
//       <form onSubmit={addQuote}>
//         <input
//           type="text"
//           placeholder="Your Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Your Favorite Quote"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           required
//         />
//         <button type="submit">Submit Quote</button>
//       </form>
//       <h2>All Quotes</h2>
//       {quotes.map((quote, index) => (
//         <p key={index}>{quote[0]}: "{quote[1]}"</p>
//       ))}
//     </div>
//   );
// }

// export default App;
