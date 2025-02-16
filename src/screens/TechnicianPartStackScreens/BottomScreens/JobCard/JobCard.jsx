import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderWithSearch from '../../../../lib/components/HeaderWithSearch';
import RenderCard from './RenderCards';
const JobCard = () => {
  return (
    <View style={styles.container}>
      <HeaderWithSearch />
      <RenderCard />
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
