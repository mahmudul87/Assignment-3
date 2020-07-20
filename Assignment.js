function feetToMile(feet){
    var mile = 0.00018939*feet;
    return mile; 
}
console.log (feetToMile(1000));



function woodCalculator (NoOfChair, NoOfTable, NoOfBed) {
    var chair = 1* NoOfChair;
    var table = 3* NoOfTable;
    var bed = 5 * NoOfBed;
    var total = chair + table + bed;
    return total;
}
console.log (woodCalculator(12, 15, 18));



function brickCalculator (storey){
    for (i=1; i<=storey; i++){
        if (i<=10){
            var firstTenthFloor = 1000*15*i      
         }
         if (i<=20){
             var tenthToTwenthFloor =1000*12*(i-10)
         }
         if (i>=20){
            var abvTwenthFloor = 1000*10*(i-20)       
         }
         var total = firstTenthFloor + abvTwenthFloor;
          
    }
    return total;
}
console.log (brickCalculator(50));



function tinyFriend (friend){
    var smallest = friend[0];
    for (i=0; i<friend.length; i++){
        var currentName = friend[i];
        if (currentName<smallest){
            smallest= currentName;
        }

    }
    return smallest;
}
var smallestName = tinyFriend(["fuad", "mishu", "obayed", "yasin", "sathi","Poo"]);
console.log (smallestName);