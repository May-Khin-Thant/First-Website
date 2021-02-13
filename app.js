const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach (tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })

})

let carts = document.querySelectorAll('.add-to-cart')

let products = [


    {
        name : 'Shinny shirt',
        tag : '4-shinny shirt',
        price : 67,
        inCart : 0

    },

    {
        name : 'Lace through plaids shirt',
        tag : '46- lace see through plaids shirt',
        price : 70,
        inCart : 0

    },

    {
        name : 'Traditional vintage shirt',
        tag : '44- traditional pattern vintage shirt',
        price : 50,
        inCart : 0

    },

    {
        name :"1960's mod knit shirt",
        tag : "41- 1960's mod knit shirt",
        price : 45,
        inCart : 0

    },

    {
        name : 'Botton up african print shirt',
        tag : '24-botton-up african print shirt',
        price : 70,
        inCart : 0

    },

    {
        name : 'Cassic flight cargo shirt',
        tag : '33- classic flight cargo short',
        price : 56,
        inCart : 0

    },

    {
        name : 'Vuori aim short',
        tag : '38- vuori aim short',
        price : 34,
        inCart : 0

    },

    {
        name : 'African shirt',
        tag : '40-african shirt',
        price : '55',
        inCart : 0

    },

    {
        name : 'Hawaiian island creation',
        tag : '8- hawaiian island creation',
        price : 55,
        inCart : 0

    },

    {
        name : 'Bowling shirt',
        tag : '20-bowling shirt',
        price : 67,
        inCart : 0

    },

    {
        name : 'African top made',
        tag : '17- african top made',
        price : 67,
        inCart : 0

    },

    {
        name : 'Ripped holes t shirt deep red',
        tag : '18-ripped holes t shirt deep red',
        price : 69,
        inCart : 0

    },

    {
        name : 'Bermuda shirt',
        tag : '11- casual bermuda short',
        price : 78,
        inCart : 0

    },

    {
        name : 'Blue shirt',
        tag : '12- blue shirt',
        price : 59,
        inCart : 0

    },

    {
        name : 'Pocket short sleeve shirt',
        tag : '6-pocket short sleeve shirt',
        price : 89,
        inCart : 0

    },

    {
        name : 'Army full sleeve',
        tag : '45- casual army shirt full sleeve',
        price : 56,
        inCart : 0

    },

    {
        name : 'Short sleeve t shirt',
        tag : '48- short sleeve t shirt',
        price : 56,
        inCart : 0

    },

    {
        name : 'Standard cloth oliver nylon short',
        tag : '1- standard cloth oliver nylon short',
        price : 56,
        inCart : 0

    },

    {
        name : 'Sweaterv top',
        tag : 'crop top 48',
        price : 69,
        inCart : 0

    },

    {
        name : 'Leather coat',
        tag : 'dress 14',
        price : 57,
        inCart : 0

    },

    {
        name : 'Red top',
        tag : 'crop top 23',
        price : 78,
        inCart : 0

    },

    {
        name : 'Light blue top',
        tag : 'crop top 20',
        price : 79,
        inCart : 0

    },

    {
        name : 'Sexy white top',
        tag : 'crop top 24',
        price : 61,
        inCart : 0

    },

    {
        name : 'Plus size beach top',
        tag : 'crop top 30',
        price : 70,
        inCart : 0

    },

    {
        name : 'Green dream',
        tag : 'dress 42',
        price : 80,
        inCart : 0

    },

    {
        name : 'Office top',
        tag : 'crop top 28',
        price : 89,
        inCart : 0

    },

    {
        name : 'Red top shirt',
        tag : 'crop top 11',
        price : 83,
        inCart : 0

    },

    {
        name : 'Cute top',
        tag : 'crop top- women',
        price : 59,
        inCart : 0

    },

    {
        name : 'Fashion red dress',
        tag : 'dress 28',
        price : 90,
        inCart : 0

    },

    {
        name : 'Beach dress',
        tag : 'dress 18',
        price : 78,
        inCart : 0

    },

    {
        name : 'Red top shirt',
        tag : 'crop top 37',
        price : 69,
        inCart : 0

    },

    {
        name : 'Formal pink dress',
        tag : 'dress 10',
        price : 69,
        inCart : 0

    },

    {
        name : 'White top',
        tag : 'crop top 22',
        price : 45,
        inCart : 0

    },

    {
        name : 'Black and white dots',
        tag : 'dress 40',
        price : 50,
        inCart : 0

    },

    {
        name : 'Black top and jean',
        tag : 'crop top 17',
        price : 85,
        inCart : 0

    },

    {
        name : 'Formal flower printed',
        tag : 'dress 36',
        price : 69,
        inCart : 0

    },

    {
        name : 'Beach stripe jumpsuit',
        tag : '15- tween beach stripe jumpsuit',
        price : 69,
        inCart : 0

    },

    {
        name : 'Ruffle culotte jumpsuit',
        tag : '16- off the shoulder ruffle culotte jumpsuit',
        price : 57,
        inCart : 0

    },

    {
        name : 'Stripe denim overall set',
        tag : '35- stripe denim overall set',
        price : 78,
        inCart : 0

    },

    {
        name : 'Suspender skirt set',
        tag : '30-buffalo plaid tie strap suspender skirt set',
        price : 79,
        inCart : 0

    },

    {
        name : 'Long sleeve romper',
        tag : '20- baby boy long sleeve romper',
        price : 61,
        inCart : 0

    },

    {
        name : 'Casual summer floral dress',
        tag : '27- little girl casual summer floral dress',
        price : 70,
        inCart : 0

    },

    {
        name : 'Grey stripe hoodie',
        tag : '24- kid grey stripe hoodie',
        price : 80,
        inCart : 0

    },

    {
        name : 'Girls wind pants',
        tag : '14- girls wind pants',
        price : 89,
        inCart : 0

    },

    {
        name : 'Popover jumpsuit',
        tag : '8- popover jumpsuit girls',
        price : 83,
        inCart : 0

    },

    {
        name : 'Pink cami dress',
        tag : '7- little girl belted pink cami dress',
        price : 59,
        inCart : 0

    },

    {
        name : 'Sunflower scarf outfit',
        tag : '26-sunflower fields scarf outfit',
        price : 90,
        inCart : 0

    },

    {
        name : 'Beach stripe jumpsuit',
        tag : '15- tween beach stripe jumpsuit',
        price : 78,
        inCart : 0

    },

    {
        name : 'Half zip siftshell jacket',
        tag : '12- half zip softshell jacket',
        price : 69,
        inCart : 0

    },

    {
        name : 'Popover jumpsuit girls',
        tag : '8- popover jumpsuit girls',
        price : 69,
        inCart : 0

    },

    {
        name : 'Rare glitter mesh dress',
        tag : '39- rare girls denim and glitter mesh dress',
        price : 45,
        inCart : 0

    },

    {
        name : 'Peachy set',
        tag : '40- peachy set',
        price : 50,
        inCart : 0

    },

    {
        name : 'Summer suit boys',
        tag : '19- summer suit for boys',
        price : 85,
        inCart : 0

    },

    {
        name : 'Pumpkin suspender set',
        tag : '33- harvest pumpkin suede suspender set',
        price : 69,
        inCart : 0

    },

    {
        name : 'Badmin outfit',
        tag : 'sport wear 3- badminton outfit',
        price : 69,
        inCart : 0

    },

    {
        name : 'Gym outfit',
        tag : 'sport wear 47',
        price : 57,
        inCart : 0

    },

    {
        name : 'Bicycling outfit',
        tag : 'sport wear 45',
        price : 78,
        inCart : 0

    },

    {
        name : 'Tenis outfit',
        tag : 'sport wear 39',
        price : 79,
        inCart : 0

    },

    {
        name : 'Sleeve golf shirt',
        tag : 'sport wear 33 - ruffle collar sleeveless golf shirt',
        price : 61,
        inCart : 0

    },

    {
        name : 'Highwaist logo legging',
        tag : 'sport wear 38- tommy hlifiger sport highwaist logo legging',
        price : 70,
        inCart : 0

    },

    {
        name : 'Meditation grey',
        tag : 'sport wear 28',
        price : 80,
        inCart : 0

    },

    {
        name : 'Gym outfit',
        tag : 'sport wear 24',
        price : 89,
        inCart : 0

    },

    {
        name : 'Running outfit',
        tag : 'sport wear 2',
        price : 83,
        inCart : 0

    },

    {
        name : 'Summimg suit',
        tag : 'sport wear 42',
        price : 59,
        inCart : 0

    },

    {
        name : 'Gym suit',
        tag : 'sport wear 50',
        price : 90,
        inCart : 0

    },

    {
        name : 'Gym suit',
        tag : 'sport wear 17',
        price : 78,
        inCart : 0

    },

    {
        name : 'Running outfit',
        tag : 'sport wear 25',
        price : 69,
        inCart : 0

    },

    {
        name : 'Sport legging',
        tag : 'sport wear 46',
        price : 69,
        inCart : 0

    },

    {
        name : 'Sport jacket',
        tag : 'sport wear 40',
        price : 45,
        inCart : 0

    },

    {
        name : 'Jogging suit',
        tag : 'sport wear 19',
        price : 50,
        inCart : 0

    },

    {
        name : 'Summing suit',
        tag : 'sport wear 27',
        price : 85,
        inCart : 0

    },

    {
        name : 'Gym outfit',
        tag : 'sport wear 11',
        price : 69,
        inCart : 0

    },

    {
        name : 'Be the effect',
        tag : 'hoodie 1',
        price : 69,
        inCart : 0

    },

    {
        name : 'Gradient blue',
        tag : 'hoodie 7',
        price : 57,
        inCart : 0

    },

    {
        name : 'NASA',
        tag : 'hoodie 32',
        price : 78,
        inCart : 0

    },

    {
        name : 'Brown hoodie',
        tag : 'hoodie 4',
        price : 79,
        inCart : 0

    },

    {
        name : "I don't like losing",
        tag : "hoodie 25",
        price : 61,
        inCart : 0

    },

    {
        name : 'Senpai anime',
        tag : 'hoodie 48',
        price : 70,
        inCart : 0

    },

    {
        name : 'Black and white',
        tag : 'hoodie 16',
        price : 80,
        inCart : 0

    },

    {
        name : 'Monalizza',
        tag : 'hoodie 46',
        price : 89,
        inCart : 0

    },

    {
        name : 'Focus',
        tag : 'hoodie 43',
        price : 83,
        inCart : 0

    },

    {
        name : 'Rainbow',
        tag : 'hoodie 29',
        price : 59,
        inCart : 0

    },

    {
        name : 'Loser',
        tag : 'hoodie 9',
        price : 90,
        inCart : 0

    },

    {
        name : 'Polaroid',
        tag : 'hoodie 42',
        price : 78,
        inCart : 0

    },

    {
        name : 'Rainbow heart',
        tag : 'hoodie 11',
        price : 69,
        inCart : 0

    },

    {
        name : 'NewYork',
        tag : 'hoodie 13',
        price : 69,
        inCart : 0

    },

    {
        name : 'Humanity equality',
        tag : 'hoodie 38',
        price : 45,
        inCart : 0

    },

    {
        name : 'Thrasher',
        tag : 'hoodie 35',
        price : 50,
        inCart : 0

    },

    {
        name : 'Save the bees',
        tag : 'hoodie 33',
        price : 85,
        inCart : 0

    },

    {
        name : 'Friends',
        tag : 'hoodie 31',
        price : 69,
        inCart : 0

    },

    {
        name : 'Lately bracelet',
        tag : 'assesories 44- somewhere, lately bracelet',
        price : 69,
        inCart : 0

    },

    {
        name : 'Bradon maxwell',
        tag : 'assesories 43- bradon maxwell',
        price : 57,
        inCart : 0

    },

    {
        name : 'Blauw tulle sokken',
        tag : 'assesories 25- ster blauw tulle sokken',
        price : 78,
        inCart : 0

    },

    {
        name : 'Short pendant necklace',
        tag : 'assesories 16- nola gold short pendant necklace',
        price : 79,
        inCart : 0

    },

    {
        name : 'Gold ring clip',
        tag : 'assesories 47- gold ring and clip',
        price : 61,
        inCart : 0

    },

    {
        name : 'Bijious',
        tag : "assesories 36- women's jewelry and bijous",
        price : 70,
        inCart : 0

    },

    {
        name : 'Haute look',
        tag : 'assesories 24- haute look',
        price : 80,
        inCart : 0

    },

    {
        name : 'Sexy bag',
        tag : 'handbag 45',
        price : 89,
        inCart : 0

    },

    {
        name : 'Chic sunglass',
        tag : 'assesories 5 - chic sunglass',
        price : 83,
        inCart : 0

    },

    {
        name : 'Tease me huggies',
        tag : 'assesories 14- tease me huggies',
        price : 59,
        inCart : 0

    },

    {
        name : 'Owl bag',
        tag : 'handbag 6',
        price : 90,
        inCart : 0

    },

    {
        name : 'Key side bag',
        tag : 'handbag 11',
        price : 78,
        inCart : 0

    },

    {
        name : 'Birthstone earrings',
        tag : 'assesories 34- citrine birthstone earrings',
        price : 69,
        inCart : 0

    },

    {
        name : 'Set sterlign sliver',
        tag : 'assesories 35- layered necklace set sterling sliver',
        price : 69,
        inCart : 0

    },

    {
        name : 'Purple you',
        tag : 'handbag 46',
        price : 45,
        inCart : 0

    },

    {
        name : 'Pearl bangle bracelet',
        tag : 'assesories 38- gold filled pearl bangle bracelet',
        price : 50,
        inCart : 0

    },

    {
        name : "Women's gift",
        tag : "assesories 18- women's gift",
        price : 50,
        inCart : 0

    },

    {
        name : 'Chain bracelet black',
        tag : 'assesories 17- tory burch metallic leather and chain bracelet, black',
        price : 69,
        inCart : 0

    }

]


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i])
        totalCost(products[i])

    })
}


