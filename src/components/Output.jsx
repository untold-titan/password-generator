import {Text, View, StyleSheet} from 'react-native';

export default function Output({generatedPassword, placeholder, handleCopy}) {
  return (
    <View>
      <Text style={styles.input}>{generatedPassword == "" ? placeholder : generatedPassword}</Text>
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