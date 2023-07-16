"use client"
import {useState, React, lazy, Suspense} from 'react'
import {useRouter} from 'next/navigation';
import TestPlanForm from '@components/TestPlanForm';
const TestPlanPDF = lazy(() => import('@components/PDF/TestPlanPDF'));

const page = () => {
    const [displayModal, setDisplayModal] = useState(false);
    const router = useRouter();
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

    const createTestPlan = (e) => {
        e.preventDefault();
        setSubmitting(true);
        setDisplayModal(true);
        document.querySelector("[data-modal]").showModal();
        setSubmitting(false);
    }

    return (
        <section className='w-screen'>
            <dialog data-modal className='w-3/5 h-3/6'>
                <Suspense fallback={<h1 className='w-screen h-screen text-lg'>Loading  ...</h1>}>
                    {
                        displayModal ?  
                            <TestPlanPDF 
                                testPlan={testPlan}
                                onClose={() => {
                                    document.querySelector("[data-modal]").close();
                                    setDisplayModal(false);
                                    router.push('/');
                                }}
                            /> : <></>
                    }
                </Suspense>
            </dialog>
            <TestPlanForm
                testPlan={testPlan}
                setTestPlan={setTestPlan}
                handleSubmit={createTestPlan}
                submitting={submitting}
            />
        </section>
    );
}

export default page;