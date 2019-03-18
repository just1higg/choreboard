import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Text } from 'react-native';

import TopBar from '../../mainbars/TopBar';
import TopSubBar from '../../mainbars/TopSubBar';

export default class CheckInScreen extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style = {styles.container}>
                <TopBar />
                <TopSubBar />
                <Text>New Check-In Screen</Text>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});