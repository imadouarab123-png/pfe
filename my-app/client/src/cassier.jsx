import { useState, useEffect } from "react";
import "./Cassier.css";

function Cassier() {
  const [payments, setPayments] = useState([]);

  // مثال بيانات، في المشروع الواقعي تستقبلهم من backend
  useEffect(() => {
    const sampleData = [
      { id: 1, name: "Yanis Amrani", customer_id: "C123", BL: "BL001", transaction_number: "TX1001", amount: 120, date: "2026-03-28", status: "approved" },
      { id: 2, name: "Sara Ahmed", customer_id: "C124", BL: "BL002", transaction_number: "TX1002", amount: 250, date: "2026-03-28", status: "pending" },
      { id: 3, name: "Ali Bensaid", customer_id: "C125", BL: "BL003", transaction_number: "TX1003", amount: 75, date: "2026-03-28", status: "approved" },
      { id: 4, name: "Nora Khelifi", customer_id: "C126", BL: "BL004", transaction_number: "TX1004", amount: 300, date: "2026-03-28", status: "pending" },
    ];
    setPayments(sampleData);
  }, []);

  // Get CSS class for status
  const getStatusClass = (status) => {
    if (status === "approved") return "status-approved";
    if (status === "pending") return "status-pending";
    return "";
  };

  return (
    <div id="cassier-dashboard">
      <header id="cassier-header">
        <h1>Cassier Dashboard</h1>
      </header>

      <div id="cassier-table-container">
        <table id="cassier-table">
          <thead>
            <tr>
              <th>Row ID</th>
              <th>Name</th>
              <th>Customer ID</th>
              <th>BL</th>
              <th>Transaction</th>
              <th>Amount (€)</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.length > 0 ? (
              payments.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.customer_id}</td>
                  <td>{row.BL}</td>
                  <td>{row.transaction_number}</td>
                  <td>€{row.amount}</td>
                  <td>{row.date}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="empty-message">
                  No payments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
        <div id="approve-all-container">
        <button id="approve-all-btn" >
          Approve All
        </button>
        <button id="approve-all-btn" >
          Send SMS to Customers
        </button>
        <button id="approve-all-btn">
          Send Email to Finance
        </button>
      </div>
    </div>
  );
}

export default Cassier;