import React from 'react'
import Navbar from './(main)/navbar';
import classes from './page.module.css';
import Link from 'next/link';
import Footer from './(main)/footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <>
  {/* credit: https://github.com/codebushi/gatsby-starter-lander */}
  <div>
  
    <main className="text-gray-900">
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Wireframe & Sitemap Builder
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
            Our wireframe and sitemap generator offers a suite of intuitive tools to simplify the planning process.  Create clear visual representations of your website's layout, establish a logical flow for visitors, and ensure a seamless user experience.
            </p>
            <p className="mt-8 md:mt-12">
              <Link href='/signup'
                type="button"
                className=" py-4 px-12 bg-teal-500 hover:bg-teal-600 rounded text-white"
              >
                Get Started
              </Link>
            </p>
           
          </div>
          <div className="lg:w-1/2">
           <img className='px-20' src="https://lh3.googleusercontent.com/gg/ANIJZFFO7TY3RiF3W8Qf_E50DNAqAiLTsW-7hMkA3qbddwE5jvQjQFfzVKjTLUKtbkdIrlSCanzHR8_LTcN6J26rsCJJO33p2BTGV8ITiTJUYjwq5R8_uStChia6R0jMQRlrV927ENumhMixyTsQle4rnsYYkWY-GYo1cm1Bf65XVhss5AC7lqzNrk8I7g9Dg1NYGUAv5IOixuL5nJGgAV5Mrg7r6Knb_FqY0qTwVVm9N6dMYPRyyktQUtS_XGMcVZFeAuaw_NnZVsApjfp1XFsGyP5JvV4ALD8bz6BVR_OcMqYRaA8HLNa9Hqh0h5pCgJP1iSfzjAeabYUWalY5GNp-cus" alt="" />
          </div>
        </div>
      </section>
      <section id="features" className="py-8 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold"> Features</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          
            <div className="flex-1 px-3">
              <div
                className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
              >
                <img className='py-8' src="https://designerrs.com/wp-content/uploads/2020/10/UX-Design_.png" alt="" />
                <p className="font-semibold text-xl">Customizable Wireframes</p>
                <p className="mt-4">
                Fine-tune your wireframes by adjusting element size, position, and adding notes or annotations for specific functionality.
                </p>
              </div>
            </div>

            <div className="flex-1 px-3 ">
              <div
                className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
              >
                <img className='h-56 mx-auto' src="https://www.shutterstock.com/image-vector/drag-drop-icon-linear-design-600nw-1386472832.jpg" alt="" />
                <p className="font-semibold text-xl ">Drag ad Drop</p>
                <p className="mt-4">
                Effortlessly build wireframes by dragging and dropping pre-built elements like headers, footers, content blocks, forms, and buttons.
                </p>
              </div>
            </div>

            <div className="flex-1 px-3">
              <div
                className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
              >
                <img className='py-6' src="https://repository-images.githubusercontent.com/380876086/cce86200-d7eb-11eb-8bac-005ebd5e7a52" alt="" />
                <p className="font-semibold text-xl">Visual Sitemap Creation</p>
                <p className="mt-4">
                Automatically generate a visual sitemap that clearly shows the hierarchy and relationships between all your website pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="">
        <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">
              Simplified Design Process
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
              Wireframe generators offer a user-friendly approach to website and application design, especially for non-technical users. This allows businesses and individuals to create basic layouts without needing extensive design expertise.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 w-full lg:w-1/2 undefined">
         <img src="https://mindesigns.com.au/wp-content/uploads/2022/07/wireframe-examples.png" alt="" />
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-3xl font-semibold leading-tight">
              Focus on User Experience
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
              Develop functionalities that go beyond basic sitemap generation. Consider offering features like user journey mapping, internal linking suggestions, or broken link detection to enhance UX alongside SEO.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 w-full lg:w-1/2 order-last lg:order-first">
          <img src="https://www.smokeylemon.com/assets/blog-images/sitemap-banner__ScaleMaxWidthWzEzODBd.png" alt="" />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">
              XML Sitemap Validation
              </h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
              Tools with built-in XML sitemap validation ensure the technical accuracy of the sitemap, preventing crawling issues and improving overall SEO health.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 w-full lg:w-1/2 undefined">
           <img src="https://treewebsolutions.com/uploads/article/45/how-to-use-xml-sitemaps-to-boost-seo_-jjJKW7jNfOkKPXx.png" alt="" />
          </div>
        </div>
      </section>
      <section id="stats" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <p className="uppercase tracking-wider text-gray-600">
            Our customers get results
          </p>
          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="w-full sm:w-1/3">
              <p className="text-4xl lg:text-6xl font-semibold text-teal-500">
                +100%
              </p>
              <p className="font-semibold mb-6">Stats Information</p>
            </div>
            <div className="w-full sm:w-1/3">
              <p className="text-4xl lg:text-6xl font-semibold text-teal-500">
                +100%
              </p>
              <p className="font-semibold mb-6">Stats Information</p>
            </div>
            <div className="w-full sm:w-1/3">
              <p className="text-4xl lg:text-6xl font-semibold text-teal-500">
                +100%
              </p>
              <p className="font-semibold mb-6">Stats Information</p>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 lg:py-40">
        <div className="container mx-auto">
          <p className="uppercase font-bold text-3xl tracking-wider mb-8  text-center">
            What People Say
          </p>
          <div className="flex flex-col md:flex-row md:-mx-3">
            <div className="flex-1 px-3">
              <div
                className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
              >
          
                <p className="mt-6">
                "I was struggling to visualize my website's layout before using Webmap. The drag-and-drop interface made it incredibly easy to create a clear and organized sitemap.
                </p>
                <div className="flex items-center mt-8">
                  <img
                    className="w-12 h-12 mr-4 rounded-full"
                    src="https://cdna.artstation.com/p/assets/images/images/040/951/926/large/maddie_creates-jj-ver2.jpg?1630351796"
                    alt="Jane Doe"
                  />
                  <div>
                    <p className='font-bold'>Abdullah Saleh Khan</p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 px-3">
              <div
                className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
              >
              
                <p className="mt-6">
                The collaboration features in Webmap were a game-changer for our website redesign project. My team could easily share wireframes, leave comments, and iterate on designs in real-time. 
                </p>
                <div className="flex items-center mt-8">
                  <img
                    className="w-12 h-12 mr-4 rounded-full"
                    src="https://i.pinimg.com/1200x/da/51/c2/da51c26fe3398b0f8314fee17a98e0e7.jpg"
                    alt="John Doe"
                  />
                  <div>
                    <p className='font-bold'>Aishwarya Jaiswal</p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 px-3">
              <div
                className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
              >
              
                <p className="mt-6">
                This is a game-changer for anyone planning a website! Webmap took the guesswork out of my website design.  The drag-and-drop interface is SO intuitive, even for non-designers like me. 
                </p>
                <div className="flex items-center mt-8">
                  <img
                    className="w-12 h-12 mr-4 rounded-full"
                    src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/142819271/original/09dafa4104fa6aeca4e62f33326be4933ae7ccac/create-cartoon-profile-picture-abd7.jpg"
                    alt="Jane Smith"
                  />
                  <div>
                    <p className='font-bold'>Alina Zahra</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
        <h3 className="text-5xl font-semibold">Unlock Business Growth</h3>
        <p className="mt-8 text-xl font-light">
         Wireframes & Sitemaps for a Winning Website
        </p>
        <p className="mt-8">
          <Link href='/signup'
           
            className=" py-5 px-16 text-lg bg-teal-500 hover:bg-teal-600 rounded text-white "
          >
            Get Started Now
          </Link>
        </p>
      </section>
    </main>
  
  </div>
  <Footer />
</>


    </>
  )
}

export default Home