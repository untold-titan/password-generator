import {StyleSheet, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function CheckBox({label, color, value, onChange}) {
  return (
    <View style={styles.box}>
      <BouncyCheckbox
        isChecked={value}
        useBuiltInState={false}
        text={label}
        fillColor={color}
        onPress={onChange}
        textStyle={{
          textDecorationLine: 'none',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 5,
    marginBottom: 5,
  },
});
