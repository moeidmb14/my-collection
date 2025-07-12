@echo off
setlocal ENABLEDELAYEDEXPANSION

echo 🚀 Galaxy Collection site booting up...

:: رفتن به فولدر پروژه (خودکار)
cd /d %~dp0

:: چاپ مسیر فعلی
echo 📁 Current dir: %CD%

:: راه‌اندازی سرور با npx vite مستقیم
echo 🔥 Launching server using npx vite...
npx vite

echo ✅ Done. Enjoy your galaxy site!
pause