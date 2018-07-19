

  export function officesInfo(data, arr) {
    var offices = data.offices;
    var arrOfOffices = [];
    for(var i = 0; i < arr.length; i++){
      arrOfOffices.push(data.offices[arr[i]].name);
    }
    return arrOfOffices;
  }

  export function officialIndices(data, arr) {
    var offices = data.offices;
    var arrOfOfficialIndices = [];
    for(var i = 0; i < arr.length; i++){
      for(var k = 0; k < data.offices[arr[i]].officialIndices.length; k++){
        arrOfOfficialIndices.push(data.offices[arr[i]].officialIndices[k]);

      }
    }
    console.log(arrOfOfficialIndices);
    return arrOfOfficialIndices;
  }

