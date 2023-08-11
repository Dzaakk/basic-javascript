{
  const set = new Set();

  set.add("Agent A");
  set.add("Agent A");
  set.add("Agent B");

  console.info(set);
  set.forEach((value) => console.info(value));
  
}
