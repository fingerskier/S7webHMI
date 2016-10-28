# S7webHMI
Siemens S7 built-in web-server based HMI framework.


This is a simple framework for smoothly reading and writing data from a Siemens S7-1200/1500 PLC.

Requires:
* Siemens S7 PLC w/ built-in web-server


Includes:
* jquery 3.0


Usage:
index.html | Modify as needed to reflect your needs.  As is this app will pull and display data by name.  Writing data takes a little more work.
index.js | You shouldn't need to edit this unless you want a custom data view.
data.json | Edit your tags in here: the names are simply keys that you can use in your javascript; the values must be formatted for the PLC to update them when accessed.
write.html | The form in index.html would need to have the input elements named _exactly_ as the PLC tag-names.  Those _exact_ same names need to be installed here.
