import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const FeaturedCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={[styles.overlay, { backgroundColor: item.color + '99' }]}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Shop Now</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  background: {
    width: width * 0.8,
    height: 180,
  },
  backgroundImage: {
    borderRadius: 16,
  },
  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default FeaturedCard;
