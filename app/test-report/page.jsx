"use client"

import {useState, React, Suspense, lazy} from 'react';

import moment from 'moment/moment';

import TestReportForm from '@components/TestReportForm';
import PopupDialog from '@components/PDF/PopupDialog';
const TestReportPDF = lazy(() => import('@components/PDF/TestReportPDF'));


export default () => {
    const [displayModal, setDisplayModal] = useState(false);
    const [testReport, setTestReport] = useState({
        isLiveReport: false,
        testerName: '',
        url: '',
        testRunURL: '',
        projectName:  '',
        noDefectFound: 0,
        noDefectSolved: 0,
        noOfTCExe: 0,
        noOfDefectInRequirement: 0,
        createdDate: '',
        isRequirmenetChange: false,
        requirmenetChangeRemark:'',
        isPRDUpdated: true,
        prdUpdatedRemark:'',
        remark:'',
        noOfDefectBlock: 0,
        noOfDefectMajor: 0,
        releaseDate: '',
        isTaskNeedToBackInProgress: false
    });

    const [submitting, setSubmitting] = useState(false);
    
    const submitOnlineReport = async () => {
      try {
        const currentDate = moment().format('LLL');
        const response = await fetch('api/create-test-report', {
              method: 'POST',
              body: JSON.stringify({
                testReportType: testReport.isLiveReport? "Live": "Dev",
                testerName: testReport.testerName ,
                url: testReport.url ,
                testRunURL: testReport.testRunURL ,
                projectName: testReport.projectName ,
                noDefectFound: testReport.noDefectFound,
                noDefectSolved: testReport.noDefectSolved,
                noOfTCExe: testReport.noOfTCExe,
                noOfDefectInRequirement: testReport.noOfDefectInRequirement,
                createdDate: currentDate,
                isRequirmenetChange: testReport.isRequirmenetChange? "YES" : "NO",
                requirmenetChangeRemark: testReport.requirmenetChangeRemark,
                isPRDUpdated: testReport.isPRDUpdated ? "YES" : "NO",
                prdUpdatedRemark: testReport.prdUpdatedRemark,
                remark: testReport.remark,
                noOfDefectBlock: testReport.noOfDefectBlock,
                noOfDefectMajor: testReport.noOfDefectMajor,
                releaseDate: testReport.releaseDate,
                isTaskNeedToBackInProgress: testReport.isTaskNeedToBackInProgress ? "YES" : "NO"
            })
          });

        if(response.ok) {
           console.log('success !!!');
        }
      }catch(error)  { 
        console.log(error);
      }finally {
        setSubmitting(false);
      }
    }

    const createTestReport = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setDisplayModal(true);
        document.querySelector("[data-modal]").showModal();
        submitOnlineReport();
    }

  return (
    <section className='w-full'>
        <PopupDialog>
            {   displayModal ?
                    <TestReportPDF 
                        testReport={testReport}
                        onClose={() => {
                            document.querySelector("[data-modal]").close();
                            setDisplayModal(false);
                        }}
                    /> : <></>
            }
        </PopupDialog>
        <TestReportForm
            testReport={testReport}
            setTestReport={setTestReport}
            handleSubmit={createTestReport}
            submitting={submitting}
        />
    </section>
  );
}