
//------------------ Print all even numbers from 0 – 100-----------
let evenNumbers=(n)=>{
    let numbersEve=""
for(let i=0;i<=n;i++){
    if(i%2==0){
numbersEve += i+" "
    }
}
console.log(`even numbers from 1to 100 ${numbersEve} `);
}
evenNumbers(100)



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$




// Print a table containing multiplication tables;---------------------------------------------

let multiplicationTable=(number)=>{
    // if you want to print from 3*1=3 then give i=1 in below line instead of i=0
for(let i=0;i<=10;i++){
    let mul=number*i;
    console.log(`${number}*${i}=${mul}`);
}
}
multiplicationTable(6)



// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$






// Calculate the sum of numbers within an array-------------------------------

let sumArray=(arr,sum)=>{
   
for(let i=0;i<=arr.length-1;i++){
    
    sum += arr[i];
   
}
console.log(sum);
}

sumArray([1,2,3,4,6],0);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$





// Return the number of vowels in a string----------------------------------


let display=(name)=>{
    let cou=0;
for(let i=0;i<=name.length-1;i++){
    if ((name[i] == 'a') || (name[i] == "e") || (name[i] == "i") || (name[i] == "o") || (name[i] == "u ") || (name[i] == 'A') || (name[i] == "E") || (name[i] == "I") || (name[i] == "O") || (name[i] == "U")){
    
     cou += 1;
    }
    
}
console.log(cou);
}
display("chAitanya");





// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$






//  Create a function that reverses an array------------------------------------------
// debugger

((arr,revArr)=>{
    for(let i=arr.length-1;i>=0;i--){
        revArr[i] = arr[arr.length - i - 1];
        // revArr.push(arr[i])
          
    }
    console.log(revArr);
})([1,2,3,5],[]);

// ---------------------------------------------------------------------------------------------

// reverse String Array
((arr,revArr)=>{
    for(let i=arr.length-1;i>=0;i--){
        revArr[i] = arr[arr.length - i - 1];
        // revArr.push(arr[i])
          
    }
    console.log(revArr);
})(["chai","kar","jill"],[]);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$





// Sorting of Array -------------------------------------------------------------

// number array

((Arr)=>{

        let c;
    for(let i=0;i<Arr.length;i++){
  

        for (let j=i+1;j<Arr.length;j++){
      
          if(Arr[i]>Arr[j]){
           
          c= Arr[i]
          Arr[i]=Arr[j]
          Arr[j]=c
      
          }

        }
    }console.log(Arr);
}
)([1,3,4,2,5]);


// .....................................................
// STRING ARRAY
((Arr)=>{

    let c;
for(let i=0;i<Arr.length;i++){


    for (let j=i+1;j<Arr.length;j++){
  
      if(Arr[i]>Arr[j]){
       
      c= Arr[i]
      Arr[i]=Arr[j]
      Arr[j]=c
  
      }

    }
}console.log(Arr);
}
)(['F','C','a','J']);

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// string array 2nd largest 
((Arr)=>{

    let c;
    for(let i=0;i<Arr.length;i++){
    
    
    for (let j=i+1;j<Arr.length;j++){
    
      if(Arr[i]>Arr[j]){
       
      c= Arr[i]
      Arr[i]=Arr[j]
      Arr[j]=c
    
      }
    
    }
    }console.log(Arr);
    
    for(let k=Arr.length-1;k>=0;k--){
        if(Arr[k] != Arr[k-1]){
            console.log(Arr[k-1]);
            break;
        }
    }
    }
    
    )(['F','C','a',"a",'J']);

    // -------------------------------------------------------------------------
// number array second largest 
((Arr)=>{

    let c;
    for(let i=0;i<Arr.length;i++){
    
    
    for (let j=i+1;j<Arr.length;j++){
    
      if(Arr[i]>Arr[j]){
       
      c= Arr[i]
      Arr[i]=Arr[j]
      Arr[j]=c
    
      }
    
    }
    }console.log(Arr);
    
    for(let k=Arr.length-1;k>=0;k--){
        if(Arr[k] != Arr[k-1]){
            console.log(Arr[k-1]);
            break;
        }
    }
    }
    
    )([1,5,6,4,8,9,4]);
