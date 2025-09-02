import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        {/* Column 1 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Setup
          </h4>
          <p style={{ lineHeight: "2.5" }}>Open a trading account online</p>
          <p style={{ lineHeight: "2.5" }}>Paper-based account opening</p>
          <p style={{ lineHeight: "2.5" }}>Business / Partnership accounts</p>
          <p style={{ lineHeight: "2.5" }}>Corporate account registration</p>
          <p style={{ lineHeight: "2.5" }}>NRI services onboarding</p>
          <p style={{ lineHeight: "2.5" }}>Charges and fees explained</p>
          <p style={{ lineHeight: "2.5" }}>3-in-1 account process</p>
          <p style={{ lineHeight: "2.5" }}>Getting started guide</p>
        </div>

        {/* Column 2 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Trading Issues
          </h4>
          <p style={{ lineHeight: "2.5" }}>Login and authentication problems</p>
          <p style={{ lineHeight: "2.5" }}>Order placement errors</p>
          <p style={{ lineHeight: "2.5" }}>Chart not loading</p>
          <p style={{ lineHeight: "2.5" }}>Delayed price updates</p>
          <p style={{ lineHeight: "2.5" }}>Margin requirement queries</p>
          <p style={{ lineHeight: "2.5" }}>Leverage and exposure details</p>
          <p style={{ lineHeight: "2.5" }}>Platform downtime</p>
          <p style={{ lineHeight: "2.5" }}>Mobile app troubleshooting</p>
        </div>

        {/* Column 3 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Funds & Payments
          </h4>
          <p style={{ lineHeight: "2.5" }}>How to add funds</p>
          <p style={{ lineHeight: "2.5" }}>Withdrawal requests</p>
          <p style={{ lineHeight: "2.5" }}>Refund status</p>
          <p style={{ lineHeight: "2.5" }}>Payment gateway issues</p>
          <p style={{ lineHeight: "2.5" }}>Bank account linking</p>
          <p style={{ lineHeight: "2.5" }}>UPI/Netbanking queries</p>
          <p style={{ lineHeight: "2.5" }}>Fund transfer charges</p>
          <p style={{ lineHeight: "2.5" }}>Settlement timelines</p>
        </div>

        {/* Column 4 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Products
          </h4>
          <p style={{ lineHeight: "2.5" }}>Mutual funds investment</p>
          <p style={{ lineHeight: "2.5" }}>Bonds and fixed income</p>
          <p style={{ lineHeight: "2.5" }}>IPO application</p>
          <p style={{ lineHeight: "2.5" }}>Derivatives trading</p>
          <p style={{ lineHeight: "2.5" }}>Options strategies</p>
          <p style={{ lineHeight: "2.5" }}>Commodity market access</p>
          <p style={{ lineHeight: "2.5" }}>ETF purchases</p>
          <p style={{ lineHeight: "2.5" }}>Research tools</p>
        </div>

        {/* Column 5 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Profile & Settings
          </h4>
          <p style={{ lineHeight: "2.5" }}>Change mobile/email</p>
          <p style={{ lineHeight: "2.5" }}>Update nominee details</p>
          <p style={{ lineHeight: "2.5" }}>PAN / Aadhaar linking</p>
          <p style={{ lineHeight: "2.5" }}>Reset password / PIN</p>
          <p style={{ lineHeight: "2.5" }}>Enable 2FA</p>
          <p style={{ lineHeight: "2.5" }}>Account closure</p>
          <p style={{ lineHeight: "2.5" }}>Tax statement download</p>
          <p style={{ lineHeight: "2.5" }}>Language settings</p>
        </div>

        {/* Column 6 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Reports
          </h4>
          <p style={{ lineHeight: "2.5" }}>Daily P&L report</p>
          <p style={{ lineHeight: "2.5" }}>Contract notes</p>
          <p style={{ lineHeight: "2.5" }}>Tax P&L</p>
          <p style={{ lineHeight: "2.5" }}>Holding statement</p>
          <p style={{ lineHeight: "2.5" }}>Ledger download</p>
          <p style={{ lineHeight: "2.5" }}>Portfolio analysis</p>
          <p style={{ lineHeight: "2.5" }}>Back-office reports</p>
          <p style={{ lineHeight: "2.5" }}>Trade history</p>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;
