import React from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';

const ContactScreen = () => {

  const openUrl = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };
  const sendEmail = () => {
    const email = 'nadun.dilshan.733@gmail.com';
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Contact<Text style={styles.whiteText}> Me!</Text>
      </Text>
      <View style={styles.iconContainer}>
        <Icon
          reverse
          name='envelope'
          type='font-awesome'
          color='#e04d3b'
          onPress={() => {sendEmail();}}
        />

        <Icon
          reverse
          name='whatsapp'
          type='font-awesome'
          color='#2cd46b'
          onPress={() => openUrl('whatsapp://send?phone=+94765220104')}
        />

        <Icon
          reverse
          name='facebook'
          type='font-awesome'
          color='#167aab'
          onPress={() => openUrl('https://www.facebook.com/KTDNadunDilshan')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#2C3333',
    color: '#CBE4DE',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#11aaaf',
  },
  whiteText: {
    fontWeight: 'bold',
    color: '#CBE4DE',
  },
  iconContainer: {
    flexDirection: 'column', // Arrange icons horizontally
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ContactScreen;
