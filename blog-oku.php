<?php 
require_once 'header.php';

$blogcek=$db->prepare("SELECT * FROM blog WHERE blog_id=?");
$blogcek->execute([
    $_GET['id']
]);

$blogsorgu=$blogcek->fetch(PDO::FETCH_ASSOC);
if (!isset($_GET['id']) || empty($_GET['id'])) {
    Header("Location: bloglar.php?sayfa=bos");
    exit;
}
?>
<br>
<br>
<div class="container">
<h3 style="color:azure;"><?php echo $blogsorgu['baslik']; ?> </h3>
<p> 
<img style="float: right; width: 400px;" src="resimler/blogresimleri/<?php echo $blogsorgu['resim'];?>" alt="" srcset="">
<?php echo $blogsorgu['detay']; ?> 
</p>
</div>
