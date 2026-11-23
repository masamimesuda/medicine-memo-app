# お薬手帳アプリ
毎日複数のお薬を服用している方が、自分の薬を確認できるアプリ

## アプリケーションの概要
処方されたお薬を整理し、確認できるアプリです。
お薬情報の登録・編集・削除や一覧での確認ができます。

## 開発した背景や理由
自分が病気で服薬しているのですが、他の病院にかかったときに紙のお薬手帳を持参して居なくてもすぐに確認できるようなシステムが欲しかったためです


## 主な使⽤技術 
Category：Technology Stack
Frontend：JavaScript, React, Vite
Backend：Java 21, Spring Boot, Spring Data JPA 
Authentication：Spring Security
Database：H2 Database
Build tool：Maven (mvnw), npm 
Design：draw.io
etc.：Git, GitHub, VS Code 


## インフラ構成図
<img width="577" height="377" alt="インフラ構成図" src="https://github.com/user-attachments/assets/0bd3943b-ac29-400c-ad73-3da1b69a34b6" />


## ER図
<img width="575" height="375" alt="ER図" src="https://github.com/user-attachments/assets/d227d5a5-7328-40ed-8c0e-52dc9f15d732" />


## ローカル環境での起動方法
#### テスト用ログイン情報
- ユーザー名：`user`
- パスワード：`password`
### セットアップ
#### 必要環境
- Java21
- Node.js
- H2 Database
- Git

```bash
#1.リポジトリをクローン
git clone https://github.com/masamimesuda/medicine-memo-app.git
cd medicine-memo-app

#2.バックエンド(Spring Boot)を起動
./mvnw spring-boot:run
# http://localhost:8080 で起動します


#3.フロントエンド(React)を起動
cd frontend
npm install
npm run dev
```


## 画面イメージ
### ログイン画面
<img width="437" height="601" alt="スクリーンショット 2026-11-21 232613" src="https://github.com/user-attachments/assets/decbbd65-f691-4175-9429-130bbafea03a" />

### お薬管理画面（登録・一覧）
<img width="485" height="851" alt="スクリーンショット 2026-11-21 232723" src="https://github.com/user-attachments/assets/b0862fd2-119c-4cc6-9790-7d96c3b17b0a" />
