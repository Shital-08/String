//1. Count Characters
const countCharacters = (S) => 
{
  let B = [];
  let countA = 0, countD = 0;
  for(let i = 0; i < S.length; i++){
    if(S.charAt(i) == "A"){
      countA += 1;
    }
    else if(S.charAt(i) == "D"){
      countD += 1;
    }
  }
  B.push(countA);
  B.push(countD);
  return (B);
};

//2. Count the Heads
var Count_Occ = (s) => 
{
      let Arr = s.split("").sort();
    var p;
    let map1 = new Map();
    for(let i =0; i<Arr.length;i++)
    {
      p=0;
      Arr.reduce((acc,val)=>
      {
        if(val == Arr[i])
        {
          p=acc+1;
        }
        return p;
      }, 0);
      map1.set(`${Arr[i]}` , p);
    }
    let z = [];
    map1.forEach((value,key)=>
    {
    if(value>1)
    {
      z.push(key + "" + value);
    }
    
    });
    return (z.join(""));
};

//3. Count the Vowels
var Count_Vowels= (S) => 
{
  let str = S.toLowerCase();
  let count = 0;
  const vowels = ['a' , 'e', 'i', 'o', 'u'];
  for(let i = 0; i < str.length; i++){
    let con = vowels.includes(str[i])
    if(con === true){
        count++;
    }
}
  return count;
};

//4. Concatenate the Strings
var Concatenate_Strings = (S1, S2) => 
{
  let str = S1.concat(S2)
  return (str);
};
 
//5. Find Length
const findLength = (S) => 
{
  return S.length;  
};

//6. Find the Winner
var Game_Winner = (S) => 
{
  let countA = 0 , countD = 0;
  for(let i = 0; i < S.length; i++){
    if(S[i] == "A"){
      countA++;
    }
    else if(S[i] == "D"){
      countD++;
    }
  }
  if(countA > countD){
    return "Aditya";
  }
  else if(countA < countD){
    return "Danish";
  }
  else{
    return "Draw";
  }
}
 
//7. Join Strings
const joinStrings = (S, P) => 
{
  let str = S.concat(P);
  return str;
};

//8. Plaindrome Check
var Palin_Check = (str) =>
{
  let output = "";
  let j = str.length - 1;
  for (let i=j ; i >=0 ; i--){
    output += str[i];
  }
  if(str == output){
    return "True";
  }
  else{
    return "False";
  }
}

//9. Reverse the String
var Reverse_String = (str) => 
{
  let reverse = "";
  let j = str.length - 1;
  for(let i=j;i>=0;i--){
    reverse = reverse+str[i];
  }
  return reverse;
};

//10.Match the String
var String_Match = (S1,S2) => 
{
  if(S1.trim() === S2.trim())  {
    return "YES";
              
    }
    else{
    return "NO";
    }
};

//11. String Replace
var Replace = (S, pattern , text) => 
{
  let str = S.replace(pattern , text);
  return str;
};

//12. Split the String
var Split_the_string = (S) => 
{
  let arr = S.split(" ");
  return arr;
};

//13. Count the Vowels and Consonants
var Count_Vowels= (S) => 
{
  let str = S.toLowerCase();
  let count = 0;
  const vowels = ['a' , 'e', 'i', 'o', 'u'];
  for(let i = 0; i < str.length; i++){
    let con = vowels.includes(str[i])
    if(con === true){
        count++;
    }
}
  return count;
};
var Count_Consonants= (S) => 
{
  let str = S.toLowerCase();
  let count = 0;
  const vowels = ['a' , 'e', 'i', 'o', 'u'];
  for(let i = 0; i < str.length; i++){
    let con = vowels.includes(str[i])
    if(con !== true){
        count++;
    }
}
  return count;     
};