import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { Card, Icon, Text } from '@rneui/themed';


const ServicesScreen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>
      <Text style={styles.whiteText}>My</Text> Services
    </Text>
      <Card containerStyle={styles.cardcontainer}>
        <Card.Title>
          <Icon  style={styles.icons}
            name='mouse-pointer'
            type='font-awesome'
            color='#11aaaf'
            size={30}
          /></Card.Title>
        <Card.Divider />
        <Text style={styles.fonts}>
          Front-End Development
        </Text>
      </Card>
      <Card containerStyle={styles.cardcontainer}>
        <Card.Title>
          <Icon  style={styles.icons}
            name='cog'
            type='font-awesome'
            color='#11aaaf'
            size={35}
          />
        </Card.Title>
        <Card.Divider />
        <Text style={styles.fonts}>
          Back-End Development
        </Text>
      </Card>
      <Card containerStyle={styles.cardcontainer}>
        <Card.Title>
          <Icon  style={styles.icons}
            name='mobile'
            type='font-awesome'
            color='#11aaaf'
            size={40}
          />
        </Card.Title>
        <Card.Divider />
        <Text style={styles.fonts}>
          Android Application Development
        </Text>
      </Card>
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
  serviceItem: {
    marginBottom: 20,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#CBE4DE',
  },
  serviceDescription: {
    fontSize: 16,
    color: '#CBE4DE',
  },
  cardcontainer: {
    width: '80%',
    alignItems: 'center',
    borderRadius : 15,
    backgroundColor: '#2e4f4f',
    borderColor: '#11aaaf',
    borderWidth: 2,
  },
  fonts: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#CBE4DE',
  },
  icons: {
    fontSize: 40, // Adjust the default icon size as needed
  },
});

export default ServicesScreen;
