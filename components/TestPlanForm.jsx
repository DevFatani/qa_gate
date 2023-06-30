import React from 'react'
import Link from 'next/link';
import CustomInput from './daisyui/CustomInput';
import CustomTextarea from './daisyui/CustomTextarea';
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
          <CustomInput
              value={testPlan.testerName}
              onChange={(e) => setTestPlan({...testPlan, testerName: e.target.value})}
              placeholder='Write your name'
              require={true}
              marginTop={'10px'}
              size='max-w-lg input-md'
              label='Tester Name'
          />
          <CustomInput
              value={testPlan.projectName}
              onChange={(e) => setTestPlan({...testPlan, projectName: e.target.value})}
              placeholder='Project Name'
              require={true}
              marginTop={'10px'}
              size='max-w-lg input-md'
              label='Project Name'
          />
          <CustomInput
              marginTop={'10px'}
              size='max-w-lg input-md'
              label='Project URL'
              value={testPlan.url}
              onChange={(e) => setTestPlan({...testPlan, url: e.target.value})}
              placeholder='Provide Project URL'
          />
          <CustomTextarea
              require={true}
              marginTop={'10px'}
              size='textarea-md'
              label='Overview'
              value={testPlan.about}
              onChange={(e) => setTestPlan({...testPlan, about: e.target.value})}
              placeholder='Write down a brief idea of the project'
          />

          <CustomTextarea
              require={true}
              marginTop={'10px'}
              label='Scope In'
              cols={15}
              rows={2}
              size='textarea-md'
              value={testPlan.scopeIn}
              onChange={(e) => setTestPlan({...testPlan, scopeIn: e.target.value})}
              placeholder='Write down project scope in'
          />

          <CustomTextarea
              size='textarea-md'
              require={true}
              marginTop={'10px'}
              label='Scope Out'
              cols={15}
              rows={2}
              value={testPlan.scopeOut}
              onChange={(e) => setTestPlan({...testPlan, scopeOut: e.target.value})}
              placeholder='Write down project scope out'
          />
          <CustomTextarea
              require={true}
              marginTop={'10px'}
              label='Exit Criteria'
              size='textarea-md'
              cols={15}
              rows={2}
              value={testPlan.exitCriteria}
              onChange={(e) => setTestPlan({ ...testPlan, exitCriteria: e.target.value})}
              placeholder='Write down project exit criteria'
          />
          <table 
            className="table table-sm table-pin-rows"
            style={{
              marginTop: "25px"
            }}
          >
                  <thead>
                    <tr>
                      <th className='text-primary'>TEST LEVEL</th>
                      <th>Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testPlan.testLevel.map((item, index ) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>
                            <input type="checkbox" class="checkbox" value={item.name} onChange={ (e) => handleTestLevelCheckboxChange(index, e)}/>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>

                  <thead>
                    <tr>
                      <th className='text-secondary'>TEST TYPE</th>
                      <th>Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testPlan.testType.map((item, index ) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>
                            <input type="checkbox" class="checkbox" value={item.name} onChange={ (e) => handleTestTypeCheckboxChange(index, e)}/>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
          </table>
          
          <div
            className='flex-end mx-3 mb-5 gap-4' 
            style={{
              marginTop: "15px"
            }}
          >
            <Link href='/' className="btn btn-ghost">Cancel</Link>
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

export default TestPlanForm;