import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="bg-stgrey-300 flex flex-col md:flex-row lg:flex-row justify-center md:justify-between items-center lg:justify-between px-6 md:px-48 pt-12 pb-24">
      <div>
        <div className="w-36 pb-2">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="text-sm text-stgrey-500 pb-6">
          All rights reserved © 2020
        </div>
        <div className="flex items-center space-x-4">
          <a href="#">
            <SocialIcon network="facebook" bgColor="#ff5a01" />
          </a>
          <a href="#">
            <SocialIcon network="twitter" bgColor="#ff5a01" />
          </a>
          <a href="#">
            <SocialIcon network="instagram" bgColor="#ff5a01" />
          </a>
        </div>
      </div>
      <ul className="text-stgrey-700 mt-11 md:mt-0 lg:mt-0">
        <li className="text-xl font-semibold uppercase pb-6 text-center md:text-left lg:text-left">
          COMPANY
        </li>
        <a href="#">
          <li className="py-1 text-center md:text-left lg:text-left">
            About us
          </li>
        </a>
        <a href="#">
          <li className="py-1 text-center md:text-left lg:text-left">Blogs</li>
        </a>
        <a href="#">
          <li className="py-1 text-center md:text-left lg:text-left">App</li>
        </a>
      </ul>
      <ul className="text-stgrey-700 mt-11 md:mt-0 lg:mt-0">
        <li className="text-xl font-semibold uppercase pb-6 text-center md:text-left lg:text-left">
          Product
        </li>
        <a href="#">
          <li className="py-1 text-center md:text-left lg:text-left">
            Therapy Protocol
          </li>
        </a>
        <a href="#">
          <li className="py-1 text-center md:text-left lg:text-left">
            Features
          </li>
        </a>
        <a href="#">
          <li className="py-1 text-center md:text-left lg:text-left">
            Group Video Calls
          </li>
        </a>
      </ul>
      <ul className="text-stgrey-700 mt-11 md:mt-0 lg:mt-0">
        <li className="text-xl font-semibold uppercase pb-6 text-center md:text-left lg:text-left">
          SECURITY
        </li>
        <a href="#">
          <li className="py-1 text-center md:text-left lg:text-left">
            Privacy Policy
          </li>
        </a>
        <a href="#">
          <li className="py-1 text-center md:text-left lg:text-left">
            Terms of Service
          </li>
        </a>
        <a href="#">
          <li className="py-1 text-center md:text-left lg:text-left">
            Cancellation &amp; Refund
          </li>
        </a>
      </ul>
      {/* <div className="text-stgrey-700 mt-11 md:mt-0 lg:mt-0">
        <div className="text-xl font-semibold uppercase pb-6 text-center md:text-left lg:text-left">
          Download
        </div>
        <div className="w-36 pb-2">
          <a>
            <img src={playstore} alt="download from play store" />
          </a>
        </div>
        <div className="w-36">
          <a>
            <img src={appstore} alt="download from app store" />
          </a>
        </div>
      </div> */}
    </div>
  );
}
