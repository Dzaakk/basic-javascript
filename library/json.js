{
  const person = {
    firstName: "Agent",
    lastName: "A",
    address: {
      country: "Indonesia",
      city: "Bandung",
    },
    hobbies: ["Coding", "Read", "Archery"],
  };

  // konversi ke json
  const json = JSON.stringify(person);
  console.info(json);

  // konversi ke object
  const jsonObject = JSON.parse(json);
  console.info(jsonObject);
}
