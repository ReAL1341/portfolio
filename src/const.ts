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
        '\
        学園祭の公式サイト制作、およびアルバイトの実務で利用しています。\
        公式サイト制作ではControllerやEloquentを利用して応募フォームなどを実装したほか、\
        Socialiteというパッケージを利用してLINEログインを実装しました。\
        一方アルバイトの実務ではOpenAPIやAPI Resourceを利用してAPIを開発していました。\
        API開発では、ClockWorkというツールを使って発行されるクエリを確認しており、\
        N+1問題が発生しないようにEager Loadingを使用してリレーションを行いました。\
        '
      ),
      detail(
        'WordPress',
        '\
        アルバイトの実務で利用したことがあります。\
        開発では管理のしやすさを優先してAdvanced Custom Fields以外のプラグインは利用せず、PHPを用いて開発しました。\
        開発の際には保守性を考慮して、function.phpに直接実装するのではなく機能ごとにファイルを分割して実装しました。\
        実装の内容としては独自テーマの実装、カスタム投稿・独自タクソノミーの実装、管理画面のUI変更などを行いました。\
        '
      ),
    ],
  },
  {
    name: 'Java',
    details: [
      detail(
        'Java',
        '\
        wEBアプリの個人開発で利用しています。\
        オブジェクト指向の理解はもちろん、SOLID原則や高凝集・疎結合などを意識してコードを書くことができます。\
        また、JUnitを用いたユニットテストを書いた経験もあるので、テスト容易性なども意識することができます。\
        プロジェクト管理ツールはMavenを利用していました。\
        '
      ),
      detail(
        'SpringBoot',
        '\
        Webアプリの個人開発で利用しています。\
        ドメイン駆動設計を意識した設計を採用しているため、\
        @Serviceや@Repositoryなどのアノテーションを利用したDIについて理解しています。\
        '
      ),
    ],
  },
  {
    name: 'JavaScript',
    details: [
      detail(
        'jQuery',
        '\
        アルバイトの実務で利用したことがあります。\
        主にアプリ管理者用のページの開発で使用しており、フォームのバリデーションや非同期通信処理を実装しました。\
        また、jqxGridを使って、APIのレスポンスから表を作成する処理を実装しました。\
        '
      ),
      detail(
        'Vue3.js',
        '\
        個人開発のフロントエンド開発で利用したことがあります。\
        ただし、最近JavaScriptで実装したコードの多くをTypeScriptに移行しました。\
        '
      ),
    ],
  },
  {
    name: 'TypeScript',
    details: [
      detail(
        'Vue3.js',
        '\
        個人開発のフロントエンド開発で利用しています。\
        型を指定できるため保守性を向上できると考えただけでなく、\
        独特な書き方をするVue.jsでコードを書いても、フレームワークを利用していないコードとの乖離が少ないので、\
        コードの互換性も十分であると判断し、JavaScriptで書いたコードをTypeScriptに移行しました。\
        本ポートフォリオもTypeScript + Vue3.jsで実装しています。\
        '
      ),
    ],
  },
  {
    name: 'Python',
    details: [
      detail(
        'Python',
        '\
        AtCoderで利用したことがあります。\
        競技プログラミングでは実行時間が重要になってくるので、計算量を意識してプログラミングをすることができます。\
        またパスワード文字列の自動生成・管理ツールやテストデータのランダム生成などの小規模な開発でも利用したことがあります。\
        '
      ),
    ],
  },
  {
    name: 'Go',
    details: [
      detail(
        'Echo',
        '\
        アルバイトの実務で2か月ほど利用したことがあります。\
        主にモバイルアプリの機能追加・改善がメインであり、クリーンアーキテクチャでAPIの開発をしていました。\
        '
      ),
    ],
  },
  {
    name: 'Dart',
    details: [
      detail(
        'Flutter',
        '\
        アルバイトの実務で2か月ほど利用したことがあります。\
        主にモバイルアプリの機能追加・改善がメインであり、画面設計の変更に伴う修正などを行いました。\
        '
      ),
    ],
  },
];

/* ===============
    tools
 ===============*/
export interface Tool {
  name: string;
  description: string;
}

function tool(name: string, description: string) {
  return {
    name: name,
    description: description,
  };
}

export const tools: Array<Tool> = [
  tool(
    'Git',
    '\
    \
    '
  ),
  tool(
    'Docker',
    '\
    \
    '
  ),
  tool(
    'MySQL',
    '\
    \
    '
  ),
];
