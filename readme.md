# 環境構築

## 事前準備

- GitとDockerのコマンド実行環境の整備

## Laradockを使ったLaravel開発環境構築

参考<br>
https://qiita.com/_Hiro_/items/68147ca57516fc0395ca

# 開発チートシート

## migration周りの生成

```bash
php artisan make:model Topic -m
```
※ `-m` コマンドを付与することで、 migrationファイルも生成される

生成ファイル
- Topic.php
- YYYY_MM-dd_XXXXXX_create_topics_table.php 

参考<br>
https://readouble.com/laravel/5.6/ja/migrations.html#columns

# pullした後にやること

- laradock起動

```bash
docker-compose up -d nginx mysql
```

- workspaceに入ってcomposerのインストール

```bash
## workspaceのrootに入る
docker-compose exec workspace bash
## composerのインストール
composer install
## composerをアップデートし、autoloadの設定
composer update
## .envファイルの設定
cp .env.example .env
###
## mysql周りの設定をlaradock側のenvに合わせて書き換える
###
## keyの生成
artisan key:generate
```
