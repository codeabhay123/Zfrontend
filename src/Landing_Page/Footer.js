import React from "react";

function Footer() {
  return (
    <div className="container border-top">
      <div className="row mt-5">
        <div className="col">
          <img src="media/image/logo.svg" alt="logo" style={{ width: "50%" }} />
          <p>
            &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved
          </p>
        </div>

        <div className="col">
          <p>Company</p>
          <a href="/about" style={{ textDecoration: "none" }}>
            About
          </a>
          <br />
          <a href="/products" style={{ textDecoration: "none" }}>
            Products
          </a>
          <br />
          <a href="/pricing" style={{ textDecoration: "none" }}>
            Pricing
          </a>
          <br />
          <a href="/referral" style={{ textDecoration: "none" }}>
            Referral programme
          </a>
          <br />
          <a href="/careers" style={{ textDecoration: "none" }}>
            Careers
          </a>
          <br />
          <a href="/zerodha-tech" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>
          <br />
          <a href="/press" style={{ textDecoration: "none" }}>
            Press & media
          </a>
          <br />
          <a href="/csr" style={{ textDecoration: "none" }}>
            Zerodha cares (CSR)
          </a>
        </div>

        <div className="col">
          <p>Support</p>
          <a href="/contact" style={{ textDecoration: "none" }}>
            Contact
          </a>
          <br />
          <a href="/support" style={{ textDecoration: "none" }}>
            Support Portal
          </a>
          <br />
          <a href="/blog" style={{ textDecoration: "none" }}>
            Z Connect Blog
          </a>
          <br />
          <a href="/charges" style={{ textDecoration: "none" }}>
            List of charges
          </a>
          <br />
          <a href="/resources" style={{ textDecoration: "none" }}>
            Download and resource
          </a>
        </div>

        <div className="col">
          <p>Account</p>
          <a href="/open-account" style={{ textDecoration: "none" }}>
            Open an account
          </a>
          <br />
          <a href="/fund-transfer" style={{ textDecoration: "none" }}>
            Fund transfer
          </a>
          <br />
          <a href="/60-day-challenge" style={{ textDecoration: "none" }}>
            60 day challenge
          </a>
          <br />
          <a href="/referral" style={{ textDecoration: "none" }}>
            Referral programme
          </a>
        </div>
      </div>

      {/* Legal / Disclaimer Section */}
      <div className="mt-5 text-muted small fw-light">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to{" "}
          <a
            href="mailto:complaints@zerodha.com"
            style={{ textDecoration: "none" }}
          >
            complaints@zerodha.com
          </a>
          , for DP related:{" "}
          <a href="mailto:dp@zerodha.com" style={{ textDecoration: "none" }}>
            dp@zerodha.com
          </a>
          . Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on{" "}
          <a
            href="https://scores.gov.in"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>SEBI SCORES</strong>
          </a>
          : Register on SCORES portal. Mandatory details for filing complaints
          on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
          Effective Communication, Speedy redressal of the grievances
        </p>

        <p>
          <a href="/odr" style={{ textDecoration: "none" }}>
            Smart Online Dispute Resolution
          </a>{" "}
          |{" "}
          <a href="/grievances" style={{ textDecoration: "none" }}>
            Grievances Redressal Mechanism
          </a>
        </p>

        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          <strong>Attention investors:</strong>
          <br />
          1) Stock brokers can accept securities as margins from clients only by
          way of pledge in the depository system w.e.f September 01, 2020.
          <br />
          2) Update your e-mail and phone number with your stock broker /
          depository participant and receive OTP directly from depository on
          your e-mail and/or mobile number to create pledge.
          <br />
          3) Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p>
          India’s largest broker based on network as per NSE.{" "}
          <a href="/nse-factsheet" style={{ textDecoration: "none" }}>
            NSE broker factsheet
          </a>
        </p>

        <p>
          Prevent unauthorized transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets – once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another intermediary.
        </p>

        <p>
          Dear Investor, if you are subscribing to an IPO, there is no need to
          issue a cheque. Please write the Bank account number and sign the IPO
          application form to authorize your bank to make payment in case of
          allotment. In case of non-allotment the funds will remain in your bank
          account. As a business we don’t give stock tips, and have not
          authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please{" "}
          <a
            href="https://support.zerodha.com"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            create a ticket here
          </a>
          .
        </p>

        <div className="d-flex flex-wrap gap-4 mt-3">
          <a href="/nse" style={{ textDecoration: "none" }}>
            NSE
          </a>
          <a href="/bse" style={{ textDecoration: "none" }}>
            BSE
          </a>
          <a href="/mcx" style={{ textDecoration: "none" }}>
            MCX
          </a>
          <a href="/policies" style={{ textDecoration: "none" }}>
            Policies & procedures
          </a>
          <a href="/privacy" style={{ textDecoration: "none" }}>
            Privacy policy
          </a>
          <a href="/disclosure" style={{ textDecoration: "none" }}>
            Disclosure
          </a>
          <a href="/investors" style={{ textDecoration: "none" }}>
            For investor’s attention
          </a>
          <a href="/terms" style={{ textDecoration: "none" }}>
            Terms & conditions
          </a>
          <a href="/charter" style={{ textDecoration: "none" }}>
            Investor charter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
