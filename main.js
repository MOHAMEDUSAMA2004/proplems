/*                    Filtering An Array                     */ 
 
 let numbers = [1,2,3,4,5,6,7,8,9,10];
var filter= numbers.filter((num)=>{
    return num % 2 ===0;
})
 console.log(filter);
 /*                                                           */




 /*                        Find The Largest Number            */
let largestNum=[100,1000,2000,5000,200,10000,900];
var largest = Math.max(...largestNum);
console.log(largest);

 /*                                                          */



 /*                    Reverse A String                     */
let word ="Reverse A String";
var reverse = word.split('').reverse().join('')
console.log(reverse);

 /*                                                           */



  /*                    Remove Duplicates                     */
let  duplicates = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]
var removeDuplicates =Array.from(new Set(duplicates));
console.log(removeDuplicates);

 /*                                                           */



  /*                          Thanks                         */
