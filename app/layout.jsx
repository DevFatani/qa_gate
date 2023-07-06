'use client'
import '@styles/globals.css'
import Provider from '@components/Provider'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FiSun} from 'react-icons/fi'

// export const metadata = { 
//     title: 'QA Gate',
//     description: 'Your gate for next QA'
// }

const RootLayout = ({ children }) => {

  let [darkMode, setDarkMode] = useState(true);

  return (
    <html lang='en' data-theme={darkMode ? "dracula" : "emerald"}>
        <body>
            <Provider >
              <div className="navbar bg-base-100">
                <div className="navbar-start">
                  <Link href={'/'}>
                    <Image
                      src={`${darkMode ? '/assets/images/White logo - no background.svg' : '/assets/images/Black logo - no background.svg'}`} 
                      alt='logo'
                      width={230}
                      height={200}
                      className="ml-6"
                    />
                  </Link>
                </div>
                  <div className="navbar-center">
                    <Link href='/test-plan' >
                      <button className="btn btn-ghost normal-case text-md">Create Test Plan</button>
                    </Link>
                    <Link href='/test-case' >
                      <button className="btn btn-ghost normal-case text-md">Create Test Case</button>
                    </Link>
                    <Link href='/test-report' >
                      <button className="btn btn-ghost normal-case text-md">Create Test Report</button>
                    </Link>
                    <Link href='/test-report-jira' >
                      <button className="btn btn-ghost normal-case text-md">Create Jira Test Report</button>
                    </Link>
                    <Link href='/learning-report' >
                      <button className="btn btn-ghost normal-case text-md">Create Learn Report</button>
                    </Link>
                  </div>
                  <div className="navbar-end">
                    <button className="btn" onClick={() => setDarkMode((pre) => darkMode = !pre)}>
                      <FiSun/>
                    </button>
                  </div>
              </div>
              <main className="hero min-h-screen bg-base-200">
                {children}
              </main>
              <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                  <Image
                    alt='logo'
                    width={230}
                    height={200}
                    src={'/assets/images/White logo - no background.svg'}
                  />
                  <p className='ml-2 text-xs'>Copyright © 2023 - All right reserved by qa-qate.com</p>
                </div> 
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                  </a> 
                  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
              </footer>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout