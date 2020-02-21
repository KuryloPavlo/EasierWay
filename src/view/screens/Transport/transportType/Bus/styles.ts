import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 5,
        paddingTop: 21,
        paddingBottom: 16,
        paddingLeft: 16,
        elevation: 5,
        backgroundColor: '#FFFFFF',
    },
    stopContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 42
    },
    ic: {
        width: 14,
        height: 14
    },
    titleText: {
        fontSize: 48,
        lineHeight: 48,
        fontWeight: 'bold',
        color: '#2A2E43'
    },
    text: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '300'
    }
})

export default styles;