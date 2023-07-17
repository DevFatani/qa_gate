import React from 'react'
import Link from 'next/link';
import CustomInput from './daisyui/CustomInput';
import CustomTextarea from './daisyui/CustomTextarea';
const LearningReportForm = ({ 
    learningReport,
    setLearningReport,
    handleSubmit,
    submitting}) => {


  return (
    <section className="card place-items-center">
        <form
          onSubmit={handleSubmit}
          style={{
            // backgroundColor: "brown",
            width: "30%"
          }}
          className="form-control"
        >
          <CustomInput
                require={true}
                marginTop={'10px'}
                size='max-w-lg input-md'
                label={'Tester Name'}
                value={learningReport.testerName}
                onChange={(e) => setLearningReport({...learningReport, testerName: e.target.value})}
                placeholder='Write down your name'
          />
          <CustomInput
                require={true}
                marginTop={'10px'}
                size='max-w-lg input-md'
                label={'Course Name'}
                value={learningReport.courseName}
                onChange={(e) => setLearningReport({...learningReport, courseName: e.target.value})}
                placeholder='Write down the course name'
          />
          <CustomTextarea
                label={'What Did You Learn Today?'}
                cols="50"
                rows="10"
                marginTop={'10px'}
                value={learningReport.whatDidYouLearnToday}
                onChange={(e) => setLearningReport({...learningReport, whatDidYouLearnToday: e.target.value})}
                placeholder='What Did You Learn Today?'
                required
            />
          <CustomInput
                require={true}
                size='max-w-lg input-md'
                label={'URL Soruce'}
                marginTop={'10px'}
                type={'url'}
                value={learningReport.urlSoruce}
                onChange={(e) => setLearningReport({...learningReport, urlSoruce: e.target.value})}
                placeholder='URL Soruce (Youtube, PDF, etc ...)'
          />
          <CustomInput
                require={true}
                marginTop={'10px'}
                size='max-w-lg input-md'
                label={'When You Can Finish?'}
                type='date'
                value={learningReport.whenYouCanFinish}
                onChange={(e) => setLearningReport({...learningReport, whenYouCanFinish: e.target.value})}
                placeholder='When You Can Finish?'
          />

          <CustomInput
                require={true}
                size='max-w-lg input-md'
                marginTop={'10px'}
                label={'Do You Need Help?'}
                value={learningReport.needHelpRemark}
                onChange={(e) => setLearningReport({...learningReport, needHelpRemark: e.target.value})}
                placeholder='Do You Need Help?'
          />

          <div className='flex-end mx-3 mb-5 gap-4' style={{marginTop: "15px"}}>
            <Link href='/' className="btn btn-ghost">Cancel</Link>
            <button
              type='submit'
              disabled={submitting}
              className="btn btn-accent"
            >Create</button>
          </div>
        </form>

    </section>
  )
}

export default LearningReportForm;