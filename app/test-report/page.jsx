"use client"

import {useState, React, useEffect} from 'react';
import { jsPDF } from "jspdf";
import moment from 'moment/moment';
import {useRouter} from 'next/navigation';

import TestReportForm from '@components/TestReportForm';

const page = () => {
    const router = useRouter();

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
    
    const formatPDF = () => {
        let text = `
        Report Type: ${testReport.isLiveReport ? "Live Environment": "Dev Environment"}\n
        Tester Name: ${testReport.testerName}\n
        Project Name: ${testReport.projectName}\n
        URL: ${testReport.url}\n
        Test Run URL: ${testReport.testRunURL}\n
        Created Date: ${new Date()}\n
        No Defect Found: ${testReport.noDefectFound}\tNo Defect Solved: ${testReport.noDefectSolved}\n
        Number Of Defect In Block: ${testReport.noOfDefectBlock}\tNumber Of (Major) Defect: ${testReport.noOfDefectMajor}\n
        Number Of Test Case Executed: ${testReport.noOfTCExe}\n
        Number Of Defect In Requirement: ${testReport.noOfDefectInRequirement}\n
        Release Date: ${testReport.releaseDate}\n
        Is Requirmenet Changed ?: ${testReport.isRequirmenetChange ? "YES" : "NO"}\n
        Requirmenet Change Remark: ${testReport.requirmenetChangeRemark}\n
        Is the PRD file up to date?: ${testReport.isPRDUpdated ? "YES" : "NO"}\n
        Is the task need to back (In-Progress) ?: ${testReport.isTaskNeedToBackInProgress ? "YES" : "NO"}\n
        PRD Remark: ${testReport.prdUpdatedRemark}\n
        Remark: ${testReport.remark}\n
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
        doc.save(`${testReport.testerName}_${testReport.projectName}_${moment().format("LLL")}.pdf`);
    } 
    
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
          router.push('/');
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
        submitOnlineReport();
        formatPDF();
    }

  return (
    <section
      style={{
        // backgroundColor: "blue",
        width: "100%"
      }}
    >
           <TestReportForm
                testReport={testReport}
                setTestReport={setTestReport}
                handleSubmit={createTestReport}
                submitting={submitting}
            />
        </section>
  )
}

export default page