import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaTwitch,
} from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__top">
          <div className="footer__topLeft">
            <ul className="footer__shopList">
              <li className="footer__shopList--item footer__shopList--link footer__shopList--top">
                <Link to="/store">Shop</Link>
              </li>
              <li className="footer__shopList--item"><a href="https://www.razer.com/razerstores" target='_blank'>RazerStores</a></li>
              <li className="footer__shopList--item"><a href="https://www.razer.com/razercafe" target='_blank'>RazerCafe</a></li>
              <li className="footer__shopList--item"><a href="https://www.razer.com/store-finder" target='_blank'>Store Locator</a></li>
              <li className="footer__shopList--item"><a href="https://www.razer.com/programs" target='_blank'>Purchase Programs</a></li>
              <li className="footer__shopList--item"><a href="https://www.razer.com/education" target='_blank'>Education</a></li>
              <li className="footer__shopList--item"><a href="https://www.razer.com/exclusives" target='_blank'>Exclusives</a></li>
              <li className="footer__shopList--item"><a href="https://www.razer.com/rewards" target='_blank'>RazerStore Rewards</a></li>
              <li className="footer__shopList--item"><a href="https://www.razer.com/newsletter" target='_blank'>Newsletter</a></li>
            </ul>
            <ul className="footer__platformList">
              <li className="footer__platformList--item footer__platformList--top">
                Platforms
              </li>
              <li className="footer__platformList--item footer__platformList--link">
                <Link to="/pc">Computers</Link>
              </li>
              <li className="footer__platformList--item footer__platformList--link">
                <Link to="/console">Consoles</Link>
              </li>
              <li className="footer__platformList--item footer__platformList--link">
                <Link to="/mobile">Mobile Devices</Link>
              </li>
              <li className="footer__platformList--item">Steam Deck</li>
              <li className="footer__platformList--item">Other Devices</li>
            </ul>
            <ul className="footer__supportList">
              <li className="footer__supportList--item footer__supportList--top footer__supportList--link">
                <Link to="/support">Support</Link>
              </li>
              <li className="footer__supportList--item"><a href="https://support.razer.com" target='_blank'>Get Help</a></li>
              <li className="footer__supportList--item"><a href="https://www.razer.com/product-registration" target='_blank'>Registration & Warranty</a></li>
              <li className="footer__supportList--item"><a href="https://www.razer.com/razerstore-support" target='_blank'>RazerStore Support</a></li>
              <li className="footer__supportList--item"><a href="https://www.razer.com/razercare" target='_blank'>RazerCare</a></li>
              <li className="footer__supportList--item"><a href="https://razerid.razer.com" target='_blank'>Manage Razer ID</a></li>
              <li className="footer__supportList--item"><a href="https://www.youtube.com/channel/UCrG4K8-XFEK5FyCz_jVzV-A/videos" target='_blank'>Support Videos</a></li>
              <li className="footer__supportList--item"><a href="https://www.razer.com/legal/commitment-to-accessibility" target='_blank'>Accessibility Statement</a></li>
            </ul>
            <ul className="footer__companyList">
              <li className="footer__companyList--item footer__companyList--top"><a href="https://razerid.razer.com" target='_blank'>Company</a></li>
              <li className="footer__companyList--item"><a href="https://razerid.razer.com" target='_blank'>About Us</a></li>
              <li className="footer__companyList--item"><a href="https://razerid.razer.com" target='_blank'>Careers</a></li>
              <li className="footer__companyList--item"><a href="https://razerid.razer.com" target='_blank'>Press Room</a></li>
              <li className="footer__companyList--item"><a href="https://razerid.razer.com" target='_blank'>zVentures</a></li>
              <li className="footer__companyList--item"><a href="https://razerid.razer.com" target='_blank'>Contact Us</a></li>
            </ul>
            <ul className="footer__followList">
              <li className="footer__followList--top">Follow Us</li>
              <li className="footer__followList--item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/razer"
                >
                  <FaFacebookF className="footer__follow--icon" />
                </a>
              </li>
              <li className="footer__followList--item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/razer/"
                >
                  <FaInstagram className="footer__follow--icon" />
                </a>
              </li>
              <li className="footer__followList--item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/Razer"
                >
                  <FaTwitter className="footer__follow--icon" />
                </a>
              </li>
              <li className="footer__followList--item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/razer"
                >
                  <FaYoutube className="footer__follow--icon" />
                </a>
              </li>
              <li className="footer__followList--item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@razer"
                >
                  <FaTiktok className="footer__follow--icon" />
                </a>
              </li>
              <li className="footer__followList--item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.twitch.tv/razer"
                >
                  <FaTwitch className="footer__follow--icon" />
                </a>
              </li>
              <li className="footer__followList--item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.com/invite/razer"
                >
                  <FaDiscord className="footer__follow--icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__topRight">
            <p>FOR GAMERS. BY GAMERS.™</p>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottomLeft">
            <ul className="footer__bottomLeftList">
              <li className="footer__bottomLeftList--item footer__bottomLeftList--item-1">
                Copyright © 2023 Razer Inc. All rights reserved.
              </li>
              <li className="footer__bottomLeftList--item footer__bottomLeftList--item-2">
                Site Map
              </li>
              <li className="footer__bottomLeftList--item footer__bottomLeftList--item-3">
                Legal Terms
              </li>
              <li className="footer__bottomLeftList--item footer__bottomLeftList--item-4">
                Privacy Policy
              </li>
              <li className="footer__bottomLeftList--item footer__bottomLeftList--item-5">
                Cookie Settings
              </li>
            </ul>
          </div>
          <div className="footer__bottomRight">Azerbaijan | Change Location</div>
        </div>
      </div>
    </>
  );
};

export default Footer;

