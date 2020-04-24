var dg = "#3e4141"
var lg = "#979b9b"
var bl = "#000000"
var wh = "#ffffff"
var grn = "#004d00"

document.body.style.backgroundColor = dg;

var i;

divs = document.getElementsByClassName("roundbox");
ps = document.getElementsByClassName("problem-statement");

for (i = 0; i < divs.length; i++)
	divs[i].style.backgroundColor=lg;
for (i = 0; i < ps.length; i++)
	ps[i].style.backgroundColor=lg;

tables = document.getElementsByTagName("table");
for (i = 0; i < tables.length; i++)
	tables[i].style.backgroundColor=lg;
tables = document.getElementsByTagName("td");
for (i = 0; i < tables.length; i++)
	tables[i].style.backgroundColor=lg;
tables = document.getElementsByTagName("tr");
for (i = 0; i < tables.length; i++)
	tables[i].style.backgroundColor=lg;
tables = document.getElementsByTagName("th");
for (i = 0; i < tables.length; i++)
	tables[i].style.backgroundColor=lg;

cor = document.getElementsByClassName("cell-passed-system-test");
for (i = 0; i < cor.length; i++)
	cor[i].style.color=grn;
cor = document.getElementsByClassName("cell-time");
for (i = 0; i < cor.length; i++)
	cor[i].style.color=bl;
cor = document.getElementsByClassName("successfulChallengeCount");
for (i = 0; i < cor.length; i++)
	cor[i].style.color=grn;