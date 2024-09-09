import React, { useState, useEffect } from 'react';
import { FaDownload, FaFileInvoice, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './BillingAndInvoicing.css';

const BillingAndInvoicing = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [startDate, setStartDate] = useState(new Date()); 

  useEffect(() => {
    
    setTimeout(() => {
      setInvoices([
        { id: 1, month: 'July 2024', amount: 1500, status: 'Paid' },
        { id: 2, month: 'August 2024', amount: 2000, status: 'Unpaid' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDateChange = (date) => {
    setStartDate(date);
    const month = date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear();
    const invoice = invoices.find(inv => inv.month === month);
    setSelectedInvoice(invoice);
  };

  const handleDownload = async () => {
    if (!selectedInvoice) {
      alert('Please select an invoice to download.');
      return;
    }

    const invoiceElement = document.getElementById(`invoice-${selectedInvoice.id}`);
    if (!invoiceElement) {
      console.error(`Invoice element with ID 'invoice-${selectedInvoice.id}' not found`);
      return;
    }

    try {
      const canvas = await html2canvas(invoiceElement);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();

      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0); 
      pdf.save(`invoice-${selectedInvoice.id}.pdf`);
    } catch (error) {
      console.error(`Failed to generate PDF for invoice ID ${selectedInvoice.id}:`, error);
    }
  };

  return (
    <div className="billing-invoicing-container">
      <h2><FaFileInvoice className="icon" /> Billing & Invoicing</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="billing-summary">
            <div className="summary-item">
              <FaCalendarAlt className="icon" /> Last Report: July 30, 2024
            </div>
            <div className="summary-item">
              <FaMoneyBillWave className="icon" /> Total Earnings: ₹3500
            </div>
            <div className="summary-item">
              <FaMoneyBillWave className="icon" /> Total Commission: ₹175
            </div>
          </div>

          <div className="calendar-container">
            <label htmlFor="date-picker" className="calendar-label">
              <FaCalendarAlt className="calendar-icon" /> Select Month:
            </label>
            <DatePicker
              id="date-picker"
              selected={startDate}
              onChange={handleDateChange}
              dateFormat="MMMM yyyy"
              showMonthYearPicker
              showFullMonthYearPicker
            />
          </div>

          {selectedInvoice && (
            <div id={`invoice-${selectedInvoice.id}`} className="invoice-template">
              <h2>Original Tax Invoice</h2>
              <h3>Driver Trip Invoice</h3>
              <p>Service Tax Category: Renting of Cab</p>
              <hr />
              <p><strong>Invoice ID:</strong> {selectedInvoice.id}</p>
              <p><strong>Invoice Date:</strong> {selectedInvoice.month}</p>
              <p><strong>Customer Name:</strong> Srikanth</p>
              <p><strong>Mobile Number:</strong> +91 1234567891</p>
              <p><strong>Pickup Address:</strong> Kukatpally, Hyderabad 500072</p>
              <hr />
              <table>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ride Fee</td>
                    <td>₹{selectedInvoice.amount.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Toll Convenience Fee</td>
                    <td>₹0.00</td>
                  </tr>
                  <tr>
                    <td>Airport Charges</td>
                    <td>₹0.00</td>
                  </tr>
                  <tr>
                    <td>CGST</td>
                    <td>0.00%</td>
                  </tr>
                  <tr>
                    <td>SGST</td>
                    <td>0.00%</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <p><strong>Subtotal:</strong> ₹{selectedInvoice.amount.toFixed(2)}</p>
              <p><strong>Total:</strong> ₹{selectedInvoice.amount.toFixed(2)}</p>
            </div>
          )}

          <button className="btn-download" onClick={handleDownload}>
            <FaDownload className="icon" /> Download
          </button>
        </div>
      )}
    </div>
  );
};

export default BillingAndInvoicing;
