import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (<Tabs
        screenOptions={{
            tabBarActiveTintColor: "black",
        }}>
        <Tabs.Screen
            name="index"
            options={{
                headerTitle: "Home",
                headerShown: false,
                headerLeft: () => <></>,
                tabBarIcon: ({ focused, color }) => (
                    <Ionicons
                        name={focused ? "home-sharp" : "home-outline"}
                        size={24} />
                ),

            }}
        />
        <Tabs.Screen
            name="jobs"
            options={{
                headerTitle: "Jobs",
                tabBarIcon: ({ focused, color }) => (
                    <Ionicons name={focused ? "briefcase-sharp" : "briefcase-outline"} size={24} color="black" />
                ),
            }}
        />
        <Tabs.Screen
            name="bookmarks"
            options={{
                headerTitle: "Bookmarks",
                tabBarIcon: ({ focused, color }) => (
                    <Ionicons name={focused ? "bookmark-sharp" : "bookmark-outline"} size={24} color="black" />
                ),
            }}

        />
        <Tabs.Screen
            name="+not-found"
            options={{

            }} />
    </Tabs>
    );
}
