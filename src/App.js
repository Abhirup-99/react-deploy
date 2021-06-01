import React from 'react'
import { Router } from '@reach/router'
import BrandBook from './pages/BrandBook'
import ContributingGuide from './pages/ContributingGuide'
import Vision from './pages/Vision'

function App() {
  return (
    <Router primary={false} basepath='/react-deploy/'>
      <Vision path='/' />
      <BrandBook path='/BrandBook' />
      <ContributingGuide path='/ContributingGuide' />
    </Router>
  )
}

export default App
