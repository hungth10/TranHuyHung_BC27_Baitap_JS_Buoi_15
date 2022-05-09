/** Mô hình 3 khối
 * input
 * + số điểm 3 môn thi
 * + số điểm ưu tiên dành cho khu vực và đối tượng
 *
 * các bước xử lý
 * + DOM và gán số điểm 3 môn mà người dùng nhập vào các biến tương ứng
 * + DOM và gán số điểm ưu tiên của khu vực và đối tượng vào các biến tương ứng
 * + Tạo biến số tổng số điểm
 * + Tính số điểm tổng số điểm
 * + So sánh điểm tổng và điểm chuẩn
 * + In ra kết quả
 *
 * output
 * +in ra số điểm trung bình và thông báo đậu hay rớt
 */

function sumGrade() {
  var gradeMath = +document.getElementById("math").value;
  var gradeLitera = +document.getElementById("literality").value;
  var gradeEnglish = +document.getElementById("english").value;
  var areaPrior = +document.getElementById("khuVuc").value;
  var casePrior = +document.getElementById("priority").value;
  var standardGrade = 18; // điểm chuẩn

  var sumGrade = gradeMath + gradeEnglish + gradeLitera + areaPrior + casePrior;

  if (gradeMath === 0 || gradeEnglish === 0 || gradeLitera === 0) {
    document.getElementById("result-bt-1").style.display = "block";
    document.getElementById("tongDiem").style.display = "none";
    document.getElementById(
      "print-result-bt1"
    ).innerHTML = `Bạn không đủ điều kiện để trúng tuyển`;
  } else if (sumGrade >= standardGrade) {
    document.getElementById("result-bt-1").style.display = "block";
    document.getElementById(
      "tongDiem"
    ).innerHTML = `Tổng điểm của bạn là: ${sumGrade}`;
    document.getElementById(
      "print-result-bt1"
    ).innerHTML = `Chúc mừng bạn đã trúng tuyển`;
  } else {
    document.getElementById("result-bt-1").style.display = "block";
    document.getElementById(
      "tongDiem"
    ).innerHTML = `Tổng điểm của bạn là: ${sumGrade}`;
    document.getElementById(
      "print-result-bt1"
    ).innerHTML = `Bạn chưa đủ điểm để trúng tuyển`;
  }
}
