<?php require_once 'header.php';
$giriss=$kullanicicek['id'];
if (!isset($_SESSION['giris'])) {
    header('Location: index?sayfa=giris');
}

if (isset($_POST['editprofile'])) {
    $profilguncelle=$db->prepare('UPDATE users SET 
    statu=:statu,
    sehir=:sehir
    WHERE id='.$giriss.'
    ');
    $profilguncelle2=$profilguncelle->execute(array(
        'statu'=> $_POST['statu'],
        'sehir'=>$_POST['sehir']
    ));
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Profil</title>
</head>
<body>
  <!-- main -->
  <main class="container">
    <div class="row">
      <div class="col-md-3">
        <!-- edit profile -->
        <div class="panel panel-default">
          <div class="panel-body">
            <h4 style="color:white;">Edit profile</h4>
            <form method="post">
              <div class="form-group">
                <input class="form-control" type="text" name="statu" value="" placeholder="<?php echo $kullanicicek['statu'] ?>">
              </div>
              <div class="form-group">
                <input class="form-control" type="text" name="sehir" placeholder="<?php echo $kullanicicek['sehir'] ?>">
              </div>

              <div class="form-group">
                <input value="Değiştir" class="btn btn-primary" type="submit" name="editprofile">
              </div>
            </form>
          </div>
        </div>
        <!-- ./edit profile -->
      </div>
      <div class="col-md-6">
        <!-- user profile -->
        <div class="media">
          <div class="media-left">
            <img src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" class="media-object" style="width: 128px; height: 128px;">
          </div>
          <div class="media-body">
            <h2 style="color:white;" class="media-heading"><?php echo $kullanicicek['username'] ?></h2>
            <p>Status:<?php echo $kullanicicek['statu'] ?>, Location: <?php echo $kullanicicek['sehir'] ?></p>
          </div>
        </div>
        <!-- user profile -->

        <hr>

        <!-- timeline -->
        <div>
          <!-- post -->
          <?php foreach ($profilblogcek as $key => $value) {
            
          ?>
          <div class="panel panel-default">
            <div class="panel-body">
              <p><?php echo $value['detay']?></p>
            </div>
            <div class="panel-footer">
              <span>posted <?php echo $value['vakit']?></span> 
              <span class="pull-right"><a class="text-danger" href="#">[delete]</a></span>
            </div>
          </div>
          <hr>
          <?php  } ?>
          <!-- ./post -->
        </div>
        <!-- ./timeline -->
      </div>
      <div class="col-md-3">
        <!-- friends -->
        <div class="panel panel-default">
        </div>
        <!-- ./friends -->
      </div>
    </div>
  </main>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/script.js"></script>
</body>
</html>
