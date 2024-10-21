import {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

export default function InputBox({placeholder, onChange}) {
  let [state, setState] = useState('IHateReactNative');
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        maxLength={2}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
