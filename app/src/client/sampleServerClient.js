import axios from 'axios';

export default async function firstRequest(){
    try{
        let option = {
            method:"POST",
            url:"http://localhost:3000/testing",
            responseType:"json",
            data: {}
          };
        return await axios(option)
          .then(response => {
            console.log(JSON.stringify(response.data,null,2));
          })
    }catch(error){
        console.log(error);
    }
}