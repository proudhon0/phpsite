<?php require_once 'header.php';
require_once 'adminheader.php';
if (isset($_POST['uyelerkaydet'])) {

    
    $kullaniciek=$db->prepare('INSERT INTO users SET username=:username,sifre=:sifre,yetki=:yetki');
    $kullaniciekle=$kullaniciek->execute(array(
        'username'=>$_POST['kadi'],
        'sifre'=>md5($_POST['sifre']),
        'yetki'=>$_POST['yetki']
    ));
}
if ($kullaniciekle) {
    echo 'oldu';

}
else {
    echo 'olmadi';
}
?>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Main content -->
    <section  class="content">
      <div  class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div  class="row">
        <div style="background-color: #343a40 !important;" class="card card-primary col-md-12">
              <div class="card-header">
                <h3 class="card-title">Üye ekleme</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form method='post'>
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Kullanıcı adı</label>
                    <input  name="kadi" type="text" class="form-control"  placeholder="Kullanıcı adı giriniz">
                  </div>
                  
                  <div class="form-group">
                    <label for="exampleInputPassword1">Kullanıcı Şifre</label>
                    <input  type="text" name="sifre" class="form-control"  placeholder="Şifre giriniz">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Yetki</label>
                    <input  type="text" name="yetki" class="form-control"  placeholder="Şifre giriniz">
                  </div>
                  
                  <div class="card-footer">
                  <button name="uyelerkaydet" type="submit" class="btn btn-primary">Gonder</button>
                </div>
                </form>
         </div>
        
    </section>
   
  </div>
