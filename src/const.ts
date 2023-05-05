/* ===============
    pages
 ===============*/
export const pages = ['TOP', 'SKILL', 'ACHIEVEMENT'];

/* ===============
    languages
 ===============*/
export interface Language {
  name: string;
  details: Array<Detail>;
}

export interface Detail {
  title: string;
  description: string;
}

function detail(title: string, description: string): Detail {
  return {
    title: title,
    description: description,
  };
}

export const languages: Array<Language> = [
  {
    name: 'PHP',
    details: [
      detail(
        'Laravel',
        'あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
      ),
      detail(
        'WordPress',
        'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
      ),
    ],
  },
  {
    name: 'JavaScript',
    details: [
      detail(
        'Vue3.js',
        'あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
      ),
    ],
  },
  {
    name: 'TypeScript',
    details: [
      detail(
        'Vue3.js',
        'あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
      ),
    ],
  },
  {
    name: 'Java',
    details: [
      detail(
        'Java',
        'あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
      ),
      detail(
        'SpringBoot',
        'あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
      ),
    ],
  },
  {
    name: 'Python',
    details: [
      detail(
        'Python',
        'あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
      ),
    ],
  },
  {
    name: 'Go',
    details: [
      detail(
        'Go',
        'あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
      ),
    ],
  },
  {
    name: 'Dart',
    details: [
      detail(
        'Flutter',
        'あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
      ),
    ],
  },
];
