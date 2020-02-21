import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    avatarContainer: {
        flexDirection: 'row',
        marginTop: 21,
        marginLeft: 10,
        alignItems: 'center'
    },
    stripContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginLeft: 25
    },
    avatar: {
        width: 94,
        height: 92
    },
    textContainer: {
        marginLeft: 23,
        marginRight: 55
    },
    boldText: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '500'
    },
    text: {
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 16
    },
    ic: {
        width: 20,
        height: 20,
        marginRight: 10
    }
})

export default styles;