const header = document.getElementById('header');

header.innerHTML = `
<div class="nav-bar ">
<div class="whitesmoke">
    <header class="hideOnMobile">
    <div class="nav-bar-left">
        <div class="jumper"> 
            <a href="../Nike-Landpage/landing_page.html">
                <img src="../Nike-Image/Nike-logo/Jumpman_logo.svg.png" alt="jumpman-logo" height="20">
            </a>   
        </div>
        <div class="converse">
            <img src="../Nike-Image/Nike-logo/Converse-logo.png" alt="container-logo" height="20">
        </div>
    </div>
    <div class="nav-bar-right">
        <ul class="nav-bar-inner">

            <li ><a href="#">Find a Store</a></li>
            <li ><a>|</a></li>                                       
            <li ><a href="#">Help</a></li>
            <li ><a>|</a></li>
            <li ><a href="#">Join Us</a></li>
            <li ><a>|</a></li>
            <li ><a href="#">Sign In</a></li>          
        </ul>
    </div>
    
</header>
</div>

<div class="second-nav-bar">
    <div class="left-nav-bar-nike-logo">
        <a href=""><img src="../Nike-Image/Nike-logo/Logo_NIKE.svg" height="24" width="60"></a>
    </div>
    <div class="center-nav-bar-feature">
        <ul class="center-nav-bar">
            <li class="hideOnMobile"><a href="#">New & Featured</a></li>
            <li class="hideOnMobile"><a href="#">Men</a></li>
            <li id="hideOnMobilewomen"><a href="#">Women</a></li>
            <li id="hideOnMobilekids"><a href="#">Kids</a></li>
            <li id="hideOnMobileAccessories"><a href="#">Accessories</a></li>
            <li id="hideOnMobileSale"><a href="#">Sale</a></li>
            <li class="hide-menu"><a><img src="../Nike-Image/Nike-logo/4092559_search_magnifier_mobile ui_zoom_icon.svg" height="25"></a></li>
            <li class="hide-menu"><a href="#" ><img src="../Nike-Image/Nike-logo/8581237_bag_shopping_shop_cart_ecommerce_icon.png" height="35" width="40"></a></li>
            <li class="hide-menu"><a href=""><?xml version="1.0" ?><svg class="feather feather-user" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></a></li>
            <li onclick=showSidebar() class="hide-menu"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
        </ul>
        <ul class="side-bar" id="hideCloseMenu">
            <li onclick=closeSidebar() ><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> </a></li>
            <li><a href="#">New $ Featured</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Sale</a></li>
        </ul>
    
    </div>
    
    <div class="right-nav-bar-icon-and-searchbar">
        
        <div class="searchbar" >
            <form>
                <button type="submit"><i class="fa fa-Search"
                aria-hidden="true"><img src="../Nike-Image/Nike-logo/4092559_search_magnifier_mobile ui_zoom_icon.svg" height="30"></i></button>
                <input type="text" class="search-input" placeholder="Search">
                
            </form>
        </div>
        <div class="icon">
            <a href="#"><img class="nav-icon" src="../Nike-Image/Nike-logo/211754_heart_icon.png" height="30"></a>
            <a href="#"><img class="nav-icon" src="../Nike-Image/Nike-logo/8581237_bag_shopping_shop_cart_ecommerce_icon.png" height="35" width="40"></a>
        </div>
    </div>
</div>
</div>`