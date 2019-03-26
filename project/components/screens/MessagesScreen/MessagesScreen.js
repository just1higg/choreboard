import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, SafeAreaView } from 'react-native';

import TopBar from '../../mainbars/TopBar';
import TopSubBar from '../../mainbars/TopSubBar';

export default class MessagesScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <TopBar />
                <TopSubBar />
                <Text>Messages Screen</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
