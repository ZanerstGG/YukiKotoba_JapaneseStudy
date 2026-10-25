export const quizQuestions = [
  {
    id: 1,
    category: 'Soal 1 dari 4 • Hiragana Dasar',
    question: 'Manakah karakter Hiragana untuk vokal bunyi "A"?',
    promptVisual: '"A"',
    options: [
      { key: 'A', text: 'あ', sub: 'Pilihan A' },
      { key: 'B', text: 'い', sub: 'Pilihan B' },
      { key: 'C', text: 'う', sub: 'Pilihan C' },
      { key: 'D', text: 'お', sub: 'Pilihan D' },
    ],
    correctAnswer: 'A',
    explanationTitle: 'Jawaban benar: Pilihan A (あ).',
    explanationText:
      'Tepat sekali! Karakter あ dibaca "a" (seperti pada kata 朝 - asa / pagi).',
  },
  {
    id: 2,
    category: 'Soal 2 dari 4 • Katakana Modern',
    question: 'Bagaimana cara membaca huruf Katakana berikut?',
    promptVisual: 'コ',
    options: [
      { key: 'A', text: 'ro', sub: 'Huruf ロ' },
      { key: 'B', text: 'ko', sub: 'Huruf コ' },
      { key: 'C', text: 'yu', sub: 'Huruf ユ' },
      { key: 'D', text: 'ke', sub: 'Huruf ケ' },
    ],
    correctAnswer: 'B',
    explanationTitle: 'Jawaban benar: Huruf コ (ko).',
    explanationText:
      'Luar biasa! Karakter コ dibaca "ko", contoh: コーヒー (kōhī - kopi).',
  },
  {
    id: 3,
    category: 'Soal 3 dari 4 • Kanji Dasar N5',
    question: 'Pilihlah karakter Kanji yang melambangkan "Pohon / Kayu"!',
    promptVisual: '木',
    options: [
      { key: 'A', text: '木', sub: 'Ki / Moku' },
      { key: 'B', text: '本', sub: 'Hon (Buku/Asal)' },
      { key: 'C', text: '休', sub: 'Yasu-mu (Istirahat)' },
      { key: 'D', text: '水', sub: 'Mizu (Air)' },
    ],
    correctAnswer: 'A',
    explanationTitle: 'Jawaban benar: Ki / Moku (木).',
    explanationText:
      'Tepat! Kanji 木 (ki) merepresentasikan pohon dengan batang dan rantingnya.',
  },
  {
    id: 4,
    category: 'Soal 4 dari 4 • Ungkapan & Tata Krama',
    question: 'Apa arti dari ungkapan "いただきます (Itadakimasu)" sebelum makan?',
    promptVisual: 'いただきます',
    options: [
      { key: 'A', text: 'Saya menerima hidangan ini', sub: 'Doa Makan' },
      { key: 'B', text: 'Selamat malam', sub: 'Konbanwa' },
      { key: 'C', text: 'Terima kasih', sub: 'Arigatou' },
      { key: 'D', text: 'Permisi / Maaf', sub: 'Sumimasen' },
    ],
    correctAnswer: 'A',
    explanationTitle: 'Jawaban benar: Saya menerima hidangan ini.',
    explanationText:
      'Sempurna! Ungkapan terima kasih yang tulus kepada semua berkah yang tersaji di meja makan.',
  },
];
