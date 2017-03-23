<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Adventure Lookup</title>

    <link rel="stylesheet" href="css/app.css"/>
    <script type="text/javascript" src="js/commons.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
</head>
<body>
    @include('layout.navbar')
    @include($template)
</body>
</html>
