'use client';
import useAppContext from '@/context/AppContext'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {

  const { loggedIn, logout } = useAppContext();
  const showLoggedIn = () => {
    if (loggedIn) {
      return (
        <div className='flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7'>
          <button
            className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-teal-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-teal-500"
            onClick={logout}
          >
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
            Logout
          </button>
        </div>
      )
    } else {
      return(

      <div className='flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7'>
        <Link
          className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-teal-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-teal-500"
          href="/login"
        >
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          Log in
        </Link>
      </div>
      )
    }
  }
  return (
    <div>
      <header className="fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
        <nav
          className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="#"
              aria-label="Brand"
            >
              <img src='webmap.png' className='h-12' alt="" />
            </a>
            <div className="sm:hidden">

            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <a
                className="font-medium text-teal-500 sm:py-6 dark:text-teal-500"
                href="/"
                aria-current="page"
              >
                Home
              </a>
              <a
                className="font-medium text-teal-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="/about"
              >
                About
              </a>
              <a
                className="font-medium text-teal-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="/contact"
              >
                Contact
              </a>
              <a
                className="font-medium text-teal-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500"
                href="#"
              >
                Blog
              </a>
              
             

             {
              showLoggedIn()
             }
            </div>
          </div>
        </nav>
      </header>

    </div>
  )
}

export default Navbar
