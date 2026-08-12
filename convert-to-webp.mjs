// Use dynamic import to be compatible with Bun's script execution mode
(async () => {
  const sharpMod = await import('sharp');
  const sharp = sharpMod.default;

  await sharp('/home/hdez/ZeroJumpOne/proyectos/website-zjo/public/images/ohmyopencode2.png')
    .webp({ quality: 90 })
    .toFile('/home/hdez/ZeroJumpOne/proyectos/website-zjo/public/images/ohmyopencode2.webp');

  console.log('Conversion complete');
})();
