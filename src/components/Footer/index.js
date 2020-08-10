import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/small-logo.svg';
import AppStore from '../../assets/appstore.svg';
import PlayStore from '../../assets/playstore.svg';
import QrCode from '../../assets/qr-code.svg';

function Footer() {
  return (
    <Container>
      <div className="main-footer">
        <div className="footer">
          <div className="uphold-footer-logo">
            <img alt="" src={Logo} />
          </div>

          <div className="products">
            <div>
              <h6>Products</h6>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="/individuals" className="cool-after">
                    Personal
                  </a>
                </li>
                <li>
                  <a href="/businesses" className="cool-after">
                    Business
                  </a>
                </li>
                <li>
                  <a href="/partners" className="cool-after">
                    Partners
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="company">
            <div>
              <h6>Company</h6>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="/about-us/company" className="cool-after">
                    About
                  </a>
                </li>
                <li>
                  <a href="/careers" className="cool-after">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/press-media" className="cool-after">
                    Press
                  </a>
                </li>
                <li>
                  <a href="/blog" className="cool-after">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="help">
            <div>
              <h6>Help</h6>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="/faq-support" className="cool-after">
                    FAQ & Support
                  </a>
                </li>
                <li>
                  <a href="/status" className="cool-after">
                    Platform Status
                  </a>
                </li>
                <li>
                  <a href="/criptionary" className="cool-after">
                    Criptionary
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="cool-after">
                    Pricing
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="legal">
            <div>
              <h6>Legal</h6>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="/legal" className="cool-after">
                    Legal
                  </a>
                </li>
                <li>
                  <a href="/membership-agreement" className="cool-after">
                    Agreements
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="cool-after">
                    Privacy & Data Policy
                  </a>
                </li>
                <li>
                  <a href="/california-privacy" className="cool-after">
                    California Privacy
                  </a>
                </li>
                <li>
                  <a href="/cookie-privacy" className="cool-after">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="/important-disclosures" className="cool-after">
                    Important Disclosures
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <div className="apps">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apps.apple.com/us/app/uphold-buy-digital-currencies/id1101145849"
              >
                <img alt="" src={AppStore} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=com.uphold.wallet"
              >
                <img alt="" src={PlayStore} />
              </a>
              <select name="languages" className="languages">
                <option value="en">English US</option>
                <option value="en-us">English USA</option>
                <option value="en-gb">English GB</option>
                <option value="es-ar">Spanish AR</option>
                <option value="es-cl">Spanish CL</option>
                <option value="es">Spanish</option>
                <option value="pt-pt" selected>
                  Portuguese PT
                </option>
                <option value="it-it">Italian IT</option>
                <option value="tr">Turkish</option>
              </select>
            </div>
          </div>
        </div>
        <aside className="footer-details">
          <div className="uphold-details">
            <p>
              Uphold Europe Limited, Reg No. 09281410, Registered Office: Suite
              A, 6 Honduras Street, London, England, EC1Y 0TH
            </p>
            <nav className="uphold-inc">
              <ul>
                <li>© Uphold, Inc. 2018. All Rights Reserved.</li>
                <li>
                  <a href="/">Agreements</a>
                </li>
                <li>
                  <a href="/">Privacy & Data Policy</a>
                </li>
                <li>
                  <a href="/">California Privacy</a>
                </li>
                <li>
                  <a href="/">Cookie Policy</a>
                </li>
                <li>
                  <a href="/">Important Disclosures</a>
                </li>
              </ul>
            </nav>
            <div>
              <p />
            </div>
            <div>
              <p>
                * Service may be provided by third parties and be subject to
                additional terms
              </p>
            </div>
          </div>
          <div className="uphold-qrcode">
            <img src={QrCode} alt="" />
          </div>
        </aside>
      </div>
    </Container>)
};

export default Footer;