import React from 'react';
import { ImageBackground, Dimensions, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('@/assets/images/background-image.png')}
          style={styles.background}
          resizeMode="cover"
        >
          {/* Company Logo */}
          <View style={styles.logoContainer}>
            <Image 
              source={require('@/assets/images/logo.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Text Elements */}
          <View style={styles.textGroup}>
            <Text style={styles.textLarge}>Find your favorite place here</Text>
            <Text style={styles.textSmall}>The best prices for over 2</Text>
            <Text style={styles.textSmall}>million properties worldwide</Text>
          </View>

          {/* Button Group */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Join here</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          {/* Navigation Prompt */}
          <View style={styles.navPromptContainer}>
            <Text style={styles.navPromptText}>Continue to home</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    width: '100%',
    height: height,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 100,
  },
  textGroup: {
    paddingHorizontal: 40,
    marginBottom: 40,
  },
  textLarge: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  textSmall: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonGroup: {
    paddingHorizontal: 30,
    marginTop: 30,
  },
  primaryButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  primaryButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  navPromptContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  navPromptText: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
