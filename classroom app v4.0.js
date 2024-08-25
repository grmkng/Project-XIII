/**
 * @param {array} grades
 */
export function getSumOfGrades(grades) {
    let sum = 0
    grades.forEach(function(grade){
        sum = sum + grade
    })
    return sum
}

/**
 * @param {array} grades
 */
export function getAverageGrade(grades) {
   return getSumOfGrades(grades) / grades.length
}