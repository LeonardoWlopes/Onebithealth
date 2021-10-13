import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30

    },
    form :{
        width: "100%",
    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#fff"
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },
    resultImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    information: {
        fontSize: 18,
        color: "#ff0043",
        fontWeight: "bold"
    },
    nuberImc: {
        fontSize: 48,
        color: "#ff0043",
        fontWeight: "bold"
    }
})

export default styles