

export function getAgentDetails() {
  if (window.localStorage.getItem("agents") === null) {
    window.localStorage.setItem("agents", JSON.stringify([]))
    return []
  } else {
    const currentAgentList = JSON.parse(
      window.localStorage.getItem("agents")
    )
    return currentAgentList
  }
}

export function saveAgentDetails(symbol, token) {
  const currentAgentList = getAgentDetails()
  if (currentAgentList.find(agent => agent.symbol === symbol)) {
    agent.token = token
    window.localStorage.setItem("agents", JSON.stringify(currentAgentList))
    return `Agent [${symbol}] updated`
  } else {
    currentAgentList.push({
      symbol: symbol, 
      token: token
    })
    return `Agent [${symbol}] added`
  }
}


export function deleteAgent(symbol) {
  const currentAgentList = getAgentDetails()
  if (currentAgentList.find(agent => agent.symbol === symbol)) {
    currentAgentList = currentAgentList.filter(agent => agent.symbol !== symbol)
    window.localStorage.setItem("agents", JSON.stringify(currentAgentList))
    return `Agent [${symbol}] deleted`
  } else {
    return `Agent [${symbol}] not found, nothing to delete`
  }
}