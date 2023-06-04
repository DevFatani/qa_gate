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
        exitCriteria: '',
        isAPI: 0,
        isMobile: 0,
    });

    const [submitting, setSubmitting] = useState(false);
    
    const formatPDF = () => { 
        let finalPdf = `Tester Name: ${testPlan.testerName}\n
        Project Name: ${testPlan.projectName}\n
        URL: ${testPlan.url}\n
        About: ${testPlan.about}\n
        Scope In: ${testPlan.scopeIn}\n
        Scope Out: ${testPlan.scopeOut}\n
        Test Level: ${testPlan.testLevel}\n
        Test Type: ${testPlan.testType}\n
        exit criteria: ${testPlan.exitCriteria}\n
        is API Test require: ${testPlan.isAPI === 1 ? "YES" : "NO"}
        is Mobile require: ${testPlan.isMobile === 1 ? "YES" : "NO"}
        `;
       

        const   doc = new jsPDF()
        doc.setProperties({ title: "String Splitting" });
        doc.setFontSize(15);
        doc.text(finalPdf, 10, 10);
    
        doc.save("a4.pdf");
    } 
    
    const createTestPlan = (e) => {
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

export default page