import React from "react";
import { Link } from "react-router-dom";

const ResponsiveNav = () => {
  return (
    <>
      <div
        className="items-center justify-between w-full md:flex sm:hidden
            lg:block xl:block 2xl:block md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex flex-col md:p-0 md:space-x-8 xl:w-full xl:p-0 font-medium rounded-lg xl:flex-row xl:space-x-8 xl:mt-0 xl:border-0 md:flex md:flex-row sm:hidden lg:flex lg:flex-row">
          <li>
            <Link to={"/"}>
              <button className="block py-2 pl-3 pr-4 text-black hover:text-blue-700 focus:text-blue-700 rounded  xl:p-0">
                หน้าหลัก
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <button className="block py-2 pl-3 pr-4 text-gray-900 rounded focus:text-blue-700 hover:text-blue-700 xl:p-0">
                เกี่ยวกับ
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/creator"}>
              <button className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 xl:p-0 focus:text-blue-700">
                ผู้จัดทำ
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/help"}>
              <button className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent hover:text-blue-700 xl:p-0 focus:text-blue-700">
                ติดต่อ/แจ้งปัญหา
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ResponsiveNav;
