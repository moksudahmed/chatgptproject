import React, { useState } from 'react';

function Home() {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState('');

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();

    // Make a POST request to the server with the form data
    fetch('https://chatgptserver-hugc.onrender.com/', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }  
    })
    .then(response => response.json())
    .then(data => {
      setData(data);
      console.log(data.bot);
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
        <textarea name="prompt" onChange={handleChange} placeholder="Prompt" />
        <button type="submit">Submit</button>
      </form>
      </div>
      <div>
      <h1 style={{backgroundColor: "lightblue"}}>Message</h1>
      <p style={{backgroundColor: "bigblue"}}>{data.bot}</p>
      </div>
        
    </div>
  );
}

export default Home;
