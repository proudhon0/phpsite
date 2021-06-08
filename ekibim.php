<?php 
require_once 'header.php';
    $ekipcek=$db->query("SELECT * FROM ekip ")->fetchAll(PDO::FETCH_ASSOC);
?>
