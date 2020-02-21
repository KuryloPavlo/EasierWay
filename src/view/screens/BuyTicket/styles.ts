import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#17223B',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 30,
        paddingHorizontal: 16,
        justifyContent: 'space-between'
    },
    buyTicketContainer: {
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        marginTop: 8,
        marginBottom: 2,
        marginHorizontal: 16,
        justifyContent: 'space-between',
        elevation: 5,
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
        flex: 0.5
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
    whiteText: {
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 32,
        color: '#FFFFFF',
    },
    cardContainer: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#17223B',
        position: 'absolute',
        top: 655,
        left: 22,
        right: 220,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12
    },
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 725,
        left: 22
    },
    cancelButt: {
        borderRadius: 5,
        borderWidth: 1,
        borderBottomColor: '#17223B',
        marginRight: 25,
        paddingVertical: 15,
        paddingHorizontal: 55
    },
    buyButt: {
        paddingVertical: 15,
        paddingHorizontal: 44,
        backgroundColor: '#FFB900',
        borderRadius: 5
    },
    switchContainer: {
        flexDirection: 'row',
        marginTop: 12,
        marginLeft: 32
    }
})

export default styles;