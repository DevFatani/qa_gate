import React from 'react'
import Link from 'next/link';
const TestReportFormJIRA = ({  testReport, setTestReport, handleSubmit, submitting}) => {
  
  return (
    <section className='w-full max-w-full flex-start flex-col'>
        <form
          onSubmit={handleSubmit}
          className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
        >
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Tester Name</span>
                <input 
                  className='search_input'
                  value={testReport.testerName}
                  onChange={(e) => setTestReport({...testReport, testerName: e.target.value})}
                  placeholder='Write your name'
                  required
                />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Project Name</span>
                <input 
                  className='search_input'
                  value={testReport.projectName}
                  onChange={(e) => setTestReport({...testReport, projectName: e.target.value})}
                  placeholder='write the project name'
                  required
                />
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Test Run URL</span>
                <input 
                  className='search_input'
                  value={testReport.testRunURL}
                  onChange={(e) => setTestReport({...testReport, testRunURL: e.target.value})}
                  placeholder='Share your Test Run url'
                  required
                />
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>How many tickets did you open today?</span>
                <input 
                  className='search_input'
                  value={testReport.openTicketsNumber}
                  onChange={(e) => setTestReport({...testReport, openTicketsNumber: e.target.value})}
                  placeholder='Write down the ticket numbers (ex: aa56, aa35, etc ...)'
                  required
                />
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>How many tickets did you move back to InProgress?</span>
                <input 
                  className='search_input'
                  value={testReport.backInProgressTicketsNumber}
                  onChange={(e) => setTestReport({...testReport, backInProgressTicketsNumber: e.target.value})}
                  placeholder='Write down the ticket numbers (ex: aa56, aa35, etc ...)'
                  required
                />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>How many tickets did you close today?</span>
                <input 
                  className='search_input'
                  value={testReport.closedTicketsNumber}
                  onChange={(e) => setTestReport({...testReport, closedTicketsNumber: e.target.value})}
                  placeholder='Write down the ticket numbers (ex: aa56, aa35, etc ...)'
                  required
                />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>How many tickets did you move to Block status?</span>
                <input 
                  className='search_input'
                  value={testReport.blockedTicketsNumber}
                  onChange={(e) => setTestReport({...testReport, blockedTicketsNumber: e.target.value})}
                  placeholder='Write down the ticket numbers (ex: aa56, aa35, etc ...)'
                  required
                />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Number Of Test Case Executed (Today)</span>
                <input 
                    className='search_input'
                    value={testReport.noOfTCExe  === 0 ? '' : testReport.noOfTCExe}
                    onChange={(e) => setTestReport({...testReport, noOfTCExe: e.target.value})}
                    placeholder='Number Of Test Case Executed (Today)'
                    required
                    type='number'
                />
          </label>
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Did you follow up the PM or PO about the last update today?</span>
            <br/>
                <input 
                  type="radio"
                  id="isPMbeenAskedTrue"
                  name="isPMbeenAsked"
                  onChange={(e) => setTestReport({...testReport, isPMbeenAsked: true})}
                />
                <label htmlFor="isPMbeenAskedTrue">Yes</label><br/>
                <input
                    // value={0}
                    type="radio"
                    id="isPMbeenAskedFalse" 
                    name="isPMbeenAsked"
                    onChange={(e) => setTestReport({...testReport, isPMbeenAsked: false})}
                  />
                <label htmlFor="isPMbeenAskedFalse">NO</label><br />  
          </label>          
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Is Requirmenet Changed? (Today)</span>
            <br/>
                <input 
                  type="radio"
                  id="isRequirmenetChangeTrue"
                  name="isRequirmenetChange"
                  onChange={(e) => setTestReport({...testReport, isRequirmenetChange: true})}
                />
                <label htmlFor="isRequirmenetChangeTrue">Yes</label><br/>
                <input
                    // value={0}
                    type="radio"
                    id="isRequirmenetChangeFalse" 
                    name="isRequirmenetChange"
                    onChange={(e) => setTestReport({...testReport, isRequirmenetChange: false})}
                  />
                <label htmlFor="isRequirmenetChangeFalse">NO</label><br />  
          </label>
          {testReport.isRequirmenetChange? 
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Justify why requirement been changed</span>
              <textarea 
                className='search_input'
                required={testReport.isRequirmenetChange}
                value={testReport.requirmenetChangeRemark}
                onChange={(e) => setTestReport({...testReport, requirmenetChangeRemark: e.target.value})}
                placeholder='Justify why requirement been changed'
              />
          </label> : <div/ >}
            <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Is the PRD file up to date? (Today)</span>
              <br/>
                  <input
                    type="radio"
                    id="isPRDUpdatedTrue"
                    name="isPRDUpdated"
                    onChange={(e) => setTestReport({...testReport, isPRDUpdated: true})}
                  />
                  <label htmlFor="isPRDUpdatedTrue">Yes</label><br/>
                  <input
                    type="radio"
                    id="isPRDUpdatedFalse"
                    name="isPRDUpdated"
                    onChange={(e) => setTestReport({...testReport, isPRDUpdated: false})}
                  />
                  <label htmlFor="isPRDUpdatedFalse">NO</label><br />  
            </label>
          {testReport.isPRDUpdated == false? 
          <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Justify why PRD not up to date</span>
            <textarea 
              className='search_input'
              required={testReport.isPRDUpdated == false}
              value={testReport.prdUpdatedRemark}
              onChange={(e) => setTestReport({...testReport, prdUpdatedRemark: e.target.value})}
              placeholder='Justify why PRD not up to date?'
            />
      </label> : <div/ >}
      
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Remark</span>
                <textarea 
                  className='search_input'
                  value={testReport.remark}
                  onChange={(e) => setTestReport({...testReport, remark: e.target.value})}
                  placeholder='Remark'
                />
          </label>
          <div className='flex-end mx-3 mb-5 gap-4'>
            <Link href='/' className='text-gray-500 text-sm'>Cancel</Link>
            <button
              type='submit'
              disabled={submitting}
              className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
            >Create</button>
          </div>
        </form>

    </section>
  )
}

export default TestReportFormJIRA;