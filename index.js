.sidebar-header {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #e2e8f0;
    margin-bottom: 1.5rem;
    justify-content: center; /* Center align the content */
}

.sidebar-header .logo {
    width: 50px;  /* Adjust the size as needed */
    height: auto; /* Maintain aspect ratio */
    margin-right: 10px; /* Space between logo and text */
}

.sidebar-header h1 {
    font-size: 2rem; /* Increase font size */
    color: #1e293b; /* Text color */
    text-align: center; /* Center align the text */
    margin: 0; /* Remove default margin */
}

.loans-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
}

.loans-table th,
.loans-table td {
    padding: 1rem;
    text-align: left;
    border: 1px solid #e2e8f0;
}

.loans-table th {
    background: #f1f5f9;
    color: #1e293b;
    font-weight: bold; /* Make header text bold */
}

.loans-table tbody tr:hover {
    background: #f9fafb;
}

.loans-table tbody tr:nth-child(even) {
    background: #f5f7fa; /* Alternate row color */
}

.loans-table tbody td {
    color: #34495e; /* Text color for table data */
}

.form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
}

.form-group label {
    font-weight: 500;
    color: #64748b;
}

.registration-container {
    background: rgba(240, 244, 244, 0.6);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
    width: 100%;
    max-width: 620px;
    animation: slideIn 0.5s ease;
}
.container {
    display: block;
    background-color: #9e3c04;
    padding: 0%;
}

.container1 {
    display: flex;
    justify-content: space-between;
    padding: 50px;
    background-color: #ffffff;
    margin-top: 0%;
}

.registration-title {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.column {
    width: 50%;
    background-color: #ffffff;
    box-shadow: rgba(255, 255, 255, 0.9);
}