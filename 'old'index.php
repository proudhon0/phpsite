<?php
require_once 'header.php';

?>

<body>

    
<div class="container">

<h3 class="baslik">Web Yolculuğu - Web hakkında herşey</h3>

    <br>
    <?php 
    $blogon=$db->query('SELECT * FROM blog where onecikan=1')->fetchAll(PDO::FETCH_ASSOC)
    ?>
    <h4 style="text-align: center;">Öne Çıkanlar</h4>
    <?php foreach ($blogon as $key => $value) { ?>
    <a style="text-decoration: none;" href="blog-oku.php?id=<?php echo $value['blog_id']; ?>"><h3 ><?php echo $value ['baslik'] ?></h3></a>
   <?php } ?>
   


</div>
</body>


</html>