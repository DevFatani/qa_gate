import React from 'react'
import { Text, View, Image } from '@react-pdf/renderer';
import moment from 'moment';

export default ({ title }) => 
<View fixed style={{ margin: 30, position: 'center'}}>
    <View style={{
        marginTop: 10,
        marginHorizontal: 15,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }}>
        <Image style={{height: 55, flex: 0.6}} src='/assets/images/Color logo with background.png' />
        <Text style={{flex: 1.4, fontSize: 17,fontWeight: 600, textAlign: 'center', marginTop: 15}}>
            {title} ({moment().format('LLL')})
        </Text>
    </View>
    <View style={{backgroundColor: "#25272C", height: "1px"}}/>
</View>