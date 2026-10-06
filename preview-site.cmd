@echo off
setlocal

set "ROOT=%~dp0"
set "PORT=8765"

where py >nul 2>&1
if %errorlevel%==0 (
  start "dante-martin.com preview" /min py -3 -m http.server %PORT% --bind 127.0.0.1 --directory "%ROOT%"
  goto :open
)

where python >nul 2>&1
if %errorlevel%==0 (
  start "dante-martin.com preview" /min python -m http.server %PORT% --bind 127.0.0.1 --directory "%ROOT%"
  goto :open
)

echo Python 3 was not found. Open "%ROOT%projects\baja\index.html" directly instead.
pause
exit /b 1

:open
timeout /t 1 /nobreak >nul
start "" "http://127.0.0.1:%PORT%/projects/baja/"
