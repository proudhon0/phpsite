<!doctype html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>Web Yolculuğu</title>
    
</head>
<body class="dark">

<?php require_once 'header.php'; ?>

<main class="main">

           
                <div class="content">
        <div class="content-inner">
<h2>Makaleler</h2>

<div class="articles">
<?php foreach ($blogcek as $key => $value) {?> 
                      
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
</html>

