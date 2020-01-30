import React, {useState, useEffect} from 'react';
import { Text , StyleSheet, View , FlatList, Image, ScrollView} from 'react-native';
import yelp from '../api/yelp';
// import { ScrollView } from 'react-native-gesture-handler';

const ResultShow= ({ navigation} ) =>{
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
        // Object 
      console.log(result);

    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`); 
        setResult(response.data);
    };
    

    useEffect(() => 
    {getResult(id);},
    []);
    
    if(!result) {return null; }
    
    return(
        <>
        <View style = {Styles.container}>
            <ScrollView>
        <Text style={Styles.title}>  {result.name}   </Text>
        <FlatList 
           
            // ItemSeparatorComponent = {spa}
            data = {result.photos}
            keyExtractor = {({photo}) => photo }
            renderItem = {({item}) => {
                return <Image style={Styles.image} source={{uri: item}}/>
            }}

        />
        
    <Text>Address:  {result.location.address1}, {result.location.city}, {result.location.state}, {result.location.zip_code}</Text>
    <Text style={{color:'blue'}}>{result.phone} </Text>
        </ScrollView>
        </View>
        </>
    );

};

const Styles = StyleSheet.create({
    image:{
        height: 200,
        width: 'auto',
        borderRadius: 4,
        marginVertical: 4
    },
    container:{
        marginHorizontal: 15
    }, 
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5
    }
});

export default ResultShow;