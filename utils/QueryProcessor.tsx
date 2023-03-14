function extractNumbers(input: string): number[] {
  const regex = /\d+/g; // Regular expression to match any sequence of digits
  const matches = input.match(regex); // Try to match the input string with the regex

  var numbers : number[] = []
  
  if (matches != null){
    numbers = matches.map((match) => Number(match)); // Convert each match to a number
  }

  return numbers;
}

function isPrime(n: number): boolean {
  if (n <= 1) {
    return false; // 1 and below are not considered prime
  }

  if (n <= 3) {
    return true; // 2 and 3 are prime
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false; // Numbers divisible by 2 or 3 are not prime
  }

  // Check for divisibility by other numbers up to the square root of n
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false; // Numbers divisible by i or i + 2 are not prime
    }
  }

  return true; // If no divisors are found, n is prime
}

function findMaxNumber(input: string): number {
  const regex = /(\d+),\s*(\d+),\s*(\d+)/; // Regular expression to match "number, number, number" pattern
  const match = input.match(regex); // Try to match the input string with the regex

  if (!match) {
    throw new Error('Invalid input format. Expected "number, number, number".');
  }

  const num1 = Number(match[1]); // Extract the first number from the match and convert it to a number
  const num2 = Number(match[2]); // Extract the second number from the match and convert it to a number
  const num3 = Number(match[3]); // Extract the third number from the match and convert it to a number
  const max = Math.max(num1, num2, num3); // Calculate the maximum of the three numbers

  return max;
}

function isPerfectSixthPower(n: number): boolean {
  const root = Math.round(Math.pow(n, 1/6)); // Calculate the sixth root of n and round to the nearest integer
  const power = Math.pow(root, 6); // Calculate the sixth power of the rounded root

  return n === power; // Return true if n is equal to the sixth power of the rounded root, false otherwise
}

export default function QueryProcessor(query: string): string {
  console.log(query);
  const numbers = extractNumbers(query);
  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "TeSam"
    );
  }
  else if (query.includes("plus")) {
    var sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return (
        sum.toString()
    );
  }
  else if (query.includes("multiplied")) {
    var sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum *= numbers[i];
    }
    return (
        sum.toString()
    );
  }
  else if (query.includes("minus")) {
    var sum = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        sum -= numbers[i];
    }
    return (
        sum.toString()
    );
  }

  else if (query.includes("prime")) {
    var sum = 0;
    for(let i = 0; i < numbers.length; i++){
      if(isPrime(numbers[i])){
        sum = numbers[i];
      }  
    }
    return (
        sum.toString()
    );
  }

  else if (query.includes("a square and a cube")) {
    return (
      (numbers.filter(isPerfectSixthPower)).toString()
    );
  }
  else if (query.toLowerCase().includes("largest")) {
    var sum = Math.max(...numbers);
    return (
        sum.toString()
    );
  }
  else if (query.toLowerCase().includes("the largest:")) {
    const str = query.split(":")[1];
    const n = str.split(" ");
    const n1 = n[0];
    const n2 = n[1];
    const n3 = n[2];
    const num1 = parseInt(n1.substring(0,n1.length-1));
    const num2 = parseInt(n2.substring(0,n2.length-1));
    const num3 = parseInt(n3.substring(0,n3.length-1));
    console.log(num1);
    console.log(num2);
    const res = Math.max(num1,num2,num3);
    return (
      res.toString()
    );
  }

  return "";
}
