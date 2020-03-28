import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

export default function RegisterScreen( {navigation} ) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.welcomeContainer}>
                    <Image
                        source={
                            require('../assets/images/HabitsLogo.png')
                        }
                        style={styles.welcomeImage}
                    />
                </View>

                <View style={styles.getStartedContainer}>

                    <Text style={styles.newStartedText}>HABITSCODES</Text>
                    <Text style={{ color: 'white', fontSize: 30, }}>Register</Text>

                    <TextInput
                        placeholder="E-Mail"
                        style={styles.inputStyle}
                        maxLength={50}
                    // onChangeText={streetName => this.setState({ streetName })}
                    />
                    <TextInput
                        placeholder="Username"
                        style={styles.inputStyle}
                        maxLength={50}
                    // onChangeText={streetName => this.setState({ streetName })}
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.inputStyle}
                        maxLength={50}
                    // onChangeText={streetName => this.setState({ streetName })}
                    />
                    <TextInput
                        placeholder="Re-Password"
                        style={styles.inputStyle}
                        maxLength={50}
                    // onChangeText={streetName => this.setState({ streetName })}
                    />

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>DONE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Text style={styles.newbuttonText}>BACK</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </View>
    );
}

RegisterScreen.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28ADEF',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,

    },
    welcomeImage: {
        width: 200,
        height: 180,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    newStartedText: {
        fontSize: 40,
        fontWeight: "bold",
        color: 'rgba(96,100,109, 1)',
        lineHeight: 2,
        textAlign: 'center',
        marginVertical: 30,
        marginBottom: 25
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    button: {
        backgroundColor: "#063951",
        marginTop: 20,
        paddingHorizontal: 30,
        paddingVertical: 2,
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 30,
        color: '#fff',
    },
    newbuttonText: {
        fontSize: 20,
        color: '#063E59',
    },
    inputStyle: {
        minHeight: 1,
        width: "100%",
        backgroundColor: "#fff",
        margin: 5,
        padding: 10,
        alignSelf: "center",
        textAlign: "center",
        borderColor: "white",
        borderWidth: 0.5,
        borderRadius: 40,
    },
});
