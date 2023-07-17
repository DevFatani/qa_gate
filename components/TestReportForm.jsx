import React from 'react'
import Link from 'next/link';
import CustomInput from './daisyui/CustomInput';
import CustomTextarea from './daisyui/CustomTextarea';
const TestReportForm = ({  testReport, setTestReport, handleSubmit, submitting}) => {
  
  function customRadioButton(title, data, onChange) {
    return (
      <div style={{marginTop: '10px'}}>
        <span className='text-base-content'>{title}</span>
        {data.map((item, index) => (
          <div key={index}>
            <label className="label cursor-pointer">
              <span className="label-text">{item.title}</span> 
              <input 
                type="radio" 
                name={item.id}
                value={item.value}
                className="radio radio-md" 
                onChange={onChange}
              />
            </label>
        </div>))}
      </div>
    );
  }

  return (
    <section className="card place-items-center">
        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: "15px",
            // backgroundColor: "brown",
            width: "30%"
          }}
          className="form-control"
        >
          {
            customRadioButton(
              'What type of test report?', 
              [
                {
                  "id": "testReportType",
                  "title": "Development Environment", 
                  "value": false
                }, 
                {
                  "id": "testReportType",
                  "title": "Live Environment", 
                  "value": true
                }
              ],
              (e) => setTestReport({...testReport, isLiveReport: JSON.parse(e.target.value)}))
          }
          <CustomInput
              require={true}
              marginTop={'10px'}
              size='max-w-lg input-md'
              value={testReport.testerName}
              onChange={(e) => setTestReport({...testReport, testerName: e.target.value})}
              placeholder='Write your name'
              label='Tester Name'
          />

          <CustomInput
              require={true}
              marginTop={'10px'}
              size='max-w-lg input-md'
              value={testReport.projectName}
              onChange={(e) => setTestReport({...testReport, projectName: e.target.value})}
              placeholder='Write the project name'
              label='Project Name'
          />

          <CustomInput
              require={true}
              marginTop={'10px'}
              size='max-w-lg input-md'
              type={'url'}
              value={testReport.url}
              onChange={(e) => setTestReport({...testReport, url: e.target.value})}
              placeholder='Project or Task URL'
              label='Project URL'
          />

          <CustomInput
              require={true}
              marginTop={'10px'}
              size='max-w-lg input-md'
              value={testReport.testRunURL}
              type={'url'}
              onChange={(e) => setTestReport({...testReport, testRunURL: e.target.value})}
              placeholder='Share your Test Run url'
              label='Test Run URL'
          />

          <CustomInput
              require={true}
              marginTop={'10px'}
              size='max-w-lg input-md'
              min={0}
              value={testReport.noDefectFound  === 0 ? '' : testReport.noDefectFound}
              onChange={(e) => setTestReport({...testReport, noDefectFound: e.target.value})}
              placeholder='Number Of Defect Found Today'
              type='number'
              label='Number Of Defect Found (Today)'
          />

          <CustomInput
              require={true}
              marginTop={'10px'}
              size='max-w-lg input-md'
              min={0}
              value={testReport.noDefectSolved === 0 ? '' : testReport.noDefectSolved}
              onChange={(e) => setTestReport({...testReport, noDefectSolved: e.target.value})}
              placeholder='Number Of Defect Solved'
              type='number'
              label='Number Of Defect Solved (Today)'
          />

          <CustomInput
              require={true}
              marginTop={'10px'}
              size='max-w-lg input-md'
              min={0}
              value={testReport.noOfTCExe  === 0 ? '' : testReport.noOfTCExe}
              onChange={(e) => setTestReport({...testReport, noOfTCExe: e.target.value})}
              placeholder='Number Of Test Case Executed'
              type='number'
              label='Number Of Test Case Executed (Today)'
          />
          <CustomInput
              require={true}
              marginTop={'10px'}
              size='max-w-lg input-md'
              min={0}
              value={testReport.noOfDefectInRequirement  === 0 ? '' : testReport.noOfDefectInRequirement}
              onChange={(e) => setTestReport({...testReport, noOfDefectInRequirement: e.target.value})}
              placeholder='Number Of Defect In Requirement'
              type='number'
              label='Number Of Defect In Requirement (Today)'
          />

          <CustomInput
              require={true}
              marginTop={'10px'}
              size='max-w-lg input-md'
              min={0}
              value={testReport.noOfDefectBlock  === 0 ? '' : testReport.noOfDefectBlock}
              onChange={(e) => setTestReport({...testReport, noOfDefectBlock: e.target.value})}
              placeholder='Number Of Defect In Block'
              type='number'
              label='Number Of Defect In Block (Today)'
          />
          <CustomInput
              require={true}
              marginTop={'10px'}
              size='max-w-lg input-md'
              min={0}
              value={testReport.noOfDefectMajor  === 0 ? '' : testReport.noOfDefectMajor}
              onChange={(e) => setTestReport({...testReport, noOfDefectMajor: e.target.value})}
              placeholder='Number Of (Major) Defect'
              type='number'
              label='Number Of (Major) Defect (Today)'
          />

          <CustomInput
              require={false}
              marginTop={'10px'}
              size='max-w-lg input-md'
              min={0}
              value={testReport.releaseDate}
              onChange={(e) => setTestReport({...testReport, releaseDate: e.target.value})}
              placeholder='write your task name'
              type='datetime-local'
              label='Release Date'
          />

          {
            customRadioButton(
              'Is the task need to back (In-Progress) ?', 
              [
                {
                  "id": "backInProgress",
                  "title": "NO", 
                  "value": false
                }, 
                {
                  "id": "backInProgress",
                  "title": "YES", 
                  "value": true
                }
              ],
              (e) => setTestReport({...testReport, isTaskNeedToBackInProgress: JSON.parse(e.target.value)}))
          }

          {
            customRadioButton(
              'Is Requirmenet Changed ? (Today)', 
              [
                {
                  "id": "isRequirmenetChange",
                  "title": "NO", 
                  "value": false
                },
                {
                  "id": "isRequirmenetChange",
                  "title": "YES", 
                  "value": true
                }
              ],
              (e) => setTestReport({...testReport, isRequirmenetChange: JSON.parse(e.target.value)}))
          }

          {testReport.isRequirmenetChange? 
            <CustomTextarea
              require={testReport.isRequirmenetChange}
              value={testReport.requirmenetChangeRemark}
              onChange={(e) => setTestReport({...testReport, requirmenetChangeRemark: e.target.value})}
              placeholder='Justify why requirement been changed'
              label='Justify why requirement been changed'
            /> : <div/ >}
          
          {
            customRadioButton(
              'Is the PRD file up to date? (Today)', 
              [
                {
                  "id": "isPRDUpdated",
                  "title": "NO", 
                  "value": false
                }, 
                {
                  "id": "isPRDUpdated",
                  "title": "YES", 
                  "value": true
                }
              ],
              (e) => setTestReport({...testReport, isPRDUpdated: JSON.parse(e.target.value)}))
          }

          {testReport.isPRDUpdated == false? 
            <CustomTextarea
              require={testReport.isPRDUpdated == false}
              value={testReport.prdUpdatedRemark}
              onChange={(e) => setTestReport({...testReport, prdUpdatedRemark: e.target.value})}
              placeholder='Justify why PRD not up to date?'
              label='Justify why PRD not up to date?'
            /> : <div/ >}

          <CustomTextarea
              className='search_input'
              value={testReport.remark}
              onChange={(e) => setTestReport({...testReport, remark: e.target.value})}
              placeholder='Remark'
              label='Remark'
          />

          <div className='flex-end mx-3 mb-5 gap-4 mt-5'>
            <Link href='/' className="btn btn-ghost">Cancel</Link>
            <button
              type='submit'
              disabled={submitting}
              className="btn btn-accent"
            >Create</button>
          </div>
        </form>
    </section>
  );
}

export default TestReportForm;