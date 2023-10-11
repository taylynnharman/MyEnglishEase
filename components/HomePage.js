import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to EnglishEase</Text>
      <Text style={styles.subtitle}>Please pick a module to start</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AnotherPage');
        }}
      >
        <Image
          source={require('../assets/images/animal.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>

      {/* Food Module */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AnotherPage2');
        }}
      >
        <Image
          source={require('../assets/images/food.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>

            {/* Numbers Module */}
            <TouchableOpacity
        onPress={() => {
          navigation.navigate('AnotherPage2');
        }}
      >
        <Image
          source={require('../assets/images/numbers.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonImage: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
  },
});

export default HomePage;

