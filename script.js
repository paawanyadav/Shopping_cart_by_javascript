var divAddProduct = document.getElementById('divAddProduct');
var divListProducts = document.getElementById('divListProducts');
var aAddProduct = document.getElementById('aAddProduct');

aAddProduct.addEventListener("click", function (event) {
	createNewProductPanel();
}
);

function createNewProductPanel() {
	hideAddNewProductLink();

	var lblAddNewProduct = document.createElement("label");
	lblAddNewProduct.innerHTML = "Add New Product";
	lblAddNewProduct.setAttribute("style", "font-weight:bold")
	divAddProduct.appendChild(lblAddNewProduct);/* attaching with div*/



	/* for space we add some spaceee */
	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);


	var txtProductName = document.createElement("input")
	txtProductName.setAttribute("type", "text");
	txtProductName.setAttribute("id", "txtProductName")
	txtProductName.setAttribute("placeholder", "Enter the Product name");
	txtProductName.setAttribute("style", "width:250px");
	divAddProduct.appendChild(txtProductName);/* attaching with div*/

	/* for space we add some spaceee */
	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);


	var txtProductDiscription = document.createElement("input")
	txtProductDiscription.setAttribute("type", "text");
	txtProductDiscription.setAttribute("id", "txtProductDiscription")
	txtProductDiscription.setAttribute("placeholder", "Enter the Product Discription");
	txtProductDiscription.setAttribute("style", "width:350px");
	divAddProduct.appendChild(txtProductDiscription);/* attaching with div*/

	/* for space we add some spaceee */
	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);

	var txtProductQuantity = document.createElement("input")
	txtProductQuantity.setAttribute("type", "text");
	txtProductQuantity.setAttribute("id", "txtProductQuantity")
	txtProductQuantity.setAttribute("placeholder", "Enter the Product Quantity");
	txtProductQuantity.setAttribute("style", "width:250px");
	divAddProduct.appendChild(txtProductQuantity);/* attaching with div*/


	/* for space we add some spaceee */
	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);

	var txtProductPrice = document.createElement("input")
	txtProductPrice.setAttribute("type", "text");
	txtProductPrice.setAttribute("id", "txtProductPrice")
	txtProductPrice.setAttribute("placeholder", "Enter the Product Price");
	txtProductPrice.setAttribute("style", "width:250px");
	divAddProduct.appendChild(txtProductPrice);/* attaching with div*/


	/* for space we add some spaceee */
	insertBlankLine(divAddProduct);
	insertBlankLine(divAddProduct);


	/*<button id="button">Magic</button>*/

	var button = document.createElement("button")
	button.setAttribute("id", "button")
	button.innerHTML = "Add Product";
	divAddProduct.appendChild(button);/* attaching with div*/
	button.addEventListener("click", function () {
		handle_addproduct(txtProductName.value, txtProductDiscription.value, txtProductQuantity.value, txtProductPrice.value);

		unhideAddNewProductLink()
		divAddProduct.innerHTML = ""

	});
}

function insertBlankLine(targetElement) {
	var br = document.createElement("br")
	targetElement.appendChild(br);
}


function hideAddNewProductLink() {
	aAddProduct.setAttribute("style", "visibility:hidden");
}

function unhideAddNewProductLink() {
	aAddProduct.setAttribute("style", "visibility:vissible");
}

function handle_addproduct(a, b, c, d) {
	var div = document.createElement("div")
	var div1 = document.createElement("div")
	var show = document.createElement("button")
	show.setAttribute("id", "show")
	show.innerHTML = "Show";

	var remove = document.createElement("button")
	remove.setAttribute("id", "remove")
	remove.innerHTML = "Delete";

	var hide = document.createElement("button")
	hide.setAttribute("id", "hide")
	hide.innerHTML = "Hide";

	a1 = document.createElement('p');
	a1.innerText = a

	b1 = document.createElement('p');
	b1.innerText = b

	c1 = document.createElement('p');
	c1.innerText = c

	d1 = document.createElement('p');
	d1.innerText = d

	div.appendChild(b1);
	div.appendChild(c1);
	div.appendChild(d1);

	div1.appendChild(a1);
	div1.appendChild(show)
	div1.appendChild(remove)
	div1.appendChild(hide)

	//divListProducts.appendChild(div1)
	divListProducts.appendChild(div1)
	show.addEventListener("click", function () {
		handle_show(div, div1);
	});



	remove.addEventListener("click", function () {
		handle_remove(div1);
	});


	hide.addEventListener("click", function () {
		handle_hide(div, div1);
	});


}

function handle_show(div, div1) {
	div1.appendChild(div)
	let divider = document.createElement('hr');
	/////////// Ho Gaya
	div1.appendChild(divider);
}


function handle_remove(div1) {
	divListProducts.removeChild(div1)
}

function handle_hide(div, div1) {
	div1.removeChild(div)
}

