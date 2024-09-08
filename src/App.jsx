import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';



export default function App() {
  const currentPage = useLocation().pathname;
  const [menu, onMenu] = useState(false);

  function onToggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    onMenu(!menu);
    navMenu.classList.toggle('top-[-550%]');
  }



  return (
    <>
      <div className='flex flex-col h-screen'>
        <nav className='relative flex flex-row bg-orange-200 sm:flex-row justify-between'>

          <div className='flex z-40 '>
            <a href="/" className='flex items-center'>
              <img className='size-11 m-2' src="/TM-Logo-50.png" alt="Portfolio Logo" />
              <span className='text-lg text-[#640707] font-black min-w-48'>LeVente Berry</span>
            </a>
          </div>

          <div className='nav-menu mt-6 duration-300 sm:mt-0 absolute sm:static sm:min-h-fit sm:justify-end bg-orange-200 min-h-80 left-0 top-[-550%] w-full flex items-center px-5'>
            <ul className='flex gap-6 sm:flex-row flex-col sm:items-center sm:gap-3'>
              <li>
                <Link to="/Home" className={currentPage === '/Home' ? 'nav-link nav-link-active' : 'nav-link'}> Home </Link>
              </li>
              <li>
                <Link to="/About" className={currentPage === '/About' ? 'nav-link nav-link-active' : 'nav-link'}> About </Link>
              </li>
              <li>
                <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link nav-link-active' : 'nav-link'}> Portfolio </Link>
              </li>
              <li>
                <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link nav-link-active' : 'nav-link'}> Contact </Link>
              </li>
              <li>
                <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link nav-link-active' : 'nav-link'}> Resume </Link>
              </li>
            </ul>  
          </div>

          <div className='flex items-center mr-5 z-50 sm:hidden'>
            {menu ? 
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" className='menu-icon' onClick={onToggleMenu}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" className='menu-icon' 
              onClick={onToggleMenu}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
            }
          </div>
        </nav>

        <main className="flex flex-grow">
          <Outlet />
        </main>

        <footer className="sticky bottom-0 bg-orange-200 p-1">
          <div className='flex justify-center'>
            {/* Stack Overflow Logo*/}
            <a href="https://stackoverflow.com/users/15780740/levente-berry">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 124" preserveAspectRatio="xMidYMid meet" className="icon">
                <script xmlns="" />
                <g fill="none" fillRule="evenodd">
                  <polygon fill="#640707" points="88 80 99 80 99 124 0 124 0 80 11 80 11 113 88 113" />
                  <path fill="#640707" fillRule="nonzero" d="M22.9878906,76.73 L77.0128906,88.085 L79.2838906,77.285 L25.2588906,65.925 L22.9878906,76.73 Z M30.1368906,50.861 L80.1828906,74.169 L84.8448906,64.16 L34.7978906,40.852 L30.1368906,50.861 Z M43.9848906,26.308 L86.4128906,61.639 L93.4788906,53.154 L51.0508906,17.824 L43.9848906,26.308 Z M71.3718906,0.192 L62.5118906,6.782 L95.4598906,51.082 L104.319891,44.493 L71.3718906,0.192 Z M22,102 L77,102 L77,91 L22,91 L22,102 Z" />
                </g>
              </svg>
            </a>

            {/* Github Logo */}
            <a href="https://github.com/leventeberry">
              <svg width="98" height="96" xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 98 96">
                <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#640707" />
              </svg>
            </a>

            {/* LinkedIn Logo */}
            <a href="https://www.linkedin.com/in/leventeberry/" >
              <svg fill="#640707" height="75px" width="75px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xmlSpace="preserve" className="icon">
                <g id="XMLID_801_">
                  <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z" />

                  <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z" />

                  <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z" />
                </g>
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}
