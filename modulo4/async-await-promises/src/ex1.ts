import axios from "axios"
import { baseURL } from "./baseURL"

//ex 1
//a usaremos o GET

axios.get(`${baseURL}/subscribers`)
.then((res)=>{
    console.log(res.data)
})

async function getSubscribers1(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

console.log(getSubscribers1())

//ex2
const getSubscribers2 = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
}

  console.log(getSubscribers2())

  //ex3
type user = {
	id: string;
	name: string;
	email: string;
}
//o map nos traz uma resposta mais enxuta

const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email
      }
    })
  }

  //4
  //para criar umanotícia usarems o post