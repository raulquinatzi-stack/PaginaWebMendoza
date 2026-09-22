@echo off
title Mendoza & LEV - Servidor Local
echo ========================================================
echo   MENDOZA & LEV ABOGADOS - SERVIDOR WEB Y CONSOLA CMD
echo ========================================================
echo.
echo Iniciando servidor en http://localhost:3000 ...
echo Presione Ctrl + C para detener el servidor.
echo.
node ./node_modules/next/dist/bin/next start -p 3000
pause
