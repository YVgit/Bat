@SETLOCAL
@SET "MACHINELIST=%~1"
@SET "COMMAND=%~2"
@IF NOT "%MACHINELIST%"=="" @( 
	ECHO Opening list "%MACHINELIST%".
) ELSE @(
	@ECHO ERROR : Missing parameter filename. 1>&2
	@ECHO.
	CALL :USAGE
	GOTO :EOF
)
@IF NOT "%COMMAND%"=="" @( 
	ECHO Registered command "%COMMAND%".
) ELSE @(
	@ECHO ERROR : Missing parameter command. 1>&2
	@ECHO.
	CALL :USAGE
	GOTO :EOF
)
@FOR /F %%i IN ("%MACHINELIST%") DO @(	CALL :DOFORLISTITEM "%%i"	)
@ENDLOCAL
@GOTO :EOF



:DOFORLISTITEM
	@SET "LISTITEM=%~1"
	@CALL %COMMAND%
@GOTO :EOF

:USAGE
	@ECHO The syntax of this command is:
	@ECHO %~n0 [filename] [command-parameters] 
	@ECHO     filename 				A newline separated list. 	
	@ECHO     command-parameters		Specifies parameters or switches for the specified command. Items are available as %%listitem%% (this environment variable can be accessed by the command as well) or %%1.
	@ECHO.
	@ECHO Examples : 
	@ECHO doforlist.bat machinenames.csv "ping -n 1 ^%%1"	
	@ECHO doforlist.bat machinenames.csv "ping -n 1 ^%%listitem^%%"
@GOTO :EOF
