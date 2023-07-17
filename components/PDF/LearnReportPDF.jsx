import React from 'react'
import { Page, Text, View, Document, StyleSheet, Link, Image, PDFViewer, Font, PDFDownloadLink } from '@react-pdf/renderer';
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
    flex: 0.8,
    fontWeight: 600
  },
  textRight: {
    fontSize: 14,
    flex: 1.2,
    fontFamily: "Roboto",
  }
});



export default ({ learningReport, onClose }) => {

  const renderView = (title, data) => 
    <View style={styles.view}>
      <Text style={styles.textLeft}>{title}:</Text>
      <Text style={styles.textRight}>{data}</Text>
    </View>

  const PDFdoc = () => 
      <Document  title={learningReport.courseName} author={learningReport.testerName} >
        <Page size="A4" style={styles.page}  >
          <View style={{ margin: 30, position: 'center'}}>
            <Image style={{height: 55, width: 160}} src='/assets/images/Color logo with background.png' />
            <View style={{backgroundColor: "#25272C", height: "1px"}}/>
          </View>
          {renderView('Create At', moment().format('LLL'))}
          {renderView('Tester Name', learningReport.testerName)}
          {renderView('Course Name', learningReport.courseName)}
          {renderView('What Did You Learn Today?', learningReport.whatDidYouLearnToday)}
          <View style={styles.view}>
            <Text style={styles.textLeft}>Course Source:</Text>
            <Link src={learningReport.urlSoruce} style={styles.textRight}>
              <Text style={{fontSize: 16}}>{learningReport.urlSoruce}</Text>
            </Link>
          </View>
          
          {renderView('When You Can Finish ?', learningReport.whenYouCanFinish)}
          {renderView('Do You Need Help ?', learningReport.needHelpRemark)}
        </Page>
      </Document>


  return(
    <div className='flex flex-col h-screen'>
      <div className="flex-none mb-10">
        <div className='flex justify-between'>
            <PDFDownloadLink document={PDFdoc()} fileName={`${learningReport.courseName}.pdf`}>
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