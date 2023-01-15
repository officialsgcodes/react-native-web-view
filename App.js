import { View, Text, Button, Linking } from 'react-native'
import React from 'react'
import Webview from 'react-native-webview';

export default function App() {
  return (
    <Webview source={{ uri: "https://sgcodes.co.in" }} />
  )
}