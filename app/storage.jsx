// utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeBookmarks = async (bookmarks) => {
  try {
    await AsyncStorage.setItem('@bookmarks', JSON.stringify(bookmarks));
  } catch (e) {
    console.error("Error saving bookmarks", e);
  }
};

export const getBookmarks = async () => {
  try {
    const data = await AsyncStorage.getItem('@bookmarks');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Error loading bookmarks", e);
    return [];
  }
};