function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
    if (productNumbers) {
        document.querySelector('.cart-span').textContent = productNumbers
    }
}


function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers)
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.cart-span').textContent = productNumbers + 1
    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart-span').textContent = 1
    }

    setItems(product)

}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1

    } else {
        product.inCart = 1
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems))

}


function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost')
    if (cartCost != null) {
        cartCost = parseInt(cartCost)
        localStorage.setItem('totalCost', cartCost + product.price)
    } else {
        localStorage.setItem('totalCost', product.price)
    }
}



function displayCart() {
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector('.products')
    let cartCost = localStorage.getItem('totalCost')

    if (cartItems && productContainer) {
        /**console.log("running")**/
        productContainer.innerHTML = ''
        Object.values(cartItems).map (item => {
            productContainer.innerHTML += `
            <div class="cart-row " >
                <div class="cart-item cart-item-column">
                    <img class="cart-item-image cart-item-column" src="./images/${item.tag}.jpg" width="100" height="100">
                    <span class="cart-item-title">${item.name}</span>
                </div>
                <span class="cart-price cart-item-price cart-item-column">$${item.price}</span>
                <div class="cart-quantity cart-item-column">
                    <input class="cart-quantity-input" type="number" value="1">
                    <button class="btn btn-danger" type="button">REMOVE</button>
                </div>
            </div>`
        })
    }
}
onLoadCartNumbers()
displayCart()




if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i ++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }


    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    console.log(quantityInputs)
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName("cart-items")[0]
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()

}


function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}


function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()

}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i ++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)

    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}