CLIW
====


CLIW is a dead-simple, trusting web service that extends the CLI of the server to the web.
A GET requst is URL decoded and sent to 'child_process.exec()' and the output is returned in one of 4 objects:
* error
* stdout
* stderr
* unknown