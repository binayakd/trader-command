import { writable } from 'svelte/store'

// agentList setup and subscribe
const agentListObject = getAgentDetailsFromLocalStore()
export const agentList = writable(agentListObject)

agentList.subscribe(  
  (value) => window.localStorage.setItem(
  "agents", JSON.stringify(value)
))

// selectedAgent setup and subscribe
export const selectedAgent = writable(
  JSON.parse(
    window.localStorage.getItem("selectedAgent")
  )
)

selectedAgent.subscribe(
  (value) => window.localStorage.setItem(
    "selectedAgent", JSON.stringify(value)
  )
)

// function to initialise agent list in local storage
export function getAgentDetailsFromLocalStore(){
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

// helper fnctions to update agentList
export function saveAgentDetails(symbol, token) {
  agentList.update(list => {
    const agent = list.find(agent => agent.symbol === symbol)
    if (agent) {
      agent.token = token
    } else {
      list.push({
        symbol: symbol, 
        token: token
      })
    }
    return list
  })
}

export function deleteAgent(symbol) {
  agentList.update(list => {
    const agent = list.find(agent => agent.symbol === symbol)
    if (agent) {
      list = list.filter(agent => agent.symbol !== symbol)
    }
    return list
  })
}

// export function saveAgentDetails(symbol, token) {
//   const currentAgentList = getAgentDetails()
//   const agent = currentAgentList.find(agent => agent.symbol === symbol)
//   if (agent) {
//     agent.token = token
//     window.localStorage.setItem("agents", JSON.stringify(currentAgentList))
//     return `Agent [${symbol}] updated`
//   } else {
//     currentAgentList.push({
//       symbol: symbol, 
//       token: token
//     })
//     window.localStorage.setItem("agents", JSON.stringify(currentAgentList))
//     return `Agent [${symbol}] added`
//   }
// }

// export function deleteAgent(symbol) {
//   const currentAgentList = getAgentDetails()
//   if (currentAgentList.find(agent => agent.symbol === symbol)) {
//     currentAgentList = currentAgentList.filter(agent => agent.symbol !== symbol)
//     window.localStorage.setItem("agents", JSON.stringify(currentAgentList))
//     return `Agent [${symbol}] deleted`
//   } else {
//     return `Agent [${symbol}] not found, nothing to delete`
//   }
// }

