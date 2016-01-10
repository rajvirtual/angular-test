<html>
<head>
    <title>Angular 2.0 Application</title>

    <!-- 1. Load libraries -->
    <script src="node_modules/es6-shim/es6-shim.js"></script>
    <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="node_modules/rxjs/bundles/Rx.js"></script>
    <script src="node_modules/angular2/bundles/angular2.dev.js"></script>
    <script src="node_modules/angular2/bundles/http.dev.js"></script>
    <script src="node_modules/angular2/bundles/router.dev.js"></script>
    <!--<script src ="./app/axios.d.ts"></script>-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" media="screen" href="app/styles.css">
    <base href="/">

    <!-- 2. Configure SystemJS -->
    <script>
        System.config({
            packages: {
                app: {
                    format: 'register',
                    defaultExtension: 'js'
                }
            }
        });
        System.import('app/boot')
                .then(null, console.error.bind(console));
    </script>

</head>

<!-- 3. Display the application -->
<body>
<my-app>Loading...</my-app>
</body>

</html>