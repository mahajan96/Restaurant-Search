import React from 'react';
import { Text , StyleSheet, View, Image } from 'react-native';


const ResultsDetail = ( {result} ) => {

    return (
        <View style = {Styles.container}>
            <Image style = {Styles.image} source = { {uri : result.image_url} } />
            <Text style ={Styles.name}> {result.name}</Text>
            <Text> {result.rating} Stars, {result.review_count} reviews </Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    
    image:{
        width: 200,
        borderRadius: 4,
        height: 120
            },
    name: {
        fontWeight: '800'
    }
    
});

export default ResultsDetail;