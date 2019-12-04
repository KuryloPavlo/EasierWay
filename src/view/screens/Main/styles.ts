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
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
})

export default styles;