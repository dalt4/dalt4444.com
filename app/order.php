<?php

require_once('functions.php');

$page = 'order';

$pageContent = include_template('orderPage.php', [
    'page' => $page
]);

$printPage($pageContent, $page);