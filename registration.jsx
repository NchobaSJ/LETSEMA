import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/client.css";

export default function ClientDashboard() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [activeTab, setActiveTab] = useState("loan-application");
  const [loanID, setLoanID] = useState("");
  const [repaymentLoanID, setRepaymentLoanID] = useState("");
  const [repaymentAmount, setRepaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [company, setCompany] = useState("");
  const [amount, setAmount] = useState("");
  const [receivalMethod, setReceivalMethod] = useState("");
  const [netPay, setNetPay] = useState("");

  const [notifications] = useState([
    "Your loan application was approved!",
    "Your repayment is due soon.",
    "New offers available for you."
  ]);

  const [update_information] = useState([
    "Fix your details man!",
    "A place where you will be fixing your account details.",
    "It is very easy, you got this."
  ]);

  const menuItems = [
    { id: "loan-application", label: "Loan Application", emoji: "📝" },
    { id: "loan-repayment", label: "Loan Repayment", emoji: "💳" },
    { id: "loan-tracking", label: "Loan Tracking", emoji: "🔍" },
    { id: "account-information", label: "Account Information", emoji: "📋" },
    { id: "notifications", label: "Notifications", emoji: "🔔" },
    {id: "update-information", label: "Update Information", emoji: "📝"} // New Notifications menu item
  ];

  const accountDetails = {
    mpesa: "254712345678",
    ecocash: "1234567890",
    bankTransfer: "Account Number: 987654321, Bank: Letsema Bank"
  };

  const handleLoanApplicationSubmit = (e) => {
    e.preventDefault();
    console.log("Loan Application Submitted:", {
      company,
      amount,
      receivalMethod,
      netPay
    });
    alert("Loan application submitted successfully!");
  };

  const handleLoanRepaymentSubmit = (e) => {
    e.preventDefault();
    console.log("Loan Repayment Submitted:", {
      repaymentLoanID,
      repaymentAmount,
      paymentMethod
    });
    alert("Loan repayment submitted successfully!");
  };

  const handleLoanTrackingSubmit = (e) => {
    e.preventDefault();
    console.log("Tracking Loan ID:", loanID);
    alert(`Tracking Loan ID: ${loanID}`);
  };

  // New function to handle logout
  const handleLogout = () => {
    // Optionally, clear user session or state here
    navigate("/"); // Navigate to login page
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Letsema MicroFinance</h1>
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
          <button className="btn btn-logout" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      <main className="main-content">
        {activeTab === "loan-application" && (
          <section className="loan-application-section">
            <h2 className="section-title">Loan Application</h2>
            <form onSubmit={handleLoanApplicationSubmit} className="loan-application-form">
              <div className="form-group">
                <label>Company:</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Amount:</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Receival Method:</label>
                <select
                  value={receivalMethod}
                  onChange={(e) => setReceivalMethod(e.target.value)}
                  required
                >
                  <option value="">Select Method</option>
                  <option value="Mpesa">Mpesa</option>
                  <option value="Ecocash">Ecocash</option>
                  <option value="BankTransfer">Bank Transfer</option>
                </select>
              </div>
              <div className="form-group">
                <label>Net Pay:</label>
                <input
                  type="number"
                  value={netPay}
                  onChange={(e) => setNetPay(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-submit">Submit Application</button>
            </form>
          </section>
        )}

        {activeTab === "loan-repayment" && (
          <section className="loan-repayment-section">
            <h2 className="section-title">Loan Repayment</h2>
            <form onSubmit={handleLoanRepaymentSubmit} className="loan-repayment-form">
              <div className="form-group">
                <label>Loan ID:</label>
                <input
                  type="text"
                  value={repaymentLoanID}
                  onChange={(e) => setRepaymentLoanID(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Amount:</label>
                <input
                  type="number"
                  value={repaymentAmount}
                  onChange={(e) => setRepaymentAmount(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Payment Method:</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                >
                  <option value="">Select Method</option>
                  <option value="Mpesa">Mpesa</option>
                  <option value="Ecocash">Ecocash</option>
                  <option value="BankTransfer">Bank Transfer</option>
                </select>
              </div>
              <button type="submit" className="btn btn-submit">Submit Repayment</button>
            </form>
          </section>
        )}

        {activeTab === "loan-tracking" && (
          <section className="loan-tracking-section">
            <h2 className="section-title">Loan Tracking</h2>
            <form onSubmit={handleLoanTrackingSubmit} className="loan-tracking-form">
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

        {activeTab === "account-information" && (
          <section className="notifications-section">
            <h2 className="section-title">Account Information</h2>
            <div className="account-details">
              <div classname='form-group'>
                <h3>Mpesa Details:</h3>
                <p>{accountDetails.mpesa}</p>
                <h3>Ecocash Details:</h3>
                <p>{accountDetails.ecocash}</p>
                <h3>Bank Transfer Details:</h3>
                <p>{accountDetails.bankTransfer}</p>
                </div>
            </div>
          </section>
        )}

        {activeTab === "notifications" && (
          <section className="notifications-section">
            <h2 className="section-title">Notifications</h2>
            <ul className="notifications-list">
              {notifications.map((notification, index) => (
                <li key={index} className="notification-item">
                  {notification}
                </li>
              ))}
            </ul>
          </section>
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