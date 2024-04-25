document.addEventListener('DOMContentLoaded', function () {
	 // ID của sản phẩm mặc định là 1, hoặc bất kỳ ID nào bạn muốn hiển thị mặc định
 
    var calculateButton = document.getElementById('calculateButton');
    var kyHanThueSelect = document.getElementById('kyHanThue');

        // Đăng ký sự kiện cho nút tính toán
    if (calculateButton) {
        calculateButton.addEventListener('click', function(event) {
            tinhToanGiaThue(event);
            capNhatLabel(); // Cập nhật thông tin label khi nút tính toán được nhấn
        });
    } else {
        console.error('Calculate button not found');
    }

    // Đăng ký sự kiện cho dropdown kỳ hạn thuê, chỉ cập nhật label khi có thay đổi
    if (kyHanThueSelect) {
        kyHanThueSelect.addEventListener('change', capNhatLabel);
    } else {
        console.error('kyHanThue select not found');
    }
	// Thêm event listener cho trường input giá mua vào
   document.getElementById('giaMuaDuKien').addEventListener('input', onInputChanged);
	// Thêm event listener cho trường input giá mua vào
   document.getElementById('soLuongDuKien').addEventListener('input', onInputChanged);
   
	 // Hiển thị thông số sản phẩm mặc định khi trang web được nạp
    updateProduct('product1');

    // Thiết lập sự kiện khi người dùng chọn một sản phẩm từ danh sách
    document.querySelectorAll('.product-list li').forEach(function(li, index) {
        li.addEventListener('click', function() {
            var productId = this.getAttribute('data-product-id');
            updateProduct(productId);
        });
    });
});


function tinhToanGiaThue(event) {
  
  console.log('Tính toán được gọi');
  if (event) {
  event.preventDefault();
  }
  
  //var giaMua = parseFloat(document.getElementById('giaMuaDuKien').value);
  //var soLuong = parseFloat(document.getElementById('soLuongDuKien').value);
  var kyHanThueSelect = document.getElementById('kyHanThue');

  if (!kyHanThueSelect.selectedIndex) {
    alert('Vui lòng chọn kỳ hạn thuê.');
    return;
  }
  var selectedOption = kyHanThueSelect.options[kyHanThueSelect.selectedIndex].text;
  var kyHanThueValue = parseInt(selectedOption.match(/\d+/)[0], 10);
  
  // Lấy giá trị đã định dạng với dấu phẩy từ các trường input
  var giaMuaFormatted = document.getElementById('giaMuaDuKien').value;
  var soLuongFormatted = document.getElementById('soLuongDuKien').value;

  // Chuyển đổi chuỗi định dạng số với dấu phẩy thành số thực sử dụng cho tính toán
  var giaMua = parseInt(giaMuaFormatted.replace(/,/g, ''),10);
  var soLuong = parseInt(soLuongFormatted.replace(/,/g, ''),10);
  
  console.log(soLuong);
  console.log(giaMua);
  console.log(kyHanThueValue);
  
  if (kyHanThueValue === 12) {
  
	  var donGiaThueo1 = giaMua * soLuong*1.053/kyHanThueValue;
	  console.log(donGiaThueo1);
	  var tongGiamualai = giaMua * soLuong*0.135;
	  console.log(tongGiamualai);
	  var tongGiaThueMualai = donGiaThueo1 * kyHanThueValue + tongGiamualai;
	  console.log(tongGiaThueMualai);
	  
	  var donGiaThueo2 = giaMua * soLuong*0.838/kyHanThueValue;
	  console.log(donGiaThueo2);
	  var tongGiaThueo2 = donGiaThueo2 * kyHanThueValue;
	  console.log(tongGiaThueo2);
	  
	  } else if (kyHanThueValue === 24) {
			  var donGiaThueo1 = giaMua * soLuong*1.192/kyHanThueValue;
			  console.log(donGiaThueo1);
			  var tongGiamualai = giaMua * soLuong*0.11;
			  console.log(tongGiamualai);
			  var tongGiaThueMualai = donGiaThueo1 * kyHanThueValue + tongGiamualai;
			  console.log(tongGiaThueMualai);
			  
			  var donGiaThueo2 = giaMua * soLuong*1.078/kyHanThueValue;
			  console.log(donGiaThueo2);
			  var tongGiaThueo2 = donGiaThueo2 * kyHanThueValue;
			  console.log(tongGiaThueo2);
	  } else if (kyHanThueValue === 36){
			  var donGiaThueo1 = giaMua * soLuong*1.333/kyHanThueValue;
			  console.log(donGiaThueo1);
			  var tongGiamualai = giaMua * soLuong*0.075;
			  console.log(tongGiamualai);
			  var tongGiaThueMualai = donGiaThueo1 * kyHanThueValue + tongGiamualai;
			  console.log(tongGiaThueMualai);
			  
			  var donGiaThueo2 = giaMua * soLuong*1.29/kyHanThueValue;
			  console.log(donGiaThueo2);
			  var tongGiaThueo2 = donGiaThueo2 * kyHanThueValue;
			  console.log(tongGiaThueo2);
  // Công thức mặc định hoặc xử lý khác nếu kyHanThueValue có giá trị khác
 }

  var donGiaThueo1Rounded = Math.round(donGiaThueo1);
  var tongGiamualaiRounded = Math.round(tongGiamualai);
  var tongGiaThueMualaiRounded = Math.round(tongGiaThueMualai);
  
  var donGiaThueo2Rounded = Math.round(donGiaThueo2);
  var tongGiaThueo2Rounded = Math.round(tongGiaThueo2);
  
  document.getElementById('donGiaThueo1').value = formatNumber(donGiaThueo1Rounded);
  document.getElementById('tongGiamualai').value = formatNumber(tongGiamualaiRounded);
  document.getElementById('tongGiaThueMualai').value = formatNumber(tongGiaThueMualaiRounded);
  
  document.getElementById('donGiaThueo2').value = formatNumber(donGiaThueo2Rounded);
  document.getElementById('tongGiaThueo2').value = formatNumber(tongGiaThueo2Rounded);
 
}

