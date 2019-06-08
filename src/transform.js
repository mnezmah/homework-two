
function groupAdultsByAgeRange(people) {
  let groups = {}
  let youngsters = []
  let twentyThirty = []
  let thirtyFourty = []
  let fourtyFifty = []
  let older = []
  let adults = people.filter((person => {
    return person.age >= 18
  }))

  adults.map((adult) => {
    if (adult.age >= 18 && adult.age <= 20) { youngsters.push(adult) }
    if (adult.age >= 21 && adult.age <= 30) { twentyThirty.push(adult) }
    if (adult.age >= 31 && adult.age <= 40) { thirtyFourty.push(adult) }
    if (adult.age >= 41 && adult.age <= 50) { fourtyFifty.push(adult) }
    if (adult.age > 50) { older.push(adult) }
  })

  if (youngsters.length !== 0) { groups["20 and younger"] = youngsters }
  if (twentyThirty.length !== 0) { groups["21-30"] = twentyThirty }
  if (thirtyFourty.length !== 0) { groups["31-40"] = thirtyFourty }
  if (fourtyFifty.length !== 0) { groups["41-50"] = fourtyFifty }
  if (older.length !== 0) { groups["51 and older"] = older }

  return groups
}

module.exports = { groupAdultsByAgeRange }