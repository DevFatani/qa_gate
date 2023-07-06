import '@styles/globals.css'
import Provider from '@components/Provider'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = { 
    title: 'QA Gate',
    description: 'Your gate for next QA'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en' data-theme="dracula">
        <body>
            <Provider >
              <div className="navbar bg-base-100">
                <div className="navbar-start">
                  <Image
                    src='/assets/images/White logo - no background.svg' 
                    alt='logo'
                    width={230}
                    height={200}
                    className="ml-8"
                  />
                </div>
                  <div className="navbar-center">
                    <Link href='/test-plan' >
                      <button className="btn btn-ghost normal-case text-xl">Create Test Plan</button>
                    </Link>
                    <Link href='/test-report' >
                      <button className="btn btn-ghost normal-case text-xl">Create Test Report</button>
                    </Link>
                    <Link href='/test-report-jira' >
                      <button className="btn btn-ghost normal-case text-xl">Create Jira Test Report</button>
                    </Link>
                    <Link href='/learning-report' >
                      <button className="btn btn-ghost normal-case text-xl">Create Learn Report</button>
                    </Link>
                  </div>
                <div className="navbar-end"></div>
              </div>
              <main className="hero min-h-screen bg-base-200">
                {children}
              </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout