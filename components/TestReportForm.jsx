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
                <input type="radio" checked={testReport.testReportType == 0} id="testReportTypeDev" name="testReportType" value={0}  onChange={(e) => setTestReport({...testReport, testReportType: e.target.value})}/>
                <label htmlFor="testReportTypeDev">Development Environment 🤖</label><br />  
                <br />
                <input type="radio"  checked={testReport.testReportType == 1} id="testReportTypeLive" name="testReportType" value={1}   onChange={(e) => setTestReport({...testReport, testReportType: e.target.value})}/>
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
              <span className='font-satoshi font-semibold text-base text-gray-700'>Number Of Defect Found</span>
                <input 
                    className='search_input'
                    value={testReport.noDefectFound  === 0 ? '' : testReport.noDefectFound}
                    onChange={(e) => setTestReport({...testReport, noDefectFound: e.target.value})}
                    placeholder='Number Of Defect Found Today or overall'
                    required
                    type='number'
                />
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Number Of Defect Solved</span>
                <input 
                    className='search_input'
                    value={testReport.noDefectSolved === 0 ? '' : testReport.noDefectSolved}
                    onChange={(e) => setTestReport({...testReport, noDefectSolved: e.target.value})}
                    placeholder='Number Of Defect Solved'
                    required
                    type='number'
                />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Number Of Test Case Executed</span>
                <input 
                    className='search_input'
                    value={testReport.noOfTCExe  === 0 ? '' : testReport.noOfTCExe}
                    onChange={(e) => setTestReport({...testReport, noOfTCExe: e.target.value})}
                    placeholder='Number Of Test Case Executed'
                    required
                    type='number'
                />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Number Of Defect In Requirement</span>
                <input 
                    className='search_input'
                    value={testReport.noOfDefectInRequirement  === 0 ? '' : testReport.noOfDefectInRequirement}
                    onChange={(e) => setTestReport({...testReport, noOfDefectInRequirement: e.target.value})}
                    placeholder='Number Of Defect In Requirement'
                    type='number'
                />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Number Of Defect In Block</span>
                <input 
                    className='search_input'
                    value={testReport.noOfDefectBlock  === 0 ? '' : testReport.noOfDefectBlock}
                    onChange={(e) => setTestReport({...testReport, noOfDefectBlock: e.target.value})}
                    placeholder='Number Of Defect In Block'
                    type='number'
                />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Number Of (Major) Defect</span>
                <input 
                    className='search_input'
                    value={testReport.noOfDefectMajor  === 0 ? '' : testReport.noOfDefectMajor}
                    onChange={(e) => setTestReport({...testReport, noOfDefectMajor: e.target.value})}
                    placeholder='Number Of (Major) Defect'
                    type='number'
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
            <span className='font-satoshi font-semibold text-base text-gray-700'>is Requirmenet Changed ?</span>
            <br/>
                <input type="radio" id="isRequirmenetChangeYes" name="isRequirmenetChange"  value={1}   onChange={(e) => setTestReport({...testReport, isRequirmenetChange: 1})}/>
                <label htmlFor="isRequirmenetChangeYes">Yes</label><br/>
                <input
                    type="radio"
                    id="isRequirmenetChangeNo" 
                    name="isRequirmenetChange"
                    value={0}
                    onChange={(e) => setTestReport({...testReport, isRequirmenetChange: 0})}
                  />
                <label htmlFor="isRequirmenetChangeNo">NO</label><br />  
          </label>
          {testReport.isRequirmenetChange == 1 ? 
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
            <span className='font-satoshi font-semibold text-base text-gray-700'>Is the PRD file up to date?</span>
            <br/>
                <input type="radio" id="isPRDUpdatedYes" name="isPRDUpdated" value={1}   onChange={(e) => setTestReport({...testReport, isPRDUpdated: 1})}/>
                <label htmlFor="isPRDUpdatedYes">Yes</label><br/>
                <input type="radio" id="isPRDUpdatedNo" name="isPRDUpdated" value={0}  onChange={(e) => setTestReport({...testReport, isPRDUpdated: 0})}/>
                <label htmlFor="isPRDUpdatedNo">NO</label><br />  
          </label>
          {testReport.isPRDUpdated == 0 ? 
          <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Justify why PRD not up to date</span>
            <textarea 
              className='search_input'
              required={testReport.isPRDUpdated == 0}
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