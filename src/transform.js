


function groupAdultsByAgeRange(people) {
  const groups = {}
  let youngsters = []
  let twentyThirty = []
  let thirtyFourty = []
  let fourtyFifty = []
  let older = []
  let adults = people.filter((person => {
    return person.age >= 18
  }))

// const youngsters = adults.filter(adult => adult.age < 20)
// const 


 adults.map((adult) => {
    
    if (adult.age >= 18 && adult.age < 20) {
      youngsters.push(adult)
    }
    if (adult.age >= 20 && adult.age < 31) {
      twentyThirty.push(adut)
    }
    if (adult.age >= 31 && adult.age < 41) {
      thirtyFourty.push(adult)
    }
    if (adult.age >= 41 && adult.age < 51) {
      fourtyFifty.push(adult)
    }
    else {
      older.push(adult)
    }
  })

  // console.log('my youngsters are', youngsters)

  
  

  if (youngsters.length >= 1) {
    groups["20 and younger"] = youngsters

    if (twentyThirty.length >= 1) {
      groups["21-30"] = twentyThirty
    }
    if (thirtyFourty.length >= 1) {
      groups["31-40"] = thirtyFourty.map((single) => {
        return single
      })
    }  console.log('my 30-40 are', thirtyFourty)
    if (fourtyFifty.length >= 1) {
      groups["41-50"] = fourtyFifty
    }
    if (older.length >= 1) {
      groups["51 and older"] = older
    } 
  }
  
  
  return groups
  
}






module.exports = { groupAdultsByAgeRange }