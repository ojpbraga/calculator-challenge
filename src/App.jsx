
import Calculator from './components/Calculator'
import background from '/public/images/wallpaper.jpg'

function App() {

  return (
    <main style={{
      backgroundImage: `url(${background})`}} className='h-[100dvh] w-[100dvw] bg-no-repeat bg-cover'>

        <Calculator/>
      
    </main>
  )
}

export default App
