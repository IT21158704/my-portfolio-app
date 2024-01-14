import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Me</Text>
      <Text style={styles.role}>Software Engineer</Text>
      <Text style={styles.description}>
        Hi there! I'm a passionate junior software engineer with experience in creating websites, MERN stack projects, and small mobile apps. I enjoy learning new technologies and solving real-world problems through code.
      </Text>
      <Image source={require('../assets/nadun.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#2E4F4F',
    color: '#CBE4DE',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#11aaaf',
  },
  role: {
    fontSize: 13,
    marginBottom: 10,
    color: '#CBE4DE',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
    color: '#CBE4DE',
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});

export default AboutScreen;
