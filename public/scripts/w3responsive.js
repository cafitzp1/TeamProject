/* jshint browser: true*/
/* jshint jquery: true*/

'use strict';

let slideIndex = 0;
let slidesAvailable = 3;
let totalCartItems = 0;
let itemCounts = new Array(4);
let subTotal = 0;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let dots = document.getElementsByClassName("dot");

    // keep slides between 0 and cap
    slideIndex = n % slidesAvailable == -1 ? 2 : n % slidesAvailable;

    // reset class for background image
    document.getElementById('home').className = `w3-display-container bgimg-${slideIndex + 1}`;

    // move dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}
// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

// open/close the cart
function toggleCart() {
    $('#shopping-cart').toggle();
}

function addToCart(id, name, price) {
    totalCartItems++;

    // hide the empty cart placeholder, show the badge icons
    $("#empty-cart").hide();
    $(".badge").show();
    $(".badge").text(() => totalCartItems);

    // calculate
    let deliveryFee = 0, salesTax = 0, total = 0;
    subTotal += price;
    deliveryFee = subTotal * 0.01;
    salesTax = subTotal * 0.07;
    total = subTotal + deliveryFee + salesTax;
    
    // update calculated elements
    $("#shopping-cart-total").text(() => '$' + total.toFixed(2));
    $("#shopping-cart-subtotal").text(() => '$' + subTotal.toFixed(2));
    $("#shopping-cart-delivery-fee").text(() => `(${subTotal.toFixed(2)} x 1%) $${deliveryFee.toFixed(2)}`);
    $("#shopping-cart-sales-tax").text(() => `(${subTotal.toFixed(2)} x 7%) $${salesTax.toFixed(2)}`);

    // if item does not exist in the cart yet
    let item = "item" + id;
    if ($('#' + item).length == 0) {
        itemCounts[id-1] = +1;
        $('#shopping-cart-items').append(
        `
            <li id="item${id}" class="clearfix shopping-cart-item">
                <span class="item-name">${name}</span>
                <span class="item-price">$${price.toFixed(2)}</span>
                <span class="item-quantity">Quantity: ${itemCounts[id-1]}</span>
            </li>
        `
        );
    }
    // item exists, so we have to increment the quantity
    else {
        itemCounts[id-1] += +1;
        $('#' + item + " .item-quantity")[0].innerHTML = "Quantity: " + itemCounts[id-1];
    }
}

function clearCart() {
    totalCartItems = 0;

    // remove all items
    $(".shopping-cart-item").remove();

    // update calculated elements
    $("#shopping-cart-total").text(() => '$' + 0);
    $("#shopping-cart-subtotal").text(() => '$' + 0);
    $("#shopping-cart-delivery-fee").text(() => '$' + 0);
    $("#shopping-cart-sales-tax").text(() => '$' + 0);

    // reset appearances 
    $("#empty-cart").show();
    $(".badge").hide();
}