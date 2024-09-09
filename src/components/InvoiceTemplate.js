import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';

const InvoiceTemplate = ({ invoice }) => {
  return (
    <div id="invoice-template" style={{ width: '210mm', height: '297mm', padding: '20mm', backgroundColor: 'white', fontSize: '12pt' }}>
      <h1 style={{ fontSize: '24pt', marginBottom: '10px' }}>Original Tax Invoice</h1>
      <h2 style={{ fontSize: '18pt', marginBottom: '10px' }}>Driver Trip Invoice</h2>
      <p style={{ marginBottom: '20px' }}>Service Tax Category: Renting of Cab</p>

      <table style={{ width: '100%', marginBottom: '20px', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Invoice ID <strong>{invoice.id}</strong></td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Invoice Date <strong>{invoice.date}</strong></td>
          </tr>
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Customer Name</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Mobile Number</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Pickup Address</td>
          </tr>
        </tbody>
      </table>

      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f4f4f4' }}>Description</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f4f4f4' }}>Amount (<FaRupeeSign />)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Ride Fee</td>
            <td style={{ border: '1px solid black', padding: '8px' }}><FaRupeeSign /> 0.00</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Toll Convenience fee</td>
            <td style={{ border: '1px solid black', padding: '8px' }}><FaRupeeSign /> 0</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Airport Charges</td>
            <td style={{ border: '1px solid black', padding: '8px' }}><FaRupeeSign /> 0</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>CGST</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>0.00 %</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>SGST</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>0.00 %</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Subtotal</td>
            <td style={{ border: '1px solid black', padding: '8px' }}><FaRupeeSign /> 0</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong>Total</strong></td>
            <td style={{ border: '1px solid black', padding: '8px' }}><strong><FaRupeeSign /> 0</strong></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default InvoiceTemplate;
