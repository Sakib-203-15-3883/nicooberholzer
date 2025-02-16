import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderWithSearch from '../../../../lib/components/HeaderWithSearch';
import RenderInspectionShit from './RenderSheet';

const InspectionSheet = () => {
  return (
    <View style={styles.container}>
      <HeaderWithSearch />
      <RenderInspectionShit />
    </View>
  );
};

export default InspectionSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
