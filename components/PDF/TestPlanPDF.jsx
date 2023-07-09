import React from 'react'
import { Page, Text, View, Document, StyleSheet, Link, Image } from '@react-pdf/renderer';
import moment from 'moment';


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});
// const formatPDF = () => { 
//   let text = `
//   Create At:\t${moment().format('LLL')}
//   Tester Name:\t${testPlan.testerName}\n
//   Project Name:\t${testPlan.projectName}\n
//   URL:\t${testPlan.url}\n
//   About:\n\t${testPlan.about}\n
//   Scope In:\n\t${testPlan.scopeIn}\n
//   Scope Out:\n\t${testPlan.scopeOut}\n
//   Test Level: \n${formatArrayOutput(testPlan.testLevel)}\n
//   Test Type: \n${formatArrayOutput(testPlan.testType)}\n
//   exit criteria:\n\t${testPlan.exitCriteria}\n
//   `;
 
//   var pageWidth = 8.5,
//   lineHeight = 1.2,
//   margin = 0.11,
//   maxLineWidth = pageWidth - margin * 2,
//   fontSize = 12,
//   ptsPerInch = 72,
//   oneLineHeight = (fontSize * lineHeight) / ptsPerInch,

//   doc = new jsPDF({
//     unit: "in",
//     lineHeight: lineHeight
//   }).setProperties({ title: `${testPlan.projectName}_${moment().format('LLL')}` });

// // splitTextToSize takes your string and turns it in to an array of strings,
// // each of which can be displayed within the specified maxLineWidth.
// var textLines = doc
//   .setFont("helvetica")
//   .setFontSize(fontSize)
//   .splitTextToSize(text, maxLineWidth);

// // doc.text can now add those lines easily; otherwise, it would have run text off the screen!
//   doc.text(textLines, margin, margin + 2 * oneLineHeight);
//   doc.save(`${testPlan.projectName}_${moment().format('LLL')}.pdf`);
// }


const TestPlanPDF = ({ testPlan }) => <Document title={testPlan.projectName} author={testPlan.testerName} >
  <Page  size="A4" style={{ border: '2px', borderColor: 'black'}}  >
    <View style={{ color: 'red', margin: 30, position: 'center'}}>
      <Image style={{height: 80, width: 180}} src='/assets/images/Color logo with background.png' />
    </View>
    <View style={{ margin: 5,  flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <Text style={{fontSize: 30}}>Create At:</Text>
      <Text style={{fontSize: 30}}>{moment().format('LLL')}</Text>
    </View>
    
    <View style={{ margin: 5,  flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <Text style={{fontSize: 30}}>Tester Name:</Text>
      <Text style={{fontSize: 30}}>{testPlan.testerName}</Text>
    </View>

    <View style={{ margin: 5,  flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <Text style={{fontSize: 30}}>Project URL:</Text>
      <Link src={'https://google.com'}>
          <Text style={{fontSize: 30}}>{testPlan.url}</Text>
      </Link>
    </View>
    

    <View>
      <Text wrap={true} style={{color: 'purple', marginLeft: '15px', marginRight: '15px', fontSize: 20}}>
        Early naval submarines were typically fitted with a small watertight protrusion on top of their hulls, from which the boat's crew could observe their surroundings through a number of viewports.
        Early naval submarines were typically fitted with a small watertight protrusion on top of their hulls, from which the boat's crew could observe their surroundings through a number of viewports.
        Early naval submarines were typically fitted with a small watertight protrusion on top of their hulls, from which the boat's crew could observe their surroundings through a number of viewports.
        Early naval submarines were typically fitted with a small watertight protrusion on top of their hulls, from which the boat's crew could observe their surroundings through a number of viewports.
      </Text>
    </View>

  </Page>
</Document>;


    

export default TestPlanPDF;