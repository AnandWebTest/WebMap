import React from 'react'
import AdminNavbar from './navbar'


const Layout = ({ children }) => {
    return (
        <>
            <div className='grid grid-cols-12'>
                <div className="col-span-2">
                    <AdminNavbar />
                </div>
                <div className="col-span-10">
                    {children}
                </div>
            </div>

        </>
    )
}

export default Layout