import React from 'react';
import { ScrollView, Text, StyleSheet, Dimensions, View } from 'react-native';
import BucketItemView from './BucketView'

const ar = [0,1,2,3,4,5,6,7,8]

const BucketsListView = () => {
    return(
        <ScrollView contentContainerStyle = {styles.scroll}>
            <Text>Hi</Text>
            <View style = {{ paddingBottom: 20}}></View>
            {ar.map(()=>{
                return(
                    <BucketItemView></BucketItemView>
                )
            })}
            <BucketItemView></BucketItemView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    scroll : {
        width: Dimensions.get('screen').width,
        alignItems: 'center'
    }
})

export default BucketsListView