function capNhatLabel() {
  console.log('Cập nhật label được gọi');
  console.log('Trước khi cập nhật labelo1:', document.getElementById('tuyChonLabel1'));
  console.log('Trước khi cập nhật labelo2:', document.getElementById('tuyChonLabel2'));
  // Your label update logic...
    var kyHanThueSelect = document.getElementById('kyHanThue');
    if (kyHanThueSelect) {
        var kyHanThue = kyHanThueSelect.options[kyHanThueSelect.selectedIndex].text;
        var labelo1 = document.getElementById('tuyChonLabel1');
        var labelo2 = document.getElementById('tuyChonLabel2');

        if (labelo1 && labelo2) {
            labelo1.innerHTML = '<strong>TÙY CHỌN 1: THUÊ VÀ BẠN MUA LẠI SAU KHI THUÊ</strong> ' + kyHanThue;
            labelo2.innerHTML = '<strong>TÙY CHỌN 2: HOÀN LẠI MÁY CHO NAGANEXT</strong> ' + kyHanThue;
        } else {
            console.error('One or more labels not found');
        }
    } else {
        console.error('kyHanThue select not found in capNhatLabel');
    }
	console.log('Sau khi cập nhật labelo1:', document.getElementById('tuyChonLabel1'));
	console.log('Sau khi cập nhật labelo2:', document.getElementById('tuyChonLabel2'));
	
	// bat dau cho ham chon tu dropdownlist 
	// Lấy giá trị từ các trường input và dropdownlist
  var product = document.getElementById('productInput').value;
  var quantity = document.getElementById('soLuongDuKien').value;
  var price = document.getElementById('giaMuaDuKien').value;
  var term = document.getElementById('kyHanThue').value;
 
  // Giả sử bạn đã có productSelect là phần tử <select> của bạn
  var productSelect = document.getElementById('productInput').value;
  //var selectedText = productSelect.options[productSelect.selectedIndex].text;
  document.getElementById('selectedProduct').innerHTML = '<strong>Sản phẩm bạn đã chọn:</strong> ' + productSelect;

  document.getElementById('selectedQuantity').innerHTML = '<strong>Số lượng bạn đã chọn:</strong> ' + quantity;
 
  document.getElementById('selectedPrice').innerHTML = '<strong>Đơn giá mua vào dự kiến:</strong> ' + price;
  
  document.getElementById('selectedTerm').innerHTML = '<strong>Kỳ hạn thuê bạn đã chọn:</strong> ' + term;


  // Hiển thị info-box nếu tất cả các trường đều có giá trị
  if(product && quantity && price && term) {
    document.getElementById('infoBox').style.display = 'block';
  } else {
    document.getElementById('infoBox').style.display = 'none';
	alert('Vui lòng nhập đầy đủ thông tin trước khi nhấn nút "Tính toán gói thuê", đặc biệt chú ý nhập 3 tham số gồm CHỌN KỲ HẠN THUÊ, số lượng, giá mua vào nhé bạn !');
	//HoangNA: can co alert de nguoi dung can phai nhap so lieu vào moi cho tinh toán 
  }  
}

