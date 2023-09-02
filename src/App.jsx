import { useEffect } from 'react'
import './App.css'
import AthenaeumSection from './components/AthenaeumSection/AthenaeumSection'
import Banner from './components/Banner/Banner'
import ExpressionSection from './components/ExpressionSection/ExpressionSection'
import NavigationBar from './components/NavigationBar/NavigationBar'
import SkinCare from './components/SkinCare/SkinCare'

function App() {



  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.2
    })
    const elements = document.querySelectorAll(".element")
    elements.forEach(element => {
      observer.observe(element)
    })
  }, [])

  return (
    <>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <div className="element">
        <ExpressionSection></ExpressionSection>
      </div>
      <div className="element">
        <AthenaeumSection></AthenaeumSection>
      </div>
      <div className="element">
        <SkinCare></SkinCare>
      </div>
    </>
  )
}

export default App
