// App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
 
function App() {
  // Handle redirect to the other application in the same tab
  const handleRedirect = () => {
    // Extract the token from the current URL
    const urlParams = new URLSearchParams(window.location.hash.slice(1));
    const token = urlParams.get('id_token'); // Assuming 'id_token' contains the token
 
    
      // Redirect in the same tab with the token appended to the URL
      window.location.href = `https://master.d3tpy1v70it606.amplifyapp.com`;
document.cookie = "saabiq=mass; path=/; domain=.amplifyapp.com; SameSite=None; Secure";

     
  };
 
  // Handle sign out
  const handleSignOut = () => {
    const domain = 'impacttest.auth.us-west-2.amazoncognito.com';
    const clientId = '5c132j92n2vnqe7icilvp6gndh';
    const logoutUrl = `https://${domain}/logout?client_id=${clientId}&logout_uri=https://www.google.com`;
 
    window.location.href = logoutUrl;
  };
 
  return (
<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1>Welcome to the Application!</h1>
<button onClick={handleRedirect} style={{ margin: '20px' }}>
          Go to Saabiq Shop
</button>
<button onClick={handleSignOut} style={{ backgroundColor: 'red', color: 'white' }}>
          Sign Out
</button>
</header>
</div>
  );
}
 
export default App;
