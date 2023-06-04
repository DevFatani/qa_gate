'use client';
import {useState, React, useEffect} from 'react';
import * as XLSX from 'xlsx';
import Link from 'next/link'

import Form from '@components/Form';

  // vc, vv | add new button | s,l,n,f
const TestCaseTable = ({ data,setTcs, handelRowClick , exportToExcel}) => {

    const handleInputNameChange = (index, event) => {
        const newInputValues = [...data];
        newInputValues[index].name = event.target.value;
        setTcs(newInputValues);
    };

    const handleInputStepsChange = (index, event) => {
        const newInputValues = [...data];
        newInputValues[index].steps = event.target.value;
        setTcs(newInputValues);
    };


    const handleInputInputDataChange = (index, event) => {
        const newInputValues = [...data];
        newInputValues[index].inputData = event.target.value;
        setTcs(newInputValues);
    };

    const handleInputExpectedResultChange = (index, event) => {
        const newInputValues = [...data];
        newInputValues[index].expectedResult = event.target.value;
        setTcs(newInputValues);
    };

    const handleInputActualResultChange = (index, event) => {
        const newInputValues = [...data];
        newInputValues[index].actualResult = event.target.value;
        setTcs(newInputValues);
    };

    return(
      <div  className='div_table_body'>
        <div style={{backgroundColor: "gray"}}>
            <button style={{width:"150px", height:"50px", backgroundColor: "yellow"}} onClick={exportToExcel}>Export to Excel</button>
        </div>
       <table className='table_body'>
           <thead>
               <tr >
                <th className='table_h table_h-text'>ID</th>
                <th className='table_h'>TestCase Name</th>
                <th className='table_h-text_selection'>Test Level</th>
                <th className='table_h-text_selection'>Test Type</th>
                <th className='table_h-text_selection'>Is negative</th>
                <th className='table_h-text_selection'>Priority</th>
                <th className='table_h'>Steps</th>
                <th className='table_h'>Input Data</th>
                <th className='table_h'>Expected Result</th>
                <th className='table_h'>Actual Result</th>
               </tr>
           </thead>
       <tbody>
           {data.map((item, index) => (
           <tr key={index}>
               <td className='table_h-text'>{item.id}</td>
               <td className='table_h-text table_name'>
                    <textarea
                        
                        className='form_textarea'
                        value={item.name}
                        onChange={(e) => handleInputNameChange(index, e)}
                    />
               </td>
               <td className='table_h-text'>

                    <select name="testLvl" id="testLvl" onChange={(e) => {
                        item.testLvl = e.target.value;
                    }}>
                        <option value="unit" defaultValue={item.testLvl === "unit"}>Unit</option>
                        <option value="integration" defaultValue={item.testLvl === "integration"}>Integration</option>
                        <option value="system" defaultValue={item.testLvl === "system"}>System</option>
                        <option value="uat" defaultValue={item.testLvl === "uat"}>UAT</option>
                    </select>

               </td>
               
               
               
               <td className='table_h-text'>
                    <select name="testType" id="testType" onChange={(e) => {
                        item.testType = e.target.value;
                    }}>
                        <option value="Function" defaultValue={item.testType === "function"}>Function</option>
                        <option value="non-function" defaultValue={item.testType === "non-function"}>Non-Function</option>
                    </select>

               </td>
              
              
              
               <td  className='table_h-text'>
                    <select name="isPostive" id="isPostive" onChange={(e) => {
                        item.isPostive = e.target.value;
                    }}>
                        <option value={1} defaultValue={item.isPostive === 1}>true</option>
                        <option value={0} defaultValue={item.isPostive === 1}>false</option>
                    </select>
                </td>
               
               <td  className='table_h-text_selection'>
                    <select name="priority" id="priority" onChange={(e) => {
                        item.priority = e.target.value;
                    }}>
                        <option value="low" defaultValue={item.priority === "low"}>low</option>
                        <option value="high" defaultValue={item.priority === "high"}>high</option>
                        <option value="med" defaultValue={item.priority === "med"}>med</option>
                    </select>
                
                </td>

                <td className='table_h-text table_name'>
                    <textarea
                        
                        className='form_textarea'
                        value={item.steps}
                        onChange={(e) => handleInputStepsChange(index, e)}
                        placeholder='your setps here 🤖'
                    />
               </td>

               <td className='table_h-text table_name'>
                    <textarea
                        className='form_textarea'
                        value={item.inputData}
                        onChange={(e) => handleInputInputDataChange(index, e)}
                        placeholder='add your Input Data 🤖'
                    />
               </td>

               <td className='table_h-text table_name'>
                    <textarea
                        className='form_textarea'
                        value={item.expectedResult}
                        onChange={(e) => handleInputExpectedResultChange(index, e)}
                        placeholder='add expected result Data 🤖'
                    />
               </td>

                <td className='table_h-text table_name'>
                    <textarea
                        className='form_textarea'
                        value={item.actualResult}
                        onChange={(e) => handleInputActualResultChange(index, e)}
                        placeholder='add actual result 🤖'
                    />
                </td>
           </tr>
           ))}
       </tbody>
       </table>
       </div>
    )
  }


