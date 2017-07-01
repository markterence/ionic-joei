<?php 
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json");
	$json = json_encode(array('data'=>array('project_name'=>'Joei Espinosa')));
	echo $json;
 ?>