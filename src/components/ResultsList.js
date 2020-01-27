import React from 'react';
import { View , Text , StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results}) => {

    return(
        <View style= {Styles.container}> 
            <Text style = {Styles.title}> {title}</Text>
            {/* <Text>Results:  {results.length}</Text> */}
            <FlatList 
                horizontal = {true}
                data = {results}
                keyExtractor = {(result) => result.id }
                renderItem = {({ item}) => {

                return <ResultsDetail  result ={item}/> ;
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

export default ResultsList;