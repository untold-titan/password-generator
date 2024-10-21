import {Button, StyleSheet, View} from 'react-native';

export default function Btn({type, title, onPress}) {
  return (
    <View style={styles.buttonDiv}>
      <Button
        onPress={onPress}
        color={type == 1 ? '#0000FF' : '#FF0000'}
        title={title}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonDiv: {
    marginTop: 10,
  },
});
