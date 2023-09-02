import React from 'react'
import { Page, Text, View, Document, StyleSheet,PDFViewer, Font, PDFDownloadLink} from '@react-pdf/renderer';
import { FiDownloadCloud, FiXCircle } from 'react-icons/fi';
import Header from './PDFComponents/Header';

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
  viewHighlight: {
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'red',
    color: 'white'
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

  const renderView = (title, highlight = false, data) => 
    <View style={highlight ? styles.viewHighlight : styles.view}>
      <Text style={styles.textLeft}>{title}:</Text>
      <Text style={styles.textRight}>{data}</Text>
    </View>

  const PDFdoc = () => 
      <Document  title={testReport.projectName} author={testReport.testerName} >
        <Page size="A4" style={styles.page}  >
          <Header title={'Test Report'}/>
          {renderView('Report Type',false, testReport.isLiveReport ? 'Live' : 'Dev')}
          {renderView('Tester Name',false, testReport.testerName)}
          {renderView('Project Name',false, testReport.projectName)}

          <View style={styles.view}>
            <Text style={styles.textLeft}>Test Run:</Text>
            <Text style={styles.textRight}>{testReport.testRunURL}</Text>
          </View>
          {renderView('What are the tickets opened today?', false, testReport.openTicketsNumber)}
          {renderView('What are the tickets moved to (In Progress) today?', false, testReport.backInProgressTicketsNumber)}
          {renderView('What are the tickets moved to (Close) today?',false, testReport.closedTicketsNumber)}
          {(testReport.blockedTicketsNumber != '0' || testReport.blockedTicketsNumber != '-') ? renderView('What are the tickets moved to (Blocked) today?', true, testReport.blockedTicketsNumber) : <View />}
          {renderView('Number Of Test Case Executed (Today)',false, testReport.noOfTCExe)}
          
          {renderView('Did you follow up with the PM or PO about the last update today?',false, testReport.isPMbeenAsked ? 'YES' : 'NO')}
          {testReport.isPMbeenAsked == false ? renderView('Why there is no communication?',true, testReport.communicatePMRemark) : <View />}
          
          {renderView('Is Requirmenet Changed? (Today)',false, testReport.isRequirmenetChange ? 'YES' : 'NO')}
          {testReport.isRequirmenetChange ? renderView('Justify why requirement been changed',true, testReport.requirmenetChangeRemark) : <View />}
          
          {renderView('Is the PRD file up to date? (Today)',false, testReport.isPRDUpdated ? 'YES' : 'NO')}
          {testReport.isPRDUpdated == false ? renderView('Justify why PRD not up to date',true, testReport.prdUpdatedRemark) : <View />}
          {testReport.releaseDate ? renderView('Release Date',false, testReport.releaseDate) : <View />}
          {renderView('Remark',false, testReport.remark)}
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