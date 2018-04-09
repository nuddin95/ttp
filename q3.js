// Question 3 -- getClosingParen(sentence, openingParenIndex): 

// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing." 

// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis. 

// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

function getClosingParen(sentence, openingParenIndex){
    //This variable will keep track if we find any extra opening parenthesis along the way
    let parenCount = 0;
    
    for(let i=openingParenIndex+1; i<sentence.length; i++){
      //If we find another opening we increment the counter, if we find a closing and the counter is above 0 we decrement the counter since there are other opening parenthesis, else if it closing and the counter is 0 we know we found the right closing 
      if(sentence[i] == "("){
        parenCount++;
      }else if(sentence[i] == ")" && (parenCount)){
        parenCount--;
      }else if(sentence[i] == ")" && !(parenCount)){
        return i;
      }
    }
}