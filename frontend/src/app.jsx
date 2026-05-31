import { useEffect, useState } from "react";
import {
  getLeads,
  updateLeadStatus,
} from "./services/leadService";
import LeadsTable from "./components/LeadsTable";

function App() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const data = await getLeads();
      setLeads(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStatusChange = async (
  rowNumber,
  status
) => {
  try {
    await updateLeadStatus(
      rowNumber,
      status
    );

    fetchLeads();
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lead Management Dashboard</h1>

      <LeadsTable leads={leads} onStatusChange={handleStatusChange} />
    </div>
  );
}

export default App;