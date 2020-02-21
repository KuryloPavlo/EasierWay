import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(196, 196, 196, 0.5)',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    popupContainer: {
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        elevation: 10,
        marginHorizontal: 42
    },
    textContainer: {
        paddingTop: 30,
        paddingBottom: 31,
        paddingHorizontal: 16
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        paddingVertical: 18
    },
    buttonYellow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#FFB900"
    },
    titleText: {
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 24
    },
    text: {
        fontSize: 14,
        lineHeight: 24,
        marginTop: 15,
    },
    cancelText: {
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 24
    },
    whiteText: {
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 24,
        color: '#FFFFFF'
    }
})

export default styles;