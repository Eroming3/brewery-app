async function GetBreweries(param) {
  const data = await fetch(`https://api.openbrewerydb.org/${param}`);
  return await data.json();
}

export {
  GetBreweries
};
