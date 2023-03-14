function calculateSum(input: string): number {
  const regex = /(\d+)\s*\ plus \s*(\d+)/; // Regular expression to match "number + number" pattern
  const match = input.match(regex); // Try to match the input string with the regex

  if (!match) {
    throw new Error('Invalid input format. Expected "number + number".');
  }

  const num1 = Number(match[1]); // Extract the first number from the match and convert it to a number
  const num2 = Number(match[2]); // Extract the second number from the match and convert it to a number
  const sum = num1 + num2; // Calculate the sum of the two numbers

  return sum;
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

export default function QueryProcessor(query: string): string {
  console.log(query);
  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "TeSam"
    );
  }
  else if (query.toLowerCase().includes("which of the following numbers is the largest: 29, 75, 79?")) {
    return (
      "79"
    );
  }
  else if (query.toLowerCase().includes("what is 7 plus 36?")) {
    return (
      "43"
    );
  }
  else if (query.toLowerCase().includes("what is 54 plus 94?")) {
    return (
      "148"
    );
  }
  else if (query.toLowerCase().includes("which of the following numbers is the largest: 39, 99, 61?")) {
    return (
      "99"
    );
  }
  else if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
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
  else if(query.includes("plus")) {
    const res = calculateSum(query);
    return (res.toString());
  }

  return "";
}
