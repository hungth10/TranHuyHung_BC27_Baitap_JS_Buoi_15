// Bài tập 2: tình tiền điện

/** M6 hình 3 khối
 * input
 * + tên khách hàng và số điện năng đã sử dụng
 *
 * Các bước xử lý
 * + DOM và gán tên của khách hàng vào 1 biến
 * + DOM và gán số điện năng tiêu thụ của khách hàng vào 1 biến
 * + Tính toán số tiền khách hàng phải trả theo bảng giá
 *
 * output
 * + in ra số tiền mà khách hàng phải trả ứng với số tiền điện đã tiêu thụ
 */

function pay() {
  var userName = document.getElementById("userName").value;
  var inputKw = +document.getElementById("Kw").value;

  var price = 0;

  price = calculatePrice(inputKw, 500, 650, 850, 1100, 1300).toLocaleString();

  document.getElementById("result-bt-2").style.display = "block";
  document.getElementById(
    "result-2"
  ).innerHTML = 
  `Số tiền điện của khách hàng ${userName} là: ${price} vnd`;
}

function calculatePrice(kw, kw_50_1, kw_50_2, kw_200, kw_350, kw_rest) {
  var price = 0;

  if (kw <= 50) {
    price = kw * kw_50_1;
  } else if (kw <= 100) {
    price = 50 * kw_50_1 + (kw - 50) * kw_50_2;
  } else if (kw <= 200) {
    price = 50 * kw_50_1 + 50 * kw_50_2 + (kw - 100) * kw_200;
  } else if (kw <= 350) {
    price = 50 * kw_50_1 + 50 * kw_50_2 + 100 * kw_200 + (kw - 200) * kw_350;
  } else {
    price =
      50 * kw_50_1 +
      50 * kw_50_2 +
      100 * kw_200 +
      150 * kw_350 +
      (kw - 350) * kw_rest;
  }

  return price;
}
