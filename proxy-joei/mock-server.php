<?php 
	//header("Allow-From-Origin: *");
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json");
	$json = json_encode(array('message'=>'This is CORS'));
	echo $json;
 ?>