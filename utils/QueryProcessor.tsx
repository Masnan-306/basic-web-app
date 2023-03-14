export default function QueryProcessor(query: string): string {
  console.log(query);
  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "TeSam"
    );
  }

  return "";
}
