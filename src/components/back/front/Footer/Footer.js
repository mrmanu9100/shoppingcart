import React from "react";
import "tailwindcss/tailwind.css";

function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-400 py-10">
        <div className="container mx-auto flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2 lg:text-left text-center">
            <h4 className="text-white font-bold text-xl mb-4">
              Connect with us on social media
            </h4>
            <ul className="list-none">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-100 text-gray-400 font-semibold block pb-2 text-sm"
                >
                  Facebook<i className="fa-brands fa-facebook pl-2"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-100 text-gray-400 font-semibold block pb-2 text-sm"
                >
                  Twitter<i className="fa-brands fa-square-twitter pl-2"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-100 text-gray-400 font-semibold block pb-2 text-sm"
                >
                  Instagram<i className="fa-brands fa-instagram pl-2"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 lg:text-right text-center">
            <h4 className="text-white font-bold text-xl mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-4">
              Manoj Kumar<br />
              manojmargam830gmail.com@
            </p>
            <p className="text-gray-400">(+91) 9100572103</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  