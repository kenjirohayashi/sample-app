# create-react-appを使わずにReact(TypeScript)環境を作成してみた。

<h2>URL</h2>
https://sample-app-8b987.web.app/

<h2>使用方法</h2>

```
npm start
```

<h3>使用した技術</h3>
<ul>
  <li>webpack (バンドル）</li>
  <li>Babel　（コンパイル）</li>
  <li>ESLint　（リンター）</li>
  <li>Prettier　（フォーマッター）</li>
  <li>github actions　(CI/CD）→push時に自動で、リンター・フォーマッターを走らせて、firebase(Hosting)を用いてデプロイしています。</li>
</ul>

<h3>概要</h3>
<p>
  React.memoとuseCallbackを使ってメモ化の検証をしてみました。</br>
  countUp1:メモ化されていないコンポーネント</br>
  countUp2:メモ化されているコンポーネント</br>
  countUp1はメモ化されていないので、count2が変更された時も再レンダリングされます。</br>
  countUp2はメモ化されているので、count1の変更時には再レンダリングされません。（count2に変更があった場合のみ再レンダリング）
</p>
