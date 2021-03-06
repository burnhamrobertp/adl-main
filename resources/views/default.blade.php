<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Adventure Lookup</title>

    <script src="https://use.fontawesome.com/fe7d8161a9.js"></script>
    <script type="text/javascript" src="/js/promise-done-7.0.4.min.js"></script>
    <script>
        window.contributorTypes = {!! $contributorTypes !!};
        window.creatureTypes = {!! $creatureTypes !!};
        window.editions = {!! $editions !!};
        window.moduleLengths = {!! $moduleLengths !!};
        window.publishers = {!! $publishers !!}
        window.settings = {!! $settings !!};
    </script>
</head>
<body>

<div id="root"></div>

<script type="text/javascript" src="/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/commons.js"></script>
<script type="text/javascript" src="/js/app.js"></script>

</body>
</html>
