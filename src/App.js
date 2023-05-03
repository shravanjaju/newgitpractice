import React from "react";

export default function App(){
function sendOTP(mobileNumber) {
  const apiUrl = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP';
  const OTP = generateOTP();
  const data = { mobileNumber: mobileNumber, OTP: OTP };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      console.log('OTP sent to', mobileNumber);
    } else {
      console.log('OTP not sent');
    }
  })
  .catch(error => {
    console.error('Error sending OTP:', error);
  });
}
return(
  <div>
    <button onClick={generateOTP}>Generate Otp</button>
  </div>
)}