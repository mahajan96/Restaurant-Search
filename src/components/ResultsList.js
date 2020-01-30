import React from 'react';
import { View , Text , StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation' ;

const ResultsList = ({title, results, navigation}) => {

    if(!results.length) {
        return null;
    }
    
    return(
        <View style= {Styles.container}> 
            <Text style = {Styles.title}> {title}</Text>
            {/* <Text>Results:  {results.length}</Text> */}
            <FlatList 
                horizontal = {true}
                showsHorizontalScrollIndicator ={false}
                data = {results}
                keyExtractor = {(result) => result.id }
                renderItem = {({ item}) => {

                return (
                    <TouchableOpacity onPress = {() => navigation.navigate('Result' , {id: item.id})}>
                    <ResultsDetail  result ={item} />
                    </TouchableOpacity>
                ) ;
                }}
            />
        </View>
    )
};

const Styles = StyleSheet.create({
    container:{
        marginBottom :10
    },
    title : {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }

});

export default withNavigation(ResultsList);