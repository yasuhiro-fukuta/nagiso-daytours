/**
 * 【スタッフ用】ツアー前日チェックリスト — Google フォーム生成スクリプト
 *
 * Nagiso Zero-Night Day Tours (From Scratch LLC)
 *
 * 使い方:
 *   1. https://script.google.com/ で新規プロジェクトを作成
 *   2. このファイルの中身を Code.gs に貼り付けて保存
 *   3. 関数 createStaffPreDayChecklist を実行（初回のみ権限承認）
 *   4. 実行ログに「編集用URL」「回答用URL」「回答スプレッドシートURL」が出る
 *
 * 再実行すると新しいフォームがもう1つ作られます（既存フォームは書き換えません）。
 */

var FORM_TITLE = '【スタッフ用】ツアー前日チェックリスト';

var FORM_DESCRIPTION = [
  'ツアー前日の 18:00 までに記入してください。',
  '「未完了」がひとつでもある場合は、最後の申し送り欄に内容と対応予定を必ず書くこと。',
  '朝食・夕食は全プラン共通です。プランを選ぶと、そのプラン専用の確認項目に進みます。'
].join('\n');

// グリッド設問の共通選択肢
var GRID_COLUMNS = ['完了', '未完了', '該当なし'];

function createStaffPreDayChecklist() {
  var form = FormApp.create(FORM_TITLE);
  form.setTitle(FORM_TITLE)
      .setDescription(FORM_DESCRIPTION)
      .setProgressBar(true)
      .setAllowResponseEdits(true)   // 前日中の追記・修正を許可
      .setConfirmationMessage('チェックリストを受け付けました。未完了項目は当日朝までに対応してください。');

  // ============================================================
  // ページ1: 基本情報
  // ============================================================
  form.addTextItem()
      .setTitle('記入者名')
      .setRequired(true);

  form.addDateItem()
      .setTitle('ツアー実施日')
      .setHelpText('明日の日付')
      .setRequired(true);

  form.addTextItem()
      .setTitle('参加人数（大人／子ども）')
      .setHelpText('例: 大人4・子ども2（定員6名）')
      .setRequired(true);

  form.addParagraphTextItem()
      .setTitle('参加者の宿泊先（宿名・人数・朝食／夕食の配達時間）')
      .setHelpText('朝食・夕食を届ける先。宿ごとに改行して記入。')
      .setRequired(true);

  form.addTextItem()
      .setTitle('到着列車 / 集合時刻')
      .setHelpText('標準は南木曽駅 9:30 集合。変更があれば記入。')
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('参加者への前日連絡（集合場所・時刻・持ち物・天気）')
      .setChoiceValues(['送信済み', 'これから送る', '連絡先が未取得（要対応）'])
      .setRequired(true);

  // 分岐設問。選択肢はページ作成後に設定する。
  var planItem = form.addMultipleChoiceItem()
      .setTitle('実施プラン')
      .setRequired(true);

  // ============================================================
  // ページ2: プランA
  // ============================================================
  var pageA = form.addPageBreakItem()
      .setTitle('プランA — A Day, 300 Years Ago')
      .setHelpText('古民家・工房まわりと先生方の段取り');

  addCheckGrid(form, 'プランA 準備チェック', [
    '古民家（柏屋）・工房の鍵と開錠担当',
    '囲炉裏の薪・炭',
    '五平餅の仕込み（味噌だれ・串）',
    '座禅の会場設営（座布団・線香）',
    'ヨガのマット枚数',
    '和菓子の材料・道具',
    '書道の道具（墨・半紙・筆）',
    'わら細工の藁',
    '円空彫りの材料・刃物の手入れ',
    '各先生への前日リマインド連絡',
    '徒歩／e-bike どちらで移動するかの決定',
    '雨天時の屋内動線'
  ]);

  form.addParagraphTextItem()
      .setTitle('プランA 特記事項')
      .setHelpText('先生の都合変更、体験の入れ替えなど。なければ「なし」。');

  // ============================================================
  // ページ3: プランB
  // ============================================================
  var pageB = form.addPageBreakItem()
      .setTitle('プランB — Three-Color Ride')
      .setHelpText('田立の滝 → 柿其渓谷 → 小海路峠 → 阿寺渓谷 → 温泉 → 野尻駅');

  addCheckGrid(form, 'プランB 準備チェック', [
    '田立の滝までの道路状況・駐車',
    '柿其渓谷の増水／通行止め',
    '小海路峠ルートの路面状況',
    '阿寺渓谷の水量・川遊びの可否',
    '温泉の営業時間・料金',
    '野尻駅解散に合わせた列車時刻',
    '下り区間の安全ブリーフィング内容',
    '送迎車（トランスファー）の手配と運転担当',
    '川遊び用の着替え・タオルの案内'
  ]);

  form.addParagraphTextItem()
      .setTitle('プランB 特記事項')
      .setHelpText('増水・通行止め時の代替ルートなど。なければ「なし」。');

  // ============================================================
  // ページ4: プランC
  // ============================================================
  var pageC = form.addPageBreakItem()
      .setTitle('プランC — The World’s Most Comfortable 50 km')
      .setHelpText('藪原へ送迎 → 木曽川を下る → 木曽福島ランチ → 三留野／南木曽着');

  addCheckGrid(form, 'プランC 準備チェック', [
    '藪原までの送迎手配（車両・運転担当・出発時刻）',
    'e-bike の積載／輪行の段取り',
    '上流区間（藪原〜上松）の路面・工事情報',
    '木曽福島のランチ予約（人数・時間）',
    '下流区間（4宿場）の通行確認',
    '阿寺渓谷オプションの実施可否',
    '途中離脱時の駅と回収の段取り',
    '三留野／南木曽の解散地点と時刻'
  ]);

  form.addParagraphTextItem()
      .setTitle('プランC 特記事項')
      .setHelpText('途中離脱の希望、体力に不安のある参加者など。なければ「なし」。');

  // ============================================================
  // ページ5: 食事（全プラン共通）
  // ============================================================
  var pageMeal = form.addPageBreakItem()
      .setTitle('食事（全プラン共通）')
      .setHelpText('朝食＝お茶漬け、夕食＝ヴィーガン鍋。宿へ配達。');

  addCheckGrid(form, '食事の準備チェック', [
    '朝食（お茶漬け）の食材仕入れ',
    '夕食（ヴィーガン鍋）の食材仕入れ',
    'ランチの手配（五平餅／弁当／木曽福島の店）',
    'アレルギー・ヴィーガン・グルテンフリー対応',
    '宿ごとの配達時間の合意',
    '配達容器の準備と回収の段取り',
    '飲み物・お茶',
    '配達担当者と車両の割り当て'
  ]);

  form.addParagraphTextItem()
      .setTitle('食事制限・アレルギーの詳細')
      .setHelpText('「氏名 / 内容 / 対応」の形式で参加者ごとに記入。該当なしなら「なし」。')
      .setRequired(true);

  // ============================================================
  // ページ6: 機材・車両
  // ============================================================
  form.addPageBreakItem().setTitle('機材・車両');

  addCheckGrid(form, '機材チェック', [
    'e-bike の台数確保（参加人数＋予備）',
    'バッテリー満充電',
    '空気圧・ブレーキ・チェーンの点検',
    '参加者の身長に合うサイズの割り当て',
    'ヘルメット・グローブ',
    'パンク修理キット・携帯ポンプ・工具',
    'レインウェア／雨天時のタクシー・送迎車',
    '救急箱',
    '飲料水',
    'モバイルバッテリー（スタッフ用）'
  ]);

  form.addTextItem()
      .setTitle('予備バッテリーの本数');

  form.addParagraphTextItem()
      .setTitle('整備・修理が必要な機材')
      .setHelpText('なければ「なし」。');

  // ============================================================
  // ページ7: 最終確認・申し送り
  // ============================================================
  form.addPageBreakItem().setTitle('最終確認・申し送り');

  addCheckGrid(form, '当日運営の最終確認', [
    '天気予報の確認',
    '雨天時プランの決定（実施／短縮／屋内振替）',
    '緊急連絡先リストの携行',
    '参加者の当日つながる連絡先の控え',
    'Square の決済状況',
    '同意書・保険',
    'ガイド担当・運転担当の役割分担',
    '写真撮影の可否を参加者に確認'
  ]);

  form.addMultipleChoiceItem()
      .setTitle('明日、このままの内容で実施できるか')
      .setChoiceValues(['実施できる', '条件付きで実施（下に記入）', '要判断・要相談'])
      .setRequired(true);

  form.addParagraphTextItem()
      .setTitle('申し送り・未完了項目とその対応')
      .setHelpText('「未完了」にした項目は、ここに内容と対応予定を必ず書くこと。なければ「なし」。')
      .setRequired(true);

  // ============================================================
  // 分岐の設定
  //   プラン選択 → 各プランページへ / 各プランページの後は「食事」へ合流
  // ============================================================
  planItem.setChoices([
    planItem.createChoice('プランA — A Day, 300 Years Ago（古民家・¥15,000）', pageA),
    planItem.createChoice('プランB — Three-Color Ride（シャワーサイクリング・¥22,000）', pageB),
    planItem.createChoice('プランC — The World’s Most Comfortable 50 km（木曽川下り・¥20,000）', pageC)
  ]);
  pageA.setGoToPage(pageMeal);
  pageB.setGoToPage(pageMeal);
  pageC.setGoToPage(pageMeal);

  // ============================================================
  // 回答スプレッドシートを作成してリンク
  // ============================================================
  var ss = SpreadsheetApp.create(FORM_TITLE + '（回答）');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  var out = [
    '編集用URL: ' + form.getEditUrl(),
    '回答用URL: ' + form.getPublishedUrl(),
    '回答スプレッドシート: ' + ss.getUrl()
  ].join('\n');
  Logger.log(out);
  return out;
}

/**
 * 「完了 / 未完了 / 該当なし」の選択グリッドを1問追加する。
 * setRequired(true) で「各行の回答を必須にする」が有効になる。
 */
function addCheckGrid(form, title, rows) {
  return form.addGridItem()
             .setTitle(title)
             .setRows(rows)
             .setColumns(GRID_COLUMNS)
             .setRequired(true);
}
