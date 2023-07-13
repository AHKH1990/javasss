function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    return `you will be a ${jobTitle} living in ${location} married to ${partnerName} with ${numberOfChildren} children`
}

const tellFortune1 = tellFortune('Gardner', 'miami', 'Sara',5)
const tellFortune2 = tellFortune('Carpenter', 'chicago', 'dana',3)
const tellFortune3 = tellFortune('Programer', 'new york', 'jane',2)
const tellFortune4 = tellFortune('Doctor', 'los angeles', 'mia',4)
const tellFortune5 = tellFortune('astronaut', 'dallas', 'Sara',7)

console.log (tellFortune1)
console.log (tellFortune2)
console.log (tellFortune3)
console.log (tellFortune4)
console.log (tellFortune5)