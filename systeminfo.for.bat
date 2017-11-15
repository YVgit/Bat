@IF "%listitem%"=="" @(
	ECHO Usage : 
	ECHO	doforlist.bat can use this batch script, it's not intended to be run standalone. "prep.bat" should be run beforehand as well.
	ECHO Example : 
	ECHO	doforlist.bat machinenames.csv systeminfo.for.bat
	exit /b 1
)
@echo Start %listitem% :
@SYSTEMINFO /S %listitem% /U %gebruiker% /P %wachtwoord% /FO CSV /NH >> "forsystemsinfo.csv"
@echo %listitem%;%errorlevel% >> "resultlist.csv"
@echo Stop %listitem%.