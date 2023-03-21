import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {name: 'Dr. Mahfuz', job: 'singer'}

const singerStyle = {
  color: 'red', 
  backgroundColor: 'white',
  padding: 20 ,
}

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber' , 'jashim', 'salmnshah', 'kanchon',  'amit',];
  return (
    <div className="App">
      {
        // nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person name={nayoks[2]} nayika="kopila"></Person> */}
      

    <h5>New component YAY</h5>
    <p id='totocompany'>Rock mama React</p>
    <Friend name="Basar" phone="01514123456" ></Friend>
    <Friend name="Shakil" phone="01303030303"></Friend>
    <Friend name="Mustafiz" phone="01303030303"></Friend>
    <Friend name="Arif" phone="01303030303"></Friend>
    <Friend name="Islam" phone="01303030303"></Friend>
    <Friend name="Rajib" phone="01303030303"></Friend>
    <Friend name="Milon" phone="01303030303"></Friend>
    </div>
  );
}

function Person(props){

  return (
    <div className='person'>
    <h1>{props.name}</h1>
    <p>{props.nayika}</p>
  </div>
  )
}

function Friend(props){
  console.log(props);
  return(
    <div className='container'>
      <h1>{props.name}</h1>
      <p> Phone: {props.phone}</p>

    </div>
  )
}

export default App;
