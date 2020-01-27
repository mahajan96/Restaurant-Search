import React , {useState} from 'react';
import {Text , View , StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';


const SearchScreen = () => {

    const [term , setTerm] = useState('');
    const [ searchApi, results, errorMessage] = useResults();
        
    // Groupping on basis of price 
    const filterResultsByPrice = (price) =>{
    
        return results.filter(result => {
            return result.price === price;
        }) ;

    };

    return(

        <View>
            <SearchBar  
                term = {term}  
                onTermChange ={setTerm} 
                onTermSubmit = {() => searchApi(term)}
            />
            
        {errorMessage ? <Text> {errorMessage}</Text> : null}
        <Text style = {Styles.text}> {results.length} results found</Text>

        <ResultsList results = { filterResultsByPrice('$') } title ='Price Effective'/>
        <ResultsList results = { filterResultsByPrice('$$') } title ='Bit Pricer'/>
        <ResultsList results = { filterResultsByPrice('$$') } title = 'Big Spender'/> 
        </View>
    );
};

const Styles = StyleSheet.create({
    text:{
        marginLeft:15
    }
});

export default SearchScreen;