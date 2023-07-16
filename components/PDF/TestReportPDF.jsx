import React from 'react'
import { Page, Text, View, Document, StyleSheet, Link, Image, PDFViewer, Font, PDFDownloadLink, usePDF, pdf } from '@react-pdf/renderer';
import moment from 'moment';
import { FiDownloadCloud, FiXCircle } from 'react-icons/fi';

Font.register({
  family: "Roboto",
  fonts: [
    { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf", fontWeight: 300 },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf", fontWeight: 400 },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf", fontWeight: 500 },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf", fontWeight: 600 },
  ],
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    fontFamily: "Roboto",
    border: '2px',
    borderColor: 'black'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  view: {
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },  
  textLeft: {
    fontSize: 10,
    flex: 1,
    fontWeight: 600,
    marginRight: 4
  },
  textRight: {
    fontSize: 12,
    flex: 1,
    fontFamily: "Roboto",
  }
});



const TestReportPDF = ({ testReport, onClose }) => {

  const renderView = (title, data) => 
    <View style={styles.view}>
      <Text style={styles.textLeft}>{title}:</Text>
      <Text style={styles.textRight}>{data}</Text>
    </View>

  const PDFdoc = () => 
      <Document  title={testReport.projectName} author={testReport.testerName} >
        <Page size="A4" style={styles.page}  >
          <View style={{ margin: 25, position: 'center'}} fixed>
            <Image style={{height: 55, width: 160}} src='/assets/images/Color logo with background.png' />
            <View style={{backgroundColor: "#25272C", height: "1px"}}/>
          </View>
          {renderView('Create At', moment().format('LLL'))}
          {renderView('Report Type', testReport.isLiveReport ? 'Live' : 'Dev')}
          {renderView('Tester Name', testReport.testerName)}
          {renderView('Project Name', testReport.projectName)}

          <View style={styles.view}>
            <Text style={styles.textLeft}>Project Url:</Text>
            <Link src={testReport.url} style={styles.textRight}>
              <Text style={{fontSize: 10}}>{testReport.url}</Text>
            </Link>
          </View>
          <View style={styles.view}>
            <Text style={styles.textLeft}>Test Run:</Text>
            <Link src={testReport.testRunURL} style={styles.textRight}>
              <Text style={{fontSize: 10}}>{testReport.testRunURL}</Text>
            </Link>
          </View>
          {renderView('No Defect Found', testReport.noDefectFound)}
          {renderView('No Defect Solved', testReport.noDefectSolved)}
          {renderView('Number Of Defect In Block', testReport.noOfDefectBlock)}
          {renderView('Number Of (Major) Defect', testReport.noOfDefectMajor)}
          {renderView('Number Of Test Case Executed', testReport.noOfTCExe)}
          {renderView('Number Of Defect In Requirement:', testReport.noOfDefectInRequirement)}
          {renderView('Release Date', testReport.releaseDate)}

          {renderView('Is Requirmenet Changed? (Today)', testReport.isRequirmenetChange ? 'YES' : 'NO')}
          {testReport.isRequirmenetChange ? renderView('Justify why requirement been changed', testReport.requirmenetChangeRemark) : <View />}

          {renderView('Is the PRD file up to date? (Today)', testReport.isPRDUpdated ? 'YES' : 'NO')}
          {testReport.isPRDUpdated ? renderView('Justify why PRD not up to date', testReport.prdUpdatedRemark) : <View />}
          
          {renderView('Is the task need to back (In-Progress) ?', testReport.isTaskNeedToBackInProgress ? 'YES' : 'NO')}
          
          {renderView('Remark', testReport.remark)}
        </Page>
      </Document>


  return(
    <div className='flex flex-col h-screen'>
      <div className="flex-none mb-10">
        <div className='flex justify-between'>
            <PDFDownloadLink document={PDFdoc()} fileName={`${testReport.projectName}.pdf`}>
              {({ blob, url, loading, error }) => (
              <button className="btn btn-outline btn-secondary btn-wide">
                  <FiDownloadCloud/> {loading ? 'Loading document...' : 'Downalod'}
                </button>
                )
              }        
            </PDFDownloadLink>
            <button className='btn btn-outline btn-error' onClick={() => onClose()}><FiXCircle className='font-xl'/></button>
        </div>
      </div>
      <div className="grow h-80 disabled:fixed">
        <PDFViewer height={'100%'} width={'100%'}><PDFdoc/></PDFViewer>
      </div>
    </div>
  );
}

export default TestReportPDF;