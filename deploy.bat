@echo off
echo ========================================================
echo  Vietnam Visa Pass (VVP) - Auto Sync & Deploy to GitHub
echo ========================================================
git add .
set /p commit_msg="Enter update description (or press Enter for auto-date): "
if "%commit_msg%"=="" set commit_msg="Update website content on %date% %time%"
git commit -m "%commit_msg%"
git push origin main
echo.
echo ========================================================
echo  Success! Code pushed to GitHub. Render will auto-deploy.
echo ========================================================
pause
