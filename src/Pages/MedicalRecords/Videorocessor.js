import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, PermissionsAndroid, Alert } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { CameraRoll } from '@react-native-community/cameraroll';
// import RNFS from 'react-native-fs';
import { useIsFocused } from '@react-navigation/native';
import { SpeechToText } from 'react-native-speech-to-text'; // Placeholder for speech to text API


const ANewpp = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const devices = useCameraDevices();
  const cameraRef = useRef(null);
  const device = devices.back;
  const isFocused = useIsFocused(); // To handle camera life-cycle
  
  useEffect(() => {
    const requestPermission = async () => {
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      const audioPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
      );
      
      if (cameraPermission === PermissionsAndroid.RESULTS.GRANTED && audioPermission === PermissionsAndroid.RESULTS.GRANTED) {
        setHasPermission(true);
      } else {
        Alert.alert('Permission Denied', 'Camera and Audio permissions are required');
      }
    };
    
    requestPermission();
  }, []);

  const startRecording = async () => {
    if (cameraRef.current) {
      const video = await cameraRef.current.startRecording({
        flash: 'off',
        quality: 'high',
      });
      setIsRecording(true);
      console.log('Recording started:', video);
    }
  };

  const stopRecording = async () => {
    if (cameraRef.current) {
      const video = await cameraRef.current.stopRecording();
      setIsRecording(false);
      console.log('Video saved to:', video.path);
      
      // Perform AI analysis (e.g., convert speech-to-text or object recognition)
      analyzeVideo(video.path);
    }
  };

  const analyzeVideo = async (videoPath) => {
    try {
      // Here you can use a speech-to-text API or AI model (like Google Vision API, TensorFlow.js, etc.)
      // For demonstration, using a hypothetical `SpeechToText` API to extract audio transcription.

      const transcript = await SpeechToText.transcribe(videoPath);
      console.log('Transcribed Text:', transcript);
      
      // Display or store the result
      Alert.alert('AI Analysis Complete', `Transcribed Text: ${transcript}`);
      
      // Alternatively, you can also upload the video to a cloud API for object detection, facial recognition, etc.
      // Example:
      // const detectedObjects = await detectObjectsInVideo(videoPath);
      // console.log(detectedObjects);
    } catch (error) {
      console.error('Error analyzing video:', error);
      Alert.alert('Error', 'Failed to analyze video');
    }
  };

  if (!hasPermission || device == null || !isFocused) {
    return <Text>Loading Camera...</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFillObject}
        device={device}
        isActive={true}
        ref={cameraRef}
        audio={true} // Enable audio for video recording
        video={true} // Enable video recording
      />
      <View style={styles.buttonContainer}>
        <Button title={isRecording ? 'Stop Recording' : 'Start Recording'} onPress={isRecording ? stopRecording : startRecording} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    transform: [{ translateX: -75 }],
  },
});

export default ANewpp;
