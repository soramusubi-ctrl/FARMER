# 湖南町観光ガイド（静的サイト）

猪苗代湖と磐梯山を望む、郡山市湖南町の観光案内を想定した静的サイトです。

## ファイル構成

- `index.html` トップページ（観光ガイド本体）
- `styles.css` 共通スタイル
- `script.js` 画像アセット定義・ナビactive切替
- `assets/images/*.svg` 差し替え前提の公開用プレースホルダー画像
- `vercel.json` Vercel向け設定

## ローカル確認

```bash
python3 -m http.server 8000
```

`http://localhost:8000` を開いて表示確認してください。

## Vercelデプロイ

このリポジトリはビルド不要の静的配信としてデプロイできます。

1. Vercel Dashboard で **Add New Project** を選択
2. このリポジトリを Import
3. Framework Preset は **Other**（または自動検出）
4. Build Command / Output Directory は空欄のままでデプロイ

## コンテンツ運用メモ

- 画像URLは `script.js` の `IMAGE_ASSETS` に集約しています。将来自前写真に差し替える場合はここだけ更新してください。
- 地図エリアは `index.html` の `.map-placeholder` を Google マップ埋め込みへ置き換える設計です。
- 湖南七浜の名称は郡山市観光協会の「猪苗代湖畔・湖南七浜」案内に合わせています。


## マージ競合対応

- `README.md` / `index.html` / `styles.css` の競合解消後、内容を再確認して整合性を取り直しました。
