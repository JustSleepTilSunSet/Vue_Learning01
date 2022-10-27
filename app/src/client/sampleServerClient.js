import axios from 'axios';

async function firstRequest(){
    try{
        let option = {
            method:"POST",
            url:"http://localhost:3000/testing",
            responseType:"json",
            data: {}
          };
        let response = await axios(option);
        return response.data;
    }catch(error){
        console.log(error);
    }
}

async function signUp(userObj){
    try{
        let option = {
            method:"POST",
            url:"http://localhost:3000/users/signUp",
            responseType:"json",
            data: userObj
          };
        let response = await axios(option)
        .then(response => {
          return response.data;
        });
        console.log('Get response: ',JSON.stringify(response,null,2));
        return response;
    }catch(error){
        console.log(error);
    }
}

export default {
    firstRequest,
    signUp
}