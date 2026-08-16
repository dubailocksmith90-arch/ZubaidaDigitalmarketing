from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

out = Path(__file__).resolve().parent.parent / 'public' / 'images'
out.mkdir(parents=True, exist_ok=True)


def gradient(width, height, c1=(30, 64, 175), c2=(6, 182, 212)):
    img = Image.new('RGB', (width, height))
    pixels = img.load()
    for y in range(height):
        t = y / max(height - 1, 1)
        r = int(c1[0] * (1 - t) + c2[0] * t)
        g = int(c1[1] * (1 - t) + c2[1] * t)
        b = int(c1[2] * (1 - t) + c2[2] * t)
        for x in range(width):
            pixels[x, y] = (r, g, b)
    return img

# Dubai skyline
img = gradient(1200, 900, (19, 58, 123), (77, 180, 240))
draw = ImageDraw.Draw(img)
# sun and clouds
for x, y, r in [(930, 150, 86), (170, 120, 110), (320, 150, 90), (760, 120, 100)]:
    draw.ellipse((x-r, y-r, x+r, y+r), fill=(255, 214, 102) if (x, y) == (930, 150) else (255, 255, 255, 180))
for x0, w, h, c in [
    (0, 130, 280, (13, 30, 84)), (130, 110, 220, (19, 37, 92)), (220, 90, 330, (28, 48, 102)),
    (300, 120, 260, (20, 39, 84)), (430, 100, 240, (13, 30, 84)), (530, 80, 220, (21, 41, 92)),
    (620, 120, 300, (17, 34, 88)), (760, 90, 280, (13, 26, 68)), (850, 140, 350, (17, 30, 70)),
    (1000, 200, 220, (20, 38, 85))
]:
    draw.rectangle((x0, 900-h, x0+w, 900), fill=c)
    for wx in range(x0 + 12, x0 + w - 8, 18):
        for wy in range(900-h + 18, 900 - 8, 24):
            if (wx + wy) % 22 == 0:
                draw.rectangle((wx, wy, wx+10, wy+12), fill=(253, 247, 166, 200))
draw.rectangle((0, 760, 1200, 900), fill=(32, 43, 58))
img = img.filter(ImageFilter.GaussianBlur(0.2))
img.save(out / 'dubai-skyline.webp', 'WEBP', quality=82)

# Abu Dhabi skyline
img = gradient(1200, 900, (8, 45, 92), (28, 118, 196))
draw = ImageDraw.Draw(img)
for y in range(0, 900):
    if y > 630:
        alpha = min(255, (y - 630) * 3)
        draw.line((0, y, 1200, y), fill=(18, 79, 128), width=1)
for x0, w, h, c in [
    (0, 100, 170, (13, 39, 80)), (120, 140, 230, (21, 49, 98)), (250, 90, 200, (12, 57, 100)),
    (360, 110, 260, (16, 42, 90)), (500, 120, 240, (21, 54, 102)), (640, 150, 320, (12, 34, 76)),
    (780, 120, 250, (18, 40, 86)), (920, 100, 180, (12, 28, 68)), (1040, 110, 160, (22, 46, 94))
]:
    draw.rectangle((x0, 660-h, x0+w, 660), fill=c)
    for wx in range(x0 + 16, x0 + w - 8, 20):
        for wy in range(660-h + 16, 660-8, 26):
            draw.rectangle((wx, wy, wx+10, wy+14), fill=(255, 231, 160))
img.save(out / 'abu-dhabi-skyline.webp', 'WEBP', quality=82)

# Professional car lift service
img = gradient(1200, 900, (219, 234, 254), (255, 255, 255))
draw = ImageDraw.Draw(img)
for i in range(0, 1200, 120):
    draw.rectangle((i, 560, i + 70, 900), fill=(35, 49, 70))
# vehicle body
for x, y in [(250, 320), (280, 350)]:
    pass
draw.rounded_rectangle((250, 320, 950, 700), radius=52, fill=(30, 64, 175))
draw.rounded_rectangle((350, 250, 840, 360), radius=25, fill=(59, 130, 246))
for x in [372, 468, 563]:
    draw.rectangle((x, 290, x + 52, 330), fill=(217, 234, 255))
draw.rounded_rectangle((340, 380, 630, 520), radius=20, fill=(245, 247, 255))
draw.rounded_rectangle((690, 380, 850, 520), radius=20, fill=(245, 247, 255))
for px, py in [(450, 700), (640, 700), (770, 700)]:
    draw.ellipse((px-26, py-40, px+26, py+10), fill=(253, 186, 116))
    draw.rectangle((px-18, py+10, px+18, py+90), fill=(15, 23, 42))
draw.ellipse((780, 120, 1000, 340), fill=(255,255,255,220))
img.save(out / 'professional-car-lift-service.webp', 'WEBP', quality=88)

# Highway travel
img = gradient(1200, 900, (15, 23, 42), (59, 130, 246))
draw = ImageDraw.Draw(img)
for i in range(0, 1400, 120):
    draw.rectangle((i, 560, i + 60, 590), fill=(255,255,255,180))
    draw.rectangle((i, 610, i + 60, 640), fill=(255,255,255,180))
for y in range(640, 900, 25):
    shade = 70 + (y - 640) * 0.4
    draw.rectangle((0, y, 1200, y + 25), fill=(int(shade), int(90 + shade * 0.15), int(50 + shade * 0.22)))
for x, y in [(230, 600), (670, 550), (930, 620)]:
    draw.rounded_rectangle((x, y, x + 250, y + 110), radius=28, fill=(255, 255, 255))
    draw.rounded_rectangle((x + 35, y - 40, x + 215, y + 40), radius=28, fill=(37, 99, 235))
    draw.ellipse((x + 40, y + 85, x + 90, y + 140), fill=(15,23,42))
    draw.ellipse((x + 160, y + 85, x + 210, y + 140), fill=(15,23,42))
points = [(0, 650), (150, 520), (270, 620), (430, 480), (590, 630), (760, 540), (900, 660), (1200, 520), (1200, 900), (0, 900)]
draw.polygon(points, fill=(16, 57, 100))
img.save(out / 'uae-highway-travel.webp', 'WEBP', quality=88)

print('Created assets:', sorted(p.name for p in out.glob('*.webp')))
