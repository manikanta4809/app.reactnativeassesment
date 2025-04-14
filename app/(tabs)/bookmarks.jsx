import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getBookmarks } from '../storage';
import { useFocusEffect } from '@react-navigation/native';
export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const load = async () => {
        const data = await getBookmarks();
        setBookmarks(data);
      };
      load();
    }, [])
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>Location : {item?.primary_details?.Place}</Text>
      <Text>Salary : {item?.primary_details?.Salary}</Text>
      <Text>Phone : {item?.whatsapp_no}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={bookmarks}
        renderItem={renderItem}
        keyExtractor={(item, index) => item?.id ? item.id.toString() : index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 10, backgroundColor: '#fff' },
  title: { fontSize: 16, fontWeight: 'bold' },
});
