# Yoki Arena

Kino, aktyor, aktrisa va qo'shiqlar kategoriyasidan birini tanlang va ularni o'zaro turnir shaklida bellashtiring. Oxirida qaysi biri sizga ko'proq yoqqanini bilib olasiz!

## Skrinshotlar

### Kirish sahifasi
<img width="2561" height="1308" alt="FireShot Capture 059 - (Yoki) arenasi  Media arena ⚔️ -  yokiarena vercel app" src="https://github.com/user-attachments/assets/46615c8e-cafc-48cc-aff5-5dbf45b411c0" />

<!-- [SCREENSHOT: bosh sahifa — kategoriya tanlash] -->

### Bellashuv
<img width="2561" height="1308" alt="FireShot Capture 060 - (Yoki) arenasi  Media arena ⚔️ -  yokiarena vercel app" src="https://github.com/user-attachments/assets/30c488fc-be73-4d70-aa51-6bf2a2f9fc86" />

<!-- [SCREENSHOT: ikki poster o'rtasida tanlov] -->

### G'olib
<img width="2561" height="1308" alt="FireShot Capture 061 - (Yoki) arenasi  Media arena ⚔️ -  yokiarena vercel app" src="https://github.com/user-attachments/assets/957b97d0-f582-4f98-92b5-01d0cd7d968c" />

<!-- [SCREENSHOT: turnir oxiridagi g'olib (podium)] -->

## Qanday ishlaydi

1. Bosh sahifada kategoriyani tanlaysiz: **Kinolar**, **Qo'shiqlar**, **Aktorlar** yoki **Aktrisalar**.
2. "Arena" tugmasini bosganingizdan so'ng, bellashuv boshlanadi. Avval qisqa 3 soniyalik sanoq ko'rinadi.
3. Har bir raundda ikkita poster ko'rsatiladi. Yoqqanini tanlab, "Keyingi" tugmasini bosasiz.
4. G'olib keyingi raundga o'tadi va yangi raqib bilan bellashadi.
5. Barcha raundlar tugagach, eng ko'p yoqqan tanlovingiz podiumda e'lon qilinadi.

## Imkoniyatlar

- 4 ta kategoriya: kinolar, qo'shiqlar, aktorlar, aktrisalar
- Turnir shaklidagi bellashuv va har bir raundda tanlovni oldindan tanlash
- Postersiz rasmlarni fonda oldindan yuklash, shuning uchun keyingi raund tez ochiladi
- Animatsiyali podium bilan g'olibni e'lon qilish
- Mobil va kompyuter uchun moslashgan dizayn

## Texnologiyalar

- React 19 va TypeScript
- Vite
- React Router 7
- Tailwind CSS 4
- Framer Motion (animatsiyalar)
- React Select (kategoriya tanlash)
- Supabase (kategoriyalar bo'yicha ma'lumotlar)

## Loyiha tuzilishi

```
src/
  pages/        Welcome (bosh sahifa) va BattleArena (bellashuv)
  components/   PosterCard, Podium va TimerLoading komponentlari
  hooks/        Ma'lumot olish, sanoq va so'z animatsiyasi hooklari
  supabaseClient.ts   Supabase ulanishi
public/         Statik fayllar
```

## Muallif

**Fozilbek Fayzullayev** — [GitHub](https://github.com/fozilbekfayzullayev)
