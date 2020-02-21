import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textContainer: {
        marginTop: 49,
        marginLeft: 42,
        marginRight: 72
    },
    secondTextContainer: {
        marginTop: 17,
        marginLeft: 42,
        marginRight: 20
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
    buttonContainer: {
        marginTop: 165,
        marginHorizontal: 22,
        marginBottom: 40,
        flexDirection: 'row'
    },
    activeButton: {
        marginLeft: 105,
        borderRadius: 5,
        backgroundColor: '#FFB900',
        paddingVertical: 12,
        paddingHorizontal: 47 
    },
    notActiveButton: {
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 40,
        paddingVertical: 12
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