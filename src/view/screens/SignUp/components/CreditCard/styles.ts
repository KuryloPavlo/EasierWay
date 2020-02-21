import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        marginHorizontal: 42,
        borderRadius: 10,
        backgroundColor: '#2A2E43'
    },
    firstContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 14
    },
    secondContainer: {
        flex: 1,
        marginHorizontal: 14,
        marginVertical: 20,
        flexDirection: 'row'
    },
    cardContainer: {
        flex: 3,
        borderRadius: 10,
        backgroundColor: '#454F63',
        justifyContent: 'center',
        paddingLeft: 12
    },
    expiresContainer: {
        flex: 1,
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#454F63',
        justifyContent: 'center',
        paddingLeft: 12
    },
    nameContainer: {
        flex: 3,
        borderRadius: 10,
        backgroundColor: '#454F63',
        justifyContent: 'center',
        paddingLeft: 12
    },
    cvvContainer: {
        flex: 1,
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#454F63',
        justifyContent: 'center',
        paddingLeft: 12
    },
    smallText: {
        fontSize: 11,
        lineHeight: 15,
        color: '#959DAD'
    },
    bigText: {
        fontSize: 14,
        lineHeight: 19,
        color: '#FFFFFF'
    }
})

export default styles;