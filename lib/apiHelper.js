// Right now, these relies on dataset being a global variable.
// They do have the option to take in the dataset, but right now it defaults to the global data object
// This does two operations using one loop, coupled.
// This was done to perform only one loop over the array.
const getOfficeIndicesAndTitlesFromData = function (indicies, titles, searchSpace, dataSet) {
  for (const office of dataSet.offices) {
    if (office.divisionId === searchSpace) {
      Array.prototype.push.apply(indicies, office.officialIndices);

      for (let i = 0; i < office.officialIndices.length; i++) {
        titles.push(office.name);
      }
    }
  }
};

const getOfficialsFromData = function (indices, officialsArray, dataSet) {
  for (const index of indices) {
    officialsArray.push(dataSet.officials[index]);
  }
};

const addTitleToOfficials = function (officials, titles) {
  for (let i = 0; i < officials.length; i++) {
    officials[i].title = titles[i];
  }
};

// This is a more flexible version of getStateOfficials.
// This should return a list of officials based on the first argument, the tier.
// Possible region: 'country', 'state', 'county'

// This takes data from (`https://www.googleapis.com/civicinfo/v2/representatives/) and returns it as an array of objects
const getOfficials = function (region, dataSet) {

  if (!dataSet.divisions) {
    return "Please try another query"
  } else {
      const tiers = Object.keys(dataSet.divisions);
    
      const tiersList = {
        country: tiers[0],
        state: tiers[1],
        county: tiers[2],
      };
    
      const searchSpace = tiersList[region];
    
      const officeIndices = [];
      const officeTitles = [];
      getOfficeIndicesAndTitlesFromData(officeIndices, officeTitles, searchSpace, dataSet);
    
      const regionOfficials = [];
      getOfficialsFromData(officeIndices, regionOfficials, dataSet);
      addTitleToOfficials(regionOfficials, officeTitles, dataSet);
    
      return regionOfficials;
  }
};

// console.log(getOfficials('country'))
// console.log("*************************************************************************")
// console.log(getOfficials('state'))
// console.log("*************************************************************************")
// console.log(getOfficials('county'))
// console.log("*************************************************************************")


// This can be used for the MVP.
// This will return the state officials within the dataset.
// return type: array of objects, each one an official, matching the lucidchart.
// This can be easily used in the front end.
// Hint: input userState can be accessed through response.state (see invocation)
const getStateOfficials = function (userState) {
  // hardcoded state for now, expand this to a dictionary
  const divisionIdFinder = `ocd-division/country:us/state:${userState}`;

  const stateOfficeIndices = [];
  const stateOfficeInfo = [];

  // loads two arrays, one with the indices of the corresponding official,
  // the other with the title of the official
  // these two will be merged into one object later
  for (const office of data.offices) {
    if (office.divisionId === divisionIdFinder) {
      Array.prototype.push.apply(stateOfficeIndices, office.officialIndices);

      for (let i = 0; i < office.officialIndices.length; i++) {
        stateOfficeInfo.push(office.name);
      }
    }
  }

  const stateOfficials = [];
  for (const index of stateOfficeIndices) {
    stateOfficials.push(data.officials[index]);
  }

  addTitleToOfficials(stateOfficials, stateOfficeInfo);

  return stateOfficials;
};


module.exports = {
  getOfficials,
};
