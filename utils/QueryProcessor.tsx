export default function QueryProcessor(query: string): string {
  console.log(query);
  if (query.toLowerCase().includes("What is your name?")) {
    return (
      "TeSam"
    );
  }

  return "";
}
