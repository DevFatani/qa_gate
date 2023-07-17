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
    fontSize: 12,
    flex: 0.4,
    fontWeight: 600
  },
  textRight: {
    fontSize: 14,
    flex: 1.6,
    fontFamily: "Roboto",
  }
});



const  TestPlanPDF = ({ testPlan, onClose }) => {

  function formatArrayOutput(arr) {
    let selecteItem = '';
    arr.map(item => item.select ? selecteItem += `${item.name}\n` : '');
    return selecteItem;
  }
  const renderView = (title, data) => 
    <View style={styles.view}>
      <Text style={styles.textLeft}>{title}:</Text>
      <Text style={styles.textRight}>{data}</Text>
    </View>

  const PDFdoc = () => 
      <Document  title={testPlan.projectName} author={testPlan.testerName} >
        <Page size="A4" style={styles.page}  >
          <View style={{ margin: 30, position: 'center'}}>
            <Image style={{height: 55, width: 160}} src='/assets/images/Color logo with background.png' />
            <View style={{backgroundColor: "#25272C", height: "1px"}}/>
          </View>
          {renderView('Create At', moment().format('LLL'))}
          {renderView('Tester Name', testPlan.testerName)}
          {renderView('Project Name', testPlan.projectName)}

          <View style={styles.view}>
            <Text style={styles.textLeft}>Project URL:</Text>
            <Link src={testPlan.url} style={styles.textRight}>
              <Text style={{fontSize: 16}}>{testPlan.url}</Text>
            </Link>
          </View>
          {renderView('Project Overview', testPlan.about)}
          {renderView('Scope In', testPlan.scopeIn)}
          {renderView('Scope Out', testPlan.scopeOut)}
          {renderView('Team Work', testPlan.teamwork)}
          {renderView('Project sources', testPlan.sources)}
          {renderView('Test Level', formatArrayOutput(testPlan.testLevel))}
          {renderView('Test Type', formatArrayOutput(testPlan.testType))}
          {renderView('Exit criteria', testPlan.exitCriteria)}
        </Page>
      </Document>


  return(
    <div className='flex flex-col h-screen'>
      <div className="flex-none mb-10">
        <div className='flex justify-between'>
            <PDFDownloadLink document={PDFdoc()} fileName={`${testPlan.projectName}.pdf`}>
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

export default TestPlanPDF;