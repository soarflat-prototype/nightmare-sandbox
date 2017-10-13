const Nightmare = require('nightmare');

const nightmare = Nightmare({ show: true });

nightmare

// https://duckduckgo.comに行く
  .goto('https://duckduckgo.com')

  // #search_form_input_homepageにgithub nightmareを入力する
  .type('#search_form_input_homepage', 'github nightmare')

  // #search_button_homepageをクリックする
  .click('#search_button_homepage')

  // #r1-0 a.result__aが出現するまで待機
  .wait('#r1-0 a.result__a')

  // #r1-0 a.result__aのリンクを取得し、戻り値として返す
  .evaluate(() => document.querySelector('#r1-0 a.result__a').href)

  // プロセスを切断する
  .end()

  // linkにはevaluateで取得した#r1-0 a.result__aのリンクを参照している
  .then((link) => {
    console.log(link);
  })
  .catch((error) => {
    console.error('Search failed:', error);
  });


