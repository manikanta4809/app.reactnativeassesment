import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import axios from "axios";

export default function JobDetailScreen() {
  const { id } = useLocalSearchParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
console.log(id)
  useEffect(() => {
    if (id) {
      axios
        .get(`https://testapi.getlokalapp.com/common/jobs/${id}`)
        .then((response) => {
          const isIdPresent = response?.data?.results?.find(item => item.id == id);
          if (isIdPresent) {
            setJob(isIdPresent);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error("Error fetching job details:", err);
          setLoading(false);
        });
    }
  }, [id]);


  if (loading) return <ActivityIndicator size="large" color="blue" style={{ marginTop: 40 }} />;
  if (!job) return <Text style={{ padding: 16 }}>Job not found</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.label}>Company:</Text>
      <Text>{job.company_name}</Text>

      <Text style={styles.label}>Location:</Text>
      <Text>{job.primary_details?.Place}</Text>

      <Text style={styles.label}>Salary:</Text>
      <Text>{job.primary_details?.Salary}</Text>

      <Text style={styles.label}>Phone:</Text>
      <Text>{job.whatsapp_no}</Text>

      <Text style={styles.label}>Other Details:</Text>
      <Text>{job.other_details}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  label: { fontWeight: "600", marginTop: 12 },
});
