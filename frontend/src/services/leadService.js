import axios from "axios";

const API_URL = "http://localhost:5000/api/leads";

export const getLeads = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
export const updateLeadStatus = async (
  rowNumber,
  status
) => {
  await axios.put(
    `http://localhost:5000/api/leads/${rowNumber}`,
    { status }
  );
};