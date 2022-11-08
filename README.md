# 作品說明
	
 * **簡化網站設計之想法，主要功能有:**
    - 製作快速滑動至某段落之大綱。
    - 登入流程不再以跳至新頁面，改由一個較小的視窗代替。

# 系統說明
## 版本細節:
  - vue cli version: @vue/cli 5.0.8
  - node version: 16.18.0 (Currently using 64-bit executable)
  - vue version: 2.7.13

## 使用方式說明
- 建議使用`chrome`開啟。

  1. 先選擇sampleServer的資料夾執行下述之指令:
``` bash
	npm install
	npm start
```
  
  2. 返回app的資料夾下
``` bash
	npm install
	npm run serve
```
  
# 資料夾說明
	
  - 部分資料夾由專案生成時產生，未修改部分會以`未修改`作為標註。
## vue相關(不包含sampleServer在內)
  - src: 主要執行的資料夾
  - assets: 圖片等......相關資源(未修改)
  - client: 溝通server的client
  - components: 各頁面上元件

## nodejs相關(不包含sampleServer在內)	
  - bin: 存server(未修改)
  - configs: 存相關伺服器相關之設定檔
  - models: 後端模組
  - public: 伺服器共用資源(未修改)
  - routes: 可接受之路徑
  - views: 測試用的前端頁面(未修改)
  
# 使用技術
  - Vue Cli
  - NodeJs
  
# 使用範本
https://www.figma.com/file/EGWFKgjmtMw9ggi0aQ9ZTs/TheF2E?node-id=0%3A1