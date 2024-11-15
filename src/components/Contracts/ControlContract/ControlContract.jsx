import Slider from '@mui/material/Slider'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useState } from 'react'

import '../Contract.css'

const ControlContract = ({ isSelected, onSelect }) => {
  const [fuelLevel, setFuelLevel] = useState(30)
  const [alignment, setAlignment] = useState('')

  const handleFuel = e => setFuelLevel(e.target.value)
  const handlePlugIn = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
    }
  }

  return (
    <div className={`contract-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <h2>Control-Based Contract</h2>
      <p>Set a guaranteed fuel level and plug in as you go.</p>
      <label>Average or Custom Plug in times:</label>
      <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handlePlugIn}>
        <ToggleButton value="Average">Average</ToggleButton>
        <ToggleButton value="Custom">Select Custom</ToggleButton>
      </ToggleButtonGroup>
      <label>
        Guaranteed Fuel Level: {fuelLevel}%
        <Slider defaultValue={30} onChange={handleFuel} />
      </label>
    </div>
  )
}

export default ControlContract
