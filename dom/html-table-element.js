{
  <body>
    <table id="orderRevenue">
      <caption>Order Revenue</caption>
      <thead>
        <tr>
          <th>Month</th>
          <th>Income</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Januray</td>
          <td>20.000.000</td>
        </tr>
        <tr>
          <td>February</td>
          <td>30.000.000</td>
        </tr>
      </tbody>
      <tfoot>
        <td>Total</td>
        <td>50.000.000</td>
      </tfoot>
    </table>
  </body>;

  const orderRevenue = document.getElementById("orderRevenue");
  console.info(table.caption);
  console.info(table.tHead);
  console.info(table.tBodies);
  console.info(table.tFoot);
  console.info(table.rows);
}
