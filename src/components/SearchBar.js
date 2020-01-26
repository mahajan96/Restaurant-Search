import React from 'react';
import {Text , View, TextInput , StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
    return(

        <View style = {Styles.backgroundStyle}>
            <Feather name = "search" style ={Styles.iconStyle} />
            <TextInput  style = {Styles.inputStyle}
            placeholder = "Search"
            />
            {/* <Text> Search</Text> */}
        </View>
    );
};

const Styles = StyleSheet.create({
    backgroundStyle :{
        backgroundColor: 'lightgrey',  //#F0EEEE
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection :'row',
        marginTop :10
    },
    inputStyle:{
        // borderColor: 'black',
        // borderWidth : 1,
        flex :1,
        // fontSize :17
    },
    iconStyle :{
        fontSize:35,
        alignSelf :'center',
        marginHorizontal :15
    }
});

export default SearchBar;