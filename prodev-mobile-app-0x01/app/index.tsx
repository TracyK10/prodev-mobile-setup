import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Entry Screen - Awesome</Text>
      <View>
        <Text style={styles.largeText}>Typescript is great if you practice more</Text>
        <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 20,
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  mediumText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  smallText: {
    fontSize: 14,
    color: '#888',
  },
});
