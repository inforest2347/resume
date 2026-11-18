/* =========================================================
   個人網站設定檔 config.js
   ---------------------------------------------------------
   填法：
   - 只改引號裡的文字，不要刪掉逗號或大括號。
   - 留空字串 "" 代表還沒填。
   - showMissing: true  → 網站上會用黃色標出所有還沒填的地方，
                           並在頁首列出待填清單（自己檢查用）。
     showMissing: false → 正式上線用，沒填的項目會自動隱藏。
   - 中英文分開填：zh = 中文版，en = 英文版。
   ========================================================= */

window.SITE_CONFIG = {
  showMissing: False,
  defaultLang: "zh",          // 打開網站時預設語言："zh" 或 "en"

  /* ---------- 基本資料 ---------- */
  person: {
    name:      { zh: "歐瀞璞", en: "OU JING PU" },
    nickname:  { zh: "歐璞", en: "" },
    email:     "inforest.2347@gmail.com",
    phone:     "0972802829",         // 只會出現在中文版；不想公開就留空
    github:    "",                   // 完整網址，例 https://github.com/xxx
    portfolio: "",                   // 作品集網址，可留空
    linkedin:  "",                   // 主要給英文版用
    years:     "8–9",                // 工作年資
    location:  { zh: "台北・可遠端", en: "Taipei, Taiwan (UTC+8) · Remote" },
    tagline:   { zh: "沒有教，就自己去找答案。", en: "If no one teaches it, I go find the answer." }
  },

  /* ---------- 智財事務所（社內文書流程優化） ---------- */
  firm: {
    // 不想公開事務所名稱就留空，網站會顯示「智財法律事務所」
    name:  { zh: "", en: "" },
    title: { zh: "會計營運助理・內部系統開發", en: "Accounting & Operations Assistant, in-house systems" },
    start: { zh: "2022/03", en: "Mar 2022" },   // 到職年月
    users: "10",                     // 系統每天使用人數
    saved: { zh: "每月省下約 40 小時人工", en: "about 40 staff hours saved a month" }   // 優化後的成效
  },

  /* ---------- 匹克球營運系統 ---------- */
  pickleball: {
    // 需先取得業主同意才填；留空會顯示「匹克球教學與球敘新創」
    clientName: { zh: "", en: "" },
    students:   "420+",              // 系統內學員數（1_學員，2026/11/18 共 424 筆）
    signups:    "92",                // 線上報名筆數（2_報名，11/2–11/18，含已取消）
    signupsLabel: { zh: "11 月線上報名（至 11/18）", en: "online sign-ups, Nov 1–18" },
    reconcile:  { zh: "", en: "" },  // 對帳時間的改善（目前沒有實測數據，先留空）；，例 { zh: "對帳從每週半天縮短到 30 分鐘", en: "weekly reconciliation cut from half a day to 30 minutes" }
    testimonial: { zh: "", en: "", author: { zh: "", en: "" } }   // 業主推薦語（取得同意後填）
  },

  /* ---------- 其他工作經歷（期間可留空） ---------- */
  jobs: [
    { period: "", title: { zh: "日文業務助理", en: "Japanese-speaking Sales Assistant" },
      org: { zh: "國際貿易公司", en: "International trading company" } },
    { period: "", title: { zh: "門市人員", en: "Retail Associate" },
      org: { zh: "日文禮品店", en: "Japanese gift shop" } }
  ],

  /* ---------- 學歷與語言 ---------- */
  education: {
    school: { zh: "國立高雄師範大學", en: "National Kaohsiung Normal University" },
    year:   "2017"                   // 畢業年份
  },
  languages: [
    { zh: "中文（母語）", en: "Mandarin (native)" },
    { zh: "英文 TOEIC 850（聽說讀寫中上）", en: "English: TOEIC 850" },
    { zh: "日文 JLPT N1・BJT 商業日語能力 J2", en: "Japanese: JLPT N1, BJT Business Japanese J2" }
  ],

  /* ---------- 系統截圖（示意畫面，資料皆為虛構） ---------- */
  screenshots: [
    { src: "images/signup.png", caption: { zh: "學員報名頁（LINE）", en: "Student sign-up (LINE)" } },
    { src: "images/host.png",   caption: { zh: "場主排班與收班回報（LINE）", en: "Venue host shift and cash report (LINE)" } },
    { src: "images/notice.png", caption: { zh: "專利年費通知・客戶線上回覆", en: "Patent annuity notice, client reply page" } },
    { src: "images/line-student.png", caption: { zh: "學員帳號：圖文選單＋明日提醒", en: "Student account: rich menu and day-before reminder" } },
    { src: "images/line-notices.png", caption: { zh: "學員帳號：遞補、成班、未成團通知", en: "Student account: waitlist, class and cancellation notices" } },
    { src: "images/line-host.png",    caption: { zh: "場主帳號：排班提醒與付款確認", en: "Host account: shift reminder and payment check" } },
    { src: "images/admin.png",  caption: { zh: "內部營運網頁・待處理", en: "Internal operations web app, to-do queue" }, wide: true }
  ],

  /* ---------- 可承接項目對照（依市面常見接案項目整理） ----------
     status: "done" 已做過 / "partial" 部分做過 / "plan" 規劃中 / "no" 尚未做過
     group:  "package" 整套方案 / "item" 單項功能
     覺得判斷不對，直接改 status 或 note 即可。
  */
  capabilities: [
    { group: "package", name: { zh: "企業內部系統", en: "Internal business system" }, status: "done",
      note: { zh: "事務所 ERP、匹克球內部營運網頁", en: "Law firm ERP; internal ops web app" } },
    { group: "package", name: { zh: "預約系統", en: "Booking system" }, status: "done",
      note: { zh: "課程與球敘報名，含名額、候補遞補、成班判斷", en: "Class and session booking with capacity, waitlist and minimum headcount" } },
    { group: "package", name: { zh: "形象官網", en: "Brand website" }, status: "partial",
      note: { zh: "公開球敘發布頁、本個人網站", en: "Public session listing page; this site" } },
    { group: "package", name: { zh: "網路商店", en: "Online store" }, status: "no", note: { zh: "", en: "" } },
    { group: "package", name: { zh: "會員商店", en: "Members store" }, status: "no", note: { zh: "", en: "" } },

    { group: "item", name: { zh: "管理後台", en: "Admin console" }, status: "done",
      note: { zh: "角色權限、系統設定、待處理清單", en: "Roles, settings, to-do queue" } },
    { group: "item", name: { zh: "線上預約", en: "Online booking" }, status: "done",
      note: { zh: "LINE 內報名、改報、取消", en: "Book, switch and cancel inside LINE" } },
    { group: "item", name: { zh: "會員系統", en: "Member accounts" }, status: "done",
      note: { zh: "學員資料、家人代報、LINE 身分綁定", en: "Profiles, family sign-ups, LINE identity" } },
    { group: "item", name: { zh: "LINE 登入", en: "LINE login" }, status: "done",
      note: { zh: "LIFF 自動登入", en: "LIFF sign-in" } },
    { group: "item", name: { zh: "LINE 串接設定", en: "LINE setup" }, status: "done",
      note: { zh: "Provider、三個官方帳號、LIFF、圖文選單", en: "Provider, three official accounts, LIFF, rich menus" } },
    { group: "item", name: { zh: "LINE 推播", en: "LINE push messages" }, status: "done",
      note: { zh: "報名成功、明日提醒、遞補、成班通知", en: "Confirmations, reminders, waitlist and class notices" } },
    { group: "item", name: { zh: "LINE 機器人", en: "LINE bot" }, status: "done",
      note: { zh: "官方帳號 Webhook、歡迎訊息、圖文選單", en: "Webhooks, welcome messages, menus" } },
    { group: "item", name: { zh: "排班", en: "Staff scheduling" }, status: "done",
      note: { zh: "可排時間、請假、同時段衝堂檢查", en: "Availability, leave, clash checks" } },
    { group: "item", name: { zh: "打卡", en: "Check-in" }, status: "done",
      note: { zh: "學員簽到、場主點名、教練點名扣堂", en: "Student check-in, host and coach roll call" } },
    { group: "item", name: { zh: "報表", en: "Reports" }, status: "done",
      note: { zh: "月結、分潤、閒置場地成本、每日摘要信", en: "Monthly close, revenue share, idle venue cost, daily digest" } },
    { group: "item", name: { zh: "儲值金", en: "Stored credit" }, status: "done",
      note: { zh: "抵用金：退費轉入、報名自動折抵、家人共用", en: "Credits: refunds in, auto-applied, shared by family" } },
    { group: "item", name: { zh: "一頁式網頁", en: "Landing page" }, status: "done",
      note: { zh: "球敘發布頁、客戶年費回覆頁", en: "Session listing; client reply page" } },
    { group: "item", name: { zh: "庫存", en: "Inventory" }, status: "partial",
      note: { zh: "各據點球拍庫存與租借扣量", en: "Per-venue racket stock and rentals" } },
    { group: "item", name: { zh: "金流", en: "Payments" }, status: "partial",
      note: { zh: "轉帳回報＋末五碼對帳，尚未串金流商", en: "Transfer reports and reconciliation; no gateway yet" } },
    { group: "item", name: { zh: "電子發票", en: "E-invoices" }, status: "partial",
      note: { zh: "事務所批次產生發票開立檔", en: "Batch invoice files at the law firm" } },
    { group: "item", name: { zh: "AI 客服", en: "AI support" }, status: "partial",
      note: { zh: "內部客服知識庫；自行撰寫 MCP", en: "Internal support knowledge base; built my own MCP" } },
    { group: "item", name: { zh: "網站代管", en: "Hosting" }, status: "partial",
      note: { zh: "GitHub Pages 部署與一鍵發布", en: "GitHub Pages with one-click publish" } },
    { group: "item", name: { zh: "購物車訂單", en: "Cart and orders" }, status: "plan",
      note: { zh: "商品預購功能規劃中", en: "Pre-order feature in planning" } },
    { group: "item", name: { zh: "優惠券", en: "Coupons" }, status: "plan",
      note: { zh: "列在第二版規劃", en: "Planned for V2" } },
    { group: "item", name: { zh: "集點", en: "Loyalty points" }, status: "no", note: { zh: "", en: "" } },
    { group: "item", name: { zh: "Email 驗證", en: "Email verification" }, status: "no", note: { zh: "", en: "" } },
    { group: "item", name: { zh: "虛擬商品自動交付", en: "Digital delivery" }, status: "no", note: { zh: "", en: "" } },
    { group: "item", name: { zh: "SEO／GEO／AEO", en: "SEO / GEO / AEO" }, status: "no", note: { zh: "", en: "" } }
  ],

  // 清單以外、也能做的事
  extras: [
    { zh: "社內文書自動產生（請款單、通知書、對帳文件）", en: "Automated documents (bills, notices, reconciliation)" },
    { zh: "舊資料整理與遷移", en: "Legacy data cleanup and migration" },
    { zh: "收款對帳、分潤與人員費用結算", en: "Payment reconciliation, revenue share, staff payouts" },
    { zh: "自動化測試、一鍵部署與失敗還原", en: "Automated tests, one-click deploy with rollback" },
    { zh: "系統健康檢查與異常通知", en: "Health checks and alerts" },
    { zh: "需求說明書、報價與操作手冊", en: "Specs, quotes and user manuals" }
  ]
};
