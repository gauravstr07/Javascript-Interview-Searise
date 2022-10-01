// Find and inserting & unioun of an Array

const arr1 = [1,2,3,4,5];
const arr2 = [3,4,5,6,7];

// const interSectionArr = arr1.filter((curruntElement) => {
//         return arr2.includes(curruntElement);
// })

// console.log(interSectionArr);

const unionArr = [...arr1, ...arr2];
console.log(unionArr);