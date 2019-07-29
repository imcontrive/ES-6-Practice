const getDurationText = function (monthData) {

  var year = 1, month = 0;
  var length = monthData.length;
  
  var month1, month2, output = [];

 function generateString(year, month1, month2) {
   var suffix = year < 4? ['st','nd','rd'][year - 1] : "th" ;
   
   var MM = month1 != month2;
   var durationText = MM? "-"+(month2 % 12 || 12) + " months":" month";
   output.push(`${year}${suffix} year ${month1 %12}${durationText}`)
 }

 for (var i =0; i < length; i++){
    month1 = month + 1;
    month2 = month + monthData[i].next;
    year = Math.floor(month / 12) + 1;
    month = month + monthData[i].next;
    generateString(year,month1,month2)
 }

 return output;
}
