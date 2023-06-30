'use client';
import {useState, React, useEffect} from 'react';
import * as XLSX from 'xlsx';
import Link from 'next/link'
import { fakerDE as faker } from '@faker-js/faker';
import TestCaseForm from '@components/TestCaseForm';
import CustomTextarea from '@components/daisyui/CustomTextarea';

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
    {code: 'vv', start: 'Verify', end: 'is visible', select: false},
    {code: 'vnv', start: 'Verify', end: 'is not visible', select: false},
    
    {code: 'vc', start: 'Verify', end: 'is clickable', select: false},
    {code: 'vnc', start: 'Verify', end: 'is not clickable', select: false},
    
    {code: 've', start: 'Verify', end: 'is enabled', select: false},
    {code: 'vne', start: 'Verify', end: 'is not enabled', select: false},
    
    {code: 'vf', start: 'Verify', end: 'is functioning', select: false},
    {code: 'vnf', start: 'Verify', end: 'is not functioning', select: false}
];

const CODE_TEST_TYPE = [
    {
        code: "f", 
        text: TEST_TYPE_FUNCTIONAL
    },
    {
        code: "un", 
        text: TEST_TYPE_NONFUNCTIONAL
    },
    {
        code: "r", 
        text: TEST_TYPE_REGRESSION
    },
    {
        code: "us", 
        text: TEST_TYPE_USABILITY
    },
    {
        code: "com", 
        text: TEST_TYPE_COMPATIBILITY
    }];

  // vc, vv | add new button | s,l,n,f
