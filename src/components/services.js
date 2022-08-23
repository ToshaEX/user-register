import axios from "axios";

const axiosConfig = {
  method: "post",
  url: "http://localhost:3000/api",
};

export const registerUser = async (value) => {
  axios({
    ...axiosConfig,
    data: value,
    url: axiosConfig.url + "/registerUser",
  })
    .then((res) => {
      const { name } = res.data;
      alert(`Hi ${name}, \n You are successfully registered...`);
    })
    .catch((err) => alert("Error: " + err.message));
};

export const fetchDataFromDb = async () => {
  try {
    const data = await axios({
      method: "get",
      url: axiosConfig.url + "/fetchAllData",
    });
    return data;
  } catch (err) {
    alert("Error: " + err.message);
  }
};
