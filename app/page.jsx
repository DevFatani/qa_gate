'use client';
import {useState, React, useEffect} from 'react';
import * as XLSX from 'xlsx';
import Link from 'next/link'
import { fakerDE as faker } from '@faker-js/faker';

import Form from '@components/Form';

const UNIT_TEST = "Unit";
const INTEGRATION_TEST = "Integration";
const SYSTEM_TEST = "System";
const UAT_TEST = "UAT";

const PRIORITY_HIGH = "High";
const PRIORITY_MEDIUM = "Medium";
const PRIORITY_LOW = "Low";

const TEST_TYPE_FUNCTIONAL = "Functional";
const TEST_TYPE_NONFUNCTIONAL = "Non-Functional";
const TEST_TYPE_REGRESSION = "Regression";
const TEST_TYPE_USABILITY = "Usability";
const TEST_TYPE_COMPATIBILITY = "Compatibility";

const TEST_BEHAVIOR_POSITIVE = "Positive";
const TEST_BEHAVIOR_NEGATIVE = "Negative";

const CODE_KEYWORK = [
    {code: 'vv', start: 'Verify', end: 'is visible'},
    {code: 'vnv', start: 'Verify', end: 'is not visible'},
    
    {code: 'vc', start: 'Verify', end: 'is clickable'},
    {code: 'vnc', start: 'Verify', end: 'is not clickable'},
    
    {code: 've', start: 'Verify', end: 'is enabled'},
    {code: 'vne', start: 'Verify', end: 'is not enabled'},
    
    {code: 'vf', start: 'Verify', end: 'is functioning'},
    {code: 'vnf', start: 'Verify', end: 'is not functioning'}
]

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


    const handleInputInputDataChange = (index, event, text) => {
        const newInputValues = [...data];
        newInputValues[index].inputData = event === null ? `${newInputValues[index].inputData} ${text}` : event.target.value;
        setTcs(newInputValues);
    };

    const handleClearInputDataChange = (index, event) => {
        const newInputValues = [...data];
        newInputValues[index].inputData = '';
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
        <div>
            <button 
                style={{
                    width:"100%",
                    height:"50px",
                    fontWeight: 900,
                    fontSize: "20px",
                    backgroundColor: "lightsalmon"
                }} 
                onClick={exportToExcel}
            >Export to Excel</button>
        </div>
       <table className='table_body'>
           <thead>
               <tr >
                <th className='table_h-text_id'>#ID</th>
                <th className='table_h-text'>TestCase Title</th>
                <th className='table_h-text_selection'>Test Level</th>
                <th className='table_h-text_selection'>Test Type</th>
                <th className='table_h-text_selection'>Test Behavior</th>
                <th className='table_h-text_selection'>Priority</th>
                <th className='table_h-text'>Steps</th>
                <th className='table_h-text'>Input Data</th>
                <th className='table_h-text'>Expected Result</th>
                <th className='table_h-text'>Actual Result</th>
               </tr>
           </thead>
       <tbody>
           {data.map((item, index) => (
           <tr key={index}>
               <td className='table_h-text_id'>{item.id}</td>
               <td className='table_h-text table_name'>
                    <textarea
                        
                        className='form_textarea'
                        value={item.name}
                        onChange={(e) => handleInputNameChange(index, e)}
                    />
               </td>
               <td className='table_h-text_selection'>
                    <span className='select_span_text'>Select Test Level</span>
                    <br />
                    <select
                        name="testLvl"
                        id="testLvl"
                        onChange={(e) => { item.testLvl = e.target.value;}}
                        className='select_box'   
                    >
                        <option value={UNIT_TEST} selected={item.testLvl === UNIT_TEST}>{UNIT_TEST}</option>
                        <option value={INTEGRATION_TEST} selected={item.testLvl === INTEGRATION_TEST}>{INTEGRATION_TEST}</option>
                        <option value={SYSTEM_TEST} selected={item.testLvl === SYSTEM_TEST}>{SYSTEM_TEST}</option>
                        <option value={UAT_TEST} selected={item.testLvl === UAT_TEST}>{UAT_TEST}</option>
                    </select>

               </td>
               
               
               
               <td className='table_h-text_selection'>
                    <span className='select_span_text'>Select Test Type</span>
                    <br />
                    <select 
                        name="testType"
                        id="testType"
                        onChange={(e) => {item.testType = e.target.value;}}
                        className='select_box'       
                    >
                        <option value={TEST_TYPE_FUNCTIONAL} selected={item.testType === TEST_TYPE_FUNCTIONAL}>{TEST_TYPE_FUNCTIONAL}</option>
                        <option value={TEST_TYPE_NONFUNCTIONAL} selected={item.testType === TEST_TYPE_NONFUNCTIONAL}>{TEST_TYPE_NONFUNCTIONAL}</option>
                        <option value={TEST_TYPE_REGRESSION} selected={item.testType === TEST_TYPE_REGRESSION}>{TEST_TYPE_REGRESSION}</option>
                        <option value={TEST_TYPE_USABILITY} selected={item.testType === TEST_TYPE_USABILITY}>{TEST_TYPE_USABILITY}</option>
                        <option value={TEST_TYPE_COMPATIBILITY} selected={item.testType === TEST_TYPE_COMPATIBILITY}>{TEST_TYPE_COMPATIBILITY}</option>
                    </select>

               </td>
              
              
              
               <td className='table_h-text_selection'>
                    <span className='select_span_text'>Select Test Behavior</span>
                    <br />
                    <select 
                        name="isPostive"
                        id="isPostive"
                        onChange={(e) => {item.isPostive = e.target.value;}}
                        className='select_box'       
                    >
                        <option value={TEST_BEHAVIOR_POSITIVE} selected={item.isPostive === TEST_BEHAVIOR_POSITIVE}>{TEST_BEHAVIOR_POSITIVE}</option>
                        <option value={TEST_BEHAVIOR_NEGATIVE} selected={item.isPostive === TEST_BEHAVIOR_NEGATIVE}>{TEST_BEHAVIOR_NEGATIVE}</option>
                    </select>
                </td>
               
               <td  className='table_h-text_selection'>
                    <span className='select_span_text'>Select Test Type</span>
                    <br />
                    <select
                        name="priority" 
                        id="priority" 
                        onChange={(e) => {item.priority = e.target.value;}}
                        className='select_box' 
                    >
                        <option value={PRIORITY_HIGH} selected={item.priority === PRIORITY_HIGH}>{PRIORITY_HIGH}</option>
                        <option value={PRIORITY_MEDIUM} selected={item.priority === PRIORITY_MEDIUM}>{PRIORITY_MEDIUM}</option>
                        <option value={PRIORITY_LOW} selected={item.priority === PRIORITY_LOW}>{PRIORITY_LOW}</option>
                    </select>
                
                </td>

                <td className='table_h-text table_name'>
                    <textarea
                        className='form_textarea'
                        value={item.steps}
                        onChange={(e) => handleInputStepsChange(index, e)}
                        placeholder='Add your setps here 🤖'
                    />
               </td>
               <td className='table_h-text table_name'>
                    <div>
                        <button type='button' className='random_button'
                            onClick={(e) => {
                                handleInputInputDataChange(index, null, faker.lorem.sentence());
                            }}
                        >GR Texts</button>
                        <button type='button' className='random_button'
                            onClick={(e) => {
                                handleInputInputDataChange(index, null, faker.person.fullName());
                            }}
                        >GR Names</button>
                        <br />
                        <button type='button' className='random_button'
                            onClick={(e) => {
                                handleInputInputDataChange(index, null, faker.internet.email());
                            }}
                        >GR Email</button>
                        <button type='button' className='random_button'
                            onClick={(e) => {
                                handleInputInputDataChange(index, null, faker.phone.number());
                            }}
                        >GR Phone</button>
                        <br />
                        <button type='button' className='random_button'
                            onClick={(e) => {
                                handleInputInputDataChange(index, null, faker.lorem.paragraphs());
                            }}
                        >GR Long Text</button>
                        <button type='button' className='random_button'
                            onClick={(e) => {
                                handleInputInputDataChange(index, null, faker.location.streetAddress());
                            }}
                        >GR Address</button>
                        <br />
                        <button type='button' className='random_button'
                            onClick={(e) => {
                                handleInputInputDataChange(index, null, `${faker.internet.emoji()}${faker.internet.emoji()}${faker.internet.emoji()}`);
                            }}
                        >GR Emoji</button>
                        <button type='button' className='random_button'
                            onClick={(e) => {
                                handleInputInputDataChange(index, null, faker.date.anytime());
                            }}
                        >GR Date</button>
                        <br/>
                        <button type='button' className='random_button'
                            onClick={(e) => {
                                handleInputInputDataChange(index, null, faker.number.bigInt().toString());
                            }}
                        >GR Numbers</button>
                        <button type='button' className='random_button'
                            onClick={(e) => {
                                handleInputInputDataChange(index, null, faker.internet.password());
                            }}
                        >GR Password</button>
                        <br/>
                        <button type='button' className='random_button'
                            onClick={(e) => {
                                handleInputInputDataChange(index, null, faker.finance.creditCardNumber());
                            }}
                        >GR Credit Card</button>
                        <button type='button' className='random_button'
                            onClick={(e) => {
                                handleInputInputDataChange(index, null, faker.finance.iban());
                            }}
                        >GR IBAN</button>
                    </div>
                    <textarea
                        className='form_textarea'
                        value={item.inputData}
                        onChange={(e) => handleInputInputDataChange(index, e, null)}
                        placeholder='add your Input Data 🤖'
                    />
                    <div><button onClick={(e) => handleClearInputDataChange(index, e)}>Clear</button></div>
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
                if(e.isPostive === TEST_BEHAVIOR_NEGATIVE) numberOfNegative++;
                if(e.testLvl === UNIT_TEST) numberOfUnitTest++;
                if(e.testLvl === INTEGRATION_TEST) numberOfIntegrationTest++;
                if(e.testLvl === SYSTEM_TEST) numberOfSystemTest++;
                if(e.testLvl === UAT_TEST) numberOfUATTest++;
                if(e.priority === PRIORITY_HIGH) numberOfHigh++;
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
    const [testCase, setTestCase] = useState({ 
        text: '',
        steps: ''
    });
   
    const [arrComponents, setArrComponents] = useState({  text: ''});

    const [assertion, setAssertion] = useState({ 
            verifyFunctional: false,
            verifyEnable: false,
            verifyVisible: false,
            verifyClickable: false,
            verifyIsNotVisible: false,
            verifyIsNotClickable: false
    });

    const [tcs, setTcs] = useState([]);

    const [taskName, setTaskName] = useState({text: ''});

    const [submitting, setSubmitting] = useState(false);

    const createMyTestCase =  (e) => {
        e.preventDefault();
        setSubmitting(true);
        let counter = 0;
        let newTCS = [];
        testCase.text.trim().split("\n").map((allTCCode) => {
            if(allTCCode) {
                const tcCode = allTCCode.trim().split('|');
                const verifyAndCheck = tcCode[0].split(',');
                const objectToTest = tcCode[1];
                const testCategory = tcCode[2].split(',');
            
                verifyAndCheck.map((v, index) => {
                    let newV = v.trim().toLowerCase();
                    
                    let tcNewName = "";
                    CODE_KEYWORK.forEach(item => {
                        if(newV === item.code) {
                            tcNewName = `${item.start}${objectToTest}${item.end}`
                        }
                    });
                    if (newV === '') {
                        console.log(index);
                        if(index  >= 1) return
                        else tcNewName = objectToTest;
                    }
                    
                    newTCS.push(
                        {
                            id: counter + 1,
                            name: tcNewName,
                            testLvl: findTestLevel(testCategory),
                            testType: findTestType(testCategory),
                            isPostive: testBehavior(testCategory),
                            priority: findTestPriority(testCategory),
                            steps: '',
                            inputData: '',
                            expectedResult: '',
                            actualResult: '',
                            steps: testCase.steps
                        }

                    );
                    counter++;
                });
        
                console.table(newTCS);
            }       
        });
        setTcs(newTCS)
        setSubmitting(false);
    }
  
    const testBehavior =  (text) => {
        let newTestDetails = "positive";
        text.map((cat) => {
            let newCat = cat.trim().toLowerCase();
            if(newCat === "p") {
                newTestDetails = TEST_BEHAVIOR_POSITIVE;
            }
            if(newCat === "n") {
                newTestDetails = TEST_BEHAVIOR_NEGATIVE;
            }
            
        });
        return newTestDetails;
    }
    const findTestType =  (text) => {
        let newTestDetails = TEST_TYPE_FUNCTIONAL;
        text.map((cat) => {
            let newCat = cat.trim().toLowerCase();
            if(newCat === "f") {
                newTestDetails = TEST_TYPE_FUNCTIONAL;
            }
            if(newCat === "un") {
                newTestDetails = TEST_TYPE_NONFUNCTIONAL;
            }
            if(newCat === "r") {
                newTestDetails = TEST_TYPE_REGRESSION;
            }
            if(newCat === "us") {
                newTestDetails = TEST_TYPE_USABILITY;
            }
            if(newCat === "com") {
                newTestDetails = TEST_TYPE_COMPATIBILITY;
            }
        });
        return newTestDetails;
    }

    const findTestPriority =  (text) => {
        let newTestDetails = PRIORITY_MEDIUM;
        text.map((cat) => {
            let newCat = cat.trim().toLowerCase();
            if(newCat === 'h') {
                newTestDetails = PRIORITY_HIGH;
            }
            if(newCat === 'm') {
                newTestDetails = PRIORITY_MEDIUM;
            }
            if(newCat === 'l') {
                newTestDetails = PRIORITY_LOW;
            }
        });
        return newTestDetails;
    }

    const findTestLevel =  (text) => {
        let newTestDetails = UNIT_TEST;
        text.map((cat) => {
            let newCat = cat.trim().toLowerCase();
            if(newCat === "c") {
                newTestDetails = UNIT_TEST;
            }
            if(newCat === "i") {
                newTestDetails = INTEGRATION_TEST;
            }
            if(newCat === "s") {
                newTestDetails = SYSTEM_TEST;
            }
            if(newCat === "u") {
                newTestDetails = UAT_TEST;
            }
        });
        return newTestDetails;
    }

   const formatOutputDataForQASE = () => {
        let newTcsFormat = [];
        tcs.map((tc) => {
            newTcsFormat.push({
                id: tc.id,
                title: tc.name,
                layer: tc.testLvl,
                type: tc.testType,
                behavior: tc.isPostive,
                priority: tc.priority,
                steps_actions: tc.steps,
                input_data: tc.inputData,
                expectedResult: tc.expectedResult,
                actualResult: tc.actualResult
            });
        });
        return newTcsFormat;
   }

   const onGenerateComponent = (e) => {
        let finalText = '';
        arrComponents.text.trim().split(',').map((component) => {
            if(component) {
                if(assertion.verifyVisible) { 
                    finalText += 'vv,';
                }
                if(assertion.verifyClickable) { 
                    finalText += 'vc,';
                }
                if(assertion.verifyIsNotVisible) { 
                    finalText += 'vnv,';
                }
                if(assertion.verifyIsNotClickable) { 
                    finalText += 'vnc,';
                }
                if(assertion.verifyFunctional) { 
                    finalText += 'vf,';
                }
                if(assertion.verifyEnable) { 
                    finalText += 've,';
                }
                
                finalText += `| ${component} | c,m,p,f\n`;
        }
        })
        finalText += `${testCase.text}\n`
        setTestCase({text: finalText});
   }

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(formatOutputDataForQASE());
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, `${taskName.text}.csv`);
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
                <button  style={{backgroundColor:"blue", border: "20px solid red", color: "cyan", fontSize: "30px"}}>Add your test plan</button>
            </Link>
            <Link href='/test-report' >
                <button  style={{backgroundColor:"blue", border: "20px solid red", color: "cyan", fontSize: "30px"}}>Add your test report </button>
            </Link>
            <Link href='/test-report-jira' >
                <button  style={{backgroundColor:"blue", border: "20px solid red", color: "cyan", fontSize: "30px"}}>Add your test report (Jira) </button>
            </Link>
            <Link href='/learning-report' >
                <button  style={{backgroundColor:"blue", border: "20px solid red", color: "cyan", fontSize: "30px"}}>Add your learning report</button>
            </Link>
            <Form
                arrComponents ={arrComponents}
                setArrComponents={setArrComponents}
                testCase={testCase}
                setTestCase={setTestCase}
                taskName={taskName}
                setTaskName={setTaskName}
                submitting={submitting}
                assertion={assertion}
                setAssertion={setAssertion}
                handleSubmit={createMyTestCase}
                onGenerateComponent={onGenerateComponent}
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