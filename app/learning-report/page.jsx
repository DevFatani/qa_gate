"use client"

import {useState, React, lazy, Suspense} from 'react';
import moment from 'moment/moment';
import LearningReportForm from '@components/LearningReportForm';
import PopupDialog from '@components/PDF/PopupDialog';
const LearnReportPDF = lazy(() => import('@components/PDF/LearnReportPDF'));

export default () => {
    const [displayModal, setDisplayModal] = useState(false);

    const [learningReport, setLearningReport] = useState({
        courseName: '',
        testerName: '',
        whatDidYouLearnToday:'',
        urlSoruce: '',
        whenYouCanFinish: '',
        needHelpRemark: ''
    });

    const [submitting, setSubmitting] = useState(false);
    
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
                console.log('success !!!');
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
        setDisplayModal(true);
        document.querySelector("[data-modal]").showModal();
        submitOnlineReport();
    }
    
    return (
        <section className='w-full'>
            <PopupDialog>
                {   displayModal ?  
                        <LearnReportPDF
                            learningReport={learningReport}
                            onClose={() => {
                                document.querySelector("[data-modal]").close();
                                setDisplayModal(false);
                            }}
                        /> : <></>
                }
            </PopupDialog>
            <LearningReportForm
                learningReport={learningReport}
                setLearningReport={setLearningReport}
                handleSubmit={createLearningReport}
                submitting={submitting}
            />
        </section>
    );
}