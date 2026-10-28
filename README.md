# 資源教室小教具｜weiwei 老師

開啟 `index.html` 即可預覽首頁。網站採用純 HTML / CSS / JavaScript，不需要額外安裝工具。

## 資料夾
- `index.html`：網站入口
- `style.css`：網站配色與版面
- `app.js`：首頁、科目、課次與活動頁的導航功能
- `site-data.js`：**最常編輯的檔案**，用來新增科目、課次、活動及修改網站名稱
- `games/`：可直接開啟的 HTML 互動遊戲

## 如何新增課次
在 `site-data.js` 找到對應的科目，其 `lessons:[]` 中加入：
```js
{id:"lesson7",title:"第七課｜課名",activities:[]}
```

## 如何新增活動
將遊戲 HTML 放在 `games/`，再把活動加入該課的 `activities`：
```js
{id:"words",title:"本課生字遊戲",description:"找出生字的正確位置",type:"拖曳遊戲",url:"games/words.html"}
```

## 如何新增第五個科目
在 `site-data.js` 的 `subjects` 陣列再增加一個物件，使用不重複的 `id`。可選用 `tone:"sage"`、`"peach"`、`"sky"`、`"lilac"`。

## GitHub Pages
1. 上傳 `index.html`、`style.css`、`app.js`、`site-data.js`、`games` 資料夾，並保留原本路徑。
2. Repository → Settings → Pages → Deploy from a branch → main → /(root) → Save。
3. 往後修改 `site-data.js` 或新增 `games` 裡的檔案，再 Commit / Push 即可更新。

## 不希望被 Google 搜尋
首頁與三個遊戲 HTML 已設定 `noindex, nofollow`，以後新增遊戲也要在 `<head>` 加入：
```html
<meta name="robots" content="noindex, nofollow">
```
這不是登入限制。GitHub Pages 網站及公開儲存庫仍可能被其他人透過網址存取。不要放學生個資或未經授權公開的內容。
