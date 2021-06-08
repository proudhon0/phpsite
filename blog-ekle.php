<?php require_once 'header.php';
require_once 'adminheader.php';



if (isset($_POST['blogkaydet'])) {
 if(is_array($_POST['kat'])){
$kat=implode(',',$_POST['kat']);
         }
$uploads_dir='resimler/blogresimleri'; // yükleyeciğimiz yer
$tmp_name= $_FILES['blogresim'] ["tmp_name"]; // gelen değeri alıyoruz
$name=$_FILES['blogresim'] ["name"];

$sayi=rand(1,99999999);//burada benzersiz bir sayhı oluşturmak için random sayı attık  (fonksiyon buna dahil)
$sayi2=rand(1,99999999);
$sayi3=rand(1000,2521674); 
$sayilar=$sayi.$sayi2.$sayi3; // sayilari birlestirdik
$resimyolu=$sayilar.$name; // burda sayilar ve name ' imizi birleştirdik
move_uploaded_file($tmp_name,"$uploads_dir/$sayilar$name"); // klasorumuze yukleme islemini tamamladık
$blogk=$db->prepare('INSERT INTO blog SET
    baslik=:baslik,
    detay=:detay,
    kategori_id=:kategori_id,
    resim=:resim,
    gonderen_id=:gonderen_id,
    gonderen_kadi=:gonderen_kadi
    ');
    $insert=$blogk->execute(array(
        'baslik'=>$_POST['baslik'],
        'detay'=>$_POST['detay'],
        'kategori_id'=>$kat,
        'gonderen_id'=>$_POST['gonderenid'],
        'gonderen_kadi'=>$_SESSION['giris'],
        'resim'=>$resimyolu
    ));
if ($insert) {
    Header('Location: blog-ekle.php?hata=yok');
}
else {
    Header('Location: blog-ekle.php?hata=var');
}

}

?>
  <body class="dark">
  <div style="background-color: #343a40 !important;" class="content-wrapper">
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div style="background-color: #343a40 !important;" class="row">
        <div style="background-color: #343a40 !important;" class="card card-primary col-md-12">
              <div style="background-color: #343a40 !important;" class="card-header">
                <h3 class="card-title">Genel ayarlar</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form method='post' enctype="multipart/form-data">
                <div class="card-body">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputPassword1">Resim</label>
                    <input  type="file" name="blogresim" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Blog Başlık</label>
                    <input value="" name="baslik" type="text" class="form-control"  placeholder="Başlığı girin">
                  </div>
                    <div>
                    <label for="detay">Blog Detay</label>
                    <textarea value="" class="ckeditor" name="detay" id="editor1"></textarea>
                  </div>
                  <div class="form-group">
                  <label>Öne Çıkarma</label>
                  <select class="form-control select2 select2-danger" multiple name="kat[]" data-dropdown-css-class="select2-danger" style="width: 100%;">
                  <?php foreach ($kategoricek as $key => $value) { ?>
    <option style="color: black;" value="<?php echo $value['id'] ?>"><?php echo $value['adi'] ?></option>
    <?php }?>                 
     </select>
                </div>
                <input name="gonderenid" type="hidden" value="<?php echo $kullanicicek['id']; ?>">
                  <div class="card-footer">
                  <button name="blogkaydet" type="submit" class="btn btn-primary">Gonder</button>
                </div>
                 </div>
        
    </section>
   </form>
  </div>
  </body>

