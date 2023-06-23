import React from 'react'
import Link from 'next/link';
const Form = ({ 
    testCase,
    setTestCase,
    arrComponents,
    setArrComponents,
    handleSubmit,
    onGenerateComponent,
    submitting
  }) => {
  
    const handleCheckboxChange = (index, event) => {
      const newInputValues = [...arrComponents.keywords];
      newInputValues[index].select = event.target.checked;
      setArrComponents({...arrComponents, keywords: newInputValues});
  }

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
          VC = Verify add new button is Clickable 
          <br />
          VV = Verify add new button is Visible
          <br />
          VF = Verify add new button is Functioning
          <br />
          VE = Verify add new button is Enabled
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
              <span className='font-satoshi font-semibold text-base text-gray-700'>Test Case Title</span>
              <input 
                className='search_input'
                value={testCase.fileName}
                onChange={(e) => setTestCase({...testCase, fileName: e.target.value})}
                placeholder='Write down you test case title'
                required
              />
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Add Your Components Here like (button, input, form, etc ..)</span>
              <textarea 
                className='search_input'
                value={arrComponents.text}
                onChange={(e) => setArrComponents({ ...arrComponents, text: e.target.value})}
                placeholder='Add your components here'
              />
              <button className='random_button' type='button'
                onClick={() => {
                  if(arrComponents.text)
                    onGenerateComponent();
                }}
              >Generate </button><br />

              {arrComponents.keywords.map((item, index) => (<div key={index}>
                  <input
                    type="checkbox"
                    id={`genComponentsKeyword${index}`}
                    name={`genComponentsKeyword${index}`}
                    value={item.select}
                    onClick ={(e)=> handleCheckboxChange(index, e)} />
                  <label htmlFor={`genComponentsKeyword${index}`}>
                    Add <span style={{color:"red"}}>{item.code.toUpperCase()}</span> to each component
                  </label><br/>
              </div>))}
          </label>

          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Your Test cases here</span>
            <textarea 
              value={testCase.text}
              onChange={(e) => setTestCase({ ...testCase, text: e.target.value})}
              placeholder='write your qa test case here'
              className='form_textarea numbered'
              cols="50"
              rows="10"
            />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>General Steps (Steps will be in all the test cases)</span>
              <textarea 
                className='form_textarea numbered'
                cols="50"
                rows="10"
                value={testCase.steps}
                onChange={(e) => setTestCase({ ...testCase, steps: e.target.value})}
                placeholder='General Steps (Steps will be in all the test cases)'
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
  );
}

export default Form;