import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Linking } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const data = [
  {
    title: 'Job Portal App',
    image: 'https://nadundilshan.com/images/p5.png',
    technologies: 'Kotlin - Android Studio',
    link: 'https://github.com/IT21158704/Quick-Job-Android-App-MAD'
  },
  {
    title: 'Job Portal App',
    image: 'https://nadundilshan.com/images/p5.png',
    technologies: 'Kotlin - Android Studio',
    link: 'https://github.com/IT21158704/Quick-Job-Android-App-MAD'
  },
];

const { width } = Dimensions.get('window');
const cardMaxWidth = width * 0.9;

const PortfolioScreen = () => {

  const openUrl = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        <Text style={styles.whiteText}>My</Text> Projects
      </Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {data.map((u, i) => {
          return (
            <Card key={i} containerStyle={{
              maxWidth: cardMaxWidth,
              backgroundColor: '#2C3333',
              borderRadius: 15,
              marginBottom: 15,
              borderWidth: 0,
            }}>
              <Card.Title style={{ color: '#CBE4DE' }}>{u.title}</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ padding: 0, minWidth: '100%' }}
                source={{
                  uri:
                    u.image,
                }}
              />
              <Text style={{ marginBottom: 10, textAlign: 'center', color: '#CBE4DE' }}>
                {u.technologies}
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
                  onPress={() => openUrl(u.link)}
                />
              </View>
            </Card>
          );
        })}
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
