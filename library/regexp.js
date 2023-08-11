{
  // Create regex
  const regex1 = /Agent/;
  const regex2 = new RegExp("Agent");
  const regex3 = new RegExp(/Agent/);
}

{
  // Test regex

  const word = "Pandu menanam padi di pantai";
  const regex = /pantai/;

  const result = regex.exec(word);
  console.info(result);
  console.info(regex.exec("sawah"));

  const test = regex.test(word);
  console.info(test);
  console.info(regex.test("Budi"));
}
{
  // Regex modifier

  const name = "suci Awali\nSuci M\nSusi M awali";
  const regex1 = /suci/gi;
  const regex2 = /Awali/g;

  let result;
  while ((result = regex1.exec(name)) !== null) {
    console.info(result);
  }

  while ((result = regex2.exec(name)) !== null) {
    console.info(result);
  }
}
{
  // Advanced regex

  const regex = /ek[aiueo]/gi;

  const name = "eki eko eka eku eke edo edi eki";
  let result;
  while ((result = regex.exec(name)) !== null) {
    console.info(result);
  }
}
{
  // Regex in string
  const name = "eda eki eko eka eku eke edo edi eki";

  console.info(name.match(/ek[aiueo]/gi));
  console.info(name.search(/ek[aiueo]/gi));
  console.info(name.replace(/ek[aiueo]/i, "bambang"));
  console.info(name.replaceAll(/ek[aiueo]/gi, "bambang"));
  console.info(name.split(/e/gi));
}
