import React from 'react'
import Link from 'next/link';
const Form = ({ 
    taskName,
    setTaskName,
    testCase,
    setTestCase,
    arrComponents,
    setArrComponents,
    handleSubmit,
    onGenerateComponent,
    verifyVisible,
    setVerifyVisible,
    verifyClickable,
    setVerifyClickable,
    verifyIsNotVisible,
    setVerifyIsNotVisible,
    verifyIsNotClickable,
    setVerifyIsNotClickable,
    submitting}) => {
  
  return (
    <section className='w-full max-w-full flex-start flex-col'>
        <h1 className='head_text text-left'><span className='blue_gradient'>Create your Test Case</span></h1>
        <p className='desc text-left max-w-md'>
        Expression Example:
        </p>
        <p className='desc text-left max-w-md' style={{color: "green", fontSize: "30px"}}>
          vc, vv | add new button | s,l,n,f
        </p>
        <p className='desc text-left max-w-md' style={{color: "red", fontSize: "20px"}}>
          VC = Verify add new button is clickable 
          <br />
          VV = Verify add new button is visible
        </p>

        <div className='desc text-left max-w-md'>

              <table>
              <h1 style={{backgroundColor:"lightcoral",color:'white', height:"50px", textAlign:"center", textJustify:"auto"}}>Test Level</h1>

              <tr>
                <th className='table_h-text'>Code</th>
                <th className='table_h-text'>Title</th>
              </tr>
              <tr>
                <td className='table_h-text'>C</td>
                <td className='table_h-text'>Unit Test</td>
              </tr>
              <tr>
                <td className='table_h-text'>I</td>
                <td className='table_h-text'>Integration Test</td>
              </tr>
              <tr>
                <td className='table_h-text'>S</td>
                <td className='table_h-text'>System Test</td>
              </tr>
              <tr>
                <td className='table_h-text'>U</td>
                <td className='table_h-text'>UAT Test</td>
              </tr>
              
              <h1 style={{backgroundColor:"lightcoral",color:'white', height:"50px", textAlign:"center", textJustify:"auto"}}>Test Priority</h1>
            
              <tr>
                <td className='table_h-text'>L</td>
                <td className='table_h-text'>Low Proirity</td>
              </tr>
              <tr>
                <td className='table_h-text'>M</td>
                <td className='table_h-text'>Medium Proirity</td>
              </tr>
              <tr>
                <td className='table_h-text'>H</td>
                <td className='table_h-text'>High Proirity</td>
              </tr>

              <h1 style={{backgroundColor:"lightcoral",color:'white', height:"50px", textAlign:"center", textJustify:"auto"}}>Test Type</h1>
            <tr>
              <td className='table_h-text'>F</td>
              <td className='table_h-text'>Functional</td>
            </tr>
            <tr>
              <td className='table_h-text'>UN</td>
              <td className='table_h-text'>Non-Functional</td>
            </tr>
            <tr>
              <td className='table_h-text'>R</td>
              <td className='table_h-text'>Regression</td>
            </tr>
            <tr>
              <td className='table_h-text'>US</td>
              <td className='table_h-text'>Usability</td>
            </tr>
            <tr>
              <td className='table_h-text'>COM</td>
              <td className='table_h-text'>Compatibility</td>
            </tr>

            <h1 style={{backgroundColor:"lightcoral",color:'white', height:"50px", textAlign:"center", textJustify:"auto"}}>Test Behavior</h1>
            
            <tr>
              <td className='table_h-text'>P</td>
              <td className='table_h-text'>Positive</td>
            </tr>
            <tr>
              <td className='table_h-text'>N</td>
              <td className='table_h-text'>Negative</td>
            </tr>
            </table> 
        </div>
        <form
          onSubmit={handleSubmit}
          className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
        >

            <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Task Name</span>
              <input 
                className='search_input'
                value={taskName.text}
                onChange={(e) => setTaskName({text: e.target.value})}
                placeholder='write your task name'
                required
              />
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Add Your Components Here like (button, input, form, etc ..)</span>
              <input 
                className='search_input'
                value={arrComponents.text}
                onChange={(e) => setArrComponents({ text: e.target.value})}
                placeholder='Add your components here'
              />
              <button className='random_button' type='button'
                onClick={() => {
                  if(arrComponents.text)
                    onGenerateComponent();
                }}
              >Generate </button><br />
              <input type="checkbox" id="genComponentCheckboxAddVV" name="genComponentCheckboxAddVV" value={verifyVisible} onClick ={(e)=> setVerifyVisible(e.target.checked)} />
              <label for="genComponentCheckboxAddVV">Add VV to each component</label><br/>
              <input type="checkbox" id="genComponentCheckboxAddVC" name="genComponentCheckboxAddVC"  value={verifyClickable} onClick={(e)=> setVerifyClickable(e.target.checked)}/>
              <label for="genComponentCheckboxAddVC">Add VC to each component</label><br/>
              <input type="checkbox" id="genComponentCheckboxAddVNV" name="genComponentCheckboxAddVNV" value={verifyIsNotVisible}  onClick={(e)=> setVerifyIsNotVisible(e.target.checked)}/>
              <label for="genComponentCheckboxAddVNV">Add VNV to each component</label><br/>
              <input type="checkbox" id="genComponentCheckboxAddVNC" name="genComponentCheckboxAddVNC"  value={verifyIsNotClickable} onClick={(e)=> setVerifyIsNotClickable(e.target.checked)}/>
              <label for="genComponentCheckboxAddVNC">Add VNC to each component</label><br/><br/>
          </label>

          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Your Test cases here</span>
            <textarea 
              value={testCase.text}
              onChange={(e) => setTestCase({text: e.target.value})}
              placeholder='write your qa test case here'
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