import React from 'react'
import Link from 'next/link';
const TestPlanForm = ({ 
    testPlan,
    setTestPlan,
    handleSubmit,
    submitting}) => {

      const handleTestTypeCheckboxChange = (index, event) => {
        const newInputValues = [...testPlan.testType];
        newInputValues[index].select = event.target.checked;
        setTestPlan({...testPlan, testType: newInputValues});
      }

      const handleTestLevelCheckboxChange = (index, event) => {
        const newInputValues = [...testPlan.testLevel];
        newInputValues[index].select = event.target.checked;
        setTestPlan({...testPlan, testLevel: newInputValues});
      }
  
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
                  value={testPlan.testerName}
                  onChange={(e) => setTestPlan({...testPlan, testerName: e.target.value})}
                  placeholder='write your  name'
                  required
                
                />
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Project Name</span>
                <input 
                  className='search_input'
                  value={testPlan.projectName}
                  onChange={(e) => setTestPlan({...testPlan, projectName: e.target.value})}
                  placeholder='write your task name'
                  required
                
                />
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Project URL</span>
              <input 
                className='search_input'
                value={testPlan.url}
                onChange={(e) => setTestPlan({...testPlan, url: e.target.value})}
                placeholder='write your task name'
                required
               
              />
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Overview</span>
              <input 
                className='search_input'
                value={testPlan.about}
                onChange={(e) => setTestPlan({...testPlan, about: e.target.value})}
                placeholder='write your task name'
                required
               
              />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Scope In</span>
              <textarea 
                className='form_textarea numbered'
                cols="50"
                rows="10"
                value={testPlan.scopeIn}
                onChange={(e) => setTestPlan({...testPlan, scopeIn: e.target.value})}
                placeholder='write your task name'
                required
               
              />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Scope Out</span>
              <textarea 
                className='form_textarea numbered'
                cols="50"
                rows="10"
                value={testPlan.scopeOut}
                onChange={(e) => setTestPlan({...testPlan, scopeOut: e.target.value})}
                placeholder='write your task name'
                required
              />
          </label>

          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Select Test Level</span>
              {testPlan.testLevel.map((item, index ) => (
                  <div key={index}>
                    <input className='input_checkbox_input' type="checkbox" id={`testLevel${item.name}`} name={`testLevel${item.name}`}  value={item.name} onChange={ (e) => handleTestLevelCheckboxChange(index, e)} />
                    <label className='input_checbox_label' htmlFor={`testLevel${item.name}`}>{item.name}</label><br/>
                  </div>
                  
                ))
              }
          </label>
          
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Select Test Type</span>
              {testPlan.testType.map((item, index) => ( <div key={index}>
                <input 
                      className='input_checkbox_input'
                      type="checkbox" 
                      id={`testType${item.name}`}
                      name={`testType${item.name}`}
                      value={item.name}
                      onChange={e => handleTestTypeCheckboxChange(index, e)}
                  />
                  <label  className='input_checbox_label' htmlFor={`testType${item.name}`}>{item.name}</label><br/>
                </div>
              ))
              }
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Exit Criteria</span>
              <textarea 
                className='form_textarea numbered'
                cols="50"
                rows="10"
                value={testPlan.exitCriteria}
                onChange={(e) => setTestPlan({ ...testPlan, exitCriteria: e.target.value})}
                placeholder='write your Exit Criteria'
                required
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

export default TestPlanForm;