import axios from "axios";

export const summariseText = async (text) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE}/api/summarise`, { text });
    return res.data;
  } catch (err) {
    console.error("Error summarising:", err);
    throw err;
  }
};
