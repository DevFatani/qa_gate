import React from 'react'
import Link from 'next/link';
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
    submitting
  }) => {
  
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
          

          <div className="flex flex-col w-full lg:flex-row">
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
            <div className="grid flex-grow ">
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

          <CustomTextarea
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
            <Link href='/' className='text-gray-500 text-sm'>
              <button className="btn btn-active btn-ghost">
                Cancel
              </button>
            </Link>
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