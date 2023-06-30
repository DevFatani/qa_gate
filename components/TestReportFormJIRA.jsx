import React from 'react'
import Link from 'next/link';
import CustomInput from './daisyui/CustomInput';
import CustomTextarea from './daisyui/CustomTextarea';

const TestReportFormJIRA = ({  testReport, setTestReport, handleSubmit, submitting}) => {
  
  function customRadioButton(title, data, onChange) {
    return (
      <div style={{marginTop: '10px'}}>
        <span className='text-base-content'>{title}</span>
        {data.map((item, index) => (
          <div key={index} className="form-control">
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
    <section 
      className="card place-items-center"
    >
        <form
          onSubmit={handleSubmit}
          style={{
            // backgroundColor: "brown",
            width: "30%"
          }}

            // className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
            // className="form-control w-full max-w-xs"
            className="form-control "
        >
          <CustomInput
                require={true}
                marginTop={'10px'}
                size='max-w-lg input-md'
                placeholder='Write your name'
                value={testReport.testerName}
                onChange={(e) => setTestReport({...testReport, testerName: e.target.value})}
                label='Tester Name'
          />
          <CustomInput
                require={true}
                marginTop={'10px'}
                size='max-w-lg input-md'
                placeholder='write the project name'
                value={testReport.projectName}
                onChange={(e) => setTestReport({...testReport, projectName: e.target.value})}
                label='Project Name'
          />
          <CustomInput
                require={true}
                marginTop={'10px'}
                size='max-w-lg input-md'
                value={testReport.testRunURL}
                onChange={(e) => setTestReport({...testReport, testRunURL: e.target.value})}
                placeholder='Share your Test Run url'
                label='Test Run URL'
          />
          <CustomInput
                require={true}
                marginTop={'10px'}
                size='max-w-lg input-md'
                value={testReport.openTicketsNumber}
                onChange={(e) => setTestReport({...testReport, openTicketsNumber: e.target.value})}
                placeholder='Write down the ticket numbers (ex: aa56, aa35, etc ...)'
                label='How many tickets did you open today?'
          />
          <CustomInput
                require={true}
                marginTop={'10px'}
                size='max-w-lg input-md'
                value={testReport.backInProgressTicketsNumber}
                onChange={(e) => setTestReport({...testReport, backInProgressTicketsNumber: e.target.value})}
                placeholder='Write down the ticket numbers (ex: aa56, aa35, etc ...)'
                label='How many tickets did you move back to InProgress?'
          />
          <CustomInput
                require={true}
                marginTop={'10px'}
                size='max-w-lg input-md'
                value={testReport.closedTicketsNumber}
                onChange={(e) => setTestReport({...testReport, closedTicketsNumber: e.target.value})}
                placeholder='Write down the ticket numbers (ex: aa56, aa35, etc ...)'
                label='How many tickets did you close today?'
          />
          <CustomInput
                require={true}
                marginTop={'10px'}
                size='max-w-lg input-md'
                value={testReport.blockedTicketsNumber}
                onChange={(e) => setTestReport({...testReport, blockedTicketsNumber: e.target.value})}
                placeholder='Write down the ticket numbers (ex: aa56, aa35, etc ...)'
                label='How many tickets did you move to Block status?'
          />
          <CustomInput
                require={true}
                marginTop={'10px'}
                size='max-w-lg input-md'
                value={testReport.noOfTCExe  === 0 ? '' : testReport.noOfTCExe}
                onChange={(e) => setTestReport({...testReport, noOfTCExe: e.target.value})}
                placeholder='Number Of Test Case Executed (Today)'
                label='Number Of Test Case Executed (Today)'
                min={0}
                type='number'
          />
    
          {
            customRadioButton(
              'Did you follow up the PM or PO about the last update today?', 
              [{"id": "communicatePM", "title": "YES", "value": true}, {"id": "communicatePM", "title": "NO", "value": false}],
              (e) => setTestReport({...testReport, isPMbeenAsked: JSON.parse(e.target.value)}))
          }
          {testReport.isPMbeenAsked == false? 
            <CustomTextarea
              value={testReport.communicatePMRemark}
              onChange={(e) => setTestReport({...testReport, communicatePMRemark: e.target.value})}
              placeholder='Justify your resion'
              label='Why there is no communication with the PM or PO?'
              require={testReport.isPMbeenAsked == false}
            /> : <div/ >}

          {
            customRadioButton(
              'Is Requirmenet Changed? (Today)', 
              [{"id": "reqChanage","title": "YES", "value": true}, {"id": "reqChanage","title": "NO", "value": false}], 
              (e) => setTestReport({...testReport, isRequirmenetChange: JSON.parse(e.target.value) }))
          }

          {testReport.isRequirmenetChange? 
            <CustomTextarea
              value={testReport.requirmenetChangeRemark}
              onChange={(e) => setTestReport({...testReport, requirmenetChangeRemark: e.target.value})}
              placeholder='Justify why requirement been changed'
              label='Justify why requirement been changed'
              require={testReport.isRequirmenetChange}
            /> : <div/ >}

            {
              customRadioButton(
                'Is the PRD file up to date? (Today)', 
                [{"id": "prdFile", "title": "YES", "value": true}, {"id": "prdFile", "title": "NO", "value": false}], 
                (e) => setTestReport({...testReport, isPRDUpdated: JSON.parse(e.target.value)}))
            }
          {
            testReport.isPRDUpdated == false ? 
              <CustomTextarea
                require={testReport.isPRDUpdated == false}
                value={testReport.prdUpdatedRemark}
                onChange={(e) => setTestReport({...testReport, prdUpdatedRemark: e.target.value})}
                placeholder='Justify why PRD not up to date?'
                label='Justify why PRD not up to date'
              />:<div /> 
              
          }
              <CustomTextarea
                  value={testReport.remark}
                  onChange={(e) => setTestReport({...testReport, remark: e.target.value})}
                  placeholder='Remark'
                  label='Remark'
                />
          <div className='flex-end mx-3 mb-5 gap-4'>
            <Link href='/' className='text-gray-500 text-sm'>Cancel</Link>
          
            <button
              type='submit'
              disabled={submitting}
              className="btn btn-accent"
            >Create</button>
          </div>
        </form>

    </section>
  )
}

export default TestReportFormJIRA;