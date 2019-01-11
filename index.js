function produceDrivingRange(blockRange) {
  return function (street1, street2) {
    let streetNum1 = parseStreetNum(street1);
    let streetNum2 = parseStreetNum(street2);
  
    if (streetNum1 - streetNum2 >= 0 && streetNum1 - streetNum2 <= blockRange) {
      return `within range by ${streetNum1 - streetNum2 }`;
    } else if (streetNum2 - streetNum1 >= 0 && streetNum2 - streetNum1 <= blockRange) {
      return `within range by ${streetNum2 - streetNum1 }`;
    } else if (streetNum2 - streetNum1 > 0 && streetNum2 - streetNum1 > blockRange) {
      return `${streetNum2 - streetNum1 - blockRange} blocks out of range`;
    } else if (streetNum1 - streetNum2 > 0 && streetNum1 - streetNum2 > blockRange) {
      return `${streetNum1 - streetNum2 - blockRange} blocks out of range`;
    } 
  };
}

function parseStreetNum(street) {
  let streetArray = street.split("");
  streetArray.pop();
  streetArray.pop();
  return parseInt(streetArray.join(""));
}

function produceTipCalculator(tipPercent) {
  return function (fare) {
    return fare * tipPercent;
  };
}

function createDriver() {
  let driverId = 0;
  return class Hero {
    constructor(name) {
      driverId++;
      this.id = driverId;
      this.name = name;
    }
  };
}