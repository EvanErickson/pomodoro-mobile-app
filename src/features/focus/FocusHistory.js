import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { fontSizes, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({ item, index }) => {
  return(
    <Text>
      {JSON.stringify(item)}
    </Text>
  )
}

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  }

  return(
    <>
      <SafeAreaView style={{flex: 1}}>
        <Text>
          Things we've focused on
          {!!FocusHistory.length && 
            <FlatList 
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center'}}
              data={FocusHistory}
              renderItem={HistoryItem}
            />
          }
        </Text>
      </SafeAreaView>
    </>
  )
}