const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const resourcesDir = path.join(__dirname, '..', 'resources');
const androidDir = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'res');
const iosDir = path.join(__dirname, '..', 'ios', 'App', 'App', 'Assets.xcassets');

async function generateIcons() {
  console.log('🎨 Генерация иконок для ChinaMart...\n');

  // Read the source SVG
  const iconSvg = fs.readFileSync(path.join(resourcesDir, 'icon.svg'));
  
  // Generate Android icons
  const androidIcons = [
    { name: 'drawable-ldpi', size: 36 },
    { name: 'drawable-mdpi', size: 48 },
    { name: 'drawable-hdpi', size: 72 },
    { name: 'drawable-xhdpi', size: 96 },
    { name: 'drawable-xxhdpi', size: 144 },
    { name: 'drawable-xxxhdpi', size: 192 },
  ];

  for (const icon of androidIcons) {
    const dir = path.join(androidDir, icon.name);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    await sharp(iconSvg)
      .resize(icon.size, icon.size)
      .png()
      .toFile(path.join(dir, 'ic_launcher.png'));
    
    // Also create adaptive icon for newer Android
    if (icon.size >= 96) {
      await sharp(iconSvg)
        .resize(icon.size, icon.size)
        .png()
        .toFile(path.join(dir, 'ic_launcher_foreground.png'));
    }
    
    console.log(`✅ Android ${icon.name} (${icon.size}x${icon.size})`);
  }

  // Generate adaptive icon background
  const bgDir = path.join(androidDir, 'drawable-anydpi-v26');
  if (!fs.existsSync(bgDir)) fs.mkdirSync(bgDir, { recursive: true });
  
  // Create a simple colored background
  const bgSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108">
    <rect width="108" height="108" fill="#e63946" rx="20"/>
  </svg>`;
  
  await sharp(Buffer.from(bgSvg))
    .resize(108, 108)
    .png()
    .toFile(path.join(bgDir, 'ic_launcher_background.png'));
  
  await sharp(iconSvg)
    .resize(162, 162)
    .png()
    .toFile(path.join(bgDir, 'ic_launcher_foreground.png'));
  
  console.log('✅ Android Adaptive Icon');

  // Generate iOS icons
  const iosIcons = [
    { name: 'AppIcon-20x20@1x.png', size: 20 },
    { name: 'AppIcon-20x20@2x.png', size: 40 },
    { name: 'AppIcon-20x20@3x.png', size: 60 },
    { name: 'AppIcon-29x29@1x.png', size: 29 },
    { name: 'AppIcon-29x29@2x.png', size: 58 },
    { name: 'AppIcon-29x29@3x.png', size: 87 },
    { name: 'AppIcon-40x40@1x.png', size: 40 },
    { name: 'AppIcon-40x40@2x.png', size: 80 },
    { name: 'AppIcon-40x40@3x.png', size: 120 },
    { name: 'AppIcon-60x60@1x.png', size: 60 },
    { name: 'AppIcon-60x60@2x.png', size: 120 },
    { name: 'AppIcon-60x60@3x.png', size: 180 },
    { name: 'AppIcon-76x76@1x.png', size: 76 },
    { name: 'AppIcon-76x76@2x.png', size: 152 },
    { name: 'AppIcon-83.5x83.5@2x.png', size: 167 },
    { name: 'AppIcon-1024x1024@1x.png', size: 1024 },
  ];

  const appIconDir = path.join(iosDir, 'AppIcon.appiconset');
  if (!fs.existsSync(appIconDir)) fs.mkdirSync(appIconDir, { recursive: true });

  for (const icon of iosIcons) {
    await sharp(iconSvg)
      .resize(icon.size, icon.size)
      .png()
      .toFile(path.join(appIconDir, icon.name));
    console.log(`✅ iOS ${icon.name}`);
  }

  // Create Contents.json for AppIcon
  const contentsJson = {
    "images": [
      { "idiom": "iphone", "scale": "2x", "size": "20x20" },
      { "idiom": "iphone", "scale": "3x", "size": "20x20" },
      { "idiom": "iphone", "scale": "2x", "size": "29x29" },
      { "idiom": "iphone", "scale": "3x", "size": "29x29" },
      { "idiom": "iphone", "scale": "2x", "size": "40x40" },
      { "idiom": "iphone", "scale": "3x", "size": "40x40" },
      { "idiom": "iphone", "scale": "2x", "size": "60x60" },
      { "idiom": "iphone", "scale": "3x", "size": "60x60" },
      { "idiom": "ipad", "scale": "1x", "size": "20x20" },
      { "idiom": "ipad", "scale": "2x", "size": "20x20" },
      { "idiom": "ipad", "scale": "1x", "size": "29x29" },
      { "idiom": "ipad", "scale": "2x", "size": "29x29" },
      { "idiom": "ipad", "scale": "1x", "size": "40x40" },
      { "idiom": "ipad", "scale": "2x", "size": "40x40" },
      { "idiom": "ipad", "scale": "1x", "size": "76x76" },
      { "idiom": "ipad", "scale": "2x", "size": "76x76" },
      { "idiom": "ipad", "scale": "2x", "size": "83.5x83.5" },
      { "idiom": "ios-marketing", "scale": "1x", "size": "1024x1024" }
    ],
    "info": { "version": 1, "author": "xcode" }
  };

  fs.writeFileSync(
    path.join(appIconDir, 'Contents.json'),
    JSON.stringify(contentsJson, null, 2)
  );

  // Generate splash screens
  console.log('\n📱 Генерация splash screens...');

  const splashSvg = fs.readFileSync(path.join(resourcesDir, 'splash.svg'));

  // Android splash
  const splashSizes = [
    { name: 'drawable-land-ldpi', width: 320, height: 200 },
    { name: 'drawable-land-mdpi', width: 480, height: 320 },
    { name: 'drawable-land-hdpi', width: 800, height: 480 },
    { name: 'drawable-land-xhdpi', width: 1280, height: 720 },
    { name: 'drawable-land-xxhdpi', width: 1600, height: 960 },
    { name: 'drawable-land-xxxhdpi', width: 1920, height: 1280 },
    { name: 'drawable-port-ldpi', width: 200, height: 320 },
    { name: 'drawable-port-mdpi', width: 320, height: 480 },
    { name: 'drawable-port-hdpi', width: 480, height: 800 },
    { name: 'drawable-port-xhdpi', width: 720, height: 1280 },
    { name: 'drawable-port-xxhdpi', width: 960, height: 1600 },
    { name: 'drawable-port-xxxhdpi', width: 1280, height: 1920 },
  ];

  for (const splash of splashSizes) {
    const dir = path.join(androidDir, splash.name);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    await sharp(splashSvg)
      .resize(splash.width, splash.height)
      .png()
      .toFile(path.join(dir, 'splash.png'));
  }
  console.log('✅ Android Splash Screens');

  // iOS Splash
  const iosSplashes = [
    { name: 'Default@2x~universal~anyany.png', width: 1336, height: 1336 },
    { name: 'Default@3x~universal~anyany.png', width: 2001, height: 2001 },
  ];

  const splashImagesetDir = path.join(iosDir, 'Splash.imageset');
  if (!fs.existsSync(splashImagesetDir)) fs.mkdirSync(splashImagesetDir, { recursive: true });

  for (const splash of iosSplashes) {
    await sharp(splashSvg)
      .resize(splash.width, splash.height)
      .png()
      .toFile(path.join(splashImagesetDir, splash.name));
  }

  const splashContents = {
    "images": [
      { "idiom": "universal", "filename": "Default@2x~universal~anyany.png", "scale": "2x" },
      { "idiom": "universal", "filename": "Default@3x~universal~anyany.png", "scale": "3x" }
    ],
    "info": { "version": 1, "author": "xcode" }
  };

  fs.writeFileSync(
    path.join(splashImagesetDir, 'Contents.json'),
    JSON.stringify(splashContents, null, 2)
  );
  console.log('✅ iOS Splash Screens');

  console.log('\n✨ Генерация завершена!');
}

generateIcons().catch(console.error);
