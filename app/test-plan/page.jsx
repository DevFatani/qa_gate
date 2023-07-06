"use client"

import {useState, React} from 'react';
import { jsPDF } from "jspdf";
import moment from 'moment';

import TestPlanForm from '@components/TestPlanForm'
const page = () => {

    const [testPlan, setTestPlan] = useState({
        testerName: '',
        projectName:'',
        url: '',
        about: '',
        scopeIn: '',
        scopeOut: '',
        testLevel: [
            {
                'name': 'Unit', 
                'select': false
            },
            {
                'name': 'Integration',
                'select': false
            },
            {
                'name': 'System',
                'select': false
            },
            {
                'name': 'AT',
                'select': false
            },
        ],
        testType: [
            {
                'name': 'Function', 
                'select': false
            },
            {
                'name': 'Non-Function',
                'select': false
            },
            {
                'name': 'API',
                'select': false
            },
            {
                'name': 'Usability',
                'select': false
            },
            {
                'name': 'Mobile Testing',
                'select': false
            },
            {
                'name': 'Smoke Testing',
                'select': false
            },
            {
                'name': 'Security',
                'select': false
            },
            {
                'name': 'Static Test',
                'select': false
            },
            {
                'name': 'Compatibility',
                'select': false
            },
            {
                'name': 'Automation Test',
                'select': false
            },
        ],
        exitCriteria: ''
    });

    const [submitting, setSubmitting] = useState(false);
    
    function formatArrayOutput(arr) {
        let selecteItem = '';
        arr.map(item => item.select ? selecteItem += `\t\t${item.name}\n` : '');
        return selecteItem;
    }
    const formatPDF = () => { 
        let text = `
        Create At:\t${moment().format('LLL')}
        Tester Name:\t${testPlan.testerName}\n
        Project Name:\t${testPlan.projectName}\n
        URL:\t${testPlan.url}\n
        About:\n\t${testPlan.about}\n
        Scope In:\n\t${testPlan.scopeIn}\n
        Scope Out:\n\t${testPlan.scopeOut}\n
        Test Level: \n${formatArrayOutput(testPlan.testLevel)}\n
        Test Type: \n${formatArrayOutput(testPlan.testType)}\n
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
        }).setProperties({ title: `${testPlan.projectName}_${moment().format('LLL')}` });
      
      // splitTextToSize takes your string and turns it in to an array of strings,
      // each of which can be displayed within the specified maxLineWidth.
      var textLines = doc
        .setFont("helvetica")
        .setFontSize(fontSize)
        .splitTextToSize(text, maxLineWidth);
      
      // doc.text can now add those lines easily; otherwise, it would have run text off the screen!
        doc.text(textLines, margin, margin + 2 * oneLineHeight);
        doc.save(`${testPlan.projectName}_${moment().format('LLL')}.pdf`);
    }

    const createTestPlan = (e) => {
        e.preventDefault();
        setSubmitting(true);
        formatPDF();
        setSubmitting(false);
    }
    
    return (
        <section
        style={{
            // backgroundColor: "blue",
            width: "100%"
          }}
        >
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