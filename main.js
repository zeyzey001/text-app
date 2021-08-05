function save() {
	
	// girdileri alma
	var title = document.getElementById('title-box').value;
	var text = document.getElementById('text-box').value;
	
	
	// consol'a başlık ve metni yazdırma
	console.log('Başlık.Degisken =', title)
	console.log('Metin.Degısken =' , text)
	
	// metin ve başlık denetimi
	
	//
	if(title=="")
	{
		console.log("Başlık Girilmedi")
		alert("Metin Veya Başlık Alanını Boş Bırakılmamalı")
	}
	
	// metin
	if (text=="")
	{
		console.log("Metin Girilmedi")
		alert("Metin Veya Başlık Alanını Boş Bırakılmamalı")
	}
	
	// kayıt edildi mesajı
	alert("Kayıt Edildi ")
	
	// LocalStorage
	
	// local storage' a kaydeyme
	localStorage.setItem("Title",title);
	localStorage.setItem("Text",text);
	
	// consol'a yazdırma
	console.log("localBASLIK", localStorage.getItem('Title'));
	console.log("localMETİN", localStorage.getItem('Text'));
};

// sayfa yüklendiğinde kayıtları çalıştırma
function load(){
	
	// yü
		document.getElementById("title-box").innerHTML = (localStorage.getItem("Title"));
// hata bir üst satırda ˆˆˆ
		document.getElementById("text-box").innerHTML = (localStorage.getItem("Text"));
	
	
 alert("Kayıtlarınız Yüklendi");
};



// Araç fonksoyları

// paragraf ekleme
function paragraf(){
		console.log("Paragraf Eklendi");
		document.getElementById("text-box").value+=("<p style='color: red;'></p>");
}

// bold yazı ekleme

function bold() {
	console.log("Bold Yazı Eklendi");
	document.getElementById("text-box").value += ("<b></b>");
}

// italic yazı ekleme

function italic() {
	console.log("İtalic Yazı Eklendi");
	document.getElementById("text-box").value += ("<i></i>");
}













// Bu koda yıllar sonra baktığında, bunu kolayı var neden böyle yapmışım gibi birşeyler söylersen, kendini geliştirmişsin demektir. :)