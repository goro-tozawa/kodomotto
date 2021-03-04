# :seedling: こどもっと
## 子どものいる施設と隙間時間で働きたいユーザーを結びつけるアプリケーション
<img width="1440" alt="スクリーンショット 2021-02-17 19 14 19" src="https://user-images.githubusercontent.com/75603420/108190025-be5eaf80-7154-11eb-871e-e1d1c9079808.png">

# :blue_book: 要件定義
  1. アプリケーション概要 
  2. URL
  3. テスト用アカウント
  4. 利用方法
  5. 目標にした課題
  6. 洗い出した要件
  7. 実装予定の機能
  8. データベース設計
  9. ローカルでの動作作法

# :house: アプリケーション概要
 「こどもっと」は一般ユーザーが子どもに関わる施設で簡単に働くことのできるアプリです。
 
  このアプリで行えることは主に3つあります。

   -  一般ユーザーは自分の好きな時間に働くことができる
   -  施設側は好きな時間帯に一般ユーザーを雇うことができる
   -  一般ユーザーと施設側がチャットルームを通じてコミュニケーションをとることができる

    このアプリを使用することで一般ユーザーは隙間時間に子どもと関わる場所で働くことができる。施設側は「人手不足による正職員の負担の減少」、「高額な派遣会社との契約をしなくて済む」などのメリットがある。

# :globe_with_meridians: App.URL
  ## https://go-to-hoiku.herokuapp.com/  

# :page_facing_up: テスト用アカウント
## - 一般ユーザー  
   ### - アカウント名: test01
   ### - パスワード:  test01 
   
   
## - 施設ユーザー  
   ### - アカウント名: test02  
   ### - password: test02


 

