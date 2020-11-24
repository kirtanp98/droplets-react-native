import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export const BucketItemView = () => {
    return(
        <View style = {[styles.container, styles.shadow]}>
            <View style = {[styles.innerContainer, styles.shadow]}>
                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png',}}></Image>
                <View style = {styles.testS}>
                    <Text style = {{fontSize: 35, color: 'rgb(0, 122, 255)', paddingBottom: 13}}>My First Droplet</Text>
                    <View style = {styles.capsule}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        width: '90%',
        height: 250,
        borderRadius: 20,
        backgroundColor : 'rgb(0, 122, 255)',
        alignContent: 'center',
    },
    innerContainer : {
        backgroundColor : 'white',
        margin: 10,
        borderRadius: 15,
        height: 230,
    },
    shadow: {
        shadowRadius: 5,
        shadowOpacity: 0.2
    },
    testS: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 18,
        paddingBottom: 10
    },
    capsule: {
        width: '94.5%',
        backgroundColor: 'rgb(0, 122, 255)',
        height: 10,
        borderRadius: 10
    }
})

export default BucketItemView