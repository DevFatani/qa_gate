import React from 'react'
import Link from 'next/link';
const TestReportForm = ({  testReport, setTestReport, handleSubmit, submitting}) => {
  
  return (
    <section className='w-full max-w-full flex-start flex-col'>
        <form
          onSubmit={handleSubmit}
          className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
        >
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>What type of test report?</span>
            <br/>
                <input type="radio" id="testReportTypeDev" name="testReportType" onChange={(e) => setTestReport({...testReport, isLiveReport: false})}/>
                <label htmlFor="testReportTypeDev">Development Environment 🤖</label><br />  
                <br />
                <input type="radio" id="testReportTypeLive" name="testReportType" onChange={(e) => setTestReport({...testReport, isLiveReport: true})}/>
                <label htmlFor="testReportTypeLive">Live Environment 🚀</label><br/>
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Tester Name</span>
                <input 
                  className='search_input'
                  value={testReport.testerName}
                  onChange={(e) => setTestReport({...testReport, testerName: e.target.value})}
                  placeholder='write your  name'
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
              <span className='font-satoshi font-semibold text-base text-gray-700'>Project URL</span>
                <input 
                  className='search_input'
                  value={testReport.url}
                  onChange={(e) => setTestReport({...testReport, url: e.target.value})}
                  placeholder='write your task name'
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
              <span className='font-satoshi font-semibold text-base text-gray-700'>Number Of Defect Found (Today)</span>
                <input 
                    className='search_input'
                    min={0}
                    value={testReport.noDefectFound  === 0 ? '' : testReport.noDefectFound}
                    onChange={(e) => setTestReport({...testReport, noDefectFound: e.target.value})}
                    placeholder='Number Of Defect Found Today or overall'
                    required
                    type='number'
                />
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Number Of Defect Solved (Today)</span>
                <input 
                    className='search_input'
                    min={0}
                    value={testReport.noDefectSolved === 0 ? '' : testReport.noDefectSolved}
                    onChange={(e) => setTestReport({...testReport, noDefectSolved: e.target.value})}
                    placeholder='Number Of Defect Solved'
                    required
                    type='number'
                />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Number Of Test Case Executed (Today)</span>
                <input 
                    className='search_input'
                    value={testReport.noOfTCExe  === 0 ? '' : testReport.noOfTCExe}
                    onChange={(e) => setTestReport({...testReport, noOfTCExe: e.target.value})}
                    placeholder='Number Of Test Case Executed'
                    required
                    type='number'
                    min={0}
                />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Number Of Defect In Requirement (Today)</span>
                <input 
                    className='search_input'
                    value={testReport.noOfDefectInRequirement  === 0 ? '' : testReport.noOfDefectInRequirement}
                    onChange={(e) => setTestReport({...testReport, noOfDefectInRequirement: e.target.value})}
                    placeholder='Number Of Defect In Requirement'
                    type='number'
                    min={0}
                />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Number Of Defect In Block (Today)</span>
                <input 
                    className='search_input'
                    value={testReport.noOfDefectBlock  === 0 ? '' : testReport.noOfDefectBlock}
                    onChange={(e) => setTestReport({...testReport, noOfDefectBlock: e.target.value})}
                    placeholder='Number Of Defect In Block'
                    type='number'
                    min={0}
                />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Number Of (Major) Defect (Today)</span>
                <input 
                    className='search_input'
                    value={testReport.noOfDefectMajor  === 0 ? '' : testReport.noOfDefectMajor}
                    onChange={(e) => setTestReport({...testReport, noOfDefectMajor: e.target.value})}
                    placeholder='Number Of (Major) Defect'
                    type='number'
                    min={0}
                />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Release Date</span>
              <input 
                className='search_input'
                value={testReport.releaseDate}
                onChange={(e) => setTestReport({...testReport, releaseDate: e.target.value})}
                placeholder='write your task name'
                type='datetime-local'
              />
          </label>

          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Is the task need to back (In-Progress) ?</span>
            <br/>
                <input type="radio" id="testReportBackInProgressNO" name="backInProgress"  onChange={(e) => setTestReport({...testReport, isTaskNeedToBackInProgress: false})}/>
                <label htmlFor="testReportBackInProgressNO">NO</label><br />  
                <input type="radio" id="testReportBackInProgressYES" name="backInProgress" onChange={(e) => setTestReport({...testReport, isTaskNeedToBackInProgress: true})}/>
                <label htmlFor="testReportBackInProgressYES">YES</label><br/>
          </label>
          
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>is Requirmenet Changed ? (Today)</span>
            <br/>
                <input type="radio" id="isRequirmenetChangeYes" name="isRequirmenetChange" onChange={(e) => setTestReport({...testReport, isRequirmenetChange: true})}/>
                <label htmlFor="isRequirmenetChangeYes">Yes</label><br/>
                <input
                    type="radio"
                    id="isRequirmenetChangeNo" 
                    name="isRequirmenetChange"
                    onChange={(e) => setTestReport({...testReport, isRequirmenetChange: false})}
                  />
                <label htmlFor="isRequirmenetChangeNo">NO</label><br />  
          </label>
          {testReport.isRequirmenetChange ? 
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
                <input type="radio" id="isPRDUpdatedYes" name="isPRDUpdated"   onChange={(e) => setTestReport({...testReport, isPRDUpdated: true})}/>
                <label htmlFor="isPRDUpdatedYes">Yes</label><br/>
                <input type="radio" id="isPRDUpdatedNo" name="isPRDUpdated"  onChange={(e) => setTestReport({...testReport, isPRDUpdated: false})}/>
                <label htmlFor="isPRDUpdatedNo">NO</label><br />  
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

export default TestReportForm;