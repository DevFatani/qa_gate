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



const TestJiraReportPDF = ({ testReport, onClose }) => {

  const renderView = (title, data) => 
    <View style={styles.view}>
      <Text style={styles.textLeft}>{title}:</Text>
      <Text style={styles.textRight}>{data}</Text>
    </View>

  const PDFdoc = () => 
      <Document  title={testReport.projectName} author={testReport.testerName} >
        <Page size="A4" style={styles.page}  >
          <View style={{ margin: 30, position: 'center'}} fixed>
            <Image style={{height: 55, width: 160}} src='/assets/images/Color logo with background.png' />
            <View style={{backgroundColor: "#25272C", height: "1px"}}/>
          </View>
          {renderView('Create At', moment().format('LLL'))}
          {renderView('Report Type', testReport.isLiveReport ? 'Live' : 'Dev')}
          {renderView('Tester Name', testReport.testerName)}
          {renderView('Project Name', testReport.projectName)}

          <View style={styles.view}>
            <Text style={styles.textLeft}>Test Run:</Text>
            <Text style={styles.textRight}>{testReport.testRunURL}</Text>
          </View>
          {renderView('How many tickets did you open today?', testReport.openTicketsNumber)}
          {renderView('How many tickets did you move back to InProgress?', testReport.backInProgressTicketsNumber)}
          {renderView('How many tickets did you close today?', testReport.closedTicketsNumber)}
          {renderView('How many tickets did you move to Block status?', testReport.blockedTicketsNumber)}
          {renderView('Number Of Test Case Executed (Today)', testReport.noOfTCExe)}
          
          {renderView('Did you follow up the PM or PO about the last update (Today)?', testReport.isPMbeenAsked ? 'YES' : 'NO')}
          {testReport.isPMbeenAsked == false ? renderView('Why there is no communication?', testReport.communicatePMRemark) : <View />}
          
          {renderView('Is Requirmenet Changed? (Today)', testReport.isRequirmenetChange ? 'YES' : 'NO')}
          {testReport.isRequirmenetChange ? renderView('Justify why requirement been changed', testReport.requirmenetChangeRemark) : <View />}
          
          {renderView('Is the PRD file up to date? (Today)', testReport.isPRDUpdated ? 'YES' : 'NO')}
          {testReport.isPRDUpdated == false ? renderView('Justify why PRD not up to date', testReport.prdUpdatedRemark) : <View />}
          
          {renderView('Release Date', testReport.releaseDate)}
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

export default TestJiraReportPDF;