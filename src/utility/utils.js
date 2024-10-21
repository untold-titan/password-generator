import Snackbar from "react-native-snackbar";

export function showErrorSnackbar(errorTxt){
    Snackbar.show({
        text:errorTxt,
        textColor: "#FF0000"
    })
}

export function showSuccessSnackbar(successTxt){
    Snackbar.show({
        text:successTxt,
        textColor: "#0000FF"
    })
}

export function showInfoSnackbar(infoTxt){
    Snackbar.show({
        text:infoTxt,
        textColor: "#FFFFFF"
    })
}