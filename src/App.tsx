import {Suspense} from 'react'
import './App.css'
import useFetchData from './hooks/useFetchData';

function App() {
const URL = 'https://jsonplaceholder.typicode.com/users';
// const Options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e646084afemshbadbebdc25709e2p1ede3ajsn38f93ffe0abc',
// 		'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
// 	}
// };

  const { data } = useFetchData(URL, {});
  console.log(data);
  const propertyDetails = data && data.map((e:any, i:number) => {
    return (
        <h1 key={i}>{e.name}</h1>
    )
  })

  return (
    <Suspense>
        <h1>Welcome to Niva</h1>
        <p> The smart way to share home</p>
        {propertyDetails}
    </Suspense>
  )
}

export default App
