# developerwebsite

## ローカルでサイトをホストする方法

``` bash
python -m http.server 8000
```

表示されたURLにブラウザからアクセス
例: http://[::]:8000/

---

## ヒーロースライドの画像変更手順 (Hero Slider Image Update Guide)

トップページのヒーロースライド（一番上の大きな画像エリア）の背景を画像に変更する手順です。

### 1. 画像の準備
*   **推奨サイズ:** `1920px × 1080px` (フルHD)
    *   PCとスマホで同じ画像を使用するため、**重要な被写体（人物やロゴなど）は必ず中央**に配置してください。スマホでは左右がトリミングされます。
*   **ファイル形式:** `.jpg`, `.png`, `.webp` など
*   **保存場所:** `images/` フォルダの中に保存してください。

### 2. CSSの編集
`style.css` を開き、各スライドの設定を変更します。

#### 変更前のコード（例: スライド1）
```css
.hero-slide-1 {
    background: linear-gradient(135deg, var(--color-primary) 0%, #60c5e3 100%);
}
```

#### 変更後のコード（画像を使う場合）
```css
.hero-slide-1 {
    /* グラデーションの行を削除またはコメントアウトし、以下を追加 */
    background-image: url('images/your-image-name.jpg'); 
    
    /* 必須設定: 画面いっぱいに広げ、中央を表示 */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    /* オプション: 文字を読みやすくするために画像を暗くする場合 */
    /* background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('images/your-image-name.jpg'); */
}
```

同様に `.hero-slide-2`, `.hero-slide-3` も変更してください。
