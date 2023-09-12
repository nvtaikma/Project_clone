
                                                                // sử dụng fetch
import fetch from 'node-fetch';

// const fetchAPI = ()=>{
//     const myAPi = new Promise((resolve, reject) => {
//         const data = fetch('https://jsonplaceholder.typicode.com/todos')
//         resolve(data);
//     });
//     console.log(myAPi);
//     return myAPi.then((data) => data.json()).then((json) =>console.table(json));
// }
// fetchAPI()


                                                                    // sử dụng axios
import axios from 'axios';

// const fetchAPI = ()=>{
//     const myAPi = new Promise((resolve, reject) => {
//         const data = axios.get('https://api.publicapis.org/entries')
       
//         resolve(data);

//     });
//     console.log(myAPi);
    
//     return myAPi.then((json) => {
//         console.log(json.data)
//     }).catch((error) => {
//         console.log(error.message);
//     })
    
// }
// fetchAPI()

//  sử dụng Async/await

const fetchApi = async () => {
    // const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    // const res = await data.json();
    // console.log(res);

    const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(data);
};

fetchApi();



