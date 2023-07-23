import { useState, useEffect} from "react";
import {IResults} from '../model/propertyModel';


// Define the type of the data returned by the API
// type Data = {
//   id: number;
//   name: string;
//   email: string;
// };

// Define the type of the custom hook
type UseFetch = {
  data: any;
  loading: boolean;
  error: Error | null;
};


// Define the custom hook
const useFetchData = (url: string, options: Object): UseFetch => {
  // Initialize the state variables
  const [data, setData] = useState<any | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Define the fetch function
  let isApiSubscribed = true;

  const fetchData = async () => {
    try {
      // Make the request and get the response
      const response = await fetch(url, options);

      // Check if the response is ok
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.status}`);
      }

      // Parse the response as JSON
      const data = await response.json();
      console.log(data);
      
      // Update the state variables
      setData(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      // Catch any error and update the state variables
      setData(null);
      setLoading(false);
      setError(error as Error);
    }
  };

  // Use useEffect to call the fetch function once when the component mounts
  useEffect(() => {
    if (isApiSubscribed){ 
        fetchData();
        console.log('Mounted')
    }
    return () => {
        isApiSubscribed = false;
        console.log("UnMounted");
    };
  }, [url]);


  // Return the state variables
  return { data, loading, error };
};



export default useFetchData;
