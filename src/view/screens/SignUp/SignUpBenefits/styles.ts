import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    text:{
        fontSize: 24,
        lineHeight: 32
    },
    opText:{
        fontSize: 24,
        lineHeight: 32,
        opacity: 0.3
    },
    textContainer:{
        marginTop: 49,
        marginLeft: 42,
        marginRight: 72,
    },
    secondTextContainer: {
        marginTop: 17,
        marginLeft: 42
    },
    buttonContainer:{
        marginTop: 46,
        marginHorizontal: 22,
        flexDirection: 'row',
    },
    activeButton:{
        marginLeft: 75,
        borderRadius: 5,
        backgroundColor: '#FFB900',
        paddingVertical: 15,
        paddingHorizontal: 58
    },
    notActiveButton:{
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 60,
        paddingVertical: 15
    },
    buttonText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '500'
    },
    activeButtonText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '500',
        color: '#FFFFFF'
    }
})

export default styles;