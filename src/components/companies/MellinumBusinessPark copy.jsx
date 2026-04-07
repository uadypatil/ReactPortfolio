import React from 'react';

const MellinumBusinessParkC = () => {
    return (
        <>
            {/* Inline styles - exact same as original */}
            <style>{`
        body {
            background-color: #f8f9fa;
        }
        .table-container {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            overflow: hidden;
        }
        .table thead {
            background-color: #0d6efd;
            color: white;
        }
        .table th {
            font-weight: 600;
            white-space: nowrap;
        }
        .table td {
            vertical-align: middle;
        }
        .company-name {
            font-weight: 600;
            color: #0d6efd;
        }
        .badge {
            font-size: 0.8rem;
        }
        .table-hover tbody tr:hover {
            background-color: #f1f5ff;
        }
        .header {
            background: linear-gradient(135deg, #0d6efd, #6610f2);
            color: white;
            padding: 2rem 0;
        }
      `}</style>

            {/* Header - exact same */}
            <header className="header text-center">
                <div className="container">
                    <h1 className="display-5 fw-bold mb-2">
                        <i className="bi bi-building me-3"></i>Millennium Business Park (MBP), Mahape
                    </h1>
                    <p className="lead mb-0">IT &amp; Technology Companies Directory</p>
                </div>
            </header>

            <div className="container py-4">
                {/* First Table Section - exact same structure and data */}
                <div className="table-container p-3">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="mb-0 text-primary">
                            <i className="bi bi-table me-2"></i>Company List
                        </h5>
                        <span className="badge bg-success fs-6">20 Companies</span>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover table-striped align-middle" id="companyTable">
                            <thead>
                                <tr>
                                    <th>Sr No</th>
                                    <th>Company Name</th>
                                    <th>Company Size</th>
                                    <th>Technologies Used</th>
                                    <th>Exact Location</th>
                                    <th>Contact Details</th>
                                    <th>Saturday Working</th>
                                    <th>Industry Type</th>
                                    <th>Hiring Status</th>
                                    <th>Website</th>
                                    <th>LinkedIn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td className="company-name">Hexaware Technologies Ltd.</td>
                                    <td><span className="badge bg-primary">Large / MNC</span></td>
                                    <td>Java, .NET, Cloud (AWS/Azure), Data &amp; Analytics, UI/UX (React/Angular), SAP, Oracle</td>
                                    <td>MBP, Mahape (multiple units across sectors 1–3, A1/A2/A3 type buildings; MBP campus, Mahape, Navi Mumbai, Maharashtra)</td>
                                    <td>Not Found (general HQ contacts differ; direct MBP office email/phone not public)</td>
                                    <td>Partial (BFSI/IT services; likely 5‑day week, some client‑driven weekends)</td>
                                    <td>IT Services / Digital Services</td>
                                    <td><span className="badge bg-success">Active Hiring</span></td>
                                    <td><a href="https://www.hexaware.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                                    <td><a href="https://www.linkedin.com/company/hexaware" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className="company-name">Mastek Ltd.</td>
                                    <td><span className="badge bg-primary">Large / MNC</span></td>
                                    <td>Java, .NET, Cloud, Data Engineering, Salesforce, UI (React/Angular), testing tools</td>
                                    <td>MBP, Mahape (development center mentioned in location‑based directories)</td>
                                    <td>Not Found (global portals list Bangalore/Pune HQ; Mahape office not separately listed)</td>
                                    <td>Partial (IT services, likely 5‑day week with some weekend support)</td>
                                    <td>IT Services / Digital Transformation</td>
                                    <td><span className="badge bg-success">Active Hiring</span></td>
                                    <td><a href="https://www.mastek.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                                    <td><a href="https://www.linkedin.com/company/mastek" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className="company-name">WNS Global Services</td>
                                    <td><span className="badge bg-primary">Large / MNC</span></td>
                                    <td>Java, .NET, SQL, RPA, analytics‑stack tools, basic cloud</td>
                                    <td>MBP, Mahape (IT/BPO presence in MBP campus)</td>
                                    <td>Not Found (Mahape MBP office not published separately)</td>
                                    <td>Yes (BPO/IT‑enabled; likely 6‑day or shift‑wise)</td>
                                    <td>ITES / BPO / Analytics</td>
                                    <td><span className="badge bg-success">Active Hiring</span></td>
                                    <td><a href="https://www.wns.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                                    <td><a href="https://www.linkedin.com/company/wnsglobal" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td className="company-name">Schlumberger (Landmark)</td>
                                    <td><span className="badge bg-primary">Large / MNC</span></td>
                                    <td>Scientific / engineering software stack, C++, Python, data‑processing tools, cloud‑backed analytics</td>
                                    <td>MBP, Mahape (KB Landmark building, MBP campus)</td>
                                    <td>Not Found (MBP unit not listed separately; global HQ details only)</td>
                                    <td>Partial (R&amp;D/software; likely 5‑day week with some weekend support)</td>
                                    <td>Energy Software / Engineering Software</td>
                                    <td><span className="badge bg-success">Active Hiring</span></td>
                                    <td><a href="https://www.slb.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                                    <td><a href="https://www.linkedin.com/company/slb" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td className="company-name">Alcatel‑Lucent (Nokia‑aligned)</td>
                                    <td><span className="badge bg-primary">Large / MNC</span></td>
                                    <td>Networking software, C++, Java, embedded‑type stacks, telecom‑oriented toolchains</td>
                                    <td>MBP, Mahape (telecom R&amp;D/solutions unit housed in MBP)</td>
                                    <td>Not Found (India HQ differs; Mahape office not listed separately)</td>
                                    <td>Partial (R&amp;D/IT services; likely 5‑day week)</td>
                                    <td>Telecom Software / R&amp;D</td>
                                    <td><span className="badge bg-secondary">Not Hiring</span></td>
                                    <td><a href="https://www.nokia.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                                    <td><a href="https://www.linkedin.com/company/nokia" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td className="company-name">ZTE India</td>
                                    <td><span className="badge bg-primary">Large / MNC</span></td>
                                    <td>Telecom software, C++, Java, embedded‑type stacks, cloud‑enabled tools</td>
                                    <td>MBP, Mahape (development center in MBP campus)</td>
                                    <td>Not Found (India HQ details differ; Mahape MBP not listed separately)</td>
                                    <td>Partial (IT/telecom R&amp;D; likely 5‑day week)</td>
                                    <td>Telecom Software</td>
                                    <td><span className="badge bg-success">Active Hiring</span></td>
                                    <td><a href="https://www.zte.com.cn/global" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                                    <td><a href="https://www.linkedin.com/company/zte-india" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td className="company-name">Naaptol.com (Naaptol Digital / e‑commerce tech)</td>
                                    <td><span className="badge bg-info">SME / Mid‑Large</span></td>
                                    <td>e‑commerce stack (Java or PHP‑based backend), SQL, basic analytics, web UI frameworks</td>
                                    <td>MBP, Mahape (digital/IT unit in MBP campus)</td>
                                    <td>Not Found</td>
                                    <td>Partial (Digital/IT; likely 5‑day week)</td>
                                    <td>E‑commerce / Online Retail Tech</td>
                                    <td><span className="badge bg-secondary">Not Hiring</span></td>
                                    <td><a href="https://www.naaptol.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                                    <td><a href="https://www.linkedin.com/company/naaptol" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td className="company-name">Anmsoft Technologies Private Limited</td>
                                    <td><span className="badge bg-info">Startup / Small</span></td>
                                    <td>Java, .NET, e‑banking‑related stacks, web applications, SQL, cloud‑oriented services</td>
                                    <td>218/219/220, Building No. 2, Sector‑1, Millennium Business Park, Mahape, Navi Mumbai</td>
                                    <td>Not Found</td>
                                    <td>Unknown</td>
                                    <td>IT Services / Offshore Software</td>
                                    <td><span className="badge bg-secondary">Not Found</span></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td className="company-name">Ace Televoice &amp; Services Private Ltd</td>
                                    <td><span className="badge bg-info">SME</span></td>
                                    <td>Telecom‑related software, billing, IVR/telephony, likely Java/.NET, SQL</td>
                                    <td>306, Sector‑1, Millennium Business Park, Mahape, Navi Mumbai</td>
                                    <td>Not Found</td>
                                    <td>Unknown</td>
                                    <td>Telecom / ITES</td>
                                    <td><span className="badge bg-secondary">Not Found</span></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td className="company-name">Systime Global Solutions Pvt. Ltd.</td>
                                    <td><span className="badge bg-info">SME</span></td>
                                    <td>Java, .NET, SQL, BI tools (e.g., SSRS, Power BI), DBMS, server‑management tools</td>
                                    <td>155, Millennium Business Park, Mahape, Navi Mumbai</td>
                                    <td>Not Found</td>
                                    <td>Unknown</td>
                                    <td>IT Services / BI &amp; Database Solutions</td>
                                    <td><span className="badge bg-secondary">Not Found</span></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td className="company-name">Akshay Software Technologies Ltd.</td>
                                    <td><span className="badge bg-info">SME</span></td>
                                    <td>Java, .NET, web applications, SQL, internal tools for clients</td>
                                    <td>Unit 214, Building 2, Sector‑I, Millennium Business Park, Mahape, Navi Mumbai</td>
                                    <td>Not Found</td>
                                    <td>Unknown</td>
                                    <td>IT Services / Software Development</td>
                                    <td><span className="badge bg-secondary">Not Found</span></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td className="company-name">ARRL Solutions Pvt. Ltd.</td>
                                    <td><span className="badge bg-info">SME</span></td>
                                    <td>Java, .NET, web‑based business apps, SQL, reporting tools</td>
                                    <td>Unit No. 1 &amp; 2, Sector‑II, Building No. 5, Millennium Business Park, Mahape</td>
                                    <td>Not Found</td>
                                    <td>Unknown</td>
                                    <td>IT Services / Software Solutions</td>
                                    <td><span className="badge bg-secondary">Not Found</span></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td className="company-name">Object Edge Services Private Ltd</td>
                                    <td><span className="badge bg-info">SME</span></td>
                                    <td>Likely Java, .NET, CRM‑adjacent stacks, SQL, integration tools</td>
                                    <td>Unit No. 305, Building No. 4, Sector‑?, Millennium Business Park, Mahape</td>
                                    <td>Not Found</td>
                                    <td>Unknown</td>
                                    <td>IT Services / Business Solutions</td>
                                    <td><span className="badge bg-secondary">Not Found</span></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td className="company-name">Patni Computer Systems Ltd. (legacy brand, now part of Capgemini group)</td>
                                    <td><span className="badge bg-primary">Large (historically)</span></td>
                                    <td>Java, .NET, mainframe, testing tools, SQL, legacy transformation stacks</td>
                                    <td>Millennium Business Park, Sector‑2, Building No. 306, Mahape</td>
                                    <td>Not Found</td>
                                    <td>Not Found (legacy entry)</td>
                                    <td>IT Services (legacy)</td>
                                    <td><span className="badge bg-secondary">Not Hiring</span></td>
                                    <td><a href="https://www.capgemini.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                                    <td><a href="https://www.linkedin.com/company/capgemini" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td className="company-name">Alepo Technologies Pvt. Ltd.</td>
                                    <td><span className="badge bg-info">SME / Mid‑Large</span></td>
                                    <td>Telecom software, Java, Python, C++, OSS/BSS‑oriented stacks, Linux, cloud‑tools</td>
                                    <td>Office No. 314, Building No. 2, Sector‑3, Millennium Business Park, Mahape</td>
                                    <td>Not Found</td>
                                    <td>Unknown</td>
                                    <td>Telecom Software / OSS/BSS</td>
                                    <td><span className="badge bg-success">Active Hiring</span></td>
                                    <td><a href="https://www.alepo.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                                    <td><a href="https://www.linkedin.com/company/alepo" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td className="company-name">Core Projects Technologies Limited</td>
                                    <td><span className="badge bg-info">SME</span></td>
                                    <td>Java, .NET, web‑based project‑management tools, SQL, basic reporting tools</td>
                                    <td>Block No: 1‑8, Building No. 4, Sector‑3, Millennium Business Park, Mahape</td>
                                    <td>Not Found</td>
                                    <td>Unknown</td>
                                    <td>Software / Projects</td>
                                    <td><span className="badge bg-secondary">Not Found</span></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td className="company-name">Ask Info‑Solutions</td>
                                    <td><span className="badge bg-info">SME</span></td>
                                    <td>Java, .NET, web development, SQL, internal tools</td>
                                    <td>Unit No. 103, Building No. 2, Sector‑3, Millennium Business Park, MIDC, Mahape</td>
                                    <td>Not Found</td>
                                    <td>Unknown</td>
                                    <td>IT Services / Software Development</td>
                                    <td><span className="badge bg-secondary">Not Found</span></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td className="company-name">Arrk Solutions Pvt. Ltd.</td>
                                    <td><span className="badge bg-info">SME</span></td>
                                    <td>Java, .NET, web applications, SQL, reporting tools</td>
                                    <td>Bldg No‑5, Sec‑2, Millennium Business Park, Mahape</td>
                                    <td>Not Found</td>
                                    <td>Unknown</td>
                                    <td>Software Solutions / IT Services</td>
                                    <td><span className="badge bg-secondary">Not Found</span></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td className="company-name">M. J. Infotech Pvt. Ltd.</td>
                                    <td><span className="badge bg-info">SME</span></td>
                                    <td>Java, .NET, web development, SQL, DBMS‑driven applications</td>
                                    <td>EL‑223, MIDC, Mahape Industrial Area (near MBP but not inside MBP campus)</td>
                                    <td>Not Found</td>
                                    <td>Not Found (outside MBP per your constraint)</td>
                                    <td>Not Included (excluded)</td>
                                    <td>Not Included</td>
                                    <td><span className="badge bg-secondary">Not Included</span></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td className="company-name">Seto Teknolog P. Ltd.</td>
                                    <td><span className="badge bg-info">SME</span></td>
                                    <td>Embedded software, C/C++, PLC‑type tools, instrumentation software</td>
                                    <td>EL‑79, TTC Indu Area, MIDC, Mahape (not inside MBP campus)</td>
                                    <td>Not Found</td>
                                    <td>Not Found (excluded as outside MBP)</td>
                                    <td>Not Included</td>
                                    <td>Not Included</td>
                                    <td><span className="badge bg-secondary">Not Included</span></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                    <td><i className="text-muted">Not Available</i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <br /><br /><br /><br /><br />

                {/* Second Table - exact same (with inline styles and all 38 rows) */}
                <table
                    className="table table-hover table-striped align-middle"
                    style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}
                >
                    <thead style={{ backgroundColor: "#0d6efd", color: "white" }}>
                        <tr>
                            <th style={{ width: "5%" }}>Sr No</th>
                            <th style={{ width: "18%" }}>Company Name</th>
                            <th style={{ width: "9%" }}>Company Size</th>
                            <th style={{ width: "15%" }}>Technologies Used</th>
                            <th style={{ width: "15%" }}>Exact Location</th>
                            <th style={{ width: "12%" }}>Contact Details</th>
                            <th style={{ width: "8%" }}>Saturday Working</th>
                            <th style={{ width: "12%" }}>Industry Type</th>
                            <th style={{ width: "9%" }}>Hiring Status</th>
                            <th style={{ width: "6%", textAlign: "center" }}>Website</th>
                            <th style={{ width: "6%", textAlign: "center" }}>LinkedIn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><strong>MindSpace Software Technologies Pvt. Ltd.</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>Java, .NET, React, Custom Software</td>
                            <td>1103, Rupa Solitaire, MBP, Sector 1</td>
                            <td>+91 9152870941 / careers@mindspacetech.com</td>
                            <td>Unknown</td>
                            <td>IT Services</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://mindspacetech.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/mindspace-software" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><strong>Boppo Technologies Pvt. Ltd.</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>React JS, Angular, Node JS, Python, PHP</td>
                            <td>Unit 515, 5th Floor, Rupa Solitaire, MBP, Sector 1</td>
                            <td>+91 8591754351 / sales@boppotechnologies.com</td>
                            <td>Unknown</td>
                            <td>IT Services / App Dev</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://boppotechnologies.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><strong>Eaccountants Services (India) Pvt. Ltd.</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>Accounting Software, Excel, ERP</td>
                            <td>MBP, Mahape</td>
                            <td>8850610441 / 8689875750</td>
                            <td>Yes</td>
                            <td>BPO / KPO / Finance</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><strong>Precision Grow (Tech Visit IT)</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>Embedded C, C++, IoT</td>
                            <td>Unit 22, Bldg 2(A3), Sector 1, MBP</td>
                            <td>Not Found</td>
                            <td>Unknown</td>
                            <td>IT Services / Embedded Systems</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><strong>SRV Realtech India Pvt Ltd</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>AutoCAD, Architectural Design Software</td>
                            <td>Unit 2, Ground Floor, Bldg 2(A-3), Sector 1, MBP</td>
                            <td>Not Found</td>
                            <td>Unknown</td>
                            <td>Real Estate IT / Architecture</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td><strong>3 Business (3biz)</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>Cloud, Data Analytics, Consulting Tech</td>
                            <td>709/711, MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>Unknown</td>
                            <td>IT Consulting / Research</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://threebiz.co.uk" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td><strong>Hexaware Technologies</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>Java, Spring Boot, React, Angular, Cloud, AI</td>
                            <td>Block A/B &amp; Bldg 3 Sector 2, MBP</td>
                            <td>Not Found</td>
                            <td>No</td>
                            <td>IT Services / BPO</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://hexaware.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/hexaware-technologies" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td><strong>Mastek Ltd.</strong></td>
                            <td><span className="badge bg-primary">Mid-Large</span></td>
                            <td>Cloud, DevOps, Data Analytics, Oracle, Java</td>
                            <td>Dedicated Bldg, MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>No</td>
                            <td>IT Services / Digital Transformation</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://mastek.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/mastek" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td><strong>Naaptol.com</strong></td>
                            <td><span className="badge bg-primary">Mid-Large</span></td>
                            <td>PHP, React, Node.js, SQL, Logistics Tech</td>
                            <td>MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>Partial</td>
                            <td>E-Commerce / ITES</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://naaptol.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/naaptol-online-shopping-pvt-ltd" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td><strong>ZTE Telecom India Pvt. Ltd.</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>Telecom Networks, C++, Java, Embedded</td>
                            <td>MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>No</td>
                            <td>Telecom Tech / IT Support</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.zte.com.cn" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/zte" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td><strong>Schlumberger (SLB Technology Center)</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>C++, Java, Cloud, Seismic Software, Big Data</td>
                            <td>MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>No</td>
                            <td>Oil &amp; Gas Tech / IT Support</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://slb.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/slb" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td><strong>Alcatel Lucent (Nokia)</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>Networking, Cloud, C++, Java</td>
                            <td>MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>No</td>
                            <td>Telecom Tech</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://nokia.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/nokia" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td><strong>LTIMindtree (LTI)</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>Java, .NET, SAP, Cloud, Big Data</td>
                            <td>MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>No</td>
                            <td>IT Services &amp; Consulting</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://ltimindtree.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/ltimindtree" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td><strong>Capgemini Technology Services India Ltd.</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>Java, Spring Boot, React, Cloud, Automation</td>
                            <td>MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>No</td>
                            <td>IT Services</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://capgemini.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/capgemini" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td><strong>Accenture Services Pvt. Ltd.</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>SAP, Salesforce, Full Stack, Cloud, AI</td>
                            <td>MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>No</td>
                            <td>IT Services &amp; Consulting</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://accenture.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/accenture" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td><strong>Sensys Technologies Pvt Ltd</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>.NET, SQL, Web Services</td>
                            <td>MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>Partial</td>
                            <td>Product / HR &amp; Tax Software</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://sensysindia.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td><strong>Eviden (An Atos Business)</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>Cybersecurity, Cloud, Big Data, Java</td>
                            <td>MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>No</td>
                            <td>IT Services</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://eviden.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/eviden" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td><strong>Ilm Ux Pvt Ltd</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>Figma, Adobe XD, HTML/CSS, Web App Dev</td>
                            <td>707, Rupa Solitaire, Sector 1, MBP</td>
                            <td>Not Found</td>
                            <td>Unknown</td>
                            <td>IT Services / UX Design</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td><strong>In Time Tec</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>Big Data, Mobile App Dev, UI/UX, Java, Cloud</td>
                            <td>1204, 12th Floor, Rupa Solitaire, MBP</td>
                            <td>Not Found</td>
                            <td>Unknown</td>
                            <td>IT Services</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://intimetec.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/in-time-tec" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td><strong>Apaar Infosystems</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>Software Dev, Web Tech</td>
                            <td>MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>Unknown</td>
                            <td>IT Services</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td><strong>Trinfinity Bpo Pvt Ltd</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>CRM, Dialers, BPO Tools</td>
                            <td>14th Floor, D Wing, Rupa Solitaire, MBP</td>
                            <td>Not Found</td>
                            <td>Yes</td>
                            <td>BPO / ITES</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td><strong>Megacap Solutions Pvt Ltd</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>BPO Tech, CRM</td>
                            <td>Unit 314, Bldg 2, A3, Sector 1, MBP</td>
                            <td>Not Found</td>
                            <td>Yes</td>
                            <td>BPO / ITES</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td><strong>Mehrwert Infotech Pvt Ltd</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>CRM, Support Systems</td>
                            <td>1211, C Wing, Rupa Solitaire, MBP</td>
                            <td>Not Found</td>
                            <td>Partial</td>
                            <td>BPO / ITES</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td><strong>Imetrix Solutions Pvt Ltd</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>ITES Tech, Analytics</td>
                            <td>Rupa Solitaire, MBP</td>
                            <td>Not Found</td>
                            <td>Partial</td>
                            <td>BPO / Analytics</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td><strong>Ecom Bpo Solutions</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>E-commerce backend, Data Entry tech</td>
                            <td>Unit 767, A2 Wing, 8th Floor, Rupa Solitaire, MBP</td>
                            <td>Not Found</td>
                            <td>Yes</td>
                            <td>BPO / ITES</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td><strong>Kserve Bpo Pvt Ltd</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>CRM, Telecom dialers</td>
                            <td>Bldg 1, A Wing, MBP</td>
                            <td>Not Found</td>
                            <td>Yes</td>
                            <td>BPO / ITES</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td><strong>WEB Tel India</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>Web Dev, SEO, Digital Marketing</td>
                            <td>702, Rupa Solitaire, MBP</td>
                            <td>Not Found</td>
                            <td>Partial</td>
                            <td>IT Services / Web Development</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td><strong>Caliber Point Business Solutions Ltd</strong></td>
                            <td><span className="badge bg-primary">Large</span></td>
                            <td>BPM, RPA, Cloud</td>
                            <td>A Block, Bldg 3, MBP</td>
                            <td>Not Found</td>
                            <td>Partial</td>
                            <td>BPO / BPM</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://hexaware.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td><strong>Aegis Ltd (Startek)</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>CRM, BPM Software</td>
                            <td>Nitin Mokal Bldg, MBP</td>
                            <td>Not Found</td>
                            <td>Yes</td>
                            <td>BPO / ITES</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://startek.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/startek" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td><strong>Altruist Technologies Pvt Ltd</strong></td>
                            <td><span className="badge bg-primary">Mid-Large</span></td>
                            <td>Telecom Solutions, IVR, Web Tech</td>
                            <td>MBP A8, Sector 1, MBP</td>
                            <td>Not Found</td>
                            <td>Partial</td>
                            <td>IT Services / BPO</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://altruistindia.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/altruist-technologies-pvt--ltd-" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td><strong>Congrow Bpo And Services Opc Pvt Ltd</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>CRM</td>
                            <td>MBP, Sector 2</td>
                            <td>Not Found</td>
                            <td>Yes</td>
                            <td>BPO / ITES</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td><strong>M K Infosolution Pvt Ltd</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>IT infrastructure, Support tech</td>
                            <td>202, Bldg 6, Sector 3, MBP</td>
                            <td>Not Found</td>
                            <td>Unknown</td>
                            <td>IT Support</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td><strong>Database Interactive</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>Data Processing, SQL</td>
                            <td>Bldg 06, Sector 3, MBP</td>
                            <td>Not Found</td>
                            <td>Unknown</td>
                            <td>ITES / Data Services</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td><strong>WNS Global Services</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>Analytics, RPA, Cloud, CRM</td>
                            <td>Rupa Solitaire, MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>Partial</td>
                            <td>BPM / ITES</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://wns.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/wns-global-services" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>35</td>
                            <td><strong>Connections Direct India Pvt Ltd</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>BPO Tools, Custom CRM</td>
                            <td>MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>Yes</td>
                            <td>BPO / ITES</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td><strong>Ingenicx</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>CRM, Software Support</td>
                            <td>906 to 913, Rupa Solitaire, MBP</td>
                            <td>Not Found</td>
                            <td>Unknown</td>
                            <td>ITES / Tech Support</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>37</td>
                            <td><strong>V Teleservices</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>Telecom Support, Ticketing Tools</td>
                            <td>Office 810, Lift L6, Rupa Solitaire, MBP</td>
                            <td>Not Found</td>
                            <td>Yes</td>
                            <td>BPO / Telecom ITES</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>38</td>
                            <td><strong>One-1 Solution</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>BPO Tech</td>
                            <td>1111, Rupa Solitaire, MBP</td>
                            <td>Not Found</td>
                            <td>Yes</td>
                            <td>BPO / ITES</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                    </tbody>
                </table>

                <br /><br /><br /><br /><br />

                {/* Third Table - exact same (with inline styles and all 20 rows) */}
                <table
                    className="table table-hover table-striped align-middle"
                    style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}
                >
                    <thead style={{ backgroundColor: "#0d6efd", color: "white" }}>
                        <tr>
                            <th style={{ width: "5%" }}>Sr No</th>
                            <th style={{ width: "18%" }}>Company Name</th>
                            <th style={{ width: "9%" }}>Company Size</th>
                            <th style={{ width: "15%" }}>Technologies Used</th>
                            <th style={{ width: "15%" }}>Exact Location</th>
                            <th style={{ width: "12%" }}>Contact Details</th>
                            <th style={{ width: "8%" }}>Saturday Working</th>
                            <th style={{ width: "12%" }}>Industry Type</th>
                            <th style={{ width: "9%" }}>Hiring Status</th>
                            <th style={{ width: "6%", textAlign: "center" }}>Website</th>
                            <th style={{ width: "6%", textAlign: "center" }}>LinkedIn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><strong>MindSpace Software Technologies Pvt. Ltd.</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>Java, .NET, React, Mobile Apps, Cloud</td>
                            <td>1103, Rupa Solitaire, MBP, Sector 1</td>
                            <td>+91 9152870941 / careers@mindspacetech.com</td>
                            <td>Unknown</td>
                            <td>IT Services / Custom Software</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://mindspacetech.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/mindspace-software" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><strong>Boppo Technologies Pvt. Ltd.</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>React JS, Angular, Node JS, Python, PHP</td>
                            <td>Unit 515, 5th Floor, Rupa Solitaire, MBP</td>
                            <td>+91 8591754351 / sales@boppotechnologies.com</td>
                            <td>Unknown</td>
                            <td>Software Dev / App Dev</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://boppotechnologies.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/boppo-technologies" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><strong>Hexaware Technologies</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>Java, Spring Boot, React, Cloud, AI/ML</td>
                            <td>Block A/B &amp; Bldg 3, Sector 2, MBP</td>
                            <td>+91 22 67919595</td>
                            <td>No</td>
                            <td>IT Services / Product</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://hexaware.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/hexaware-technologies" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><strong>Mastek Ltd.</strong></td>
                            <td><span className="badge bg-primary">Mid-Large</span></td>
                            <td>Cloud, DevOps, Oracle, Java, Data Analytics</td>
                            <td>Dedicated Bldg, MBP, Mahape</td>
                            <td>+91 22 67224200</td>
                            <td>No</td>
                            <td>Digital Transformation / IT Services</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://mastek.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/mastek" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><strong>Sensys Technologies Pvt Ltd</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>.NET, SQL, Web Services, HRMS Tech</td>
                            <td>Head Office, MBP, Mahape</td>
                            <td>+91 22 6627 2424 / sales@sensysindia.com</td>
                            <td>Partial</td>
                            <td>Product (HR &amp; Tax Software)</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://sensysindia.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/sensys-technologies-pvt-ltd" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td><strong>In Time Tec</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>Big Data, Java, Cloud, Mobile App Dev</td>
                            <td>1204, 12th Floor, Rupa Solitaire, MBP</td>
                            <td>+91 22 4127 1011</td>
                            <td>Unknown</td>
                            <td>IT Services / Product</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://intimetec.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/in-time-tec" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td><strong>ANMsoft Technologies Pvt. Ltd.</strong></td>
                            <td><span className="badge bg-primary">Mid-Large</span></td>
                            <td>Java, J2EE, Spring, Microservices, React</td>
                            <td>Bldg 1, Sector 1, MBP</td>
                            <td>+91 22 4115 1515</td>
                            <td>No</td>
                            <td>IT Services / Fintech</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://anmsoft.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/anmsoft-technologies" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td><strong>Acrotrend Solutions Pvt. Ltd.</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>Data Engineering, AWS, Azure, Python, Snowflake</td>
                            <td>511, Rupa Solitaire, MBP</td>
                            <td>+91 22 6127 3444</td>
                            <td>No</td>
                            <td>Data Analytics / Software</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://acrotrend.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/acrotrend" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td><strong>G4K Solution Pvt. Ltd.</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>Web Tech, PHP, Java, SQL</td>
                            <td>Bldg No. 2, A3, Sector 1, MBP</td>
                            <td>+91 91673 89332</td>
                            <td>Unknown</td>
                            <td>Software Development</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://g4ksolution.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/g4k-solution-pvt-ltd" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td><strong>Shawman Software</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>Hospitality Tech, SQL, .NET, Mobile</td>
                            <td>MBP, Mahape</td>
                            <td>+91 22 6150 1200</td>
                            <td>Partial</td>
                            <td>Product (Hospitality/Retail)</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://shawman.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/shawman-software" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td><strong>Trine Software (Trinfinity)</strong></td>
                            <td><span className="badge bg-info">SME</span></td>
                            <td>CRM Development, .NET, SQL</td>
                            <td>14th Floor, D Wing, Rupa Solitaire, MBP</td>
                            <td>Not Found</td>
                            <td>Unknown</td>
                            <td>IT Services / CRM</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                            <td style={{ textAlign: "center" }}>Not Found</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td><strong>Membroz (Adept-tec)</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>PHP, Laravel, Cloud, Membership Tech</td>
                            <td>Rupa Solitaire, MBP</td>
                            <td>+91 70217 63806</td>
                            <td>Unknown</td>
                            <td>Product (Club Management)</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://membroz.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/adept-tec" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td><strong>Cheers Interactive</strong></td>
                            <td><span className="badge bg-primary">Mid-Large</span></td>
                            <td>Data Science, Python, AI, Web Dev</td>
                            <td>MBP, Mahape</td>
                            <td>+91 22 6772 1100</td>
                            <td>No</td>
                            <td>IT Services / Analytics</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://cheersinteractive.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/cheers-interactive" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td><strong>Schlumberger (SLB Tech Center)</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>C++, Java, Cloud, Big Data, Python</td>
                            <td>MBP, Mahape</td>
                            <td>Not Found</td>
                            <td>No</td>
                            <td>Product / Tech Support</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://slb.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/slb" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td><strong>Altruist Technologies</strong></td>
                            <td><span className="badge bg-primary">Mid-Large</span></td>
                            <td>Telecom Tech, IVR, Web App Dev</td>
                            <td>MBP A8, Sector 1, MBP</td>
                            <td>+91 22 4111 6300</td>
                            <td>Partial</td>
                            <td>IT Services / Telecom</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://altruistindia.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/altruist-technologies-pvt--ltd-" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td><strong>J. Sam Technologies India</strong></td>
                            <td><span className="badge bg-info">Small</span></td>
                            <td>Enterprise Software, Java, SQL</td>
                            <td>MBP, Mahape</td>
                            <td>+91 22 2778 1234</td>
                            <td>Unknown</td>
                            <td>IT Services</td>
                            <td><span className="badge bg-secondary">Unknown</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://jsam.in" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/j-sam-technologies" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td><strong>Eviden (An Atos Business)</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>Cybersecurity, Cloud, Big Data, Java</td>
                            <td>Bldg 4, Sector 2, MBP</td>
                            <td>+91 22 6733 3444</td>
                            <td>No</td>
                            <td>IT Services</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://eviden.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/eviden" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td><strong>LTIMindtree (LTI)</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>Java, SAP, Cloud, Data, React</td>
                            <td>MBP, Mahape</td>
                            <td>+91 22 6776 6776</td>
                            <td>No</td>
                            <td>IT Services &amp; Consulting</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://ltimindtree.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/ltimindtree" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td><strong>Capgemini</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>Java, Spring, React, Cloud, DevOps</td>
                            <td>Block B, MBP</td>
                            <td>+91 22 6755 7000</td>
                            <td>No</td>
                            <td>IT Services</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://capgemini.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/capgemini" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td><strong>Accenture</strong></td>
                            <td><span className="badge bg-primary">MNC</span></td>
                            <td>Full Stack, SAP, Cloud, AI</td>
                            <td>MBP, Mahape</td>
                            <td>+91 22 6106 2000</td>
                            <td>No</td>
                            <td>IT Services &amp; Consulting</td>
                            <td><span className="badge bg-success">Active Hiring</span></td>
                            <td style={{ textAlign: "center" }}><a href="https://accenture.com" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-globe"></i></a></td>
                            <td style={{ textAlign: "center" }}><a href="https://www.linkedin.com/company/accenture" target="_blank" className="btn btn-sm btn-outline-primary"><i className="bi bi-linkedin"></i></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MellinumBusinessParkC;