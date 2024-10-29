// AuthCallback.js
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom'; // Optional if using React Router

const AuthCallback = () => {
  const navigate = useNavigate(); // Use only if you are using React Router

  useEffect(() => {
    // Extract the ID token from the URL hash
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const idToken = urlParams.get('id_token');

    if (!idToken) {
      alert('Authentication failed. No ID token found.');
      return;
    }

    try {
      // Decode the token
      const decodedToken = jwt_decode(idToken);

      // Save the token in a cookie
      Cookies.set('cognito_id_token', idToken, { secure: true });

      // Check the user's group and redirect accordingly
      const userGroups = decodedToken['cognito:groups'] || [];

      if (userGroups.includes('HomeUser')) {
        window.location.href = 'https://saabiq.neocities.org/Portofolio/css/';
      } else if (userGroups.includes('InspectorUser')) {
        window.location.href = 'https://saabiqshop.netlify.app/';
      } else if (userGroups.includes('DGPUser')) {
        window.location.href = 'https://stellular-sprinkles-fc426d.netlify.app/';
      } else {
        alert('Unauthorized: No valid group found.');
      }
    } catch (error) {
      alert('Error decoding token.');
      console.error(error);
    }
  }, [navigate]);

  return (
    <div>
      <h2>Redirecting...</h2>
    </div>
  );
};

export default AuthCallback;
