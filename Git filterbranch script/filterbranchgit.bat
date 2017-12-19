@GoTo :start

Gebruik : 
git filter-branch --tree-filter 'filterbranchgit.bat' --prune-empty  HEAD


:start
@echo.
@echo Batch file start
@IF "%counter%"=="" (set counter=0) else (
	set /A counter=%counter%+1
)
@rem notepad &rem Useful to see that the bat is being called even if output is piped to nowhere.
@echo Instance counter: %counter% ^(is supposed to track the commit number but variables don't persist accross instances so always zero!^).
@echo De parentvariabele is : %PARENTVARIABELEOMTEOONTHOUDEN% (verwacht OK, betekent dat je dry run parameter kunt instellen).
@set "COMMITDIRECTORY=."
@set "LOGFILE=C:\Users\EXL252\Desktop\filterbranchtest.Txt"
@echo ________ Starting  run ________ >> "%LOGFILE%"
@date /T >> "%LOGFILE%"
@time /T >> "%LOGFILE%"
@if "%DRYRUN%"=="FALSE" (
		echo Running delete operations, live run. Set environment variable "DRYRUN" to "TRUE" to just see an output listing of what would happen!
		echo Running delete operations, live run. >> "%LOGFILE%"
	) else (
		echo Skipping delete operations, dry run. Set environment variable "DRYRUN" to "FALSE" when you are sure you want to delete the files listed to be deleted!
		echo Skipping delete operations, dry run. >> "%LOGFILE%"
	)
@set >> "%LOGFILE%"
@echo _______________________________ >> "%LOGFILE%"
@dir /a /s >> "%LOGFILE%"
@echo _______ Files to delete _______ >> "%LOGFILE%"
@call :DoCommitManipulations
@echo _______________________________ >> "%LOGFILE%"
@echo Batch file stop & @exit /b %counter%
@GoTo :EOF


:DoCommitManipulations
	@echo Modifying commit.
	@set "FilenameExtensionToFilter=mdb"
	@for /R "%COMMITDIRECTORY%" %%F in (*.*) do @call :HandleFile "%%F"
@GoTo :EOF

:HandleFile
	@SET "FILENAME=%~1"
	@REM IF NOT "%%~xF" == ".%FilenameExtensionToFilter%" DEL /F /S "%%F"
	@IF NOT "%~x1" == ".%FilenameExtensionToFilter%" (
		ECHO Deleting "%~1"
		ECHO Deleting "%~1" >> "%LOGFILE%"
		@CALL :DeleteFile "%~1"
	) ELSE (
		ECHO Keeping  "%~1"
		ECHO Keeping  "%~1" >> "%LOGFILE%"
	)
@GoTo :EOF

:DeleteFile
	@if "%DRYRUN%"=="FALSE" (
		echo LIVE RUNNING
		echo Running delete on "%~1". >> "%LOGFILE%"
		DEL /F /S "%~1" && echo Delete success "%~1". >> "%LOGFILE%" || echo Delete failed "%~1". >> "%LOGFILE%"
	) else (
		echo DRY RUNNING
		echo Skipping delete on "%~1". >> "%LOGFILE%"
	)
@GoTo :EOF