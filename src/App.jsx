import './App.css'
import AthenaeumSection from './components/AthenaeumSection/AthenaeumSection'
import Banner from './components/Banner/Banner'
import ExpressionSection from './components/ExpressionSection/ExpressionSection'
import NavigationBar from './components/NavigationBar/NavigationBar'

function App() {
  

  return (
    <>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <ExpressionSection></ExpressionSection>
      <AthenaeumSection></AthenaeumSection>
    </>
  )
}

export default App
