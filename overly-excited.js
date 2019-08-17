// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


// function addExcitement (theWordArray) {

    
//     let buildMeUp = ""
// for (let i = 0; i<=theWordArray.length; i++)
//  { 
//      if((i+1) % 3 === 0){
//         buildMeUp = buildMeUp + " "+ theWordArray[i] + `!`   
//      }  
//    buildMeUp = buildMeUp + " "+ theWordArray[i]
   
//         console.log(buildMeUp)
//          }

// }
// addExcitement(sentence)

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


function addExcitement (theWordArray, punctuation, multiply) {

    
    let buildMeUp = ""
for (let i = 0; i<=theWordArray.length; i++)
 { 
     if((i+1) % 4 === 0){
        buildMeUp = buildMeUp + " "+ theWordArray[i] + (punctuation.repeat(multiply))
     }  
   buildMeUp = buildMeUp + " "+ theWordArray[i]
   
        console.log(buildMeUp)
         }

}
addExcitement(sentence, "$", 5)

