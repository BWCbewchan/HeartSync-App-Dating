import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SignWithApple = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In with Apple</Text>
      {/* Thêm các phần tử khác như ô nhập liệu hoặc button nếu cần */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SignWithApple;
