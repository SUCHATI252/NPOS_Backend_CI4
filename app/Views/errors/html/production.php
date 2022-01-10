<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="robots" content="noindex">

	<title>Whoops!</title>

	<style type="text/css">
		<?= preg_replace('#[\r\n\t ]+#', ' ', file_get_contents(__DIR__ . DIRECTORY_SEPARATOR . 'debug.css')) ?>
	</style>
</head>
<body>

	<div class="container text-center">

		<h1 class="headline">Whoops!</h1>
		<p>Message:  <?php echo $message; ?></p>
		<p>Filename: <?php echo $file; ?></p>
		<p>Line Number: <?php echo $line; ?></p>
	</div>

</body>

</html>
