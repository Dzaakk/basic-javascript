{
  // Create Date

  const date1 = new Date();
  console.info(date1);

  const date2 = new Date(2023, 8, 20);
  console.info(date2);

  const date3 = new Date(2020, 10, 20, 16, 59, 3, 123);
  console.info(date3);

  const date4 = new Date(1691692836718);
  console.info(date4);
}

{
  // Epoch & unix timestamp

  const date1 = new Date();
  console.info(date1.getTime());

  const date2 = new Date(2023, 8, 20);
  console.info(date2.getTime());

  const date3 = new Date(2020, 10, 20, 16, 59, 3, 123);
  console.info(date3.getTime());

  const date4 = new Date(1691692836718);
  console.info(date4.getTime());

  console.info(Date.now());
}

{
  // Date parsing

  const time = Date.parse("2023-8-13T08:59:10.123+07:00");
  console.info(time);

  const date = new Date(time);
  console.info(date);
}

{
  // Getter & Setter

  const date = new Date();

  console.info(date.getFullYear());
  console.info(date.getMonth());
  console.info(date.getDate());
  console.info(date.getHours());
  console.info(date.getMinutes());
  console.info(date.setUTCDate());
  console.info(date.getMilliseconds());
  console.info(date.getTimezoneOffset());
}
