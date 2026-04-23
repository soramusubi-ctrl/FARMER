# 湖南町観光ガイド（静的サイト）

猪苗代湖と磐梯山を望む、郡山市湖南町の観光案内を想定した静的サイトです。

## ページ構成

- `index.html` トップページ（観光ガイド）
- `farmers.html` / `steps.html` / `news.html` / `contact.html` 既存のサブページ
- `styles.css` 共通スタイル
- `vercel.json` Vercel向け設定

## ローカル確認

```bash
python3 -m http.server 8000
```

`http://localhost:8000` を開いて表示確認してください。

## Vercelデプロイ

このリポジトリはビルド不要の静的配信としてデプロイできます。

### 1) GitHub連携でデプロイ（推奨）

1. Vercel Dashboard で **Add New Project** を選択
2. このリポジトリを Import
3. Framework Preset は **Other**（または自動検出）
4. Build Command は空欄、Output Directory も空欄のままでデプロイ

### 2) CLIでデプロイ

```bash
npm i -g vercel
vercel
vercel --prod
```

## 補足

- `vercel.json` で `cleanUrls` とセキュリティヘッダを設定しています。
- トップページの画像はプロトタイプとして外部画像URLを使用しています。運用時は自前アセットへ差し替えを推奨します。
