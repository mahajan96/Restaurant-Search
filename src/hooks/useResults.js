import { useState, useEffect } from 'react' ;
import yelp from '../api/yelp';

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
     
    try {    
        const response = await yelp.get('/search' , {
            params:{
                limit :50 ,
                term: searchTerm,  //  or only term
                location: 'ottawa'
            }
        });
        setResults(response.data.businesses);
    }
    catch(err){
        setErrorMessage('Try again later')

    }
    };

    useEffect(() => {
        searchApi('pizza');
        
    },[]);
    
    return [searchApi , results , errorMessage];

};