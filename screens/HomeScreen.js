import React from 'react';
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity, ToastAndroid } from 'react-native';
import { Icon } from '@rneui/themed';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const HomeScreen = () => {
  const openUrl = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  const handleDownload = async () => {
    const fileUrl = Asset.fromModule(require('../assets/NadunDilshanCV.pdf')).uri;
    const destPath = `${FileSystem.documentDirectory}NadunDilshanCV.pdf`;

    try {
      await FileSystem.downloadAsync(fileUrl, destPath);
      ToastAndroid.show('File downloaded successfully', ToastAndroid.SHORT);
    } catch (error) {
      console.error('Error downloading File:', error);
      ToastAndroid.show('Error downloading File', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.heading}>Hello, It's Me</Text>
        <Text style={styles.name}>Nadun Dilshan</Text>
        <Text style={styles.role}>And I'm a Full-Stack Developer</Text>
        <Image source={require('../assets/nadun.jpg')} style={styles.image} />
      </View>
      <View style={styles.iconContainer}>
        <Icon
          reverse
          name='github'
          type='font-awesome'
          color='#292929'
          onPress={() => openUrl('https://github.com/it21158704')}
        />

        <Icon
          reverse
          name='linkedin'
          type='font-awesome'
          color='#167aab'
          onPress={() => openUrl('https://www.linkedin.com/in/nadun-dilshan')}
        />

        <Icon
          reverse
          name='whatsapp'
          type='font-awesome'
          color='#2cd46b'
          onPress={() => openUrl('whatsapp://send?phone=+94765220104')}
        />
      </View>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleDownload}
        >
          <Icon name="save" color="white" size={20} style={{ marginRight: 5 }} />
          <Text style={{ color: 'white' }}>Download My CV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C3333',
    color: '#CBE4DE',
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  details: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#CBE4DE',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#11aaaf',
  },
  role: {
    fontSize: 13,
    marginBottom: 10,
    color: '#CBE4DE',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 20,
  },
  iconContainer: {
    flexDirection: 'row', // Arrange icons horizontally
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor: '#11aaaf',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 'auto'
  },
});

export default HomeScreen;