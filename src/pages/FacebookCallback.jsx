import React, { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

const FacebookCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleFacebookCallback = async () => {
      const params = new URLSearchParams(location.search);
      const code = params.get('code'); // Get the `code` parameter from the callback URL
      console.log("code", code);

      if (code) {
        try {
          // Send the code to the backend to exchange for access token
          const response = await axios.get(`https://sassa-application-17d85ba3386f.herokuapp.com/facebook/callback/?code=${code}`);
          
          if (response.status === 200 && response.data.access_token) {
            // Login successful, handle token and ads data
            console.log("Login successful:", response.data);

            // Step 1: Prepare the data to navigate with
            const { access_token, ads_data } = response.data;
            console.log("access_token",access_token)
            console.log("ads_data",ads_data)

            localStorage.setItem('access_token', access_token);
            localStorage.setItem('account_id', ads_data[0].id);
            console.log(access_token,"account_id",ads_data[0].id)
            // Step 2: Navigate to the desired route with the data
            
            navigate('/Shopify_Login', {
              state: { access_token, ads_data } // Passing data via state
            });
          } else {
            console.log("Failed to log in with Facebook");
          }
        } catch (error) {
          console.error("Error during Facebook login callback:", error);
        }
      }
    };

    handleFacebookCallback();
  }, [location, navigate]);

  return (
    <div>
      <h2>Handling Facebook Login...</h2>
    </div>
  );
};

export default FacebookCallback;
