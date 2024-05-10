'use client';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React from 'react'

const Signup = () => {

  const router = useRouter();

  const signupForm = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values) => {
      console.log(values);
      fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200)
        {
          enqueueSnackbar("User Added Successfully", {variant:'success'})
          router.push("/login")
        }else{
          enqueueSnackbar("somthing went wrong", {variant:'warning'})
        }
        
      }).catch((err) => {
        enqueueSnackbar("User already exist", {variant:"warning"})
        
      });
    }
  })

  return (
    <div>
  <>
  {/* component */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')"
    }}
  />
  <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
    <div
      className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
      style={{ maxWidth: 1000 }}
    >
      <div className="md:flex w-full">
        <div className="hidden md:block w-1/2 py-10 px-10">
       <img className='h-full' src="https://trabo.co/img/_Sign_Up_Illustration-8.png" alt="" />
        </div>
        <form onSubmit={signupForm.handleSubmit}>
        <div className="w-full  py-10 px-5 md:px-10">
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
            <p>Enter your information to register</p>
          </div>
          <div>
            <div className="flex -mx-3">
              <div className="w-1/2 px-3 mb-5">
                <label htmlFor="" className="text-xs font-semibold px-1">
                  First name
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                  </div>
                  <input
                    type="text"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="John"
                    name='fname'
                    value={signupForm.values.fname}
                    onChange={signupForm.handleChange}
                  />
                </div>
              </div>
              <div className="w-1/2 px-3 mb-5">
                <label htmlFor="" className="text-xs font-semibold px-1">
                  Last name
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                  </div>
                  <input
                    type="text"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Smith"
                    name='lname'
                    value={signupForm.values.lname}
                    onChange={signupForm.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="" className="text-xs font-semibold px-1">
                  Email
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                  </div>
                  <input
                    type="email"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="johnsmith@example.com"

                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-1/2 px-3 mb-5">
                <label htmlFor="" className="text-xs font-semibold px-1">
                 password
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                  </div>
                  <input
                    type="password"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="password"
                    name='password'
                    value={signupForm.values.password}
                    onChange={signupForm.handleChange}
                  />
                </div>
              </div>
              <div className="w-1/2 px-3 mb-5">
                <label htmlFor="" className="text-xs font-semibold px-1">
                confirm password
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                  </div>
                  <input
                    type="password"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="confirm password"
                    name='confirmPassword'
                    value={signupForm.values.confirmPassword}
                    onChange={signupForm.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>
  {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
  <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
      <a
        title="Buy me a beer"
        href="https://www.buymeacoffee.com/scottwindon"
        target="_blank"
        className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
      >
        <img
          className="object-cover object-center w-full h-full rounded-full"
          src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
        />
      </a>
    </div>
  </div>
</>


    </div>

  )
}

export default Signup