# my-turbowarp-project

> TurboWarp / Scratch 向けの ChatGPT 拡張機能

## 概要

TurboWarp（Scratch の高機能版）上で ChatGPT に質問できるカスタム拡張機能です。
Scratch のブロック「ChatGPTに〇〇と聞く」から自前の API サーバーを経由して OpenAI に問い合わせ、返答をスクリプト内で受け取ることができます。

- `script.js`：TurboWarp 用拡張機能本体（ChatGPT 呼び出しブロックを追加）
- `scratch-extentions.json`：拡張機能の設定ファイル
- `index.html`：TurboWarp Packager でパッケージ化したプロジェクト

## 使用技術

- JavaScript
- TurboWarp / Scratch 拡張機能 API
- OpenAI API（バックエンド経由）

## 動作環境 / 注意事項

- バックエンドサーバー（`https://scratch-bot.masafy.org/chat`）が稼働している必要があります
- 1日の利用上限に達した場合はエラーメッセージが返ります
- TurboWarp 上でカスタム拡張機能として `script.js` を読み込んで使用します

## ライセンス

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

このプロジェクトは **MIT ライセンス** のもとで公開しています。  
使用・参考にした際はできる限り作者へのクレジット表記をお願いします。

© 2025 masafykun (https://github.com/masafykun)
