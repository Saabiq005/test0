import React, { useEffect } from 'react';
 
function App() {
    useEffect(() => {
        // Set up the event listener for receiving the token
        const allowedOrigin = 'https://main.d3o0sz1w3isrk1.amplifyapp.com';
 
        const receiveMessage = (event) => {
            if (event.origin !== allowedOrigin) {
                console.warn('Origin not allowed:', event.origin);
                return;
            }
 
            const { jwtToken } = event.data;
            if (jwtToken) {
                console.log('Received JWT Token:', jwtToken);
                // Store the token as needed, e.g., in a cookie or local storage
            } else {
                console.warn('No token found in message data');
            }
        };
 
        window.addEventListener('message', receiveMessage);
 
        // Clean up the event listener on unmount
        return () => window.removeEventListener('message', receiveMessage);
    }, []);
 
    return (
<div>
<h1>Welcome to the Receiving App</h1>
</div>
    );
}
 
export default App;