const TestCaseTable = ({ data,setTcs , exportToExcel}) => {

    const GEN_RANDOM_DATA_TYPE = [
        {code: 'TEXT', title: "GR Texts"},
        {code: 'NAMES', title: "GR Names"},
        {code: 'EMAIL', title: "GR Email"},
        {code: 'PHONE', title: "GR Phone"},
        {code: 'LONG_TEXT', title: "GR Long Text"},
        {code: 'ADDRESS', title: "GR Address"},
        {code: 'EMOJI', title: "GR Emoji"},
        {code: 'DATE', title: "GR Date"},
        {code: 'NUMBER', title: "GR Number"},
        {code: 'PASSWORD', title: "GR Password"},
        {code: 'CREDIT_CARD', title: "GR Creit Card"},
        {code: 'IBAN', title: "GR IBAN"}
    ];

    const handleInputTitleChange = (index, event) => {
        const newInputValues = [...data];
        newInputValues[index].title = event.target.value;
        setTcs(newInputValues);
        // autoExpand(event.target);
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
    
    const autoExpand = (textarea) => {
        // Reset the height to the default value to calculate the scroll height correctly
        textarea.style.height = 'auto';
        
        // Set the new height to the scroll height of the content
        textarea.style.height = `${textarea.scrollHeight}px`;
    };
    

    const handleOnGenerateRandomData = (item, index) => {
            let fakeText = '';
            if('TEXT' === item.code) {
                fakeText = faker.lorem.sentence();
            }else if('NAMES' === item.code) {
                fakeText = faker.person.fullName();
            }else if('PHONE' === item.code) {
                fakeText = faker.phone.number()
            }else if('EMAIL' === item.code) {
                fakeText = faker.internet.email();
            }else if('LONG_TEXT' === item.code) {
                fakeText =  faker.lorem.paragraphs();
            }else if('ADDRESS' === item.code) {
                fakeText =  faker.location.streetAddress();
            }else if('EMOJI' === item.code) {
                fakeText = `${faker.internet.emoji()}${faker.internet.emoji()}${faker.internet.emoji()}`;
            }else if('DATE' === item.code) {
                fakeText = faker.date.anytime();
            }else if('NUMBER' === item.code) {
                fakeText = faker.number.bigInt().toString();
            }else if('PASSWORD' === item.code) {
                fakeText = faker.internet.password();
            }else if('CREDIT_CARD' === item.code) {
                fakeText = faker.finance.creditCardNumber();
            }else if('IBAN' === item.code) {
                fakeText = faker.finance.iban();
            }
            handleInputInputDataChange(index, null, fakeText)
    }

    return(
      <div 
            style={{
                // backgroundColor: "blueviolet",
                width:"100%"
            }} 
            className='card place-items-center'
        >
        <div>
           <button className="btn btn-outline btn-secondary" onClick={exportToExcel} style={{margin:"15px"}}>
                <svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10">

                            </path>
			    </svg>
                Export to Excel
            </button>
        </div>
        <div  
            style={{
                // backgroundColor: "orangered", 
                width:"100%"
                }}
        >
            <table className="table table-lg">
                <thead>
                    <tr >
                        <th>#ID</th>
                        <th>Test Case Title</th>
                        <th>Test Level</th>
                        <th>Test Type</th>
                        <th>Test Behavior</th>
                        <th>Priority</th>
                        <th>Steps</th>
                        <th>Input Data</th>
                        <th>Expected Result</th>
                        <th>Actual Result</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (<tr key={index}>
                        <th>{item.id}</th>
                            <td>
                                <CustomTextarea
                                    cols={120}
                                    rows={5}
                                    value={item.title}
                                    onChange={(e) => handleInputTitleChange(index, e)}
                                />
                            </td>
                            <td>
                                <label className="label">
                                    <span className="label-text">{item.testLvl}</span>
                                </label>
                                <select 
                                    className="select select-info select-bordered select-xs w-full max-w-xs"
                                    style={{height: "34px", width: "70px"}}
                                    name={`name_testLvl_${index}`}
                                    id={`id_testLvl_${index}`}
                                    
                                    onChange={(e) => {
                                        const newInputValues = [...data];
                                        newInputValues[index].testLvl = e.target.value;
                                        setTcs(newInputValues);
                                    }}
                                >
                                     <option disabled selected>Select Test Level</option>
                                    <option value={UNIT_TEST} selected={item.testLvl === UNIT_TEST}>{UNIT_TEST}</option>
                                    <option value={INTEGRATION_TEST} selected={item.testLvl === INTEGRATION_TEST}>{INTEGRATION_TEST}</option>
                                    <option value={SYSTEM_TEST} selected={item.testLvl === SYSTEM_TEST}>{SYSTEM_TEST}</option>
                                    <option value={UAT_TEST} selected={item.testLvl === UAT_TEST}>{UAT_TEST}</option>
                                </select>
                            </td>
                            <td>
                               <label className="label">
                                    <span className="label-text">{item.testType}</span>
                                </label>
                                <select
                                    name={`name_testType_${index}`}
                                    id={`id_testType_${index}`}
                                    className="select select-info select-bordered select-xs w-full max-w-xs"
                                    style={{height: "34px", width: "85px"}}
                                    onChange={(e) => {
                                        const newInputValues = [...data];
                                        newInputValues[index].testType = e.target.value;
                                        setTcs(newInputValues);
                                    }}
                                >
                                        <option disabled selected>Select Test Type</option>
                                         {CODE_TEST_TYPE.map(testType => (
                                        <option
                                            value={testType.text}
                                            selected={item.testType === testType.text}
                                        >{testType.text}</option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <label className="label">
                                    <span className="label-text">{item.isPostive}</span>
                                </label>
                                <select 
                                    name={`name_isPostive_${index}`}
                                    id={`id_isPostive_${index}`}
                                    onChange={(e) => {
                                        const newInputValues = [...data];
                                        newInputValues[index].isPostive = e.target.value;
                                        setTcs(newInputValues);
                                    }}
                                    className="select select-info select-bordered select-xs w-full max-w-xs"
                                    style={{height: "34px", width: "85px"}}
                                >
                                    <option disabled selected>Select Test Behvior</option>
                                    <option value={TEST_BEHAVIOR_POSITIVE} selected={item.isPostive === TEST_BEHAVIOR_POSITIVE}>{TEST_BEHAVIOR_POSITIVE}</option>
                                    <option value={TEST_BEHAVIOR_NEGATIVE} selected={item.isPostive === TEST_BEHAVIOR_NEGATIVE}>{TEST_BEHAVIOR_NEGATIVE}</option>
                                </select>
                            </td>
                            <td>
                                <label className="label">
                                    <span className="label-text">{item.priority}</span>
                                </label>
                                <select 
                                    name={`name_priority_${index}`}
                                    id={`id_priority_${index}`}
                                    onChange={(e) => {
                                        const newInputValues = [...data];
                                        newInputValues[index].priority = e.target.value;
                                        setTcs(newInputValues);
                                    }}
                                    className="select select-info select-bordered select-xs w-full max-w-xs"
                                    style={{height: "34px", width: "75px"}}
                                >
                                    <option disabled selected>Select Priority</option>
                                    <option value={PRIORITY_HIGH} selected={item.priority === PRIORITY_HIGH}>{PRIORITY_HIGH}</option>
                                    <option value={PRIORITY_MEDIUM} selected={item.priority === PRIORITY_MEDIUM}>{PRIORITY_MEDIUM}</option>
                                    <option value={PRIORITY_LOW} selected={item.priority === PRIORITY_LOW}>{PRIORITY_LOW}</option>
                                </select>
                            </td>
                            <td>
                                <CustomTextarea
                                    cols={120}
                                    size='textarea-md'
                                    rows={2}
                                    value={item.steps}
                                    label={'Steps'}
                                    placeholder={'Add your setps here 🤖'}
                                    onChange={(e) => handleInputStepsChange(index, e)}
                                />
                            </td>
                            <td>
                                <div>
                                    
                                    <details open={false}>
                                        <summary>GR Data</summary>
                                        <ul>
                                            {GEN_RANDOM_DATA_TYPE.map((item) => (
                                            <li>
                                                <button
                                                    className="btn btn-xs btn-outline"
                                                    onClick={e => handleOnGenerateRandomData(item, index)}
                                                >{item.title}</button>
                                            </li>
                                            ))}
                                        </ul>
                                    </details>
                                    <CustomTextarea
                                        cols={90}
                                        rows={2}
                                        size='textarea-md'
                                        value={item.inputData}
                                        placeholder={'Add your Input Data 🤖'}
                                        onChange={(e) => handleInputInputDataChange(index, e, null)}
                                    />
                                    <button
                                        className="btn btn-active btn-link"
                                        onClick={(e) => handleClearInputDataChange(index, e)}>Clear
                                    </button>
                                </div>
                            </td>

                            <td>
                                <CustomTextarea
                                    cols={0}
                                    rows={0}
                                    label={"Expected Result"}
                                    value={item.expectedResult}
                                    size='textarea-md'
                                    placeholder={'Add expected result Data 🤖'}
                                    onChange={(e) => handleInputExpectedResultChange(index, e)}
                                />
                            </td>

                            <td>
                                <CustomTextarea
                                    cols={0}
                                    rows={0}
                                    size='textarea-md'
                                    value={item.actualResult}
                                    label={"Actual Result"}
                                    placeholder={'Add actual result 🤖'}
                                    onChange={(e) => handleInputActualResultChange(index, e)}
                                />
                            </td>
                    </tr>
                    ))
                    }
                </tbody>

            </table>
        </div>
       </div>
    );
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
        <div
            className="card place-items-center"
            style={{
                // backgroundColor: "orangered", 
                width:"100%",
                margin: "5px"
            }}
        >


            <button className="btn btn-outline btn-secondary btn-wide"  onClick={() => getStatistic()} style={{margin:"15px"}}>
                <svg className="svg-icon" viewBox="0 0 20 20">
					<path d="M11.709,7.438H8.292c-0.234,0-0.427,0.192-0.427,0.427v8.542c0,0.234,0.192,0.427,0.427,0.427h3.417c0.233,0,0.426-0.192,0.426-0.427V7.865C12.135,7.63,11.942,7.438,11.709,7.438 M11.282,15.979H8.719V8.292h2.563V15.979zM6.156,11.709H2.74c-0.235,0-0.427,0.191-0.427,0.426v4.271c0,0.234,0.192,0.427,0.427,0.427h3.417c0.235,0,0.427-0.192,0.427-0.427v-4.271C6.583,11.9,6.391,11.709,6.156,11.709 M5.729,15.979H3.167v-3.416h2.562V15.979zM17.261,3.167h-3.417c-0.235,0-0.427,0.192-0.427,0.427v12.812c0,0.234,0.191,0.427,0.427,0.427h3.417c0.234,0,0.427-0.192,0.427-0.427V3.594C17.688,3.359,17.495,3.167,17.261,3.167 M16.833,15.979h-2.562V4.021h2.562V15.979z"/>
				</svg>
                Update Statistic
            </button>
          
            <div className="stats stats-vertical lg:stats-horizontal shadow">
  
                <div className="stat">
                    <div className="stat-title">Negative test case</div>
                    <div className="stat-value">{numbers.negative}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Unti test case</div>
                    <div className="stat-value">{numbers.unitTest}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Integration test case</div>
                    <div className="stat-value">{numbers.integrationTest}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">System test case</div>
                    <div className="stat-value">{numbers.systemTest}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">AT test case</div>
                    <div className="stat-value">{numbers.uatTest}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">High test case</div>
                    <div className="stat-value">{numbers.highTest}</div>
                </div>
            </div>        
        </div>
    )
}


const TestCase = () => {
    const [testCase, setTestCase] = useState({
        fileName: '',
        text: '',
        steps: '',
    });
   
    const [arrComponents, setArrComponents] = useState({ 
        text: '',
        keywords: [...CODE_KEYWORK]
    });

    const [tcs, setTcs] = useState([]);

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
                    
                    let tcNewTitle = "";
                    CODE_KEYWORK.forEach(item => {
                        if(newV === item.code) {
                            tcNewTitle = `${item.start}${objectToTest}${item.end}`
                        }
                    });
                    if (newV === '') {
                        console.log(index);
                        if(index  >= 1) return
                        else tcNewTitle = objectToTest;
                    }
                    
                    newTCS.push(
                        {
                            id: counter + 1,
                            title: tcNewTitle,
                            testLvl: findTestLevel(testCategory),
                            testType: findTestType(testCategory),
                            isPostive: testBehavior(testCategory),
                            priority: findTestPriority(testCategory),
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
            const newCat = cat.trim().toLowerCase();
            CODE_TEST_TYPE.map(item => {
                if(newCat === item.code) {
                    newTestDetails = item.text;      
                }
            });
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
                title: tc.title,
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
                arrComponents.keywords.map(item => {
                    if(item.select) {
                        finalText += `${item.code},`;
                    }
                });
                finalText += `| ${component} | c,m,p,f\n`;
        }
        });
        finalText += `${testCase.text}\n`
        setTestCase({...testCase, text: finalText});
   }

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(formatOutputDataForQASE());
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, `${testCase.fileName}.csv`);
    };

    return (
        <section
            style={{
                // backgroundColor: "lightcoral",
                width: "100%"
            }}
        >
            <TestCaseForm
                arrComponents ={arrComponents}
                setArrComponents={setArrComponents}
                testCase={testCase}
                setTestCase={setTestCase}
                submitting={submitting}
                handleSubmit={createMyTestCase}
                onGenerateComponent={onGenerateComponent}
            />

           <TestStatistic data={tcs} />
           <TestCaseTable 
                data={tcs}
                setTcs={setTcs}
                exportToExcel={exportToExcel}
           />
        </section>
      );
}

export default TestCase;