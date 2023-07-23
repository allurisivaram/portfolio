import {Suspense} from 'react'
import './App.css'
import useCard from './hooks/useCard';

function App() {
// const URL = 'https://jsonplaceholder.typicode.com/users';
// const Options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e646084afemshbadbebdc25709e2p1ede3ajsn38f93ffe0abc',
// 		'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
// 	}
// };
  const ProductCard = useCard('https://i.pinimg.com/originals/6b/35/4d/6b354dd8f8dc2de31dd5fdf1b4ee027d.png', '');

  return (
    <Suspense>
        <h1>Welcome to Niva</h1>
        <p> The smart way to share home</p>
        {ProductCard}
    </Suspense>
  )
}

export default App
