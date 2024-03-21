import axios from "axios";

const registerMethod = async (json: {}) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/register",
      json
    );

    if (response.status !== 200) {
      const errorResponse = response.data;
      throw new Error(errorResponse.msg);
    }

    console.log(response.data);
    window.location.replace("/login");
  } catch (err) {
    console.error("Error:", err);
  }
};

export default registerMethod;
