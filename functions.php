<?php 
/*
function sta($database,$tablo,$other=null,$verilendeger=null)
{
    $arg=$database->query('SELECT * FROM '.$tablo.' '.$other.''.$verilendeger.'')->fetchAll(PDO::FETCH_ASSOC);
    

    return $arg;
}

$funk1=sta($db,'blog','WHERE blog_id=','1');
function cube($n)
{
    return ($n * $n * $n);
}

$a = [1, 2, 3, 4, 5];
$b = array_map('cube', $a);
print_r($b);
*/
/*
function formFilter($deger){
    if (is_array($deger)) {
        foreach ($deger as $key => $value) {
           if(!is_array($value)){
                $key[$value]=htmlspecialchars(strip_tags(urldecode(addslashes(stripslashes(stripslashes(trim(htmlspecialchars_decode($value))))))));
           }
           else{
               $deger[$key]= formFilter($value);
           }
           
        }
        
    }
    else{
        $deger=htmlspecialchars(strip_tags(urldecode(addslashes(stripslashes(stripslashes(trim(htmlspecialchars_decode($deger)))))))); 
     }
    return $deger;
}

$amk=[
    'ananı',
    'sikim'
];

foreach ($amk as $key => $value) {
    echo $value;
}

*/
function veriTemizle($mVar){
    if(is_array($mVar)){
        foreach($mVar as $gVal => $gVar){
            if(!is_array($gVar)){
                    $mVar[$gVal] = htmlspecialchars(strip_tags(urldecode(addslashes(stripslashes(stripslashes(trim(htmlspecialchars_decode($gVar))))))));  // -> Dizi olmadığını fark edip temizledik.
            }else{
                    $mVar[$gVal] = veriTemizle($gVar);
            }
        }
    }else{
        $mVar = htmlspecialchars(strip_tags(urldecode(addslashes(stripslashes(stripslashes(trim(htmlspecialchars_decode($mVar)))))))); // -> Dizi olmadığını fark edip temizledik.
    }
    return $mVar;
 
 
}


$_GET = veriTemizle($_GET); // -> GET verilerini temizledik.
$_POST = veriTemizle($_POST); // -> POST verilerini temizledik.
@$_SESSION = veriTemizle($_SESSION); // -> SESSION verilerini temizledik.
$_COOKIE = veriTemizle($_COOKIE); // -> COOKIE verilerini temizledik.


/*
$arr=
[
    'amadam'=>'osur',
    'adamya geld adam'=> array(
        'yoo gelmedi'=>'osur',
        'geldi' =>'osur'
    ),
    'sakın'=>array(
        'arama'=>'osur',
        'beni'=>'osur',
        'bidaha'
    )
];

function arrtemiz($deger){
    foreach ($deger as $key => $value) {
        if (is_array($value)) {
            $sonuc=arrtemiz($value);
            return $sonuc;
           
        }
        else {
            echo $value;
            if (is_array($key)) {
                $sonuc=arrtemiz($value);
            }
            echo '<br>';
        }
    }
    
}
/*
foreach ($arr as $key => $value) {
    echo $key;
    echo '<br>';
    
}


$yeniarr=arrtemiz($arr);
echo $yeniarr;
*/
function seo($text) {
    $find = array('Ç', 'Ş', 'Ğ', 'Ü', 'İ', 'Ö', 'ç', 'ş', 'ğ', 'ü', 'ö', 'ı', '+', '#');
    $replace = array('c', 's', 'g', 'u', 'i', 'o', 'c', 's', 'g', 'u', 'o', 'i', 'plus', 'sharp');
    $text = strtolower(str_replace($find, $replace, $text));
    $text = preg_replace("@[^A-Za-z0-9\-_\.\+]@i", ' ', $text);
    $text = trim(preg_replace('/\s+/', ' ', $text));
    $text = str_replace(' ', '-', $text);

    return $text;
}