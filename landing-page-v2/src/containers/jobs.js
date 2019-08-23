import React, { PropTypes } from 'react';
import { Form, Input, Row, Col } from 'antd';
import _ from 'lodash';

import InfoSection from '../components/sections/info';
import { cloudinaryConfig, CloudinaryImage, CloudinaryVideo } from '../components/react-cloudinary';

cloudinaryConfig({ cloud_name: 'dd1ixvdxn' });


class Jobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <section>
          <div className="wrapper jobs">
            <div className="horizontalWrapper">
              <h2 className="underscore">Jobs</h2>
              <Row type="flex" justify="center">
                <Col span={24}>
                  <div className="postWrapper" id="associate-partner">
                    <div className="title">
                      <h2>Associate Partner</h2>
                      <h3>Remote, Full Time</h3>
                    </div>
                    <div className="body">
                      <p>Coefficient Ventures is a decentralized crypto fund with global presence supporting the global blockchain ecosystem. Its decentralized team locates across the world at San Francisco, Beijing, Singapore, Berlin, Seoul and more coming soon. In the past 8 months, Coefficient has invested in 30+ portfolios including Zeppelin, MyCrypto, Numerai, Nucypher, Thunder, Keep, Urbit and TTC, and is advising Tomo and IoTex.</p>
                      <p>We are hiring an associate partner to work with the core team at San Francisco or remotely. You will be an integral part of our team, tasked with blockchain project research and analysis, deal sourcing, event organizing and marketing.</p>
                      <p><strong>About the role:</strong></p>
                      <ul>
                        <li>Interpret and extract key information of deals and generate concise report.</li>
                        <li>Arrange meetings with projects and partners for collaboration while promoting the venture’s mission and values.</li>
                        <li>Capable of writing high quality reports on blockchain and cryptocurrency markets and technology.</li>
                        <li>Maintain pipeline and portfolio management processes, tools and deal tracking.</li>
                        <li>Advise in negotiating, structuring and executing investments, working with the Managing Partner.</li>
                        <li>Portfolio company monitoring, reporting and provide feedback to Managing Partners.</li>
                      </ul>
                      <p><strong>About you:</strong></p>
                      <ul>
                        <li>Passionate about blockchain space and own crypto currencies.</li>
                        <li>Capacity to take ownership of projects.</li>
                        <li>Strong written and verbal communication skills.</li>
                        <li>Genuine curiosity/understanding of cryptocurrency/blockchain technologies.</li>
                        <li>A degree in Math, CS, Economics, Physics, Statistics, or Engineering, or be able to demonstrate deep understanding of the technologies that underpin digital assets (public key cryptography, distributed systems, consensus mechanisms).</li>
                      </ul>
                      <p><strong>Highly desirable:</strong></p>
                      <ul>
                        <li>Startup or entrepreneurial company experience.</li>
                        <li>Self-confident, self-motivated and highly-organized with a strong sense of personal accountability.</li>
                      </ul>
                      <p><strong>Perks of being a unique part of Coefficient Ventures:</strong></p>
                      <ul>
                        <li><strong>The forefront of a revolution.</strong> At Coefficient we fundamentally believe that a next generation of technologies presents the opportunity to create a more just and equitable society.</li>
                        <li><strong>A decentralized startup environment.</strong> Coefficient is a thought leader in the blockchain space and we are absorbing a significant portion of the mindshare. This is both exciting and challenging, as we learn to scale our organization while adhering to the principles of decentralization.</li>
                        <li><strong>Continuous learning.</strong> You’ll be constantly exposed to new languages, frameworks and ideas from your peers and as you work on different projects -- challenging you to stay at the top of your game.</li>
                        <li><strong>Deep technical challenges.</strong> This entire ecosystem is about 10 years old. Ethereum itself is still a toddler. There is much work to be done before these platforms can scale to the order of millions or billions of users. Coefficient is building the technology platforms that can get us to those next thresholds of scale.</li>
                      </ul>

                      <p>If you feel like you are a good fit, you must include any relevant projects, LinkedIn, or your cover letter where you tell us a little about yourself and why you think you’d be a great addition to our team! </p>
                      <p>Please contact us at <a href="mailto:jobs@coefficientventures.com?Subject=Coefficient+Application%3A+Associate+Partner" target="_top">jobs@coefficientventures.com</a></p>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row type="flex" justify="center">
                <Col span={24}>
                  <div className="postWrapper" id="executive-assistant">
                    <div className="title">
                      <h2>Executive Assistant</h2>
                      <h3>Remote, Full Time</h3>
                    </div>
                    <div className="body">
                      <p>Coefficient Ventures is a decentralized crypto fund with global presence supporting the global blockchain ecosystem. Its decentralized team locates across the world at San Francisco, Beijing, Singapore, Berlin, Seoul and more coming soon. In the past 8 months, Coefficient has invested in 30+ portfolios including Zeppelin, MyCrypto, Numerai, Nucypher, Thunder, Keep, Urbit and TTC, and is advising Tomo and IoTex.</p>
                      <p>We are are seeking an executive assistant to provide administrative support to founding partner remotely.</p>
                      <p><strong>About the role:</strong></p>
                      <ul>
                        <li>Gmail calendar management and scheduling for CEO.</li>
                        <li>Business communications (email drafts, letters, etc.)</li>
                        <li>Dropbox document management.</li>
                        <li>Editing writing projects.</li>
                        <li>Expense reporting.</li>
                        <li>Assists by answering partner’s phone and helps with messages, etc.</li>
                        <li>Daily tasks as requested by founding partner.</li>
                        <li>Contact database management.</li>
                        <li>“Startup” environment.  Must be willing and able to do whatever it takes to get the job.</li>
                      </ul>
                      <p><strong>About you:</strong></p>
                      <ul>
                        <li>Strong written and verbal communication skills.</li>
                        <li>Extremely organized with keen attention to detail.  Ability to multi-task effectively and switch focus with ease.</li>
                        <li>Highly proficient computer skills (Gmail, Calendar, Dropbox, Google Sheets).</li>
                        <li>Ability to handle confidential company and personal information with the utmost.</li>
                        <li>Genuine curiosity/understanding of cryptocurrency/blockchain.</li>
                        <li>Proactive and self-motivated.</li>
                        <li>At least 2-year experience supporting C-Level executives preferred.</li>
                      </ul>
                      <p>If you feel like you are a good fit, you must include any relevant projects, LinkedIn, or your cover letter where you tell us a little about yourself and why you think you’d be a great addition to our team! </p>
                      <p>Please contact us at <a href="mailto:jobs@coefficientventures.com?Subject=Coefficient+Application%3A+Executive+Assistant" target="_top">jobs@coefficientventures.com</a></p>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row type="flex" justify="center">
                <Col span={24}>
                  <div className="postWrapper" id="software-engineer">
                    <div className="title">
                      <h2>Software Engineer</h2>
                      <h3>Remote, Full Time</h3>
                    </div>
                    <div className="body">
                      <p>Coefficient Ventures is a decentralized crypto fund with global presence supporting the global blockchain ecosystem. Its decentralized team locates across the world at San Francisco, Beijing, Singapore, Berlin, Seoul and more coming soon. In the past 8 months, Coefficient has invested in 30+ portfolios including Zeppelin, MyCrypto, Numerai, Nucypher, Thunder, Keep, Urbit and TTC, and is advising Tomo and IoTex.</p>
                      <p>Coefficient is building a robust trading system capable of trading on many exchanges and with automation. We are looking for a software engineer to help build out and maintain our trading infrastructure.</p>
                      <p><strong>About the role:</strong></p>
                      <ul>
                        <li>Help with the design, development and monitoring of our core infrastructure.</li>
                        <li>Development of trading bot to assist traders on a need basis.</li>
                        <li>Monitoring and metrics for the non-trading, operational side of the fund.</li>
                        <li>Solid coding skills, preferably in Javascript.</li>
                        <li>Experience in system design and architecture.</li>
                        <li>Experience with deployment in cloud services.</li>
                        <li>Generate reporting summary on a monthly basis.</li>
                        <li>Performe parameter searches via simulations.</li>
                      </ul>
                      <p><strong>About you:</strong></p>
                      <ul>
                        <li>BS/MS degree in Computer Science, Math or Physics.</li>
                        <li>Strong interest in cryptocurrencies and crypto-assets.</li>
                        <li>Familiar with crypto trading and exchanges.</li>
                        <li>Experience in Javascript, Node.js, MongoDB and Mocha(or other testing framework).</li>
                        <li>Experience with Linux operating system.</li>
                      </ul>
                      <p>If you feel like you are a good fit, you must include any relevant projects, LinkedIn, or your cover letter where you tell us a little about yourself and why you think you’d be a great addition to our team! </p>
                      <p>Please contact us at <a href="mailto:jobs@coefficientventures.com?Subject=Coefficient+Application%3A+Software+Engineer" target="_top">jobs@coefficientventures.com</a></p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        <InfoSection />
      </div>
    );
  }
}

Jobs.propTypes = {
};

Jobs.defaultProps = {
};

// Wrap the component to inject dispatch and state into it
export default Jobs;
