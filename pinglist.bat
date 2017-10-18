@SETLOCAL
@echo off
FOR /F %%i IN (machinenames.csv) DO @(	CALL :CHECKNAME "%%i"	)
@ENDLOCAL




:CHECKNAME
	ping -n 1 "%~1" > nul && SET "PINGABLE=pingable" || SET "PINGABLE=not pingable"
	echo "%~1" 	was %PINGABLE%.
@GOTO :EOF