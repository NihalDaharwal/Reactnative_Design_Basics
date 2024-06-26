import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}></View>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }}
        style={styles.cardImage}
      />
      <View style={styles.carBody}>
        <Text style={styles.carTitle}>Hawa Mahal</Text>
        <Text style={styles.carLabel}>Pink City,Jaipur</Text>
        <Text style={styles.carDescription}>
          Mahal is a palace in the city of Jaipur, India. Built from red and
          pink sandstone, it is on the edge of the City Palace.
        </Text>
        <Text style={styles.carFooter}>12 mins away</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8},
  card: {
    // width: 350,
    // height: 360,
    // borderRadius: 6,
    // marginVertical: 12,
    // marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    width: '90%',
    height: 250,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    // marginBottom:8,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  carBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 16,
    marginBottom: 6,
  },
  carTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  carLabel: {
    color: '#000000',
    fontSize: 18,
    marginBottom: 4,
  },
  carDescription: {
    color: '#242B2E',
    fontSize: 16,
    marginTop: 6,
    marginBottom: 4,
    flexShrink: 1,
  },
  carFooter: {
    color: '#000000',
  },
});
