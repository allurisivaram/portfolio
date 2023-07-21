import {Suspense} from 'react'
import './App.css'
import useFetchData from './hooks/useFetchData';
import {IResults} from './model/propertyModel';

function App() {
  const URL = 'https://realty-in-ca1.p.rapidapi.com/properties/list-residential?LatitudeMax=81.14747595814636&LatitudeMin=-22.26872153207163&LongitudeMax=-10.267941690981388&LongitudeMin=-136.83037765324116&CurrentPage=1&RecordsPerPage=10&SortOrder=A&SortBy=1&CultureId=1&NumberOfDays=0&BedRange=0-0&BathRange=0-0&RentMin=0';
const Options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e646084afemshbadbebdc25709e2p1ede3ajsn38f93ffe0abc',
		'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
	}
};;

  const { data } = useFetchData(URL, Options);
  console.log(data);
  const propertyDetails = data && data.map((e:IResults, i:number) => {
    return (
        <h1 key={i}>{e.Property.Type}</h1>
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
