import axios from "axios";

const axiosConfig = {
  method: "post",
  url: "http://localhost:3000/api",
};

export const registerUser=(value)=>{
    axios({
      ...axiosConfig,
      data: value,
      url: axiosConfig.url + "/registerUser",
    })
      .then((res) =>
        alert(`Hi ${res.data.name},\nYou are successfully Registered... `)
      )
      .catch((err) => alert("Error: " + err.message));
}

export const fetchDataFromDb =async ()=>{
    try{
        const data=await axios({
         method: "get",
         url: axiosConfig.url + "/fetchAllData",
       });
       return data;
    }catch(err){
        alert("Error: " + err.message);
    }

}
    