<?php 
require_once 'db.php';

class islemler
{
    

    function veriCek($tablo,$db,$where=null){
        $vericeksql=$db->query('SELECT * FROM '.$tablo.' '.$where.' ')->fetchAll(PDO::FETCH_ASSOC);
        return $vericeksql;
        
    
    }
    function insertİslem($db,$tablo,$where=null,$insert) {
        $veriyuklesql=$db->prepare("SELECT * FROM '.$tablo.' '.$where.'");
        $veriyuklesql->execute($insert);
        return $veriyuklesql;
    }   








}

$islem=new islemler;

#print_r($kullanicicek=$islem->veriCek('users',$db));


$islem->insertİslem($db,'users','SET username=:username, sifre=:sifre, yetki=:yetki',['username'=>'anabaci54','sifre'=>'313131','yetki'=>1]);
