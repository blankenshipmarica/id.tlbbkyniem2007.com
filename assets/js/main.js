
class MyHead extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `<link href="/assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"><link href="/assets/css/sb-admin-2.min.css" rel="stylesheet">`;
      }
    }
 customElements.define("my-head", MyHead);
  
  class MySidebar extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `

     <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" style=" background-color: #78160f; ">

            

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Tài khoản</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

       
			 <li class="nav-item active" style=" background: #b2241a; ">
                <a class="nav-link"  >
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>   Quản lý tài khoản</span></a>
            </li>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="/index.html" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Thông tin tài khoản</span>
                </a>
               
            </li>
			<li class="nav-item">
                <a class="nav-link collapsed" href="/change-email.html" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Đổi địa chỉ Email</span>
                </a>
               
            </li>
             <li class="nav-item">
                <a class="nav-link collapsed" href="/change-password-game.html" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Đổi mật khẩu</span>
                </a>
               
            </li>
			<li class="nav-item">
                <a class="nav-link collapsed" href="/change-password2.html" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Đổi mật khẩu Cấp 2</span>
                </a>
               
            </li>
 
           

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
           <li class="nav-item active" style=" background: #b2241a; ">
                <a class="nav-link"  >
                    <i class="fas fa-money-bill fa-cog"></i>
                    <span>Nạp bạc</span></a>
            </li>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="/bank.html" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Nạp qua chuyển khoản Bank</span>
                </a>
                 <li class="nav-item">
                <a class="nav-link collapsed" href="/history-bank.html" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Lịch sử chuyển khoản</span>
                </a>
                 
            </li>
            </li>
               <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="/card.html" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Nạp thẻ cào</span>
                </a>
                 <li class="nav-item">
                <a class="nav-link collapsed" href="/history-card.html" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Lịch sử nạp thẻ</span>
                </a>
                 
            </li>
            </li>
              

            

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">
 <!-- Heading -->
             <li class="nav-item active" style=" background: #b2241a; ">
                <a class="nav-link"  >
                    <i class="fas fa-money-bill fa-cog"></i>
                    <span>Chuyển bạc vào game</span></a>
            </li>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="/send-money-to-game.html" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-money-bill fa-cog"></i>
                    <span>Chuyển bạc vào game</span>
                </a>
                 
            </li>
             
			<li class="nav-item">
                <a class="nav-link collapsed" href="/history-send-money-to-game.html" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Lịch sử chuyển bạc</span>
                </a>
                 
            </li>

            

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

             <li class="nav-item active">
                <a class="nav-link" onclick="logout()" href="#logout" >
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Đăng xuất</span></a>
            </li>

        </ul>
        <!-- End of Sidebar -->

		
		`;
      }
    }
 customElements.define("my-sidebar", MySidebar);
 

  class MyHeader extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `

<div id="check_login_off" style="display: block;">
                 <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" >
                 <ul class="navbar-nav ml-auto">
                        <!-- Nav Item - Messages -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a href="/" class=""><img src="assets/img/logo.png?v=1" alt="logo" style="height: 90px;"></a>
                        </li>
					 
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="/"  >
                              Trang chủ
                            </a>
                        </li>
						 <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="/login.html"  >
                            Đăng nhập
                            </a>
                        </li>
						 <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="/register.html"  >
                              Đăng ký
                            </a>
                        </li> 
						<li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="/"  >
                              Version : <span id="version"></span>
                            </a>
                        </li> 
                    </ul>
                </nav>
                 </div>
				 <div id="check_login_on" style="display: none;">
                 <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" >
                  
<ul class="navbar-nav ml-auto">
                        <!-- Nav Item - Messages -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a href="/" class=""><img src="assets/img/logo.png?v=1" alt="logo" style="height: 90px;"></a>
                        </li>
					 
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle"   >
                              <i class="fas fa-user fa-cog"> </i>&nbsp;<span id="name"></span>
                            </a>
							
                        </li>
						  <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle"   >
                              <i class="fas fa-money-bill fa-cog"> </i>&nbsp; Bạc Web &nbsp;<span id="coin"></span>
                            </a>
							
                        </li>
						  <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle"   >
                              <i class="fas fa-money-bill fa-cog"> </i>&nbsp; Bạc Game &nbsp;<span id="point"></span>
                            </a>
							
                        </li>
						  <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle"   >
                              <i class="fas fa-money-bill fa-cog"> </i>&nbsp; Bạc Game Quy Đổi &nbsp;<span id="point_quy_doi"></span>
                            </a>
							
                        </li>
						 
						 
						
                        
						 
</ul>

</nav>
				
</div>

		
		`;
      }
    }
 customElements.define("my-header", MyHeader);
 
