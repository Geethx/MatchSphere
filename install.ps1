# MatchSphere Installation Script for Windows PowerShell
# Run this script to install all dependencies

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  MatchSphere Installation Script   " -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js is installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Check if npm is installed
Write-Host "Checking npm installation..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✓ npm is installed: v$npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ npm is not installed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Yellow
Write-Host ""

# Install main dependencies
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Main dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install main dependencies" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Installation Complete! 🎉          " -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Run: npm start" -ForegroundColor White
Write-Host "2. Scan QR code with Expo Go app" -ForegroundColor White
Write-Host "3. Use credentials:" -ForegroundColor White
Write-Host "   Username: emilys" -ForegroundColor Cyan
Write-Host "   Password: emilyspass" -ForegroundColor Cyan
Write-Host ""
Write-Host "For more information, see README.md" -ForegroundColor Yellow
Write-Host ""