function formatNumber(num) {
   return num.toLocaleString('en-US', {
    maximumFractionDigits: 0,
  });
}

// Hàm này sẽ được gọi mỗi khi có sự thay đổi trên trường nhập liệu
function onInputChanged(event) {
   // Lấy giá trị hiện tại của trường input, loại bỏ mọi ký tự không phải là số hoặc dấu chấm
  let inputNumber = event.target.value.replace(/[^0-9.]/g, '');

  // Nếu sau khi loại bỏ các ký tự không hợp lệ mà không còn ký tự nào, trả về chuỗi rỗng
  if(inputNumber === '' || isNaN(inputNumber)) {
    event.target.value = '';
    return;
  }

  // Chuyển đổi chuỗi nhập vào thành số
  inputNumber = parseFloat(inputNumber);

  // Định dạng số và cập nhật lại trường input
  event.target.value = inputNumber.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0
  });
}

function formatInputData(value) {
    // Chuyển giá trị hiện tại thành số thực, loại bỏ các ký tự không phải chữ số.
    let num = parseFloat(value.replace(/[^\d\.]/g, ''));
    
    // Kiểm tra xem số có hợp lệ hay không, nếu không trả về chuỗi rỗng.
    if (isNaN(num)) {
        return '';
    }

    // Chuyển số thành chuỗi có dấu phẩy cho hàng nghìn.
    return num.toLocaleString('en-US', {
        style: 'decimal',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });
}
//==========================================================================
// Ham cho phep section product selected showing tại section id="product-display"

// Giả sử bạn có một mảng chứa đường dẫn tới các ảnh của sản phẩm
var images = [
  'assets/img/products/standing.AC.type.standard.1.png',
  'assets/img/products/standing.AC.type.circle.2.png',
  'assets/img/products/non.Inverter.wall.AC.9k.type.standard.3.png',
  'assets/img/products/Inverter.wall.AC.9k.type.standard.4.png',
  'assets/img/products/Cassette.ceiling.AC.type.standard.5.png',
  // thêm các đường dẫn ảnh khác tương tự
];

// Biến để theo dõi ảnh hiện tại đang được hiển thị
var currentIndex = 0;

function nextImage() {
  console.log('previousImage called');
  // Tăng currentIndex, nếu đến cuối mảng thì quay lại 0
  currentIndex = (currentIndex + 1) % images.length;
  // Cập nhật src của thẻ img
  //document.getElementById('productImg').src = images[currentIndex];
  var productId = 'product' + (currentIndex + 1); // Cập nhật productId dựa trên currentIndex
  updateProduct(productId);
}

function previousImage() {
  console.log('nextImage called');
	// Giảm currentIndex, nếu về âm thì chuyển tới ảnh cuối cùng của mảng
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  // Cập nhật src của thẻ img
  //document.getElementById('productImg').src = images[currentIndex];
  var productId = 'product' + (currentIndex + 1); // Cập nhật productId dựa trên currentIndex
  updateProduct(productId);
}

// hien thi cac thong so ky thuat của san pham*/

