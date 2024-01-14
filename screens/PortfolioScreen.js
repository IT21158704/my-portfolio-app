import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Linking } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const { width } = Dimensions.get('window');
const cardMaxWidth = width * 0.9;

const PortfolioScreen = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://portfolio-t88y.onrender.com/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const openUrl = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        <Text style={styles.whiteText}>My</Text> Projects
      </Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {projects.map((project, index) => (
          <Card key={index} containerStyle={{
            maxWidth: cardMaxWidth,
            backgroundColor: '#2C3333',
            borderRadius: 15,
            marginBottom: 15,
            borderWidth: 0,
          }}>
            <Card.Title style={{ color: '#CBE4DE' }}>{project.title}</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0, minWidth: '100%' }}
              source={{ uri: project.image }}
            />
            <Text style={{ marginBottom: 10, textAlign: 'center', color: '#CBE4DE' }}>
              {project.technologies}
            </Text>
            <View style={{
              alignItems: 'center',
            }}>
              <Button
                icon={
                  <Icon
                    name='github'
                    type='font-awesome'
                    color="#ffffff"
                    iconStyle={{ marginRight: 10 }}
                  />
                }
                buttonStyle={{
                  paddingLeft: 15,
                  paddingRight: 15,
                  backgroundColor: '#11aaaf',
                  width: 'auto',
                  justifyContent: 'center',
                }}
                title="VIEW"
                onPress={() => openUrl(project.link)}
              />
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 15,
    backgroundColor: '#2E4F4F',
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
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default PortfolioScreen;
