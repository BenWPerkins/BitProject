//This Function populates the Coin Learn page body
getcoinLearn = (coinNameInput) => {
  axios
    .get(`https://api.coingecko.com/api/v3/coins/dogecoin`)

    .then((response) => {
      console.log(response);

      let output = "";

      output += `
              <p>${response.data.description.en}</p>
               
                `;

      $("#superCoinPlace").html(output);
    });
};
/*
function winthegame() {
  $(document).ready(function () {
    $("#table_id").DataTable({
      pageLength: 100,
    });
  });
}

//This Function populates the Coin List page
getCoinListSort = () => {
  axios
    .get(`https://api.coingecko.com/api/v3/exchanges`)

    .then((response) => {
      console.log(response);

      let output = "";
      let superExchange = response.data;
      var y = 0;

      $.each(superExchange, (index, exBucket) => {
        y++;
        var volume = Math.floor(exBucket.trade_volume_24h_btc);

        output += `
                <tr>
                <th scope="row">${y}</th>
                <td><img src="${
                  exBucket.image
                }" alt="help" style="width:50px;height:50px;"></td>
                <td>${exBucket.name}</td> 
                 <td>$ ${volume.toLocaleString()}</td>
  
                <td>${exBucket.trust_score}</td>
                <td>${exBucket.country}</td>
                <td>${exBucket.year_established}</td>
                <td><a href="${exBucket.url}">${exBucket.url}</a></td>
              
                </tr>
                `;
      });

      $("#superCoinPlace").html(output);
      //Here I am calling the function to trigger the sorting of the data tables.  I put this here so that the sorting features would hit
      //the page after the API calls have done their thing and the html is already built.
      winthegame();
    });
};
*/
