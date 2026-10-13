@echo off
rem genoffice launcher for the packaged Windows app: <install>\resources\cli\genoffice.cmd
setlocal
set ELECTRON_RUN_AS_NODE=1
set "app=%~dp0..\..\Eoffice.exe"
if not exist "%app%" set "app=%~dp0..\..\GenOffice.exe"
"%app%" "%~dp0genoffice.cjs" %*
endlocal
