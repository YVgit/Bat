@setlocal
@echo off
rem set path=%path%;%~dp0 &rem This will include the location of whereis.bat in the locations searched. Unless you type the full path to this batch file this location will already be on the path.
if "%~1"=="" ( echo Usage : whereis ^<executable name^>. Example : whereis notepad.exe ) else (
echo %~dp$PATH:1 )
@endlocal