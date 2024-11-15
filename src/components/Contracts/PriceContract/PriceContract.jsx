import Checkbox from '@mui/material/Checkbox'
import Slider from '@mui/material/Slider'
import { useState } from 'react'
import '../Contract.css'

const PriceContract = ({ isSelected, onSelect }) => {
  const [fuelLevel, setFuelLevel] = useState(30)
  const [price, setPrice] = useState(1)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const handleFuel = e => setFuelLevel(e.target.value)
  const handlePriceChange = e => setPrice(e.target.value)

  return (
    <div className={`contract-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <h2>Price-Based Contract</h2>
      <p>Set a minimum selling price and sell energy back when the price is exceeded.</p>
      <div className="price-selection">
        <label htmlFor="price-slider">Min. Price per kWh: {price}¢</label>
        <Slider
          defaultValue={1}
          min={1}
          max={25}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handlePriceChange}
        />
      </div>
      <label htmlFor="fuel-level-slider">
        Guaranteed Fuel Level: {fuelLevel}%
        <Slider
          defaultValue={30}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleFuel}
        />
      </label>
      <div>
        <label>Alert when Price Exceeded</label>
        <Checkbox {...label} />
      </div>
    </div>
  )
}

export default PriceContract
