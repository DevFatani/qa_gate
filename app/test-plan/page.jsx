"use client"

import {useState, React, useEffect} from 'react';
import { jsPDF } from "jspdf";

import TestPlanForm from '@components/TestPlanForm'
const page = () => {

    const [testPlan, setTestPlan] = useState({
        testerName: '',
        projectName:'',
        url: '',
        about: '',
        scopeIn: '',
        scopeOut: '',
        testLevel: [],
        testType: [],
        exitCriteria: ''
    });

    const [submitting, setSubmitting] = useState(false);
    
     
    const formatPDF = () => { 
        let text = `Tester Name: ${testPlan.testerName}\n
        Project Name: ${testPlan.projectName}\n
        URL: ${testPlan.url}\n
        About:\n\t${testPlan.about}\n
        Scope In:\n\t${testPlan.scopeIn}\n
        Scope Out:\n\t${testPlan.scopeOut}\n
        Test Level: ${testPlan.testLevel}\n
        Test Type: ${testPlan.testType}\n
        exit criteria:\n\t${testPlan.exitCriteria}\n
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
        doc.save(`${testPlan.projectName}.pdf`);
    }

    const createTestPlan = (e) => {
        e.preventDefault();
        setSubmitting(true);
        formatPDF();
        setSubmitting(false);
    }
    
    return (
        <section className='w-full flex-center flex-col'>
                <h1 className='head_text text-center'>
                    QA GATE
                    <br className='max-md:hidden'/>
                    <span className='orange_gradient text-center'>QA Power</span>
                </h1>
                <p className='desc text-cener' style={{fontSize:"50px", color:"blue"}}>Create Test Plan Now 📝</p>
            <TestPlanForm
                    testPlan={testPlan}
                    setTestPlan={setTestPlan}
                    handleSubmit={createTestPlan}
                    submitting={submitting}
                />
            </section>
    )
}

export default page;