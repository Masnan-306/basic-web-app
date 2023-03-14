function extractNumbers(input: string): number[] {
  const regex = /\d+/g; // Regular expression to match any sequence of digits
  const matches = input.match(regex); // Try to match the input string with the regex

  if (!matches) {
    throw new Error('No numbers found in input string.');
  }

  const numbers = matches.map((match) => Number(match)); // Convert each match to a number

  return numbers;
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
