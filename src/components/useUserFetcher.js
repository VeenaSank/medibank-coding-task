import { useState, useEffect, useCallback } from "react";

const API_URL =
  "https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json";

export const useUserFetcher = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
// useCallback hook  and depedency on useEffect hook exists to remove ESLint warning
  const fetchData = useCallback(() => {
    setLoading(true);
    // This setTimeout exists to show the loading indicator
    setTimeout(
      async () =>
        await fetch(API_URL)
          .then((res) => (res.text !== "" ? res.json() : {}))
          .then((data) => {
            successFetchHandler(data);
          })
          .catch((err) =>
            console.log("Error in fetching", failFetchHandler(err))
          ),

      2000
    );
  }, []);

  let successFetchHandler = (data) => {
    setLoading(false);
    setUserData(data);
  };

  let failFetchHandler = (error) => setError(error);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [loading, userData, error];
};
