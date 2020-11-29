import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (baseUrl) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, [baseUrl]);

  return [data];
};

export const useManufacturer = (arr) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      let axiosFetch = async () => {
        let i = 0;
        while (i < arr.length) {
          let fetchData = await axios.get(
            "https://bad-api-assignment.reaktor.com/availability/" + arr[i]
          );
          if (fetchData.data.response === []) {
            fetchData = await axios.get(
              "https://bad-api-assignment.reaktor.com/availability/" + arr[i]
            );
          } else {
            setData((data) => data.concat(fetchData.data.response));
          }
          i++;
        }
      };
      axiosFetch();
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }, []);


  return [data];
};
