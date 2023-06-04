import React from 'react'
import Link from 'next/link';
const Form = ({ 
    taskName,
    setTaskName,
    testCase,
    setTextCase,
    handleSubmit,
    submitting}) => {
  
  return (
    <section className='w-full max-w-full flex-start flex-col'>
        <h1 className='head_text text-left'><span className='blue_gradient'>Create your Test Case</span></h1>
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
        </div>
        <form
          onSubmit={handleSubmit}
          className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
        >

            <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Task Name</span>
              <input 
                className='search_input'
                value={taskName.ext}
                onChange={(e) => setTaskName({text: e.target.value})}
                placeholder='write your task name'
                required
               
              />
          </label>
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Your Test cases here</span>
            <textarea 
              value={testCase.text}
              onChange={(e) => setTextCase({text: e.target.value})}
              placeholder='write your qa test case here'
              required
              className='form_textarea'
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

export default Form;