$("#check_login_off").hide();
$("#check_login_on").show();
const formatter = new Intl.NumberFormat('vi-VN', {maximumSignificantDigits: 3 });
var BASE_URL = 'https://api.tlbbkyniem2007.com/server/api';
// Authen Folder API
var API_AUTHEN = '/user/';
// List API
var AUTHEN_LOGIN = 'login';
var AUTHEN_USER_LIST = 'info';
var AUTHEN_CONFIG = 'config';
var AUTHEN_FORGOT_PASSWORD = 'forgot-password';
var AUTHEN_CHANGE_PASSWORD = 'change-password';
var AUTHEN_CHANGE_EMAIL = 'change-email';
var AUTHEN_CHANGE_PASSWORD_GAME = 'change-password-game';
var AUTHEN_CHANGE_PASSWORD2 = 'change-password2';
var AUTHEN_CARD = 'card';
var AUTHEN_HISTORY_CARD = 'history-card';
var AUTHEN_HISTORY_CALLBACK_CARD = 'callback-card';
var AUTHEN_HISTORY_BANK = 'history-bank';
var AUTHEN_CHANGE_SEND_MONEY_TO_GAME = 'send-money-to-game';
var AUTHEN_CHANGE_HISTORY_SEND_MONEY_TO_GAME = 'history-send-money-to-game';
var AUTHEN_ADMIN_USER = 'admin-user';
var AUTHEN_ADMIN_CONFIG = 'admin-config';
var AUTHEN_ADMIN_ADDCOIN = 'admin-addcoin';
var AUTHEN_ADMIN_OUTCOIN = 'admin-outcoin';
var AUTHEN_GET_NAME = 'admin-getname';
var AUTHEN_GET_NAME_S1 = 'admin-getnames1';
var AUTHEN_ADMIN_SHOW_PROFILE = 'admin-showprofile';
var AUTHEN_ADMIN_FUN = 'admin-fun';
var AUTHEN_ADMIN_SEND_FUN = 'admin-send-fun';
var AUTHEN_ADMIN_SEND_FUN_HISTORY = 'admin-send-fun-history';
axios.get(BASE_URL + API_AUTHEN + AUTHEN_USER_LIST, { headers: { 'Authorization': localStorage.getItem("Authorization")} })
.then(function (response) {
if (response.data.status == 1)
{
//Hien thi danh sach users
 			userList = response.data.userList
 			for (i = 0; i < userList.length; i++) {
 				item = userList[i]
 				var email = item['email'];
 				var emails = email.slice(10);
 				$("#name").html(item['name']);
 				$("#name2").html(item['name']);
 				$("#email").html(emails);
 				$("#created").html(item['created']);
 				$("#updated").html(item['updated']);
 				$("#coin").html((formatter.format(item['coin'])));
 				$("#point").html((formatter.format(item['point'])));
 				$("#coin2").html((formatter.format(item['coin'])));
 				$("#point2").html((formatter.format(item['point'])));
				$("#point_quy_doi").html((formatter.format(item['point'])));
				$("#point_quy_doi2").html((formatter.format(item['point'])));
				$("#tong").html((formatter.format(item['tong'])));
				$("#qr").html('<img src="https://vietqr.co/api/generate/vcb/9969380000/VIETQR.CO/0/'+item['name']+'?style=2&logo=1&isMask=1&bg=61" >');
				if (item['role'] == "ROLE_ADMIN") {$("#role").show();}
 			}

}
else
{
 window.open('login.html', '_self')
}

})
.catch(function (error) {
  console.log(error);
});
 
//logout
function logout() {
localStorage.removeItem("Authorization")
Swal.fire({
					position: 'top-center',
					icon: 'success',
					title: "Signed out successfully !!!",
					showConfirmButton: false,
					timer: 2000
				})
setTimeout(function() {window.open('login.html', '_self')}, 2000);
}
$("#version").html(localStorage.setItem("Version"));
