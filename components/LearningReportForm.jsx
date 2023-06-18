import React from 'react'
import Link from 'next/link';
const LearningReportForm = ({ 
    learningReport,
    setLearningReport,
    handleSubmit,
    submitting}) => {


  return (
    <section className='w-full max-w-full flex-start flex-col'>
        <form
          onSubmit={handleSubmit}
          className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
        >

        <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Tester Name</span>
                <input 
                  className='search_input'
                  value={learningReport.testerName}
                  onChange={(e) => setLearningReport({...learningReport, testerName: e.target.value})}
                  placeholder='Write down your name'
                  required
                
                />
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Course Name</span>
                <input 
                  className='search_input'
                  value={learningReport.courseName}
                  onChange={(e) => setLearningReport({...learningReport, courseName: e.target.value})}
                  placeholder='Write down the course name'
                  required
                
                />
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>What Did You Learn Today?</span>
              <textarea 
                  className='form_textarea numbered'
                  cols="50"
                  rows="10"
                  value={learningReport.whatDidYouLearnToday}
                  onChange={(e) => setLearningReport({...learningReport, whatDidYouLearnToday: e.target.value})}
                  placeholder='What Did You Learn Today?'
                  required
                
                />
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>URL Soruce</span>
              <input 
                className='search_input'
                value={learningReport.urlSoruce}
                onChange={(e) => setLearningReport({...learningReport, urlSoruce: e.target.value})}
                placeholder='URL Soruce (Youtube, PDF, etc ...)'
                required
               
              />
          </label>
          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>When You Can Finish?</span>
              <input 
                className='search_input'
                value={learningReport.whenYouCanFinish}
                onChange={(e) => setLearningReport({...learningReport, whenYouCanFinish: e.target.value})}
                placeholder='When You Can Finish?'
                required
               
              />
          </label>

          <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>Do You Need Help?</span>
              <textarea 
                className='form_textarea numbered'
                cols="50"
                rows="10"
                value={learningReport.needHelpRemark}
                onChange={(e) => setLearningReport({...learningReport, needHelpRemark: e.target.value})}
                placeholder='Do You Need Help?'
                required
              />
          </label>

          <div className='flex-end mx-3 mb-5 gap-4'>
            <Link href='/' className='text-gray-500 text-sm'>Cancel</Link>
            <button
              type='submit'
              disabled={submitting}
              className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
            >Create</button>
          </div>
        </form>

    </section>
  )
}

export default LearningReportForm;