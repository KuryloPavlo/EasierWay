import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        top: 540,
        right: 16,
        left: 16,
        bottom: 30
    },
    departureContainer: {
        marginLeft: 16,
        marginTop: 16
    },
    inWayConteiner: {
        marginTop: 16,
        marginLeft: 22
    },
    smallText: {
        fontSize: 12,
        lineHeight: 16,
        color: '#2A2E43'
    },
    bigText: {
        fontSize: 48,
        lineHeight: 48,
        fontWeight: 'bold',
        color: '#2A2E43'
    },
    minText: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#2A2E43',
        marginBottom: 5
    },
    icBus: {
        width: 12,
        height: 13
    },
    icArrow: {
        width: 14,
        height: 8,
        marginLeft: 10
    },
    busContainer: {
        borderRadius: 8,
        borderWidth: 0.5,
        paddingHorizontal: 7,
        paddingVertical: 1,
        borderColor: '#FFB900',
        marginLeft: 10
    },
    priceContainer: {
        backgroundColor: '#17223B',
        flex: 1,
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    priceTextBig: {
        fontWeight: 'bold',
        fontSize: 48,
        lineHeight: 55,
        color: '#FFB900'
    },
    priceTextSmall: {
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 12,
        color: '#FFB900'
    },
    whiteText: {
        fontSize: 12,
        lineHeight: 16,
        color: '#FFFFFF'
    }
})

export default styles;