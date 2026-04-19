# 郡山市版 就農入口サイト

郡山市で就農を考え始めた人に向けた、静的な入口ポータルサイトです。

## コンセプト

このサイトは「本体」ではなく、入口案内に特化しています。

- 人の魅力：フロンティアファーマーズへ誘導
- 詳細ステップ：就農ナビアプリへ誘導
- 最新情報：郡山市農政課公式LINEへ誘導

## ページ構成

- `index.html` トップページ
- `farmers.html` 郡山市ではどんな農家さんがいるの？
- `steps.html` 就農ステップ
- `news.html` 最新情報
- `contact.html` 相談先
- `styles.css` 共通スタイル

## ローカルプレビュー（必須手順）

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開いて確認します。

## GitHub push 後の Vercel Preview

このリポジトリは静的ファイルのみで構成されているため、Vercel にそのままデプロイできます。

1. GitHub に push
2. Vercel で「New Project」→ 対象リポジトリを Import
3. Framework Preset は `Other`
4. Build Command は空欄、Output Directory も空欄（ルート配信）
5. Deploy

`vercel.json` で `cleanUrls` を有効にしているため、
Vercel 上では `/index` 形式ではなくクリーンURLで確認できます。

## 外部リンクについて

現時点ではプレースホルダーとして以下を設定しています。

- フロンティアファーマーズ: `https://www.city.koriyama.lg.jp/`
- 就農ナビアプリ: `https://www.city.koriyama.lg.jp/`
- 公式LINE: `https://line.me/R/ti/p/@koriyama`

公開前に正式URLへ置き換えてください。

## マージ要件向けチェック

PR の必須チェック用に GitHub Actions (`.github/workflows/static-site-check.yml`) を追加しています。
ローカルでも同じ確認を実行できます。

```bash
./scripts/check_site.sh
```
