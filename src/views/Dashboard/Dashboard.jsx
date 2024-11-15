import { useState } from 'react'

import './Dashboard.css'
import ControlContract from '../../components/Contracts/ControlContract'
import PriceContract from '../../components/Contracts/PriceContract'
import VolumeContract from '../../components/Contracts/VolumeContract'

const Dashboard = () => {
  const [selectedContract, setSelectedContract] = useState(null)

  const handleSelectContract = contractType => {
    setSelectedContract(contractType)
  }

  return (
    <div className="contracts-page">
      <div className="contracts-header">
        <h1>Choose Your V2G Contract</h1>
        <p>
          Select a contract type that best matches your preferences for participating in
          vehicle-to-grid (V2G) services. Each option allows you to tailor your commitment,
          availability, and earnings based on your individual requirements.
        </p>
      </div>

      {/* Contract Cards */}
      <div className="contracts-container">
        <PriceContract
          isSelected={selectedContract === 'PriceBased'}
          onSelect={() => handleSelectContract('PriceBased')}
        />
        <VolumeContract
          isSelected={selectedContract === 'VolumeBased'}
          onSelect={() => handleSelectContract('VolumeBased')}
        />
        <ControlContract
          isSelected={selectedContract === 'ControlBased'}
          onSelect={() => handleSelectContract('ControlBased')}
        />
      </div>

      {/* Confirm Button */}
      <button
        className="confirm-button"
        onClick={() => alert(`You selected the ${selectedContract} contract`)}
        disabled={!selectedContract}
      >
        Confirm Selection
      </button>
    </div>
  )
}

export default Dashboard
