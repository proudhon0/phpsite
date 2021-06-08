<?php 
    require_once 'header.php';
    switch ($_GET['sayfa']) {
      case 'giris':
        include 'giris.php';
        break;
      
      default:
        # code...
        break;
    }
if (isset($_POST['giris'])) {
  $kadi=$_POST['kadi']; // kullanıcı adımınızı çektik ve htmlspecialchars ile xss'e karşı güvenlik oluşturduk
  $sifre=$_POST['pass'];// şifremizi çektik ve htmlspecialchars ile xss'e karşı güvenlik oluşturduk
  $sifreguclu=md5($sifre); // sifremizi md5 ile hashledik


  $kullanicisor=$db->prepare("SELECT * from users where username=:username and sifre=:sifre"); // değerlerimizi sqlden seçtik
  $kullanicisor->execute(array(
  'username'=>$kadi, // kullanıcı admımızı execute ettik
  'sifre'=>$sifreguclu
));
  $var=$kullanicisor->rowCount(); //kullanici sorgusu yaptık rowCount * eğer uyuştuğu taktirde 1 basar  *
 


if ($var>0) { // yukarıda verdiğimiz rowCount() var değerimizi kotnrol ettik eğer 0 dan büyükse yani 1'se işlemlerimizi yaptık
    $_SESSION['giris']=$kadi;
    Header("Location:profil?durum=hosgeldin");
  
  
  
  
}
else{
  Header("Location:../index?durum=hata");
}
}
?>
<body class="dark">

<?php require_once 'header.php'; ?>

<main class="main">

           
                <div class="content">
        <div class="content-inner">
<h2 style="color: white;">Öne Çıkarılanlar</h2>
<div class="articles">
<?php foreach ($blogon as $key => $value) {?> 
                      
        <a style="text-decoration: none;" href="blog-oku-<?=seo($value['baslik']).'-'.$value['blog_id']?>" class="article" data-ajax>
                <h4>
                    <div style="background-color: #4f5b93;"
                         class="cat"><?php echo $value['baslik']; ?></div>
                    <div>
                                        <?php echo $value['baslik']; ?>                    
                    </div>
                </h4>
                <div class="user">
                    <img src="" alt="">
                    <div class="user-inner">
                        <div class="name"><?php echo $value['gonderen_kadi']; ?></div>
                            <div class="date"><?php $tarih1= new DateTime($value['tarih']);
                            $tarih2= new DateTime(date('Y-m-d H:i:s'));
                            $interval= $tarih1->diff($tarih2);
                            $saataralik=$interval->format('%a gün öne');
                            echo $saataralik;
                            ?></div>
                                            </div>
                                            
                </div>
            </a>
            
            <?php }?>
		
        </div>
    
    </div>

</div>
</div>
</main>




</body>