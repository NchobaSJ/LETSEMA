import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/business.css";

export default function Business() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [activeTab, setActiveTab] = useState("approve-loans");
  const [loanID, setLoanID] = useState("");

  const menuItems = [
    { id: "approve-loans", label: "Approve Loans", emoji: "✅" },
    { id: "active-loans", label: "Active Loans", emoji: "📊" },
    { id: "loan-tracking", label: "Loan Tracking", emoji: "🔍" },
    { id: "business-analytics", label: "Business Analytics", emoji: "📈" },
    {id: "update-information", label: "Update Information", emoji: "📝"}
  ];

  const activeLoans = [
    { id: "L001", clientName: "John Doe", amount: "$5,000", status: "Active", date: "2023-01-15" },
    { id: "L002", clientName: "Jane Smith", amount: "$3,000", status: "Active", date: "2023-02-20" },
    { id: "L003", clientName: "Alice Johnson", amount: "$7,500", status: "Active", date: "2023-03-10" }
  ];

  const [update_information] = useState([
    "Fix your details man!",
    "A place where you will be fixing your account details.",
    "It is very easy, you got this."
  ]);

  const handleApprovalSubmit = (e) => {
    e.preventDefault();
    console.log("Loan approved");
  };

  const handleTrackingSubmit = (e) => {
    e.preventDefault();
    console.log("Tracking Loan ID:", loanID);
  };

  // New function to handle logout
  const handleLogout = () => {
    navigate("/"); // Navigate to login page
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Letsema Microfinance</h1>
        </div>

        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`menu-item ${activeTab === item.id ? "active" : ""}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.emoji} {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="btn btn-logout" onClick={handleLogout}>Log Out</button> {/* Add onClick for logout */}
        </div>
      </aside>

      <main className="main-content">
        {activeTab === "approve-loans" && (
          <section className="loan-approval-section">
            <h2 className="section-title">Approve Loans</h2>
            <form onSubmit={handleApprovalSubmit} className="loan-approval-form">
              <div className="form-group">
                <label>Loan ID:</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Client Name:</label>
                <input type="text" required />
              </div>
              <button type="submit" className="btn btn-submit">Approve Loan</button>
            </form>
          </section>
        )}

        {activeTab === "active-loans" && (
          <section className="active-loans-section">
            <h2 className="section-title">Active Loans</h2>
            <table className="loans-table">
              <thead>
                <tr>
                  <th>Loan ID</th>
                  <th>Client Name</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {activeLoans.length > 0 ? (
                  activeLoans.map((loan) => (
                    <tr key={loan.id}>
                      <td>{loan.id}</td>
                      <td>{loan.clientName}</td>
                      <td>{loan.amount}</td>
                      <td>{loan.status}</td>
                      <td>{loan.date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No active loans available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        )}

        {activeTab === "loan-tracking" && (
          <section className="loan-tracking-section">
            <h2 className="section-title">Loan Tracking</h2>
            <form onSubmit={handleTrackingSubmit} className="loan-tracking-form">
              <div className="form-group">
                <label>Loan ID:</label>
                <input
                  type="text"
                  value={loanID}
                  onChange={(e) => setLoanID(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-submit">Track Loan</button>
            </form>
          </section>
        )}

        {activeTab === "business-analytics" && (
          <section className="business-analytics-section">
            <h2 className="section-title">Business Analytics</h2>
            <p>Analytics data will be displayed here.</p>
          </section>
        )}

        {activeTab !== "approve-loans" && activeTab !== "active-loans" && activeTab !== "loan-tracking" && activeTab !== "business-analytics" && (
          <div className="coming-soon">
            <h2>{menuItems.find((item) => item.id === activeTab)?.label}</h2>
            <p>Feature coming soon</p>
          </div>
        )}

        {activeTab === "update-information" && (
          <section className="notifications-section">
            <h2 className="section-title">Update Information</h2>
            <ul className="notifications-list">
              {update_information.map((update_information, index) => (
                <li key={index} className="notification-item">
                  {update_information}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}