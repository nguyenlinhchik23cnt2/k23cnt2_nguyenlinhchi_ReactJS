import React, { useState } from 'react';
import axios from 'axios';

export default function NlcCreateMokapi() {
  // Initialize state
  const [nlcfullName, setNlcfullName] = useState('');
  const [nlcage, setNlcage] = useState('0');
  const [nlcActive, setNlcActive] = useState(true);

  // API POST URL
  const NlcCreateUsers = "https://67d919b500348dd3e2a977c6.mockapi.io/K23CNT2_nguyenlinhchi/nlc_users";

  // Handle submit
  const NlcHandlesubmit = (event) => {
    event.preventDefault();
    console.log("NlcActive:", nlcActive);
    
    // Prepare user data
    let NlcUewUser = { nlcfullName, nlcage, nlcActive };
    console.log(NlcUewUser);

    // Send data via API
    axios.post(NlcCreateUsers, NlcUewUser)
      .then((Nlc_response) => {
        console.log("User added successfully:", Nlc_response.data);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  }

  return (
    <div className='alert alert-info'>
      <h2>Thêm mới người dùng</h2>
      <hr />
      <form>
        <div className='mb-1'>
          <label htmlFor="nlcfullName">Full name</label>
          <input
            type='text'
            name="nlcfullName"
            id="nlcfullName"
            value={nlcfullName}
            onChange={(ev) => setNlcfullName(ev.target.value)}
          />
        </div>

        <div className='mb-1'>
          <label htmlFor="nlcage">Age</label>
          <input
            type='number'
            name="nlcage"
            id="nlcage"
            value={nlcage}
            onChange={(ev) => setNlcage(ev.target.value)}
          />
        </div>

        <div className='mb-1'>
          <label htmlFor="nlcActive">Active</label>
          <input
            type='radio'
            name="nlcActive"
            id="nlcActive_co"
            value={true}
            checked={nlcActive === true}
            onChange={() => setNlcActive(true)}
          />
          <label htmlFor="nlcActive_co">Có</label>
          
          <input
            type='radio'
            name="nlcActive"
            id="nlcActive_k"
            value={false}
            checked={nlcActive === false}
            onChange={() => setNlcActive(false)}
          />
          <label htmlFor="nlcActive_k">Không</label>
        </div>

        <button type="submit" onClick={NlcHandlesubmit}>Thêm</button>
      </form>
    </div>
  );
}
