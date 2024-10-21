import {SafeAreaView, StyleSheet, View} from 'react-native';
import Btn from './components/Btn';
import InputBox from './components/InputBox';
import CheckBox from './components/CheckBox';
import {useState} from 'react';
import Output from './components/Output';
import generatePassword from './utility/passwordGenerator';
import { showErrorSnackbar, showInfoSnackbar, showSuccessSnackbar } from './utility/utils';

export default function Main() {
  let [passwordLength, setLength] = useState(0);
  let [upper, setUpper] = useState(false);
  let [lower, setLower] = useState(false);
  let [special, setSpecial] = useState(false);
  let [num, setNum] = useState(false);
  let [generatedPassword, setPassword] = useState('');

  function reset(){
    setLength(0);
    setUpper(false)
    setLower(false)
    setSpecial(false)
    setNum(false)
    setPassword("")
  }

  return (
    <SafeAreaView>
      <InputBox
        placeholder={'Password Length (8-16)'}
        onChange={val => setLength(parseInt(val))}
      />
      <View style={styles.checkBoxes}>
        <CheckBox
          label={'Upper Case Letter'}
          color="#0000ff"
          value={upper}
          onChange={(val) => setUpper(!val)}
        />
        <CheckBox
          label={'Lower Case Letter'}
          color="#00FFff"
          value={lower}
          onChange={(val) => setLower(!val)}
        />
        <CheckBox
          label={'Special Character'}
          color="#ff0000"
          value={special}
          onChange={(val) => setSpecial(!val)}
        />
        <CheckBox
          label={'Numbers'}
          color="#ff00ff"
          value={num}
          onChange={(val) => setNum(!val)}
        />
      </View>
      <Output
        generatedPassword={generatedPassword}
        placeholder={'Completed Password'}
      />
      <Btn
        type={1}
        title="Generate Password"
        onPress={() => {
            let pw = generatePassword(passwordLength, upper, lower, special, num)
            setPassword(pw)
            if(pw == ""){
                showErrorSnackbar("Failed to Create Password!");
            }
            else{
                showSuccessSnackbar("Generated Password!")
            }
        }}
      />
      <Btn
        type={2}
        title="Reset"
        onPress={() => {
          reset()
          showInfoSnackbar("Reset successfully")
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkBoxes: {
    marginLeft: 50,
    marginRight: 50,
  },
});
