// Question 1 -- sumOfTwo(a,b,v): You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.


function sumOfTwo(array1, array2, value){
    //The object will be used to create a hash table for faster lookup later
    let hash={};
    
    //This loop will go through the first array and find the necessary missing value for each number to make it equal to the value, these numbers are stored in the hash
    for(let i=0; i< array1.length; i++){
      hash[value - array1[i]] = true
    }  
    
    //This second loop will go through the second array and check if any of these numbers are in the hash, so then we will know if a pair exists since this array contains the one of th emissing numbers
    for(let i=0; i< array2.length; i++){
      if(hash[array2[i]]){
        return true
      }
    }
    
    //If we reach here then hte second array didn't contain a missing number and no pair exists.
    return false;
}