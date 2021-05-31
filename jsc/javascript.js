		let i = 1;
		let divrow;
		let divcol;
		let divcard;
		for(i=1;i<10; i++) {
		divrow = document.querySelector('#divrow');
		divcol = document.createElement('div');
		divcol.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'bg-dark', 'py-3');
		divcol.setAttribute('id', 'divcol' + [i]);
		divcard = document.createElement('div');
		divcard.classList.add('card', 'bg-light');
		divcard.setAttribute('id', 'cardnumb' + [i]);
		divcard.innerHTML = '<img id="cardimag' + [i] + '" src="" class="card-img-top" alt="Изображение"><div id="cardbody' + [i] + '" class="card-body"><h5 id="cardtitle' + [i] + '" class="card-title">Заголовок</h5><p id="cardtext' + [i] + '" class="card-text">Описание</p><button id="cardorder' + [i] + '" type="button"  onclick="fastOrder(' + [i] + ');" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">Быстрый заказ</button> &nbsp; <a id="cardbasket' + [i] + '" href="#" class="btn btn-warning my-3">В корзину</a>';
		
		divrow.append(divcol);
		
		divcol.append(divcard);
		
		if (i===1) {
		let tagA1 = document.createElement('a');
		tagA1.setAttribute('id', 'pizza13');
		let divcol1 = document.querySelector('#divcol1');
		divcol1.prepend(tagA1);
				} if (i===4) {
		let tagA4 = document.createElement('a');
		tagA4.setAttribute('id', 'pizza46');
		let divcol4 = document.querySelector('#divcol4');
		divcol4.prepend(tagA4);
				} if (i===7) {
		let tagA7 = document.createElement('a');
		tagA7.setAttribute('id', 'pizza79');
		let divcol7 = document.querySelector('#divcol7');
		divcol7.prepend(tagA7);
				} 
				
		console.log(i);
		}
				
		// calling ajax format
		const ajax = new XMLHttpRequest();
		const method = "GET";
		const url = "php/allcards.php";
		const async = true;
		
		ajax.open(method, url, async);
		
		// sending ajax request
		ajax.send();
		
		// receiving json response from "allcards.php"
					let DATA = [];
					ajax.onreadystatechange = function() {
								if (this.readyState==4 && this.status==200) {
					// converting JSON back to array
								DATA = JSON.parse(this.responseText);
								console.log(DATA);
								// cicle for the DATA
								for (let j=0; j<DATA.length; j++) {
											let CARDNUMB = DATA[j].CARDNUMB;
											let CARDIMAG = DATA[j].CARDIMAG;
											let CARDTITLE = DATA[j].CARDTITLE;
											let CARDTEXT = DATA[j].CARDTEXT;
											
											console.log(CARDNUMB);
											
											console.log(CARDNUMB, CARDIMAG, CARDTITLE);
											// append to web-page
											document.querySelector('#cardimag' + [CARDNUMB]).src = CARDIMAG;
											document.querySelector('#cardtitle' + [CARDNUMB]).innerHTML = CARDTITLE;
											document.querySelector('#cardtext' + [CARDNUMB]).textContent = CARDTEXT;
												}
									} else if (this.readyState !=4 && this.status !=200) {
            alert("Не удалось получить данные:\n" +
                this.responseText);
							}
					}
					
	// Functions for a fast Orders
				function fastOrder(numCard) {
				document.querySelector('#exampleModalLabel').innerHTML = DATA[numCard-1].CARDTITLE;
				document.querySelector('#modalimage').src = DATA[numCard-1].CARDIMAG;
				document.querySelector('#modaltext').innerHTML = DATA[numCard-1].CARDTEXT;
				let inputorder = document.querySelector('#inputOrder');
				console.log('inputorder' + inputorder);
				inputorder.value = DATA[numCard-1].CARDTITLE;
				console.log('inputorder.value' + inputorder.value);
				}
				
				let fastform = document.querySelector('#fastform');
				let closemod = document.querySelector('#closemod');
				async function regForm(form) {
					let response = await fetch("php/fastord.php", {
												method: "POST",
												body: new FormData(form),
												});
					let result = await response.text();
					fastform.hidden = true;
					closemod.hidden = false;
					info.innerHTML = result;
					console.log(FormData);
					console.log(result);
					}
					