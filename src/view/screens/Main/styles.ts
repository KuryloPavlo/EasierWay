import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    navigationBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#17223B',
        paddingHorizontal: 19,
        paddingVertical: 15,
        justifyContent: 'space-between'
    },
    ic: {
        width: 25,
        height: 25
    },
    mapsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    textInpuntContainer: {
        borderRadius: 5,
        alignItems: 'center',
        position: 'absolute',
        left: 42,
        right: 42,
        top: 50,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        paddingLeft: 10
    },
    text: {
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 23,
        color: '#FFFFFF'
    }
})

export default styles;