// Một đối tượng lưu trữ thông tin của các sản phẩm
var productSpecs = [
	{
		id: 'product1',
		specs: [
		  { name: 'Model máy', unit: 'model', value: 'NP-C28DH+' },
		  { name: 'Công suất làm lạnh', unit: 'BTU/h', value: '28,000' },
		  { name: 'Điện năng tiêu thụ', unit: 'W', value: '	2,600' },
		  { name: 'Dòng điện', unit: 'A', value: '12.7' },
		  { name: 'Trọng lượng cục đứng trong', unit: 'kg', value: '36' },
		  { name: 'Kích thước thân máy cục trong', unit: 'mm', value: '510x315x1750' },
		  // Thêm các thông số khác
		]
	},
	
	{
		id: 'product2',
		specs: [
		  { name: 'Model máy', unit: 'model', value: 'NIP-A30DC' },
		  { name: 'Công suất định mức làm lạnh', unit: 'BTU/h', value: '28,000(3,240-30,000)' },
		  { name: 'Công suất định mức sưởi ấm', unit: 'BTU/h', value: '30,000(3,240-31,500)' },
		  { name: 'Điện năng tiêu thụ làm lạnh', unit: 'W', value: '2,650(350-3,000)' },
		  { name: 'Điện năng tiêu thụ sưởi ấm', unit: 'W', value: '2,500(350-3,100)' },
		  { name: 'Cường độ Dòng điện làm lạnh', unit: 'A', value: '11.2(1.6-13.7)' },
		  { name: 'Cường độ Dòng điện sưởi ấm', unit: 'A', value: '10.8(1.6-14.1)' },
		  { name: 'Khối lượng thân máy cục trong', unit: 'kg', value: '29' },
		  // Thêm các thông số khác
		]
	},
	
	{
		id: 'product3',
		specs: [
		  { name: 'Model máy', unit: 'model', value: 'NS-C09R2T30' },
		  { name: 'Công suất làm lạnh', unit: 'BTU/h', value: '9000' },
		  { name: 'Công suất điện', unit: 'kWh', value: '2.64' },
		  { name: 'Điện năng tiêu thụ', unit: 'W', value: '709' },
		  { name: 'Dòng điện', unit: 'A', value: '3.7' },
		  { name: 'Trọng lượng dàn lạnh', unit: 'kg', value: '8' },
		  { name: 'Khác', unit: 'Inverter', value: 'Không' },
		  // Thêm các thông số khác
		]
	},
	
	{
		id: 'product4',
		specs: [
		  { name: 'Model máy', unit: 'model', value: 'NIS-C09R2T29' },
		  { name: 'Công suất định mức làm lạnh', unit: 'BTU/h', value: '9,000(3,583~11,942)' },
		  { name: 'Công suất tiêu thụ điện', unit: 'W', value: '870 (220~1250)' },
		  { name: 'Trọng lượng', unit: 'kg', value: '8' },
		  { name: 'Cường độ Dòng điện', unit: 'A', value: '4.0 (1.0~6.0)' },
		  // Thêm các thông số khác
		]
	},
	
	{
		id: 'product5',
		specs: [
		  { name: 'Model máy', unit: 'model', value: 'NT-C28R2M32' },
		  { name: 'Công suất định mức làm lạnh', unit: 'BTU/h', value: '28,000' },
		  { name: 'Công suất tiêu thụ điện', unit: 'kW', value: '8.206' },
		  { name: 'Điện năng tiêu thụ làm lạnh', unit: 'W', value: '2,612' },
		  { name: 'Cường độ Dòng điện', unit: 'A', value: '11.2' },
		  // Thêm các thông số khác
		]
	},
];

// Cập nhật sản phẩm dựa trên productId
function updateProduct(productId) {
    updateProductImage(productId);
    updateProductSpecs(productId);
}

// Cập nhật hình ảnh sản phẩm
function updateProductImage(productId) {
    var imageFileName = productId + '.png'; // Chỉ một ví dụ, cần được thay đổi cho phù hợp
    document.getElementById('productImg').src = 'assets/img/products/' + imageFileName;
}

function updateProductSpecs(productId) {
  var product = productSpecs.find(p => p.id === productId);
  var tableBody = document.getElementById('product-specs-table-body');
  tableBody.innerHTML = ''; // Xóa thông số cũ

  product.specs.forEach(function(spec) {
    var row = tableBody.insertRow();
    var cellName = row.insertCell(0);
    var cellUnit = row.insertCell(1);
    var cellValue = row.insertCell(2);
    cellName.textContent = spec.name;
    cellUnit.textContent = spec.unit;
    cellValue.textContent = spec.value;
  });
}


