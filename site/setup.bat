@echo off
echo 🚀 Starting setup for your galaxy collection site...

:: نصب پکیج‌ها
echo 📦 Installing npm dependencies...
call npm install

:: ساخت پوشه assets
if not exist src\assets (
    mkdir src\assets
    echo 📁 Created folder src\assets
)

:: کپی فایل bg-space.jpg
if exist bg-space.jpg (
    copy /Y bg-space.jpg src\assets\bg-space.jpg
    echo ✅ Copied bg-space.jpg
)

:: کپی فایل lightning.wav
if exist lightning.wav (
    copy /Y lightning.wav src\assets\lightning.wav
    echo ✅ Copied lightning.wav
)

:: اجرای پروژه
echo 🚀 Running your site on localhost...
call npm run dev

pause