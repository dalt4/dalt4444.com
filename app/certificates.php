<?php

require_once('functions.php');

$page = 'certificates';

$pageContent = include_template('certificatePage.php', [
    'page' => $page
]);

$printPage($pageContent, $page);
