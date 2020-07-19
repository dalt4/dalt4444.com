<?php

require_once('functions.php');

$page = 'about';

$pageContent = include_template('aboutPage.php', [
    'page' => $page
]);

$printPage($pageContent, $page);
