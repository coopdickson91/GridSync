import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Slider from '@mui/material/Slider'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { MultiInputTimeRangeField, LocalizationProvider } from '@mui/x-date-pickers-pro'
import { useState } from 'react'

import '../Contract.css'

const VolumeContract = ({ isSelected, onSelect }) => {
  const [fuelLevel, setFuelLevel] = useState(30)
  const [age, setAge] = useState('')

  const handleFuel = e => setFuelLevel(e.target.value)
  const handleAvailability = event => setAge(event.target.value)

  return (
    <div className={`contract-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <h2>Volume-Based Contract</h2>
      <p>Commit a specific amount of energy for a defined time interval.</p>
      <div>
        <label>Maximum Volume:</label>
        <TextField id="outlined-basic" label="Max. Volume" variant="outlined" size="small" />
      </div>
      <div>
        <label>Availability:</label>
        <FormControl fullWidth>
          <InputLabel>Weekly Availability</InputLabel>
          <Select value={age} onChange={handleAvailability}>
            <MenuItem value={1}>1 Day</MenuItem>
            <MenuItem value={2}>2 Days</MenuItem>
            <MenuItem value={3}>3 Days</MenuItem>
            <MenuItem value={4}>4 Days</MenuItem>
            <MenuItem value={5}>5 Days</MenuItem>
            <MenuItem value={6}>6 Days</MenuItem>
            <MenuItem value={7}>Everyday</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <label>Time Interval:</label>
          <MultiInputTimeRangeField
            slotProps={{
              textField: ({ position }) => ({
                label: position === 'start' ? 'From' : 'To',
              }),
            }}
          />
        </LocalizationProvider>
      </div>
      <label htmlFor="fuel-level-slider">
        Guaranteed Fuel Level: {fuelLevel}%
        <Slider defaultValue={30} onChange={handleFuel} />
      </label>
    </div>
  )
}

export default VolumeContract
