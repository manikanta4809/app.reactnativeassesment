import { Stack } from "expo-router";
import React from "react";


export default function RootLayout() {
  return (
    <>

      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            // headerTitle: "Home",
            headerShown: false,
            // headerLeft:()=><></>,
          }}
        />
        {/* <Stack.Screen
          name="JobDetails"
          component={JobDetailScreen}
          options={{
            title: "Job Details",
          }}
        /> */}
        <Stack.Screen
          name="+not-found"
          options={{

          }} />
      </Stack>
    </>
  );
}