# :computer: 利用方法
## 一般ユーザー
   - 一般ユーザーのトップページに遷移し、新規登録を行う
   ![01bcba4405fb93dae860e26cd5a1e10a](https://user-images.githubusercontent.com/75603420/108199670-b7d63500-7160-11eb-8120-a429e4a115f3.gif)

   - トップページのリンクから仕事先を選択する。 
   ![23fb2398837c05ed52664a2cdd503154](https://user-images.githubusercontent.com/75603420/108200888-6d55b800-7162-11eb-82be-58c327fbb802.gif)

## 施設ユーザー
   - 施設ユーザーのトップページに遷移し、新規登録を行う 
   ![b62dfe007af2d5ac1a05705c81786cf1](https://user-images.githubusercontent.com/75603420/108612818-5e575a00-742f-11eb-98a2-1a1c75058deb.gif)
   

   - 「新規仕事」、「仕事を依頼する」のボタンを押し、仕事の依頼内容を作成
   ![dace628845f3e5d0875ee13fb23c57b4](https://user-images.githubusercontent.com/75603420/108612867-bb531000-742f-11eb-86cd-81fb20bf0be0.gif)
   ![6b94b9aac40f5b24af48028f59320a66](https://user-images.githubusercontent.com/75603420/108612915-12f17b80-7430-11eb-8e8d-2a158d1b4814.gif)

   - 仕事を依頼したらトップページに表示される

# :octocat: 目指した目標
  -  ユーザーを引き寄せるアニメーション
  ![9087d021ef070f892c10ec401cbb779b](https://user-images.githubusercontent.com/75603420/108612513-cb1d2500-742c-11eb-84fe-fb444b0cd69f.gif)

  - 「農how」のように一般ユーザーの隙間時間に子どもに関わる施設で働いてもらうことで施設が抱えている人手不足の問題を解消する目的で「go-to-hoiku」を作成。  
  - 引用
  > 「農how」 URL:https://agritrio.co.jp/nouhow.html


  -  deviseでカラム内容の違うユーザーを２つ、作成する。

# :bathtub: 洗い出した要件
  - 一般ユーザーと施設ユーザーの2つのユーザー管理機能を実装
  - 一般ユーザーが仕事を探し、選択することのできるページ
  - 施設ユーザーは仕事を依頼することができる

# :clipboard: 実装予定の機能

  - index.htmlをRubyに変換し、アニメーションを
  反映
  - カレンダー（働ける日程をカレンダーから選択するため）
  - チャットルーム追加

# :wrench: データベース設計

## users テーブル

| Column | Type | Options |
| ---------- | -------- | -------- |
| name | string | null: false |
| name_kana | string | null: false|
| birthday | date | null: false |
| nickname | string | null: false|
| postal_code | string | null: false |
| email | string | null: false | unique: true |
| encrypted_password | string | null: false |
| qualification | string | null: false |
<!-- 資格を持っているか -->
| gender | string | null: false|
<!-- 男女でできる仕事が違う可能性があるため -->
| self_introduction | text | -------- |
- has_many :works
- belongs_to :childcare_user
## childcare_users テーブル

| Column | Type | Options |
| ---------- | -------- | -------- |
| facility_name| string | null: false |
<!-- 施設名 -->
| facility_name_kana | string | null: false|
| business_form | string | null: false|
<!-- 事業形態 -->
| facility_address | string | null: false|
| facility_phone_number | string | null: false|
| representative | string | null: false|
<!-- 代表者 -->
| representative_phone_number | string | null: false|
| times | integer | null: false |
| encrypted_password | string | null: false |
| self_introduction | text | -------- |
- has_many :works

## works
<!-- 検索機能を追加実装したらいいかも？ -->
| Column | Type | Options |
| ---------- | -------- | -------- |
| work_title | string | null: false|
| facility_name| string | null: false|
| job_description | string | null: false|
<!-- 仕事内容 -->
| person | integer | null: false |
<!-- 募集人数 -->
| recruiting_days| datetime | null: false |
| recruiting_times| integer | null: false |
| hourly_wage | integer | null: false |
| childcare_user | references | null: false |

- belongs_to :user
- belongs_to :childcare_user

## purchasesテーブル

|  Column | Type | Options |
| ------------ | ------- | ---------- |
| childcare_user | references | null: false, foreign_key: true |
| work | references | null: false, foreign_key: true |

## domiciles
|  Column | Type | Options |
| ------------ | ------- |---------|
| postal_code | string | null: false |
| area_id | integer | null: false |
| municipality | string | null: false |
| address | string | null: false |
|  building_name | string | ----- |
| phone_number | string | null: false |
| gender | string | null: false|
|  purchase | references | null: false |

### Association
- belongs_to :purchase


#  :iphone: ローカルでの動作作法
 - git clone
   - URL: https://github.com/goro-tozawa/go-to-hoiku.git


 - ローカルで動作させる手順
  - ターミナルでrails s
  - URL: http://localhost:3000/
  

 - パッケージ
  - RUBYGEMS VERSION: 3.0.3
  - RUBY VERSION: 2.6.5 (2019-10-01 patchlevel 114) [x86_64-darwin18]
  - INSTALLATION DIRECTORY: /Users/tozawatagairou/.rbenv/versions/2.6.5/lib/ruby/gems/2.6.0
  - USER INSTALLATION DIRECTORY: /Users/tozawatagairou/.gem/ruby/2.6.0
  - RUBY EXECUTABLE: /Users/tozawatagairou/.rbenv/versions/2.6.5/bin/ruby
  - GIT EXECUTABLE: /usr/bin/git
  - EXECUTABLE DIRECTORY: /Users/tozawatagairou/.rbenv/versions/2.6.5/bin
  - SPEC CACHE DIRECTORY: /Users/tozawatagairou/.gem/specs
  - SYSTEM CONFIGURATION DIRECTORY: /Users/tozawatagairou/.rbenv/versions/2.6.5/etc
  - RUBYGEMS PLATFORMS:
    - ruby
    - x86_64-darwin-18
  - GEM PATHS:
     - /Users/tozawatagairou/.rbenv/versions/2.6.5/lib/ruby/gems/2.6.0
     - /Users/tozawatagairou/.gem/ruby/2.6.0
  - GEM CONFIGURATION:
     - :update_sources => true
     - :verbose => true
     - :backtrace => false
     - :bulk_threshold => 1000
  - REMOTE SOURCES:
     - https://rubygems.org/
  - SHELL PATH:
     - /Users/tozawatagairou/.rbenv/versions/2.6.5/bin
     - /usr/local/Cellar/rbenv/1.1.2/libexec
     - /usr/local/opt/mysql@5.6/bin
     - /Users/tozawatagairou/.rbenv/shims
     - /usr/local/bin
     - /usr/bin
     - /bin
     - /usr/sbin
     - /sbin


  
