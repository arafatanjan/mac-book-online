document.getElementById("memory-first").addEventListener('click', function () {
    let extraMemory = document.getElementById("extra-memory");
    //const extraMemory = extraMemoyText;
    extraMemory.innerText = 0;
    let extraMemoryText = extraMemory.innerText;
    let extraMemoryInteger = parseInt("extraMemory.innerText");
    calculation();

});
document.getElementById("memory-second").addEventListener('click', function () {
    let extraMemory = document.getElementById("extra-memory");
    // const memoryFirstText = extraMemoy.innertext;
    // const memoryFirst = parseInt(memoryFirstText);
    extraMemory.innerText = 180;
    let extraMemoryText = extraMemory.innerText;
    let extraMemoryInteger = parseInt('xtraMemory.innerText');
    calculation();

});

document.getElementById("storage-first").addEventListener('click', function () {
    let extraStorage = document.getElementById("extra-storage");
    extraStorage.innerText = 0;
    calculation();
});
document.getElementById("storage-second").addEventListener('click', function () {
    let extraStorage = document.getElementById("extra-storage");
    extraStorage.innerText = 100;
    calculation();
});
document.getElementById("storage-third").addEventListener('click', function () {
    let extraStorage = document.getElementById("extra-storage");
    extraStorage.innerText = 180;
    calculation();
});

document.getElementById("delivery-first").addEventListener('click', function () {
    let extraDelivery = document.getElementById("extra-delivery");
    extraDelivery.innerText = 0;
    calculation();
});
document.getElementById("delivery-second").addEventListener('click', function () {
    let extraDelivery = document.getElementById("extra-delivery");
    extraDelivery.innerText = 20;
    calculation();


});

document.getElementById("delivery-second").addEventListener('click', function () {
    let cuponCode = document.getElementById("cupon-code");
    let cuponText = cuponCode.vale;
    calculation();


});
function getInputValue() {
    let extraMemory = document.getElementById("extra-memory");
    let extraMemoryText = extraMemory.innerText;
    let extraMemoryy = parseInt(extraMemoryText);
    return extraMemoryy;
};
function getInputValue1() {
    let extraMemory = document.getElementById("extra-storage");
    let extraMemoryText = extraMemory.innerText;
    let extraMemoryy = parseInt(extraMemoryText);
    return extraMemoryy;
}
function getInputValue2() {
    let extraMemory = document.getElementById("extra-delivery");
    let extraMemoryText = extraMemory.innerText;
    let extraMemoryy = parseInt(extraMemoryText);
    return extraMemoryy;
}


//.........................calculation......................

function calculation() {
    let bestPrice = 1299;
    let extraMemoryInteger = getInputValue("extra-memory");
    let extraStorageInteger = getInputValue1("extra-storage");
    let extraDeliveryInteger = getInputValue2("extra-delivery");
    let discountprice = document.getElementById("discount-price");
    let k = document.getElementById("total-price");


    let totalPrice = bestPrice + extraMemoryInteger + extraStorageInteger + extraDeliveryInteger;

    k.innerText = totalPrice;
    discountprice.innerText = totalPrice;
    let y = parseInt(discountprice.innerText)



}

//......................Applying promo code..............................

document.getElementById("login-submit").addEventListener('click', function () {

    let discountprice = document.getElementById("discount-price");
    let m = parseFloat(discountprice.innerText);
    let cuponCode = document.getElementById("cupon-code");
    let j = cuponCode.value;

    if (j == 'stevekakku') {
        discountprice.innerText = m * .80;
        // else (
        //     discountprice.innerText = m;
        // )

    }

});
