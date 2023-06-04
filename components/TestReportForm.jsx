import React from 'react'
import Link from 'next/link';
const TestReportForm = ({  testReport, setTestReport, handleSubmit, submitting}) => {
  
  return (
    <section className='w-full max-w-full flex-start flex-col'>
        {/* <h1 className='head_text text-left'><span className='blue_gradient'>Create your Test Case</span></h1>
        <p className='desc text-left max-w-md'>
        Expression Example:
        </p>
        <p className='desc text-left max-w-md' style={{color: "green"}}>
          vc, vv | add new button | s,l,n,f
        </p>
        <p className='desc text-left max-w-md' style={{color: "red"}}>
          VC = Verify add new button is clickable 
          <br />
          VV = Verify add new button is visible
        </p>
        <div className='desc text-left max-w-md'>
          <h1>Last Section</h1><br />
          <span style={{color: "orange", backgroundColor:"lightgrey"}}> C = Unit Test </span>
          <span style={{color: "blue", margin:"12px"}}> I = Integration Test </span>
          <span style={{color: "red"}}> S = System Test </span>
          <span style={{color: "brown",  margin:"12px"}}> U = UAT </span><br /><br />
          L = Low Priority, M = MED Priority, H = High Priority <br /><br />
          N = Negative, P = Postive <br /><br />
          F = Functional, UN = Non-Functional <br /><br />
        </div> */}
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
              <span className='font-satoshi font-semibold text-base text-gray-700'>Number Of Defect In (Live)</span>
                <input 
                    className='search_input'
                    value={testReport.noOfDefectInRelease  === 0 ? '' : testReport.noOfDefectInRelease}
                    onChange={(e) => setTestReport({...testReport, noOfDefectInRelease: e.target.value})}
                    placeholder='Number Of Defect In Live'
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
                required
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
          
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Is the PRD file up to date?</span>
            <br/>
                <input type="radio" id="isPRDUpdatedYes" name="isPRDUpdated" value={1}   onChange={(e) => setTestReport({...testReport, isPRDUpdated: 1})}/>
                <label htmlFor="isPRDUpdatedYes">Yes</label><br/>
                <input type="radio" id="isPRDUpdatedNo" name="isPRDUpdated" value={0}  onChange={(e) => setTestReport({...testReport, isPRDUpdated: 0})}/>
                <label htmlFor="isPRDUpdatedNo">NO</label><br />  
          </label>
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