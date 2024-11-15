import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AppLayout from './components/AppLayout'
import Dashboard from './views/Dashboard'
import Homepage from './views/Homepage'
import Vehicle from './views/Vehicle'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vehicle" element={<Vehicle />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
