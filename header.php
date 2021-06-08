
<?php 
error_reporting(0);
require_once 'db.php';
require_once 'functions.php';
ob_start();
session_start();
$kullanicisor=$db->prepare("SELECT * from users INNER JOIN blog where username=:username"); // değerlerimizi sqlden seçtik
$kullanicisor->execute(array(
'username'=>$_SESSION['giris']
));
$kullanicicek=$kullanicisor->fetch(PDO::FETCH_ASSOC);
$kategoricek=$db->query("SELECT * FROM kategori")->fetchAll(PDO::FETCH_ASSOC);
$ozelkategoricek=$db->query('SELECT * FROM blog INNER JOIN kategori ON kategori.id=blog.kategori_id WHERE FIND_IN_SET("'.@$_GET['id'].'",blog.kategori_id)')->fetchAll(PDO::FETCH_ASSOC);

$blogon=$db->query('SELECT * FROM blog where onecikan=1 LIMIT 0,10')->fetchAll(PDO::FETCH_ASSOC)

?> 
<style>
*{
  color: white;
  
}
.main aside.sidebar.mini ul li a .icon img {
            height: 24px;
        }
</style>
<?php 
$sql= 'SELECT * FROM blog';
if (isset($_GET['ara'])) {
    $sql .= ' WHERE baslik LIKE "%' .$_GET['ara']. '%"';
}
$sql .=' ORDER BY blog_id DESC';
$blogcek=$db->query($sql)->fetchAll(PDO::FETCH_ASSOC);
// hatalı
if (isset($_SESSION['giris'])) {
$prosql= 'SELECT * FROM blog WHERE gonderen_id='.$kullanicicek['id'].' ORDER BY blog_id DESC';
$profilblogcek=$db->query($prosql)->fetchAll(PDO::FETCH_ASSOC);
}    
    ?>
<!doctype html>
<html lang="en">
  <body style="background-color: #343a40 !important;">
  <header style="background-color: #343a40 !important;">
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/styleproto.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">



 
    <title></title>
  
  <nav  class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Web Yolculuğu</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" id="1" href="index">Anasayfa <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="2" href="bloglar">Bloglar</a>
      </li>
      <?php if(!$_SESSION['giris']){ ?>
      <li class="nav-item">
        <a class="nav-link" href="index?sayfa=giris">Giriş Yap</a>
      </li>
      <?php } ?>
      <?php if($_SESSION['giris']){ ?>
      <li class="nav-item">
        <a class="nav-link" href="profil">Profil</a>
      </li>
      <?php } ?>
      <?php if ($kullanicicek['yetki']==1) {?>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Admin Paneli
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="blog-ekle">Blog Yaz</a>
          <a class="dropdown-item" href="blog-sil">Blog Sil</a>
          <a class="dropdown-item" href="#">Blog Düzenle</a>
          <a class="dropdown-item" href="uyeler">Üye ekle</a>          
          <a class="dropdown-item" href="logout">Çıkış Yap</a>
      </li>
      <?php } ?>
    </ul>
    
    <form method="get" class="form-inline my-2 my-lg-0">
      <input value="<?php if (isset($_GET['ara'])) {echo $_GET['ara']; }?>" name="ara" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>

    <script src="js/proto.js"></script>
    <script src="https://cdn.ckeditor.com/4.16.1/standard/ckeditor.js"></script>
  </header>

</html>