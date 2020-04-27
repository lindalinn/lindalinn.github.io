var removeCartItem = document.getElementsByClassName("remove-item")
// console.log(removeCartItem)
for (var i = 0; i < removeCartItem.length; i++) {
    var button = removeCartItem[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    }) 
}

function updateCartTotal() {
    var cartItemContainer = document.getElementByClassName('cart-box')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-details')
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('price')[0]
        console.log(priceElement)
        var quantityElement = cartRow.getElementByClassName('quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementByClassName('back-text total-price')[0].innerText = '$' + total
}

