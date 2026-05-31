function LeadsTable({ leads, onStatusChange }) {
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
        {leads.map((lead) => (
          <tr key={lead.rowNumber}>
            <td>{lead.name}</td>
            <td>{lead.email}</td>
            <td>{lead.phone}</td>

            <td>
              <select
                value={lead.status}
                onChange={(e) =>
                  onStatusChange(
                    lead.rowNumber,
                    e.target.value
                  )
                }
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Converted">Converted</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LeadsTable;