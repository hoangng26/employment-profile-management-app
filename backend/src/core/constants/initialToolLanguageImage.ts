const initialToolLanguageImages = [
  {
    toolLanguageId: 1,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/112.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 1,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/127.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 2,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/72.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 2,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/62.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 3,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/50.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 4,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/44.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 5,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/64.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 6,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/99.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 6,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/15.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 6,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/13.jpeg',
    displayOrder: 3,
  },
  {
    toolLanguageId: 6,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/74.jpeg',
    displayOrder: 4,
  },
  {
    toolLanguageId: 6,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/67.jpeg',
    displayOrder: 5,
  },
  {
    toolLanguageId: 7,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/35.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 7,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/131.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 8,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/94.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 8,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/21.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 9,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/47.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 9,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/26.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 10,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/71.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 10,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/2.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 11,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/91.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 11,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/126.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 11,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/85.jpeg',
    displayOrder: 3,
  },
  {
    toolLanguageId: 11,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/9.jpeg',
    displayOrder: 4,
  },
  {
    toolLanguageId: 11,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/66.jpeg',
    displayOrder: 5,
  },
  {
    toolLanguageId: 12,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/51.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 13,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/53.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 14,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/59.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 15,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/43.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 15,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/22.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 16,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/23.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 16,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/108.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 17,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/90.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 17,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/48.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 17,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/42.jpeg',
    displayOrder: 3,
  },
  {
    toolLanguageId: 17,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/93.jpeg',
    displayOrder: 4,
  },
  {
    toolLanguageId: 17,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/79.jpeg',
    displayOrder: 5,
  },
  {
    toolLanguageId: 18,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/121.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 18,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/86.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 19,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/41.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 19,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/128.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 20,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/130.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 20,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/8.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 20,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/84.jpeg',
    displayOrder: 3,
  },
  {
    toolLanguageId: 20,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/101.jpeg',
    displayOrder: 4,
  },
  {
    toolLanguageId: 20,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/40.jpeg',
    displayOrder: 5,
  },
  {
    toolLanguageId: 21,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/32.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 21,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/27.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 21,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/12.jpeg',
    displayOrder: 3,
  },
  {
    toolLanguageId: 21,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/97.jpeg',
    displayOrder: 4,
  },
  {
    toolLanguageId: 21,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/107.jpeg',
    displayOrder: 5,
  },
  {
    toolLanguageId: 22,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/61.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 22,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/30.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 22,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/7.jpeg',
    displayOrder: 3,
  },
  {
    toolLanguageId: 22,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/125.jpeg',
    displayOrder: 4,
  },
  {
    toolLanguageId: 22,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/120.jpeg',
    displayOrder: 5,
  },
  {
    toolLanguageId: 23,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/75.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 23,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/28.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 23,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/78.jpeg',
    displayOrder: 3,
  },
  {
    toolLanguageId: 23,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/96.jpeg',
    displayOrder: 4,
  },
  {
    toolLanguageId: 23,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/63.jpeg',
    displayOrder: 5,
  },
  {
    toolLanguageId: 24,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/57.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 24,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/45.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 25,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/52.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 25,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/68.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 26,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/24.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 26,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/19.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 26,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/77.jpeg',
    displayOrder: 3,
  },
  {
    toolLanguageId: 26,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/114.jpeg',
    displayOrder: 4,
  },
  {
    toolLanguageId: 26,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/103.jpeg',
    displayOrder: 5,
  },
  {
    toolLanguageId: 27,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/89.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 27,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/34.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 28,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/105.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 28,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/11.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 29,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/3.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 30,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/46.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 31,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/115.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 32,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/102.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 32,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/117.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 33,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/16.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 33,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/5.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 34,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/25.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 34,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/60.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 35,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/88.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 35,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/95.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 36,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/73.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 37,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/10.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 38,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/70.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 39,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/56.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 40,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/76.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 41,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/123.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 42,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/31.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 42,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/54.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 42,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/118.jpeg',
    displayOrder: 3,
  },
  {
    toolLanguageId: 42,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/111.jpeg',
    displayOrder: 4,
  },
  {
    toolLanguageId: 42,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/92.jpeg',
    displayOrder: 5,
  },
  {
    toolLanguageId: 43,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/110.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 43,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/124.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 43,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/33.jpeg',
    displayOrder: 3,
  },
  {
    toolLanguageId: 43,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/82.jpeg',
    displayOrder: 4,
  },
  {
    toolLanguageId: 43,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/38.jpeg',
    displayOrder: 5,
  },
  {
    toolLanguageId: 44,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/18.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 44,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/116.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 45,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/129.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 45,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/36.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 46,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/83.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 46,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/14.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 47,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/106.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 47,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/49.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 48,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/20.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 48,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/29.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 49,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/100.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 49,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/58.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 50,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/65.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 50,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/119.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 51,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/132.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 51,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/104.jpeg',
    displayOrder: 2,
  },
  {
    toolLanguageId: 52,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/17.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 53,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/113.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 54,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/69.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 55,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/39.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 56,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/81.jpeg',
    displayOrder: 1,
  },
  {
    toolLanguageId: 57,
    cdnUrl: 'https://api.slingacademy.com/public/sample-photos/98.jpeg',
    displayOrder: 1,
  },
];

export default initialToolLanguageImages;
