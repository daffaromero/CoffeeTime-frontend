# coffeetime-frontend
Repository front-end aplikasi web kelompok 15 mata kuliah Pengembangan Aplikasi Web.

## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
 ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
 
## Kelompok 15
- [Daffa Muhammad Romero - 20/456363/TK/50493](https://github.com/daffaromero)
- [Nindya Fathul Risya - 20/460556/TK/51145](https://github.com/ninfrrr)
- [Nur Wulan Febriani - 20/460557/TK/51146](https://github.com/nrwfebriani)
- [Anisya Mahira Salienka - 20/463593/TK/51585](https://github.com/anisyamahira)
- [Nur Azzam Wafiuddin - 21/479115/TK/52806](https://github.com/Nur-Azzam-Wafiuddin)

## Hosted!
Front-end aplikasi telah di-hosting di <a href="https://coffeetime-ten.vercel.app/">Vercel</a><br>

## How to run locally

Lakukan install semua dependency front-end:
```
npm install
```

Untuk menjalankan development build:

```
npm start
```

Untuk menjalankan production build:

```
npm run build
serve build
```

## Bugs

Production build mengandung bug, di mana salah satu reducer, yaitu CART_ADD_ITEM tidak di-fire oleh action cartActions.
Development build tidak mengandung bug ini.

How to reproduce?
<ol>
  <li>Jalankan production build atau akses <a href="https://coffeetime-ten.vercel.app/">hosting front-end</a></li>
  <li>Lakukan login, atau register lalu login</li>
  <li>Klik salah satu menu</li>
  <li>Klik 'Add to cart'</li>
  <li>Menu yang ditambahkan tidak muncul di cart</li>
</ol>

## Link Slide Presentasi (Canva)
<a href="https://bit.ly/SlideKel15">Presentasi (bit.ly)</a>
