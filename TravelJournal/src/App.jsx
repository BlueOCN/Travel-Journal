import Header from './components/Header'
import Card from './components/Card'
import './App.css'
import data from './data'

// console.log(data)

function App() {

  const entries = data.map(data => {
    return (
      <Card
        key={data.id}
        items={data}
      />
    )
  })

  return (
    <>
      <Header />
      <section className='entries'> 
        {entries}
      </section>
    </>
  )
}

export default App
