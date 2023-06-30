"use client"

import {useState, React, useEffect} from 'react';
import { jsPDF } from "jspdf";
import moment from 'moment/moment';
import {useRouter} from 'next/navigation';

import TestReportFormJIRA from '@components/TestReportFormJIRA';

const page = () => {
    const router = useRouter();

    const [testReport, setTestReport] = useState({
      createdDate: '',
      testerName: '',
      projectName:  '',
      testRunURL: '',
      openTicketsNumber: '',
      backInProgressTicketsNumber: '',
      closedTicketsNumber: '',
      blockedTicketsNumber: '',//how many ticket did u move to Block status?

      noOfTCExe: 0, // how many test cases did u execute ?

      isPMbeenAsked: false, // did you follow up the PM or PO about the last update today?
      isRequirmenetChange: false,
      requirmenetChangeRemark:'',

      isPRDUpdated: true,
      prdUpdatedRemark:'',

      remark:''
    });

    const [submitting, setSubmitting] = useState(false);
    
    const formatPDF = () => { 
        let text = `
        Created Date:\n${new Date()}\n
        Tester Name:\n${testReport.testerName}\n
        Project Name:\n${testReport.projectName}\n
        Test Run URL:\n${testReport.testRunURL}\n
        How many tickets did you open today?:\n${testReport.openTicketsNumber}\n
        How many tickets did you move back to InProgress?:\n${testReport.backInProgressTicketsNumber}\n
        How many tickets did you close today?:\n${testReport.closedTicketsNumber}\n
        How many tickets did you move to Block status?:\n${testReport.blockedTicketsNumber}\n
        Number Of Test Case Executed (Today):\n${testReport.noOfTCExe}\n
        Did you follow up the PM or PO about the last update today?:\n${testReport.isPMbeenAsked ? 'YES':'NO'}\n
        Is Requirmenet Changed? (Today):\n${testReport.isRequirmenetChange ? 'YES':'NO'}\n
        Justify why requirement been changed:\n${testReport.requirmenetChangeRemark}\n
        Is the PRD file up to date? (Today):\n${testReport.isPRDUpdated ? 'YES':'NO'}\n
        Justify why PRD not up to date:\n${testReport.prdUpdatedRemark}\n
        Remark:\n${testReport.remark}\n
        `;
       
        var pageWidth = 8.5,
        lineHeight = 1.2,
        margin = 0.11,
        maxLineWidth = pageWidth - margin * 2,
        fontSize = 8,
        ptsPerInch = 72,
        oneLineHeight = (fontSize * lineHeight) / ptsPerInch,

        doc = new jsPDF({
          unit: "in",
          lineHeight: lineHeight
        }).setProperties({ title: testReport.projectName });
      
      // splitTextToSize takes your string and turns it in to an array of strings,
      // each of which can be displayed within the specified maxLineWidth.
      var textLines = doc
        .setFont("helvetica")
        .setFontSize(fontSize)
        .splitTextToSize(text, maxLineWidth);
      
      // doc.text can now add those lines easily; otherwise, it would have run text off the screen!
        doc.text(textLines, margin, margin + 2 * oneLineHeight);
        doc.save(`${testReport.projectName}.pdf`);
    } 
    
    const createTestReport = async (e) => {
        e.preventDefault();
        setSubmitting(!true);
        formatPDF();
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
                isRequirmenetChange: testReport.isRequirmenetChange ? 'YES':'NO',
                requirmenetChangeRemark: testReport.requirmenetChangeRemark,
                isPRDUpdated: testReport.isPRDUpdated ? 'YES':'NO',
                prdUpdatedRemark: testReport.prdUpdatedRemark,
                remark: testReport.remark
            })
          });

          if(response.ok) {
              router.push('/');
          }
      }catch(error)  { 
          console.log(error);
      }finally {
          setSubmitting(false);
      }
    }

  return (
    <section style={{
      // backgroundColor: "blue",
      width: "100%"
    }}>

           <TestReportFormJIRA
                testReport={testReport}
                setTestReport={setTestReport}
                handleSubmit={createTestReport}
                submitting={submitting}
            />
        </section>
  )
}

export default page