import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses', 
    
    //authorizong ourself with yelp pass on header
    headers:{
        Authorization : 'Bearer PXq-SRYf4ZLvszExUUot6ADe-OqO3MsjNl09RE4DegZiu1rFf6pOyoDxzf1FtilGf_Y9NGwbeUW-Kg0rDLaxKRB9ghpUKxy7WOZeUpeyMD4GTffFzk7swxDPrZErXnYx'
    }

});