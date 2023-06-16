
const rootUrl = "https://api.spacetraders.io/v2"


async function callEndpoint(urlPath, method, requestBody=null, authToken=null) {
  const body = requestBody ? JSON.stringify(requestBody) : null
  const headers = {'Content-Type': 'application/json'}

  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`
  }

  try {
    const response = await fetch(`${rootUrl}/${urlPath}`, {
      method: method,
      headers: headers,
      body: body
    });

    if (!response.ok) {
      const errorText = await response.text();
      return {
        content: null,
        error: errorText
      }
    }

    const data = await response.json();
    return {
      content: data,
      error: null
    }
    
  } catch (error) {
    return {
      content: null,
      error: error.message
    }
  }
}

export async function registerNewAgent(symbol, faction, email=null) {

  var requestBody = {
    symbol: symbol,
    faction: faction,
    email: email
  }

  return callEndpoint("register", "POST",  requestBody)
}


export async function getFactions() {
  return callEndpoint("factions?limit=20", "GET")
}