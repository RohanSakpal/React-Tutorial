import './App.css';
import Card from './components/Card';

function App() {
  const myObj = {
    name: "Rohan"
  }
  const myArr = [1, 2, 3, 4, 5]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
    <Card title="Card 1" someObj={myObj} someArr={myArr}/>
    <Card title="Card 2"/>
    </>
  )
}

export default App
