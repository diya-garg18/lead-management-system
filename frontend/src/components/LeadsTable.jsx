function LeadsTable({ leads }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {leads.map((lead, index) => (
          <tr key={index}>
            <td>{lead.name}</td>
            <td>{lead.email}</td>
            <td>{lead.phone}</td>
            <td>{lead.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LeadsTable;