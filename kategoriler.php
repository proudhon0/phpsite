<?php require_once 'header.php'; 



if (isset($_GET['id']) && !empty($_GET['id']))  {
    ?>
   <body class="dark">
     
  
   <main class="main">
  
           
<div class="content">
<div class="content-inner">
<h2>Makaleler</h2>

<div class="articles">
<?php foreach ($ozelkategoricek as $key => $value) {?> 
       <a style="text-decoration: none;" href="blog-oku.php?id=<?php echo $value['blog_id']; ?>" class="article" data-ajax>
<h4>
    <div style="background-color: #4f5b93;"
         class="cat"><?php echo $value['baslik']; ?></div>
    <div>
                        <?php echo $value['baslik']; ?>                    
    </div>
</h4>
<div class="user">
    <img src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" alt="">
    <div class="user-inner">
        <div class="name">Umut Yılmaz</div>
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
    
    
<?php 
echo '</body>';

exit;
} 

?>  
  

<br>
<a class="tumyazi">Kategoriler</a>
<hr>
<?php foreach ($kategoricek as $key => $value) { ?>
   <a href="kategoriler.php?id=<?php echo $value['id']; ?>"><li><?php echo $value['adi']; ?></li></a>
<?php }?>
</body>
