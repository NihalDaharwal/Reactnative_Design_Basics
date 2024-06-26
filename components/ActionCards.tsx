import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            what's new in javascript 21 es12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            delectus odit laborum recusandae soluta quia maxime facilis, eius
            cum ad perferendis omnis veritatis dolorem! Odit vel accusantium
            laborum eius perspiciatis! Ab laboriosam cumque facere nisi, ut
            adipisci esse numquam alias optio sunt, natus quisquam quas nesciunt
            libero iure doloribus, odit reprehenderit quam itaque perferendis.
            cum quae pariatur minima assumenda rem quibusdam harum quam!
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://chatgpt.com/')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openWebsite('https://chatgpt.com/')}>
            <Text style={styles.socialLinks}>follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

  card: {
    width: 390,
    marginHorizontal: 16,
    marginVertical: 12,
    height: 360,
    borderRadius: 6,
  },

  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },

    shadowColor: '#333',
    shadowOpacity: 0.4,
  },

  headingContainer: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },

  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
