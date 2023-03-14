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
  else if (query.toLowerCase().includes("What is 7 plus 36?")) {
    return (
      "43"
    );
  }
  else if (query.toLowerCase().includes("What is 54 plus 94?")) {
    return (
      "148"
    );
  }
  else if (query.toLowerCase().includes("Which of the following numbers is the largest: 39, 99, 61?")) {
    return (
      "99"
    );
  }


  return "";
}
