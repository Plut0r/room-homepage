let mobile_desktop = document.querySelector(":root");
let desktop_mobile = getComputedStyle(mobile_desktop);

 let datas = [{
     header: "Discover innovative ways to decorate",
     content: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
     imgdesktop: "./images/desktop-image-hero-1.jpg",
     imgmobile: "./images/mobiile-image-hero-1.jpg",
     page: 1
 },
    {
    header: "We are available all across the globe",
    content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest to you using our store locator. Any questions? Don't hesitate to contact us today.",
    imgdesktop: './images/desktop-image-hero-2.jpg',
    imgmobile: './images/mobile-image-hero-2.jpg',
    page: 2
 },
 {
    header: "Manufactured with the best materials",
    content: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    imgdesktop: "./images/desktop-image-hero-3.jpg",
    imgmobile: "./images/mobile-image-hero-3.jpg",
    page: 3
 }
 ];

 let currentPage = 1;
 const maxPage = datas.length;
 const primary_header = document.querySelector(".discover-section-a .h1");
 const primary_content = document.querySelector(".discover-section-a .p");
 const primary_image = document.querySelector(".section-1");

 const count = (str) => {
    if (str === '+') {
        currentPage++;
        if( currentPage > maxPage) {
            currentPage = 1;
        }
    } else if (str === "-") {
        currentPage--;
        if (currentPage < 1) {
            currentPage = maxPage;
        }
    }
    renderWebsite();
 }

 const renderWebsite = () => {
    datas.forEach(data => {
        if(data.page == currentPage) {
            primary_header.innerText = data.header;
            primary_content.innerText = data.content;
            updateimg(data);
        }
    })
 };

 const updateimg = (data) => {
    if(desktop_mobile.getPropertyValue("--mobile-responsive") === "mobile") {
        primary_image.style.backgroundImage = `url(${data.imgmobile})`;
    } else {
        primary_image.style.backgroundImage = `url(${data.imgdesktop})`;
    }
 };

 updateimg(datas[0]);

 window.addEventListener("resize", () => {
    datas.map(data => updateimg(data))
 });

 const nav = document.querySelector("nav");
 const navToggle = document.querySelector(".mobile-nav-toggle");
 const close = document.querySelector(".close");


 navToggle.addEventListener("click", () => {
    nav.style.display = "block";
    document.querySelector(".flex").style.display = "none";
 })

 close.addEventListener("click", () => {
    nav.style.display = "none";
    document.querySelector(".flex").style.display = "flex";
 })

 

 