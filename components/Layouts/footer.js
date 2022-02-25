import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">

          <div className="lg:w-3/6 md:w-1/2 w-full px-4">
            <div id="responsibleHeading" className="flex justify-center md:justify-center pb-5 pt-0">
              <div id="responsibleHeading">
                <Image src="/assets/logo/kayaking-badge.png" width={300} height={250}></Image>
              </div>
            </div>
            <div id="footerSlogan" className="leading-3 p-2 flex justify-center pb-5">

              {/* <div className="w-1/12"></div> */}
              <div className="w-full"><span className="text-sm font-semibold text-gray-300 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o</span>
              </div>
              {/* <div className="w-1/12"></div> */}

            </div>
          </div>

          <div className="hidden md:block lg:w-1/6 md:w-1/2 w-full px-4 md:text-center">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="hidden md:block lg:w-1/6 md:w-1/2 w-full px-4 md:text-center">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="hidden md:block lg:w-1/6 md:w-1/2 w-full px-4 md:text-center">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Placeholder</label>
              <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-green-900 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-300 hover:text-black rounded">Button</button>
            <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">Bitters chicharrones fanny pack
              <br className="lg:block hidden" />waistcoat green juice
            </p>
          </div>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a className="text-gray-400">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">© 2021 TDS      </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">Enamel pin tousled raclette tacos irony</span>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
