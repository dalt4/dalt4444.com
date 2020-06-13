<?php

require_once('functions.php');

$pageContent = include_template('mainPage.php', [
    'page' => $page
]);

$printPage($pageContent, $page);