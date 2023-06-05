"use client"

import {useState, React, useEffect} from 'react';
import { jsPDF } from "jspdf";

import TestReportForm from '@components/TestReportForm';

const page = () => {

    const [testReport, setTestReport] = useState({
        testerName: '',
        url: '',
        projectName:  '',
        noDefectFound: 0,
        noDefectSolved: 0,
        noOfTCExe: 0,
        noOfDefectInRequirement: 0,
        createdDate: '',
        isRequirmenetChange: 0,
        isPRDUpdated: 0,
        remark:'',
        noOfDefectBlock: 0,
        noOfDefectMajor: 0,
        releaseDate: '',
        noOfDefectInRelease: 0,
    });

    const [submitting, setSubmitting] = useState(false);
    
    const formatPDF = () => { 
        let text = `
        Tester Name: ${testReport.testerName}\n
        Project Name: ${testReport.projectName}\n
        URL: ${testReport.url}\n
        Created Date: ${new Date()}\n
        No Defect Found: ${testReport.noDefectFound}\tNo Defect Solved: ${testReport.noDefectSolved}\n
        Number Of Defect In Block: ${testReport.noOfDefectBlock}\tNumber Of (Major) Defect: ${testReport.noOfDefectMajor}\n
        Number Of Test Case Executed: ${testReport.noOfTCExe}\n
        Number Of Defect In Requirement: ${testReport.noOfDefectInRequirement}\n
        Release Date: ${testReport.releaseDate}\n
        Number Of Defect In Release: ${testReport.noOfDefectInRelease}\n
        Is Requirmenet Changed ?: ${testReport.isRequirmenetChange == 1 ? "YES" : "NO"}\n
        Is the PRD file up to date?: ${testReport.isPRDUpdated == 1 ? "YES" : "NO"}\n
        Remark: ${testReport.remark}\n
        `;
       
        var pageWidth = 8.5,
        lineHeight = 1.2,
        margin = 0.11,
        maxLineWidth = pageWidth - margin * 2,
        fontSize = 12,
        ptsPerInch = 72,
        oneLineHeight = (fontSize * lineHeight) / ptsPerInch,

        doc = new jsPDF({
          unit: "in",
          lineHeight: lineHeight
        }).setProperties({ title: "String Splitting" });
      
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
    
    const createTestReport = (e) => {
        console.log("pDF")
        e.preventDefault();
        setSubmitting(true);
        formatPDF()
        setSubmitting(false);
      }
  return (
    <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>
                QA GATE
                <br className='max-md:hidden'/>
                <span className='orange_gradient text-center'>QA Power</span>
            </h1>
            <p className='desc text-cener' style={{fontSize:"50px", color:"blue"}}>Create Test Report 📜</p>
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