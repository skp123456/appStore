import './index.css'

const TabItem = props => {
  const {tabDetails, updateAppList, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeClassNames = isActive ? 'active-tab-btn' : ''

  const getFilteredApp = () => {
    updateAppList(tabId)
  }

  return (
    <li className="tab-item-container">
      <button
        className={`tab-text ${activeClassNames}`}
        type="button"
        onClick={getFilteredApp}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
