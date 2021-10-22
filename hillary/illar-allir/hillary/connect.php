<?php
    $host = 'localhost';
    $dbname = 'alex';
    $user = "root";
    $pass ="";

    try{
        $db = new PDO("mysql:host=$host;dbname=$dbname",$user,$pass);
        $db->setAttribute(PDO ::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        echo "ection successful";
    }
    catch(PDOException $e){
        echo "unable to ect".$e->getmessage();
    }
    ?>