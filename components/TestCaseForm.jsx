import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'

import CustomInput from './daisyui/CustomInput';
import CustomTextarea from './daisyui/CustomTextarea';
import CustomCheckbox from './daisyui/CustomCheckbox';
const TestCaseForm = ({ 
    testCase,
    setTestCase,
    arrComponents,
    setArrComponents,
    handleSubmit,
    onGenerateComponent,
    decisionTable, 
    setDecisionTable,
    onGenerateDecisionTable,
    submitting
  }) => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => setToggleState(index);
    
    const Tabs =() => (
      <div  >
          <div className="card place-items-center">
            <div className="tabs tab-lifted">
              <a className={`${toggleState === 1 ? "tab-active" : ""} tab tab-lifted`} onClick={() => toggleTab(1)}>
                Add By Components
              </a> 
              <a className={`${toggleState === 2 ? "tab-active" : ""} tab tab-lifted`} onClick={() => toggleTab(2)}>
                Create By Decision Table
              </a> 
            </div>
          </div>
              
          <div className={`${toggleState === 1 ? "active-content" : "content"} flex flex-col w-full lg:flex-row`}>
            <div className="grid flex-grow">
              <CustomTextarea
                placeholder={'Add Your Components Here like (button, input, form, etc ..)'}
                value={arrComponents.text}
                rows={5}
                onChange={(e) => setArrComponents({ ...arrComponents, text: e.target.value})}
                label='Add your compoenets'
              />
              <button 
                className="btn btn-outline btn-primary"
                type='button'
                onClick={() => { if(arrComponents.text) onGenerateComponent();}}
              >Generate </button><br />
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid flex-grow">
              {arrComponents.keywords.map((item, index) => (<CustomCheckbox
                      key={index}
                      value={item.select}
                      id={`genComponentsKeyword${index}`}
                      name={`genComponentsKeyword${index}`}
                      onClick ={(e)=> handleCheckboxChange(index, e)}
                      title={`Add ${item.code.toUpperCase()} to each component`}
                    />
                ))}
            </div>
          </div>

          <div className={`${toggleState === 2 ? "active-content" : "content"} flex flex-col w-full lg:flex-row`}>
            <div className="grid flex-grow">
              <div className="text-xl font-medium" style={{marginTop: "15px"}}>
                 Create Your test cases by Decision Table
              </div>
              <CustomInput
                marginTop={'10px'}
                label={'Add Test Condition'}
                size='max-w-lg input-md'
                value={decisionTable.testCondition}
                onChange={(e) => setDecisionTable({ ...decisionTable, testCondition: e.target.value})}
                placeholder='Test Condition by like (email, password, etc ..)'
              />
              <div className="flex w-full" style={{marginTop: "15px"}}>
                <div className="flex-grow card">
                  <CustomInput
                    value={decisionTable.testRole1}
                    onChange={(e) => setDecisionTable({ ...decisionTable, testRole1: e.target.value})}
                    label={'Add Test Rule 1'}
                    placeholder='Test Rule 1 ex: (valid, invalid)'
                    marginTop={'5px'}
                    size='max-w-xs input-sm'
                  />
                </div>
                <div className=" divider-horizontal" />
                <div className="flex-grow card">
                  <CustomInput
                    value={decisionTable.testRole2}
                    onChange={(e) => setDecisionTable({ ...decisionTable, testRole2: e.target.value})}
                    label={'Add Test Rule 2'}
                    placeholder='Test Rule 2 ex: (valid, invalid)'
                    marginTop={'5px'}
                    size='max-w-xs input-sm'
                  />
                </div>
              </div>
              <button
                style={{marginTop: "15px"}}
                className="btn btn-outline btn-primary"
                type='button'
                onClick={() => { if(decisionTable.testCondition && decisionTable.testRole1 && decisionTable.testRole2) onGenerateDecisionTable();}}
              >Generate </button><br />
            </div>
          </div>
      </div>
    );

    const handleCheckboxChange = (index, event) => {
      const newInputValues = [...arrComponents.keywords];
      newInputValues[index].select = event.target.checked;
      setArrComponents({...arrComponents, keywords: newInputValues});
    }
  

  return (
    <section
      style={{
        // backgroundColor: "green",
        // width: "100%"
      }}
      className="card place-items-center"
    >
        
        <form
        style={{
          // backgroundColor: "brown",
          width: "38%"
        }}
          onSubmit={handleSubmit}
          // className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
          // className="form-control w-full max-w-xs"
          className="form-control "
        >
          <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
              How to write test case with code format?
            </div>
            <div className="collapse-content"> 
                <Image
                  src='/assets/images/test-case-builder2.png' 
                  alt='logo'
                  width={16130}
                  height={11130}
                  // className='object-contain'
                />
                
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
            What to write in left side of the test case code?
            </div>
            <div className="collapse-content"> 
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Expression</th>
                    </tr>
                  </thead>
                  <tbody>
                  {arrComponents.keywords.map((item, index) => (<tr key={index}>
                      <td>
                        <p>{item.code.toUpperCase()}</p>
                      </td>
                      <td>
                        {item.start} (Test Component) {item.end}
                      </td>
                    </tr>
                ))}
                  </tbody>
                </table>
                
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
            What to write in right side of the test case code?
            </div>
            <div className="collapse-content"> 
            <div className="overflow-x-auto h-96">
                <table className="table table-md table-pin-rows">
                <thead>
                  <tr>
                    <th className='text-primary'>TEST LEVEL</th>
                    <th>Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Unit Test</td>
                    <td>C</td>
                  </tr>
                  <tr>
                    <td>Integration Test</td>
                    <td>I</td>
                  </tr>
                  <tr>
                    <td>System Test</td>
                    <td>S</td>
                  </tr>
                  <tr>
                    <td>UAT Test</td>
                    <td>U</td>
                  </tr>
                </tbody>
                
                <thead>
                  <tr>
                    <th className='text-info'>Test Priority</th>
                    <th>Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Low Proirity</td>
                    <td>L</td>
                  </tr>
                  <tr>
                    <td>Medium Proirity</td>
                    <td>M</td>
                  </tr>
                  <tr>
                    <td>High Proirity</td>
                    <td>H</td>
                  </tr> 
                </tbody>

                <thead>
                  <tr>
                    <th className='text-warning'>Test Type</th>
                    <th>Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Functional</td>
                    <td>F</td>
                  </tr>
                  <tr>
                    <td>Non-Functional</td>
                    <td>UN</td>
                  </tr>
                  <tr>
                    <td>Regression</td>
                    <td>R</td>
                  </tr>
                  <tr>
                    <td>Usability</td>
                    <td>US</td>
                  </tr>
                  <tr>
                    <td>Compatibility</td>
                    <td>COM</td>
                  </tr>
                </tbody>

                <thead>
                  <tr>
                    <th className='text-accent-focus'>Test Behavior</th>
                    <th>Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Positive</td>
                    <td>P</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>N</td>
                  </tr>
                </tbody>
                </table>
              </div>
                
            </div>
          </div>
          <div
            style={{
              // backgroundColor: "rebeccapurple",
              width: "100%",
              marginBottom: "30px"
            }}
          >
            <CustomInput
              label={'Project Title'}
              value={testCase.fileName}
              onChange={(e) => setTestCase({...testCase, fileName: e.target.value})}
              placeholder='Write down the project title'
              required={true}
            />
          </div>
          
          {Tabs()}

          <CustomTextarea
              marginTop={'20px'}
              value={testCase.text}
              onChange={(e) => setTestCase({ ...testCase, text: e.target.value})}
              label='Your Test cases here'
              rows={10}
              numbered={true}
          />
          <CustomTextarea
              value={testCase.steps}
              onChange={(e) => setTestCase({ ...testCase, steps: e.target.value})}
              label='General Steps (Steps will be in all the test cases)'
              cols={20}
              rows={10}
              numbered={true}
          />
          <div className='flex-end mx-3 mb-5 gap-4'>
            {/* <Link href='/' className='text-gray-500 text-sm'>
              <button className="btn btn-active btn-ghost">
                Cancel
              </button>
            </Link> */}
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

export default TestCaseForm;