import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';
import { storeBookmarks, getBookmarks } from "../storage";
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const navigation = useNavigation();

  const fetchJobs = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      if (response.data.results.length > 0) {
        setJobs(prev => [...prev, ...response.data.results]);
        setPage(prev => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch jobs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
    loadBookmarks();
  }, []);

  const loadBookmarks = async () => {
    const saved = await getBookmarks();
    setBookmarkedJobs(saved);
  };

  const toggleBookmark = async (job) => {
    let updated;
    const alreadyBookmarked = bookmarkedJobs.some(j => j.id === job.id);

    if (alreadyBookmarked) {
      updated = bookmarkedJobs.filter(j => j.id !== job.id);
    } else {
      updated = [...bookmarkedJobs, job];
    }

    setBookmarkedJobs(updated);
    await storeBookmarks(updated);
  };

  const isBookmarked = (jobId) => bookmarkedJobs.some(j => j.id === jobId);

  const goToDetails = (id) => {
    if (!id) return;
    router.push(`/job/${id}`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => goToDetails(item.id)
      }
    >
      <View style={styles.headerRow}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity onPress={() => toggleBookmark(item)}>
          <Ionicons
            name={isBookmarked(item.id) ? "bookmark" : "bookmark-outline"}
            size={24}
            color={isBookmarked(item.id) ? "#1E90FF" : "#888"}
          />
        </TouchableOpacity>
      </View>
      <Text>Location : {item?.primary_details?.Place}</Text>
      <Text>Salary : {item?.primary_details?.Salary}</Text>
      <Text>Phone : {item?.whatsapp_no}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        onEndReached={fetchJobs}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 10, backgroundColor: "#fff" },
  title: { fontSize: 16, fontWeight: "bold", flex: 1, marginRight: 10 },
  headerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
});
