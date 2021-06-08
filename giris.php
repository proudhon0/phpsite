<?php require_once 'header.php';
if (isset($_SESSION['giris'])) {
    Header('Location: profil.php');
}

?>
  <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>
    <br>
    <br>
<main class="form-signin">
  <form method="post">
    <h1 class="h3 mb-3 fw-normal">Yazar Portalı</h1>

    <div class="form-floating">
      <input name="kadi" type="text" class="form-control" id="floatingInput" placeholder="Kullanıcı adınızı giriniz">
      <label for="floatingInput">Kullanıcı Adı</label>
    </div>
    <div class="form-floating">
      <input name="pass" type="password" class="form-control" id="floatingPassword" placeholder="Şifrenizi giriniz">
      <label for="floatingPassword">Şifre</label>
    </div>
    <button name="giris" class="w-100 btn btn-lg btn-primary" type="submit">Giriş</button>

  </form>
</main>