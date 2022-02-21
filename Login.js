import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
 
const MainMenu = () => 
 {
     return (
        <View style={styles.container}>
            <Text>
                hello
            </Text>
        
            <Button
                title = "press"
                color = "#00000"
                onPress={() => document.write('pressed')}
            />


        </View>
        
    );
 };
 var styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