const TestStatistic = ( { data }) => {
    const [numbers, setNumber] = useState({
        negative: 0,
        unitTest: 0,
        integrationTest: 0,
        systemTest: 0,
        uatTest: 0,
        highTest: 0
    });

  
        const getStatistic = () => {
            let numberOfNegative = 0;
            let numberOfUnitTest = 0;
            let numberOfIntegrationTest = 0;
            let numberOfSystemTest = 0;
            let numberOfUATTest = 0;
            let numberOfHigh = 0;
                data.map((e) => {
                    if(e.isPostive === 0) numberOfNegative++;
                    if(e.testLvl === 'unit') numberOfUnitTest++;
                    if(e.testLvl === 'integration') numberOfIntegrationTest++;
                    if(e.testLvl === 'system') numberOfSystemTest++;
                    if(e.testLvl === 'uat') numberOfUATTest++;
                    if(e.priority === 'high') numberOfHigh++;
                });

            setNumber({
                negative: numberOfNegative,
                unitTest: numberOfUnitTest,
                integrationTest: numberOfIntegrationTest,
                systemTest: numberOfSystemTest,
                uatTest: numberOfUATTest,
                highTest: numberOfHigh
            });
        }

    return (
        <div>
            <button
                type="button"
                className='orange_gradient outline_btn'
                onClick={() => getStatistic()}
            >Update Statistic</button>
            <h3>Number of negative test case: {numbers.negative} </h3>
            <h3>Number of unti test case: {numbers.unitTest} </h3>
            <h3>Number of integration case: {numbers.integrationTest} </h3>
            <h3>Number of system test case: {numbers.systemTest} </h3>            
            <h3>Number of uat test case: {numbers.uatTest} </h3>   
            <h3>Number of high test case: {numbers.highTest} </h3>            
        </div>
    )
}


const Home = () => {
    const [testCase, setTestCase] = useState({ text: '' });

    const [tcs, setTcs] = useState([]);

    const [taskName, setTaskName] = useState({text: ''});

    const [submitting, setSubmitting] = useState(false);

    const createMyTestCase =  (e) => {
        e.preventDefault();
        setSubmitting(true);
        
        console.log(testCase.text);
        let counter = 0;
        let newTCS = [];
        testCase.text.trim().split("\n").map((allTCCode) => {
            const tcCode = allTCCode.trim().split('|');
            const verifyAndCheck = tcCode[0].split(',');
            console.log(verifyAndCheck);
            const objectToTest = tcCode[1];
            const testCategory = tcCode[2].split(',');

            
        
            verifyAndCheck.map((v) => {
                let newV = v.trim().toLowerCase();
                let tcNewName = "";
                if(newV === 'vc') {
                    tcNewName = `Verify ${objectToTest} is clickable`;
                }
                if (newV === 'vv') {
                    tcNewName = `Verify ${objectToTest} is visible`;
                }
                if (newV === 'vnc') {
                    tcNewName = `Verify ${objectToTest} is not clickable`;
                }
                if (newV === 'vnv') {
                    tcNewName = `Verify ${objectToTest} is not visible`;
                }
                if (newV === '') {
                    tcNewName = "EMPTY";
                }
                newTCS.push(
                    {
                        id: counter + 1,
                        name: tcNewName,
                        testLvl: findTestLevel(testCategory),
                        testType: findTestType(testCategory),
                        isPostive: isPositive(testCategory),
                        priority: findTestPriority(testCategory),
                        steps: 'add your steps...',
                        inputData: 'input data',
                        expectedResult: 'expected result',
                        actualResult: 'actual result',
                    }

                );
                counter++;
        });
        
        console.table(newTCS);
        })
        setTcs(newTCS)
        setSubmitting(false);
    }
  
    const isPositive =  (text) => {
        let newTestDetails = 1
        text.map((cat) => {
            let newCat = cat.trim().toLowerCase();
            if(newCat === "p") {
                newTestDetails = 1;
            }
            if(newCat === "n") {
                newTestDetails = 0;
            }
            
        });
        return newTestDetails;
    }
    const findTestType =  (text) => {
        let newTestDetails = "function";
        text.map((cat) => {
            let newCat = cat.trim().toLowerCase();
            if(newCat === "f") {
                newTestDetails = "function";
            }
            if(newCat === "un") {
                newTestDetails = "non-function";
            }

            
        });
        return newTestDetails;
    }
    const findTestPriority =  (text) => {
        let newTestDetails = "med";
        text.map((cat) => {
            let newCat = cat.trim().toLowerCase();
            if(newCat === 'h') {
                newTestDetails = "high";
            }
            if(newCat === 'l') {
                newTestDetails = "low";
            }
            if(newCat === 'm') {
                newTestDetails = "med";
            }
            
        });
        return newTestDetails;
    }

    const findTestLevel =  (text) => {
        let newTestDetails = "unit";
        text.map((cat) => {
            let newCat = cat.trim().toLowerCase();
            if(newCat === "c") {
                newTestDetails = "unit";
            }
            if(newCat === "i") {
                newTestDetails = "integration";
            }
            if(newCat === "s") {
                newTestDetails = "system";
            }
            if(newCat === "u") {
                newTestDetails = "uat";
            }
            
        });
        return newTestDetails;
    }

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(tcs);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, `${taskName.text}.xlsx`);
      };
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>
                QA GATE
                <br className='max-md:hidden'/>
                <span className='orange_gradient text-center'>QA Power</span>
            </h1>
            <p className='desc text-cener'>Your gate for next QA</p>
            <Link href='/test-plan' >
                <button  style={{backgroundColor:"blue", border: "40px solid red", color: "cyan", fontSize: "100px"}}>Add your test plan</button>
            </Link>
            <Link href='/test-report' >
                <button  style={{backgroundColor:"blue", border: "40px solid red", color: "cyan", fontSize: "100px"}}>Add your test report </button>
            </Link>
            <Form 
                testCase={testCase}
                setTextCase={setTestCase}
                taskName={taskName}
                setTaskName={setTaskName}
                submitting={submitting}
                handleSubmit={createMyTestCase}
            />

           <TestStatistic data={tcs} />
           <TestCaseTable 
                data={tcs}
                setTcs={setTcs}
                exportToExcel={exportToExcel}
                handelRowClick={() => {}}
           />
           
        </section>
      )
}

export default Home