/**
 * Created by wangdi on 4/11/16.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';


export default class MeFragment extends Component{

    render(){
        return(
            <View style={styles.view}>
                <Text>me</Text>
            </View>
        );
    }
}

const styles = ({
    view: {
        marginTop: (Platform.OS === 'ios') ? 20 : 0
    }
});