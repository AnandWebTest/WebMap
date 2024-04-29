'use client';
import React, { useRef, useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import { json2xml } from 'xml-js';

const SitemapCreator = () => {

  const urlRef = useRef(null);
  const [sitemapJSON, setSitemapJSON] = useState({ children: [] });

  const loadSitemap = (directory) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/load-sitemap/${directory}/crawl.json`)
      .then(res => res.json())
      .then(data => {
        // console.log(JSON.stringify(data.children));
        setSitemapJSON(data);
      }).catch(err => {
        console.log(err);
      })
  }

  const generateSitemap = () => {
    fetch('http://localhost:5000/sitemap/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: urlRef.current.value })
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        loadSitemap(data.outputDir);
      }).catch(err => {
        console.log(err);
      })
  }

  const jsontoxml = () => {
    
    const   json = JSON.stringify(sitemapJSON.children, null, 2);
   return json2xml(json, { compact: true, spaces: 4 });
  } 

  return (
    <>
      <div className="relative bg-blue-900">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-black"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Start from here
              <br className="hidden md:block" />

              <span className="relative inline-block">

                <div className="w-full h-3 -mt-3 bg-deep-purple-accent-400" />
              </span>
            </h2>
            <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">

            </p>
            <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                placeholder="Paste the link"
                ref={urlRef}
                type="text"
                className="flex-grow w-full h-12 px-9 mb-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
              />
              <button
                onClick={generateSitemap}
                type="button"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Start
              </button>
            </form>
            <p className="max-w-md mb-10 text-xs font-thin tracking-wide text-gray-500 sm:text-sm sm:mx-auto md:mb-16">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <a
              href="/"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
        </div>
        {/* <CopyBlock
        text={JSON.stringify(sitemapJSON.children, null, 2)}
        language={"json"}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
      /> */}
      </div>
      <div className='pt-20'>
        <label htmlFor="">tell me something</label>
        {
         
        }
        <textarea className='w-full'
        rows={50}
          // value={JSON.stringify(sitemapJSON.children, null, 2)}
          value={jsontoxml()}
          
        ></textarea>
      </div>
    </>

  );
}

export default SitemapCreator
