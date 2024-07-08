import React from "react";
import 'react-native-gesture-handler';
import { useState } from "react";
import { SafeAreaView, Text, ScrollView, Button, TextInput, View, StyleSheet } from "react-native";
import { FlatList, GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";



const HomeScreen = ({navigation}) => {
    const trips = [
        { id: '1', description: 'Trip to Facility', duration: '45 mins', distance: '10 km' },
        { id: '2', description: 'Trip to Facility', duration: '45 mins', distance: '10 km' },
        { id: '3', description: 'Trip to Facility', duration: '45 mins', distance: '10 km' },
        { id: '4', description: 'Trip to Facility', duration: '45 mins', distance: '10 km' },
        { id: '5', description: 'Trip to Facility', duration: '45 mins', distance: '10 km' },
        
        
        // Add more trips as needed
      ];
    return (
     <SafeAreaView style={styles.container}>
        <GestureHandlerRootView style>
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Text style={styles.buttonTitle}>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Text style={styles.buttonTitle}>Week</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Text style={styles.buttonTitle}>Month</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Text style={styles.buttonTitle}>All Time</Text>
            </TouchableOpacity>
        </View>
        

        <View style={styles.row}>
            <Text style={styles.cell}>Trips</Text>
            <Text style={styles.cell}>Hours</Text>
            <Text style={styles.cell}>Distance</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.cell}>{trips.length}</Text>
            <Text style={styles.cell}>30</Text>
            <Text style={styles.cell}>50km</Text>
        </View>
      
        <View style={styles.listView}>
            <Text style={styles.titleList}>Today's Trip</Text>
            <FlatList
          data={trips}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.trip}>{item.description} {item.duration} {item.distance}</Text>
            </View>
          )}
        />
        </View> 
        <View style={styles.homeContain}>
        <TouchableOpacity onPress={() => { navigation.navigate('Start'); }} style={styles.button}>
                        <Text style={styles.buttonTitle}>Start</Text>
                    </TouchableOpacity>
        </View>
        </GestureHandlerRootView>
        </SafeAreaView>
    );
  };
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#99ff99',
    },
    buttonContainer: {
        backgroundColor: '#99ff99',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    table: {
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 2,
        borderColor: 'black',
        
    },
    cell: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 2,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        
    },
    titleList: {
        color: 'black',
        marginLeft: 30,
        marginTop: 10,
        fontWeight: 'bold',
        

    },
    homeContain: {
        marginTop: 15,

    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        marginTop: 10,
        paddingLeft: 20,
    },
    trip: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        paddingLeft: 80,
        paddingRight: 80,
        padding: 30,
        color: 'black',
        marginBottom: 15,
        marginTop: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    button: {
        width: 80,
        backgroundColor: 'black',
        borderRadius: 6,
        alignSelf: 'center',
        padding: 10,
        margin: 5,
    },

    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },

    startButton: {
        color: 'black',
        backgroundColor: 'black',
        width: 100,
        height: 700,
        flex: 1,
    },
    startContainer: {
        marginTop: 20,
        backgroundColor: 'black',
        borderRadius: 4,
    },
    listView: {
        backgroundColor: 'white',
        width: 'auto',
        borderRadius: 30,
        marginTop: 20,
    }



    

    
})

export default HomeScreen;