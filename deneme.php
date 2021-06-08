<!doctype html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://prototurk.com/public/css/style.css?v=15">
    <title>Makaleler | 𝗣𝗥𝗢𝗧𝗢𝗧𝗨𝗥𝗞</title>
                <link rel="canonical" href="https://prototurk.com/makaleler">
            <meta name="google-site-verification" content="WoaDtlEHeLvB62WhqJZPiPGcQbTUMn6kYSRl1L8DVK8"/>
    <script>
        const PT_API = 'https://prototurk.com/api';
        const SITE_URL = 'https://prototurk.com/';
    </script>
    <link rel="manifest" href="https://prototurk.com/manifest.json">
    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('https://prototurk.com/sw.js').then(function (registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function (err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
            });
        }
    </script>
    <style>
        .main aside.sidebar.mini ul li a .icon img {
            height: 24px;
        }
    </style>
</head>
<body class="dark">

<?php require_once 'header.php'; ?>

<main class="main">

           
                <div class="content">
        <div class="content-inner">
<h2>Makaleler</h2>

<div class="articles">
<?php foreach ($blogcek as $key => $value) {?> 
                       <a href="blog-oku.php?id=<?php echo $value['blog_id']; ?>" class="article" data-ajax>
                <h4>
                    <div style="background-color: #4f5b93;"
                         class="cat"><?php echo $value['baslik']; ?></div>
                    <div>
                                        <?php echo $value['baslik']; ?>                    
                    </div>
                </h4>
                <div class="user">
                    <img src="https://www.gravatar.com/avatar/8b0987af0a615d1535491eca8c1362e4?s=80&d=mp&r=g" alt="">
                    <div class="user-inner">
                        <div class="name">tayfunerbilen</div>
                        <div class="date">3 gün önce</div>
                    </div>
                </div>
                
            </a>
            <?php }?>
		</div>
    
    </div>

</div>
</div>
</main>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-21806595-2"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-21806595-2');
</script>
<script src="https://prototurk.com/public/js/bundle.min.js?v=19"></script>
<script>
    $(function () {

        let search = $("#search-input").autocomplete({
            source: function (request, response) {
				                request.type = 'article';
                                $.post("https://prototurk.com/api/autocomplete", request, response, 'json');
            },
            minLength: 2,
            position: {
                my: "left+1 top-4",
            },
            select: function (event, ui) {
                window.location.href = ui.item.buy_url;
            }
        });
        search.autocomplete('widget').addClass('article-search-box');
        search.data('ui-autocomplete')._renderItem = function (ul, item) {
            let li = $('<li>');
            let html = `<a href="${item.url}">
	<span class="title">${item.title}</span>
	<span class="category">${item.category}</span>
</a>`;
            li.html(html);
            return li.appendTo(ul);
        };

    });
</script>

</body>
</html>
<script>
    $('#video-article').on('change', function (e) {
        var data = $('#article-form').serialize();
        request('nasil-yapilir?' + data + '&cat=Array', '.content');
    });
</script>

