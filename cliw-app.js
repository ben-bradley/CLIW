var	express = require('express'),
		app = express()
		exec = require('child_process').exec;


app.configure(function() {
	app.get('*', function(req, res) { // catch all routes
		if (!req.url.match('favicon')) { // ignore favicon requests
			var cmd = decodeURIComponent(req.url).replace(/^\//,''); // convert the URL encoding & strip off the leading /
			exec(cmd, function(err, stdout, stderr) { // run the command
				if (err) { res.send({ error: err }); } // handle errors
				else if (stdout) { res.send({ stdout: stdout }); } // handle stdout
				else if (stderr) { res.send({ stderr: stderr }); } // handle stderr
				else { res.send({ error: 'no output detected' }); } // handle unknown errors
			});
		}
	});
});


app.listen(8080); // listen on :8080