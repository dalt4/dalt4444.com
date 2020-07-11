<?php

require_once('functions.php');

$page = 'portfolio';

$pageContent = include_template('portfolioPage.php', [
    'page' => $page
]);

$printPage($pageContent, $page);
