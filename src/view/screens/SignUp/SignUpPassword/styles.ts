import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    textContainer:{
        marginTop: 49,
        marginLeft: 42,
        marginRight: 50
    },
    secondTextContainer:{
        marginTop: 17,
        marginLeft: 42
    },
    text: {
        fontSize: 24,
        lineHeight: 32
    },
    opText: {
        fontSize: 24,
        lineHeight: 32,
        opacity: 0.3
    },
    textInputContainer:{
        marginTop: 40,
        borderRadius: 20,
        marginHorizontal: 42,
        borderWidth: 1,
        paddingLeft: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    secondTextInputContainer: {
        marginTop: 10,
        borderRadius: 20,
        marginHorizontal: 42,
        borderWidth: 1,
        paddingLeft: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        marginTop: 302,
        marginLeft: 250,
        marginRight: 22,
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: '#FFB900',
        alignItems: 'center'
    },
    textButton:{
        fontSize: 14,
        lineHeight: 24,
        color: '#FFFFFF'
    },
    image:{
        width: 18,
        height: 18
    }
})

export default styles;