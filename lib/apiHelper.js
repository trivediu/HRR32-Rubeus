// This takes data from (`https://www.googleapis.com/civicinfo/v2/representatives/) and returns it as an array of objects
// This should return a list of officials based on the first argument, the tier.
// Possible region: 'country', 'state', 'county'
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


module.exports = {
  getOfficials,
};
