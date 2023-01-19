//range is 100 to 200
//first step is to write a program that prints these numbers
//use loop => we want to print every value at the current step in the loop. Lets set variable to num

//now we need to state our conditions 

//using 3 and 4 as multiples 

//if num is a multiple of 3 => "Loopy"
//if num is  a multiple of 4 => "Lighthouse"
//if num is a multiple of 3 and 4 => "LoopyLighthouse => make sure this condition is first since it must be evaluated firsy

//strings include 'Loopy', 'Lighthouse' and 'LoopyLighthouse'

//how I would have wrote it:
for (let num = 100; num <= 200; num++) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(num);
  }
}

//there is a simpler way:
//create for loop first
for (const num of nums) {
  let output = "";
  if (num % 3 === 0) {
    output += "Loopy";
  }
  if (num % 4 === 0) {
    output += "Lighthouse";
  }
  console.log(output === "" ? num : output);
}