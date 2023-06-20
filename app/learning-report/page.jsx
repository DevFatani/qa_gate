"use client"

import {useState, React} from 'react';
import { jsPDF } from "jspdf";
import moment from 'moment/moment';
import {useRouter} from 'next/navigation';

import LearningReportForm from '@components/LearningReportForm';
const page = () => {
    const router = useRouter();

    const [learningReport, setLearningReport] = useState({
        createAt: '',
        courseName: '',
        testerName: '',
        whatDidYouLearnToday:'',
        urlSoruce: '',
        whenYouCanFinish: '',
        needHelpRemark: ''
    });

    const [submitting, setSubmitting] = useState(false);
    
     
    const formatPDF = () => { 
        let text = `
        Create At:${new Date()}\n
        Tester Name:\n\t${learningReport.testerName}\n
        Course Name:\n\t${learningReport.courseName}\n
        What Did You Learn Today?:\n\t${learningReport.whatDidYouLearnToday}\n
        URL Soruce:\n\t${learningReport.urlSoruce}\n
        When You Can Finish?:\n\t${learningReport.whenYouCanFinish}\n
        Do You Need Help?:\n\t${learningReport.needHelpRemark}
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
        }).setProperties({ title: `${learningReport.courseName}_${moment().format('LLL')}` });
      
      // splitTextToSize takes your string and turns it in to an array of strings,
      // each of which can be displayed within the specified maxLineWidth.
      var textLines = doc
        .setFont("helvetica")
        .setFontSize(fontSize)
        .splitTextToSize(text, maxLineWidth);
      
      // doc.text can now add those lines easily; otherwise, it would have run text off the screen!
        doc.text(textLines, margin, margin + 2 * oneLineHeight);
        doc.save(`${learningReport.courseName}_${moment().format('LLL')}.pdf`);
    }

    const submitOnlineReport = async () => {
        const currentDate = moment().format('LLL');
        try {
            const response = await fetch('api/create-learning-report', {
                method: 'POST',
                body: JSON.stringify({
                    createAt: currentDate,
                    testerName: learningReport.testerName,
                    courseName: learningReport.courseName,
                    whatDidYouLearnToday: learningReport.whatDidYouLearnToday,
                    urlSoruce: learningReport.urlSoruce,
                    whenYouCanFinish: learningReport.whenYouCanFinish,
                    needHelpRemark: learningReport.needHelpRemark
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

    const createLearningReport = async(e) => {
        e.preventDefault();
        setSubmitting(true);
        submitOnlineReport();
        formatPDF();
    }
    
    return (
        <section className='w-full flex-center flex-col'>
                <h1 className='head_text text-center'>
                    QA GATE
                    <br className='max-md:hidden'/>
                    <span className='orange_gradient text-center'>QA Power</span>
                </h1>
                <p className='desc text-cener' style={{fontSize:"50px", color:"blue"}}>Fill down your learning progress</p>
            <LearningReportForm
                learningReport={learningReport}
                setLearningReport={setLearningReport}
                handleSubmit={createLearningReport}
                submitting={submitting}
            />
            </section>
    )
}

export default page;