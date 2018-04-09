// Question 2 -- stringReformatting(string): The string s contains dashes that split it into groups of characters. You are given an integer k that represents the number of characters in groups that your output should have. Your goal is to return a new string that breaks s into groups with a length of k by placing dashes at the correct intervals. If necessary, the first group of characters can be shorter than k. It is guaranteed that there are no consecutive dashes in s. 

// For s = "2-4a0r7-4k" and k = 4, the output should be stringReformatting(s, k) = "24a0-r74k"; 

// The input string "2-4a0r7-4k" is split into three groups with lengths of 1, 5 and 2. Since k = 4, you need to split the string into two groups of 4 characters each, making the output string "24a0-r74k". 

// For s = "2-4a0r7-4k" and k = 3, the output should be stringReformatting(s, k) = "24-a0r-74k". 

// Given the same input string and k = 3, split the string into groups of 2, 3, and 3 characters to get the output string of "24-a0r-74k".


function stringReformatting(string, k){
    //We use some regex to replace the dashes with empty space
    string = string.replace(/-/g, '');

    //We will add string to this variable to make our answer
    let result='';

    //Extra is how many extra we have in case it can be split evenly in k ways
    let extra = string.length % k;
    
    //Dash will keep track of how many dashes we've added so far 
    let dash=0;
    
    //If we do have extra we add that portion first to the beginning of the string
    if(extra){
      result = string.slice(0, extra) + result;
    }
    
    //For this loop we start at i=extra because if there is extra we've already added that portion to the string, if not then i=extra=0
    for(let i=extra; i< string.length; i++){
      //If the result string with the extra and dashes is not divisible by k then we just add the character or if the result starts off with 0 length then we can also just add the character cause there is no extra  
      if((result.length - extra - dash) % k || result.length === 0){
        result+=string[i];
      }else{
        //Else if it is divisible by k then we have a group and need to add a dash before the next character
        dash++;
        result+=('-' + string[i]);
      }
    }
    
    return result;
  }