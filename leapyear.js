function isleapyear(year) {
    const remandar = year % 4;
    if (remandar === 0) {
       return true 
    } 
    else {
        return false
    }
}

const mynomber = isleapyear(100);
console.log(mynomber)
const hardNomber = isleapyear(2023);
console.log(hardNomber);


// function getLeapYears(startYear, endYear) {
//     const leapYears = [];
//     for (let year = startYear; year <= endYear; year++) {
//       if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         leapYears.push(year);
//       }
//     }
//     return leapYears;
//   }
  
//   // Example usage:
//   const leapYears11 = getLeapYears(2000, 2020);
//   console.log(leapYears); // [2000, 2004, 2008, 2012, 2016, 2020]


  function getLeapYears(startYear , endYear){
    const leapYears = [];
    for (let year = startYear; year<= endYear; year++){
        if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
            leapYears.push(year);
        }
    }
    return leapYears;
  }
  const leapYears = getLeapYears(1000,2020);
  console.log(leapYears);

  



// function isleapyear(year) {
//         const remandar = year % 4,;
//         if (remandar === 0) {
//            return true 
//         } 
//         else {
//             return false
//         }
//     }
//   const ismylepar =isleapYear(1000);
// console.log(ismylepar);
//   const myhradlepar =isleapYear(1001);
//   console.log(myhradlepar);
  
function isleapyear(year){
  if (year % 4 == 0 && (year % 100 !== 0)|| (year % 400 == 0)) {
    return true;
  }
  else{
    return false;
  }
}
  const myyear = 2024;
const rimander = isleapyear(myyear);
console.log (rimander);

function name1(year) {
  var leapyear =[];
  for (let i = 0; i <= name1.length; year++) {

    if ((i % 4 == 0 && i % 100 !== 0)|| i % 400 == 0){
      // leapyear.push(year)
    }
  }
  return leapyear;
}
const leapyear =2023;
console.log (leapyear) ;