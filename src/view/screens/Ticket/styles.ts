import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container:{
        marginTop: 187,
        marginHorizontal: 84,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFB900',
        alignItems: 'center',
        paddingVertical: 20
    },
    ticketContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    secondContainer: {
        marginHorizontal: 84,
        borderRadius: 5,
        borderStartWidth: 1,
        borderBottomWidth: 1,
        borderEndWidth: 1,
        borderColor: '#FFB900',
        alignItems: 'center',
        paddingTop: 35
    },
    priceContainer: {
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 35,
        alignItems: 'center'
    },
    buttContainer: {
        marginTop: 175,
        marginHorizontal: 22,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#FFB900',
        paddingVertical: 18
    },
    text: {
        fontWeight: '300',
        fontSize: 20,
        lineHeight: 32
    },
    textWhite: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 24,
        color: '#FFFFFF'
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 36,
        lineHeight: 36
    },
    oppacityText: {
        fontWeight: '200',
        fontSize: 12,
        lineHeight: 32,
        opacity: 0.3
    },
    icCap: {
        width: 36,
        height: 30
    },
    ic: {
        width: 24,
        height: 24
    },
    logo: {
        width: 96,
        height: 55
    },
    minContainer:{
        borderStartWidth: 1,
        borderEndWidth: 1,
        borderColor: "#FFB900",
        marginHorizontal: 87,
        paddingVertical: 5
    }
})

export default styles;