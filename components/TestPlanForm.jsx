import React from 'react'
import Link from 'next/link';
const TestPlanForm = ({ 
    testPlan,
    setTestPlan,
    handleSubmit,
    submitting}) => {
  
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
              <span className='font-satoshi font-semibold text-base text-gray-700'>scope In</span>
              <textarea 
                className='search_input'
                value={testPlan.scopeIn}
                onChange={(e) => setTestPlan({...testPlan, scopeIn: e.target.value})}
                placeholder='write your task name'
                required
               
              />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>scope Out</span>
              <textarea 
                className='search_input'
                value={testPlan.scopeOut}
                onChange={(e) => setTestPlan({...testPlan, scopeOut: e.target.value})}
                placeholder='write your task name'
                required
              />
          </label>


          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Select Test Level</span>
            <select    className='search_input' name="testLevel" id="testLevel" multiple onChange={(e) => {
                setTestPlan({...testPlan, testLevel: Array.from(e.target.selectedOptions, option => option.value)})
            }}>
              <option value="Unit">Unit</option>
              <option value="Inegration">Inegration</option>
              <option value="System">System</option>
              <option value="UAT">UAT</option>
            </select>
          </label>
          
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Select Test Type</span>
            <select   className='search_input' name="testLevel" id="testLevel" multiple onChange={(e) => {
                setTestPlan({...testPlan, testType: Array.from(e.target.selectedOptions, option => option.value)})
            }}>
              <option value="function">Function</option>
              <option value="non-function">Non Function</option>
              <option value="api">API Testing</option>
              <option value="postive negative">Postive and Negative</option>
              <option value="usability">Usability Testing</option>
              <option value="compatibility">Compatibility Testing</option>
              <option value="static">Static Testing</option>
              <option value="dynamic">Dynamic Testing</option>
              <option value="smoke">Smoke Testing</option>
              <option value="sanity">Sanity Testing</option>
            </select>
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Exit Criteria</span>
              <textarea 
                className='search_input'
                value={testPlan.exitCriteria}
                onChange={(e) => setTestPlan({ ...testPlan, exitCriteria: e.target.value})}
                placeholder='write your Exit Criteria'
                required
              />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Is it need mobile Testing</span>
              <input  type="checkbox"  id="is_mobile" value={1} onChange={(e) => setTestPlan({...testPlan, isMobile: e.target.value})}/>
              <label style={{color: "white", backgroundColor:"red", fontSize:"20px"}} htmlFor="is_mobile"> yes the project require to test mobile</label>
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Is it api testing</span>
              <input type="checkbox" id="is_api" value={1} onChange={(e) => setTestPlan({...testPlan, isAPI: e.target.value})}/>
              <label style={{color: "white", backgroundColor:"red", fontSize:"20px"}} htmlFor="is_api"> yes the project require to test api</label>
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