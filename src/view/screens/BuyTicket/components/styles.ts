import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buyTicketContainer: {
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        marginTop: 8,
        marginBottom: 2,
        marginHorizontal: 16,
        justifyContent: 'space-between',
        elevation: 5
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        flex: 1.5
    },
    ticketContainer: {
        flexDirection: 'row',
        alignItems:'center',
        flex: 1.5
    },
    priceContainer: {
        backgroundColor: '#17223B',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingTop: 19,
        paddingBottom: 20,
        paddingHorizontal: 30,
        flex: 0.3
    },
    priceText: {
        color: '#FFB900',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: 48
    },
    currencyText: {
        color: '#FFB900',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16
    },
    meterText: {
        fontWeight: 'bold',
        fontSize: 48,
        lineHeight: 48,
        color: '#000000'
    },
    text: {
        fontSize: 16,
        lineHeight: 32,
    },
    ic: {
        width: 24,
        height: 24
    },
})

export default styles;