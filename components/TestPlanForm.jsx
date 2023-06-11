import React from 'react'
import Link from 'next/link';
const TestPlanForm = ({ 
    testPlan,
    setTestPlan,
    handleSubmit,
    submitting}) => {

      function handleTestTypeCheckboxChange(event) {
        const value = event.target.value;
        if (event.target.checked) {
          setTestPlan({ ...testPlan, testType: [...testPlan.testType, value] });
        } else {
          setTestPlan({ ...testPlan, testType: [...testPlan.testType].filter(item => item != value) });
        }
      }

      function handleTestLevelCheckboxChange(event) {
        const value = event.target.value;
        if (event.target.checked) {
          setTestPlan({ ...testPlan, testLevel: [...testPlan.testLevel, value] });
        } else {
          setTestPlan({ ...testPlan, testType: [...testPlan.testLevel].filter(item => item != value) });
        }
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
    
              <br />
              <input  className='input_checkbox_input' type="checkbox" id="testLevelUnit" name="testLevelUnit"  value="Unit" onChange={handleTestLevelCheckboxChange} />
              <label   className='input_checbox_label' for="testLevelUnit">Unit</label><br/>
          
              <input  className='input_checkbox_input' type="checkbox" id="testLevelIntegration" name="testLevelIntegration"  value="Integration" onChange={handleTestLevelCheckboxChange}/>
              <label className='input_checbox_label' for="testLevelIntegration">Integration</label><br/>
             
              <input className='input_checkbox_input'  type="checkbox" id="testLevelSystem" name="testLevelSystem" value="System" onChange={handleTestLevelCheckboxChange} />
              <label  className='input_checbox_label' for="testLevelSystem">System</label><br/>
          
              <input className='input_checkbox_input'  type="checkbox" id="testLevelUAT" name="testLevelUAT"  value="UAT" onChange={handleTestLevelCheckboxChange} />
              <label  className='input_checbox_label' for="testLevelUAT">UAT</label><br/>
          </label>
          
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Select Test Type</span>
          
              <br />
              <input  className='input_checkbox_input' type="checkbox" id="testTypeFunction" name="testTypeFunction" value="Function" onChange={handleTestTypeCheckboxChange} />
              <label   className='input_checbox_label' for="testTypeFunction">Function</label><br/>
          
              <input  className='input_checkbox_input' type="checkbox" id="testTypeFunctionNonFunction" name="testTypeFunctionNonFunction"  value="Non-Function" onChange={handleTestTypeCheckboxChange}/>
              <label className='input_checbox_label' for="testTypeFunctionNonFunction">Non-Function</label><br/>
             
              <input className='input_checkbox_input'  type="checkbox" id="testTypeAPI" name="testTypeAPI" value="API" onChange={handleTestTypeCheckboxChange} />
              <label  className='input_checbox_label' for="testTypeAPI">Api</label><br/>
          
              <input className='input_checkbox_input'  type="checkbox" id="testTypeUsability" name="testTypeUsability"  value="Usability" onChange={handleTestTypeCheckboxChange} />
              <label  className='input_checbox_label' for="testTypeUsability">Usability</label><br/>

              <input className='input_checkbox_input'  type="checkbox" id="mobileTesting" name="mobileTesting"  value="Mobile Testing" onChange={handleTestTypeCheckboxChange} />
              <label  className='input_checbox_label' for="mobileTesting">Mobile Testing</label><br/>

              <input className='input_checkbox_input'  type="checkbox" id="smokeTesting" name="smokeTesting"  value="Smoke Testing" onChange={handleTestTypeCheckboxChange} />
              <label  className='input_checbox_label' for="smokeTesting">Smoke Testing</label><br/>
             
              <input className='input_checkbox_input' type="checkbox" id="staticDynamicTesting" name="staticDynamicTesting"  value="Static and Dynamic Testing" onChange={handleTestTypeCheckboxChange} />
              <label  className='input_checbox_label' for="staticDynamicTesting">Static and Dynamic Testing</label><br/><br/>
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