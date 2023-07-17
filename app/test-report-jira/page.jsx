"use client"

import {useState, React, lazy} from 'react';
import moment from 'moment';

import TestReportFormJIRA from '@components/TestReportFormJIRA';
import PopupDialog from '@components/PDF/PopupDialog';
const TestJiraReportPDF = lazy(() => import('@components/PDF/TestJiraReportPDF'));

export default () => {
    // const router = useRouter();
    const [displayModal, setDisplayModal] = useState(false);
    const [testReport, setTestReport] = useState({
      isLiveReport: false,
      testerName: '',
      projectName:  '',
      testRunURL: '',
      openTicketsNumber: '',
      backInProgressTicketsNumber: '',
      closedTicketsNumber: '',
      blockedTicketsNumber: '',//how many ticket did u move to Block status?

      noOfTCExe: 0, // how many test cases did u execute ?

      isPMbeenAsked: true, // did you follow up the PM or PO about the last update today?
      communicatePMRemark: '',

      isRequirmenetChange: false,
      requirmenetChangeRemark:'',

      isPRDUpdated: true,
      prdUpdatedRemark:'',

      remark:'',
      releaseDate: ''
    });

    const [submitting, setSubmitting] = useState(false);
    
    const createTestReport = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setDisplayModal(true);
        document.querySelector("[data-modal]").showModal();

        try {
          const currentDate = moment().format('LLL');
          const response = await fetch('api/create-test-report-jira', {
              method: 'POST',
              body: JSON.stringify({
                createAt: currentDate,
                testerName: testReport.testerName,
                projectName: testReport.projectName,
                testRunURL: testReport.testRunURL,
                openTicketsNumber:testReport.openTicketsNumber,
                backInProgressTicketsNumber: testReport.backInProgressTicketsNumber,
                closedTicketsNumber: testReport.closedTicketsNumber,
                blockedTicketsNumber: testReport.blockedTicketsNumber,
                noOfTCExe: testReport.noOfTCExe,
                isPMbeenAsked: testReport.isPMbeenAsked ? 'YES':'NO',
                communicatePMRemark: testReport.communicatePMRemark,
                isRequirmenetChange: testReport.isRequirmenetChange ? 'YES':'NO',
                requirmenetChangeRemark: testReport.requirmenetChangeRemark,
                isPRDUpdated: testReport.isPRDUpdated ? 'YES':'NO',
                prdUpdatedRemark: testReport.prdUpdatedRemark,
                remark: testReport.remark,
                isLiveReport: testReport.isLiveReport ? "Live" : "Dev",
                releaseDate: testReport.releaseDate
            })
          });

          if(response.ok) {
            //   router.push('/');
            console.log('success !!!');
          }
      }catch(error)  { 
          console.log(error);
      }finally {
          setSubmitting(false);
      }
    }

    return (
        <section className='w-screen'>
            <PopupDialog>
                {   displayModal ?  
                        <TestJiraReportPDF 
                            testReport={testReport}
                            onClose={() => {
                                document.querySelector("[data-modal]").close();
                                setDisplayModal(false);
                            }}
                        /> : <></>
                }
            </PopupDialog>
        
            <TestReportFormJIRA
                testReport={testReport}
                setTestReport={setTestReport}
                handleSubmit={createTestReport}
                submitting={submitting}
            />
        </section>
  ) ;
}