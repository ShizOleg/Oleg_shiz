document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, options);
});

    let button1 = document.getElementById("btn1");
    let button2 = document.getElementById("btn2");
    let button3 = document.getElementById("btn3");
    let button4 = document.getElementById("btn4");
    let button5 = document.getElementById("btn5");

    function clk() {
        document.getElementById('active').checked = false;

    }
    button1.addEventListener("click", clk);
    button2.addEventListener("click", clk);
    button3.addEventListener("click", clk);
    button4.addEventListener("click", clk);
    button5.addEventListener("click", clk);