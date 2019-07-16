import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { primaryGradientArray } from './utils/Colors';
import Header from './components/Header';

export default class Main extends React.Component{

    render() {

        const headerTitle = 'To Do';

        return(
            <LinearGradient colors = {primaryGradientArray} style = {styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.centered}>
                    <Header title={headerTitle}/>
                </View>
            </LinearGradient>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    centered:{
        alignItems: 'center'
    }
});