import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
      name="index" 
      //referenciando o arquivo index.tsx
      options={{
        //titulo
         title: 'Home',
         }} />
    </Stack>
  )
}
