$(function(){
    if(localStorage.length > 0) {
        $("#modal").show();
        loadFromCart();
    }
});


function loadFromCart(){
    var data = JSON.parse(localStorage.getItem('myCart'));
    var bodyDOM = '';
    bodyDOM += `
        <div class="row">
            <div class="cart-img"><img src="${data[0].img}" alt="카트"></div>
            <ul class="cart-text">
                <li class="cart-title">
                    <a href="#">
                        <p>${data[0].cate}</p>
                    </a>
                </li>
                <li class="info">
                    <p>${data[0].title}</p>
                    <p class="info2">${data[0].addr}</p>
                </li>
            </ul>
            <div class="cancel"><a href="#"><i class="fa-solid fa-xmark"></i></a></div>
        </div>
    `;
    bodyDOM += `
        <div class="row">
            <div class="cart-img"><img src="${data[1].img}" alt="카트"></div>
            <ul class="cart-text">
                <li class="cart-title">
                    <a href="#">
                        <p>${data[1].cate}</p>
                    </a>
                </li>
                <li class="info">
                    <p>${data[1].title}</p>
                    <p class="info2">${data[1].addr}</p>
                </li>
            </ul>
            <div class="cancel"><a href="#"><i class="fa-solid fa-xmark"></i></a></div>
        </div>
    `;
    bodyDOM += `
        <div class="row">
            <div class="cart-img"><img src="${data[1].img}" alt="카트"></div>
            <ul class="cart-text">
                <li class="cart-title">
                    <a href="#">
                        <p>${data[1].cate}</p>
                    </a>
                </li>
                <li class="info">
                    <p>${data[1].title}</p>
                    <p class="info2">${data[1].addr}</p>
                </li>
            </ul>
            <div class="cancel"><a href="#"><i class="fa-solid fa-xmark"></i></a></div>
        </div>
    `;
    
    $("#cart-body").html(bodyDOM);
}

var dateObj = [];
                $(function(){
                    $(".dong > li > a").click(function(e){
                        e.preventDefault();
                        var img = $(this).children("img").attr("src");
                        var title = $(this).children("img").attr("alt");
                        var cate = $(this).children("img").attr("data-cate");
                        var addr = $(this).children("img").attr("data-addr");
                        //console.log(typeof img, typeof title, typeof cate, typeof desc);                       
                        saveToCart(img, cate, title, addr);
                        var choice = confirm("item in cart, showing cart?")
                        choice ? $("#modal").show() : $("#modal").hide();
                    })
                })
                function saveToCart(img, cate, title, addr) {
                    dateObj.push({
                        img,
                        cate,
                        title,
                        addr
                    })
                    localStorage.setItem('myCart', JSON.stringify(dateObj));
                }