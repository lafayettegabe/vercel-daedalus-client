@echo off

REM Command 1: Change directory to the server folder and execute "poetry run task dev"
echo Running server...
start npm run dev

REM Wait for a moment to ensure the web client server has started
timeout /t 10

echo Opening browser...
start http://localhost:3000/

echo All commands executed.
