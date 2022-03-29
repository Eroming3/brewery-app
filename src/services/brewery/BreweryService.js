async function GetBreweries(param) {
  const data = await fetch(`https://api.openbrewerydb.org/${param}`);
  return await data.json();
}

async function GetBrewery(id) {
  const data = await fetch(`https://api.openbrewerydb.org/breweries/${id}`);
  return await data.json();
}

export {
  GetBreweries,
  GetBrewery
};
