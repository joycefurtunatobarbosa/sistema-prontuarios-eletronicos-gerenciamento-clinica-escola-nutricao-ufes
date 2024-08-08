@echo off
rem Navegar para a pasta frontend e executar npm run serve
cd /d "C:\Users\gabri\OneDrive\DOCUMENTOS\FACULDADE\Documentos\GitHub\Prontuarios_Eletronicos_CEN_UFES\frontend"
start /min cmd /c "npm run serve >nul 2>&1"

rem Aguardar alguns segundos para garantir que o primeiro comando seja iniciado
timeout /t 20 /nobreak

rem Navegar para a pasta backend/src e executar node app.js
cd /d "C:\Users\gabri\OneDrive\DOCUMENTOS\FACULDADE\Documentos\GitHub\Prontuarios_Eletronicos_CEN_UFES\backend\src"
start /min cmd /c "node app.js >nul 2>&1"

rem Aguardar alguns segundos para garantir que o servidor esteja iniciado
timeout /t 5 /nobreak

rem Abrir o navegador padrão na URL localhost:8081
start http://localhost:8081