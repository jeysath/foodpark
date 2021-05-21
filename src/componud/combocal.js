export const Calculation = (foodlist) => {
  const bread = foodlist[0];
  const milk = foodlist[1];
  const cheese = foodlist[2];
  const soup = foodlist[3];
  const butter = foodlist[4];

  var selling = 0;
  var offer_price = 0;
  var savings = 0;
  var selling_price = 0;
  var br_totel = 0;
  var ml_totel = 0;
  var ch_totel = 0;
  var so_totel = 0;
  var bu_totel = 0;
  var nbe = 0;
  var nc = 0;
  var nbu = 0;
  var fbu = 0;

  selling =
    bread.qty * bread.price +
    milk.qty * milk.price +
    cheese.qty * cheese.price +
    soup.qty * soup.price +
    butter.qty * butter.price;

  if (soup.qty) {
    nbe = (bread.qty / 2) * bread.price;

    console.log(`${nbe} bread free`);
  }

  if (cheese.qty != 0) {
    nc = Math.floor(cheese.qty / 2) * cheese.price;
    console.log(`${nc} cheese free`);
  }

  if (butter.qty) {
    nbu = (butter.qty / 3) * butter.price;
    fbu = nbu.toFixed(2);
    console.log(`${fbu}free`);
  }
  selling_price = selling.toFixed(2);
  savings = (nbu + nc + nbe).toFixed(2);
  offer_price = (selling_price - savings).toFixed(2);

  br_totel = (bread.qty * bread.price).toFixed(2);
  ml_totel = (milk.qty * milk.price).toFixed(2);
  ch_totel = (cheese.qty * cheese.price).toFixed(2);
  so_totel = (soup.qty * soup.price).toFixed(2);
  bu_totel = (butter.qty * butter.price).toFixed(2);

  return {
    selling_price,
    savings,
    offer_price,
    br_totel,
    ml_totel,
    ch_totel,
    so_totel,
    bu_totel,
    nbe,
    nc,
    fbu,
  };
};
