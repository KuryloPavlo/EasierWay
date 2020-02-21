import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logoContainer: {
        marginTop: 65,
        marginHorizontal: 146
    },
    textContainer: {
        marginTop: 32,
        marginHorizontal: 125,
        alignContent: 'center'
    },
    textInputContainer: {
        marginTop: 135,
        marginHorizontal: 42,
        justifyContent: 'center',
        alignContent: 'center'
    },
    logo: {
        height: 68,
        width: 118
    },
    logoText: {
        fontWeight: '500',
        fontSize: 32,
        lineHeight: 32
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: "bold",
        color: '#FFFFFF',
        marginLeft: 73
    },
    textInput: {
        borderRadius: 20,
        borderColor: '#17223B',
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    secondTextInput: {
        marginTop: 24,
        borderRadius: 20,
        borderColor: '#17223B',
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'row'
        
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 20,
        marginRight: 10
    },
    signInIC: {
        width: 24.5,
        height: 22.4,
        marginLeft: 20,
        marginRight: 10
    },
    button: {
        marginTop: 70,
        borderRadius: 20,
        backgroundColor: '#17223BCC',
        paddingVertical: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    accountNavigationContainer: {
        marginHorizontal: 42,
        marginTop: 49,
        flexDirection: 'row'
    },
    smallText: {
        fontSize: 14,
        lineHeight: 16
    },
    bigText: {
        fontSize: 20,
        lineHeight: 23
    },
    secondSmallText: {
        opacity: 0.3,
        marginLeft: 80,
        fontSize: 14,
        lineHeight: 16
    },
    singText: {
        marginTop: 29,
        alignItems: 'center'
    },
    socialNetworks: {
        marginTop: 22,
        marginHorizontal: 80,
        flexDirection: 'row'
    },
    google: {
        height: 30,
        width: 48
    },
    facebook: {
        marginLeft: 135,
        height: 36,
        width: 36
    }
})

export default styles;