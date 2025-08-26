import { View, Text, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require('@/assets/images/react-logo.png')} // Replace with your background image
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.companyLogo}>
              <Image 
                source={require('@/assets/images/icon.png')} // Replace with your logo
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2</Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            <View style={styles.bottomContainer}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.continueContainer}>
                <Text style={styles.continueText}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: Dimensions.get('window').height,
  },
  companyLogo: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  textGroup: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textLarge: {
    color: 'white',
    fontWeight: '800',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 12,
  },
  textSmall: {
    color: 'white',
    fontSize: 18,
    fontWeight: '200',
    textAlign: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 40,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  transparentButton: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: 'center',
    flex: 1,
  },
  continueContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  continueText: {
    color: 'white',
    fontSize: 16,
  },
});
