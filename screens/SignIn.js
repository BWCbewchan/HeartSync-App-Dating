import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Icon packs
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/img/logo.png')} style={styles.logo} />

      {/* App Name */}
      <Text style={styles.title}>HeartSync</Text>
      <Text style={styles.subtitle}>Where Hearts Connect, Love Finds Its Sync.</Text>

      {/* Buttons */}
      <Button
        icon={<FontAwesome name="apple" size={24} color="white" />}
        buttonStyle={styles.appleButton}
        title="  Continue with Apple"
        onPress={() => navigation.navigate('GettingStarted')}  // Chuyển sang màn hình đăng nhập Apple
      />

      <Button
        icon={<FontAwesome name="facebook" size={24} color="white" />}
        buttonStyle={styles.facebookButton}
        title="  Continue with Facebook"
        containerStyle={styles.buttonSpacing}
        onPress={() => navigation.navigate('SignWithFacebook')}  // Chuyển sang màn hình đăng nhập Facebook
      />

      <Button
        icon={<MaterialIcons name="phone" size={24} color="white" />}
        buttonStyle={styles.phoneButton}
        title="  Use phone number"
        containerStyle={styles.buttonSpacing}
        onPress={() => navigation.navigate('SignWithPhoneNumber')}  // Chuyển sang màn hình đăng nhập Phone Number
      />

      {/* Terms and Privacy */}
      <Text style={styles.termsText}>
        By signing up you agree to our{' '}
        <Text style={styles.linkText}>Terms and Conditions</Text>
      </Text>
      <Text style={styles.privacyText}>
        See how we use your data in our{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 40,
    textAlign: 'center',
  },
  appleButton: {
    backgroundColor: '#000',
    width: 300,
    padding: 15,
    borderRadius: 10,
  },
  facebookButton: {
    backgroundColor: '#1877F2',
    width: 300,
    padding: 15,
    borderRadius: 10,
  },
  phoneButton: {
    backgroundColor: '#A020F0',
    width: 300,
    padding: 15,
    borderRadius: 10,
  },
  buttonSpacing: {
    marginTop: 20,
  },
  termsText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginTop: 40,
  },
  privacyText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  },
  linkText: {
    color: '#A020F0',
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;
