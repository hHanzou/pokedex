import axios from "axios";

const loginMethod = async (json: {}) => {
  try {
    const response = await axios.post("http://localhost:3000/auth/login", json);

    if (response.status !== 200) {
      const errorResponse = response.data;
      throw new Error(errorResponse.msg);
    }

    const data = response.data;
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
};

export default loginMethod;
