<?php require_once "header.php";
require_once "db.php";
?>
<?php 
require_once 'db.php';


if (isset($_GET['id']) and !empty($_GET['id'])) {
    $kullanicisil=$db->prepare('DELETE FROM users WHERE id=:id');
    $kullanicisil->execute(array(
        'id'=>$_GET['id']
    ));
    if ($kullanicisil) {
        Header('Localhost: uye-ekle.php?tamam=tmm');
    }
    elseif (!isset($_GET['id']) and empty($_GET['id'])) {
      Header('Location: uyeler.php?geçersiz=id');
    }
    
    
    else {
        echo 'olmadı';
    }
 } ?>
<div class="content-wrapper">
    <section class="content">
        <div class="container-fluid">
           
<div class="row">
          <div style="background-color: #343a40 !important;"  class="col-12">
            <div style="background-color: #343a40 !important;" class="card">
              <div  class="card-header">
                <h3 style="color:white;" class="card-title">Üyeler</h3>
              </div>
              <a href="uye-ekle.php"><button style="float:right;" type="submit" class="btn btn-success">Yeni Kullanıcı Ekle</button></a>  
              <div class="card-body table-responsive p-0">
              
              <table class="table table-hover text-nowrap">
                  
                  <thead>
                    <tr>
                      <th>Kullanıcı Numara</th>
                      <th>Kullanıcı adı</th>
                      <th>Yetki</th>
                      <th>Katıldığı tarih</th>
                      <th>Düzenle</th>
                      <th>Sil</th>
                      
                    </tr>
                  </thead>
                  <tbody>
<?php 
$kullanicicek=$db->query('SELECT * FROM users')->fetchAll(PDO::FETCH_ASSOC);
foreach ($kullanicicek as $key => $value) {
    # code...
  $yetkili=$value['yetki'];
    
?>
                  <tr>
                      <td><?php echo $value['id']?></td>
                      <td><?php echo $value['username']?></td>
                      <td><span class="tag tag-danger"><?php if ($yetkili==1) {echo 'admin';} else{echo 'moderatör';}?></span></td>
                      <td><?php echo $value['vakit']?></td>
                      <td><button class="btn btn-info"type="submit">Düzenle</button></td>
                      <td><a href="uyeler.php?kullamicisil&id=<?php echo $value['id']; ?>"><button class="btn btn-danger"type="submit">Sil</button></a></a></td>
                      
                    </tr>
                <?php } ?>
                
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        </div>
    </section>
</div>

<?php require_once "footer.php";
 ?>