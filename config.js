/* =========================================================
   個人網站設定檔 config.js
   ---------------------------------------------------------
   填法：
   - 只改引號裡的文字，不要刪掉逗號、引號或大括號。
   - 留空字串 "" 代表還沒填，網站會自動隱藏。
   - showMissing: true  → 用黃色標出還沒填的基本資料（自己檢查用）
     showMissing: false → 正式上線用
   - 中英文分開填：zh = 中文版，en = 英文版。
   ========================================================= */

window.SITE_CONFIG = {
  showMissing: false,
  defaultLang: "zh",          // 打開網站時預設語言："zh" 或 "en"
  defaultCategory: "ops",     // 一進來先顯示的分類："ops" 營運 或 "admin" 行政文書

  /* ---------- 基本資料 ---------- */
  person: {
    name:      { zh: "歐瀞璞", en: "OU JING PU" },
    nickname:  { zh: "歐璞", en: "" },
    email:     "inforest.2347@gmail.com",
    phone:     "0972802829",         // 只會出現在中文版；不想公開就留空
    github:    "",                   // 完整網址，可留空
    portfolio: "",                   // 作品集網址，可留空
    linkedin:  "",                   // 主要給英文版用，可留空
    location:  { zh: "台北・可遠端", en: "Taipei, Taiwan (UTC+8) · Remote" },
    role:      { zh: "產品工程師｜營運系統與流程自動化", en: "Product Engineer | Operations Systems & Workflow Automation" },
    tagline:   { zh: "沒有教，就自己去找答案。", en: "If no one teaches it, I go find the answer." },
    intro: {
      zh: "8–9 年工作經驗，從第一線客服、門市、日商到事務所會計營運；現在把行政文書與營運流程做成系統。下面是我能承接的項目和實際做過的例子。",
      en: "8–9 years of work, from front-line customer service, retail and a Japanese company to accounting and operations at a law firm. Now I turn admin paperwork and operations into systems. Below is what I can build, with real examples."
    }
  },

  /* ---------- 能力（顯示在上方右側） ---------- */
  skills: [
    { title: "Tools", sub: { zh: "No-Code／Vibe coding", en: "No-code / vibe coding" },
      items: ["AppSheet", "Apps Script", "Make・n8n・Zapier", "API／Webhook", "LINE API・LIFF", "HTML／CSS／JS", "Claude・MCP", "Figma・Canva・Notion"] },
    { title: "Data", sub: { zh: "建模・視覺化", en: "Modelling · visualization" },
      items: ["Google Sheets・GCP", { zh: "SQL 基礎", en: "SQL basics" }, "Microsoft 365", "Looker Studio／Power BI"] },
    { title: "Core", sub: "What, When, How",
      items: [{ zh: "排定優先順序", en: "Priority" }, { zh: "效率", en: "Efficiency" }, { zh: "溝通", en: "Communication" }, { zh: "找出痛點", en: "Pain points" }, { zh: "更好的解法", en: "Better solutions" }] },
    { title: "Domain", sub: { zh: "領域知識", en: "Domain knowledge" },
      items: [{ zh: "專利與商標流程", en: "Patent & trademark workflows" }, { zh: "請款與發票", en: "Billing & invoicing" }, { zh: "稅務與外匯申報", en: "Tax & FX reporting" }, { zh: "預約・排班・結算", en: "Booking · shifts · payouts" }] }
  ],
  languages: [
    { zh: "中文（母語）", en: "Mandarin (native)" },
    { zh: "英文 TOEIC 850（聽說讀寫中上）", en: "English: TOEIC 850" },
    { zh: "日文 JLPT N1・BJT 商業日語能力 J2", en: "Japanese: JLPT N1, BJT Business Japanese J2" }
  ],

  /* ---------- 專案（項目展開後的「痛點 → 做法 → 成果」） ----------
     clientName／firmName 留空會顯示括號後的預設名稱 */
  projects: {
    firm: {
      title: { zh: "社內文書流程優化", en: "Document workflow overhaul" },
      org:   { zh: "智財法律事務所", en: "IP law firm, Taipei" },
      meta:  { zh: "2022/03 – 現在・唯一開發者", en: "Mar 2022 – present · sole developer" },
      pains: [
        { zh: "十多年的資料庫，冗餘資料像廢棄倉庫", en: "A 10+ year-old database full of redundant data" },
        { zh: "資料與實際作業斷軌，大量重工、錯誤率高", en: "Data cut off from real work: rework and errors" },
        { zh: "需求散落在各部門前輩的經驗裡", en: "Requirements lived in colleagues' heads" }
      ],
      approach: [
        { zh: "源頭：欄位規劃、表單關聯、資料移轉", en: "Source: fields, table relations, data migration" },
        { zh: "平台：AppSheet 前後端＋GAS 自動化", en: "Platform: AppSheet plus Apps Script automation" },
        { zh: "溝通：了解痛點、核對需求、優化功能", en: "Communication: pain points, checks, refinements" }
      ],
      results: [
        { zh: "每月省下約 40 小時人工", en: "About 40 staff hours saved a month" },
        { zh: "每天 10 人使用", en: "Used daily by 10 staff" },
        { zh: "整潔、方便維護擴充", en: "Clean and easy to extend" }
      ],
      stack: ["AppSheet", "Google Apps Script", "Webhooks", "Google Workspace"]
    },
    pickleball: {
      title: { zh: "營運管理系統", en: "Operations platform" },
      org:   { zh: "匹克球教學與球敘新創", en: "Pickleball coaching startup" },
      meta:  { zh: "獨立接案・2026/10 – 現在・唯一工程師", en: "Freelance · Oct 2026 – present · sole engineer" },
      pains: [
        { zh: "報名分散在第三方 App 與社群", en: "Sign-ups scattered across an app and chats" },
        { zh: "付款、現場收款與對帳靠人工", en: "Payments and reconciliation done by hand" },
        { zh: "規則口頭約定，資訊散在各群組", en: "Rules spoken, info spread across groups" }
      ],
      approach: [
        { zh: "規劃：需求說明書、資料模組、分階段報價", en: "Plan: spec, data model, phased quote" },
        { zh: "平台：三個 LINE 帳號＋內部網頁＋排程", en: "Platform: 3 LINE accounts, web app, jobs" },
        { zh: "維運：測試、一鍵部署、健康檢查", en: "Operate: tests, one-click deploy, health checks" }
      ],
      results: [
        { zh: "每個角色在自己的介面完成工作", en: "Each role works in its own screen" },
        { zh: "11 月 92 筆線上報名（至 11/18）", en: "92 online sign-ups, Nov 1–18" },
        { zh: "改版快，出錯可還原", en: "Fast releases that can be undone" }
      ],
      stack: ["JavaScript", "Apps Script", "LINE Messaging API", "LIFF", "Google Sheets API", "GitHub Pages"]
    }
  },

  /* ---------- 可承接項目：兩大類 ----------
     每個項目：
       status: "done" 已做過 / "partial" 部分做過
       feats:  對應的接案項目，[狀態, 名稱]（狀態 d = 已做過、p = 部分）
       where:  做過的地方
       shots:  範例圖片（images 資料夾）
       project: 展開後顯示哪個專案（firm / pickleball，可留空）
       demo:   true = 展開後可以實際操作 LINE 示範
       open:   true = 一進來就展開
  */
  services: {
    ops: {
      title: { zh: "營運（SOP／系統）", en: "Operations (SOP / systems)" },
      sub:   { zh: "預約報名・LINE 官方帳號・排班回報・內部系統・維運", en: "Booking · LINE accounts · shifts · internal tools · upkeep" },
      exp: {
        zh: "2026 年 10 月起獨立承接匹克球新創的整套營運系統，從需求訪談、資料模型、三個 LINE 官方帳號到內部營運網頁一個人完成。我把 AI 當工程團隊：規格、程式、測試交給它，規則判斷與驗收留在我手上。",
        en: "Since October 2026 I have built a pickleball startup's whole operations system on my own: interviews, data model, three LINE official accounts and an internal web app. I use AI as my engineering team for specs, code and tests, and keep the rules and sign-off myself."
      },
      nums: [["420+", { zh: "系統內學員", en: "students" }], ["99", { zh: "11 月場次", en: "sessions in Nov" }], ["102", { zh: "自動化測試檔", en: "test files" }]],
      items: [
        { title: { zh: "LINE 官方帳號整合", en: "LINE official accounts" }, status: "done", open: true, demo: true, project: "pickleball",
          desc: { zh: "學員、場主、教練各一個官方帳號，圖文選單打開 LIFF 頁面；報名成功、明日提醒、遞補、成班與未成團自動推播。", en: "One account each for students, hosts and coaches. Rich menus open LIFF pages; confirmations, reminders, waitlist and class notices go out automatically." },
          feats: [["d", { zh: "LINE 串接設定", en: "LINE setup" }], ["d", { zh: "LINE 推播", en: "Push messages" }], ["d", { zh: "LINE 機器人", en: "LINE bot" }], ["d", { zh: "LINE 登入", en: "LINE login" }]],
          where: [{ zh: "匹克球營運系統", en: "Pickleball platform" }],
          shots: [["images/line-student.png", { zh: "學員帳號：圖文選單＋明日提醒", en: "Student account: menu and reminder" }], ["images/line-notices.png", { zh: "遞補、成班、未成團通知", en: "Waitlist and class notices" }]] },
        { title: { zh: "預約報名系統", en: "Booking and sign-ups" }, status: "done", project: "pickleball",
          desc: { zh: "名額、候補遞補、成班門檻、付款期限、家人代報、抵用金，規則都可以在後台設定。", en: "Capacity, waitlist, minimum headcount, payment deadlines, family sign-ups and credits, all set in the admin." },
          feats: [["d", { zh: "預約系統", en: "Booking system" }], ["d", { zh: "線上預約", en: "Online booking" }], ["d", { zh: "會員系統", en: "Member accounts" }], ["d", { zh: "儲值金", en: "Stored credit" }]],
          where: [{ zh: "匹克球營運系統", en: "Pickleball platform" }],
          shots: [["images/signup.png", { zh: "學員報名頁", en: "Student sign-up" }]] },
        { title: { zh: "排班、打卡與現場回報", en: "Shifts, check-in and on-site reports" }, status: "done", project: "pickleball",
          desc: { zh: "可排時間與請假、衝堂檢查；現場點名、收班回報自動算應交金額；球拍庫存扣量。", en: "Availability, leave and clash checks; roll call and end-of-session cash reports with amounts calculated; racket stock." },
          feats: [["d", { zh: "排班", en: "Scheduling" }], ["d", { zh: "打卡", en: "Check-in" }], ["p", { zh: "庫存", en: "Inventory" }], ["p", { zh: "金流", en: "Payments" }]],
          where: [{ zh: "匹克球營運系統", en: "Pickleball platform" }],
          shots: [["images/host.png", { zh: "場主排班與收班回報", en: "Host shift and cash report" }], ["images/line-host.png", { zh: "排班提醒與付款確認", en: "Shift reminder and payment check" }]] },
        { title: { zh: "內部系統、後台與報表", en: "Internal tools, admin and reports" }, status: "done", project: "pickleball",
          desc: { zh: "待處理清單依嚴重度排序、角色權限、月結分潤與閒置成本報表。", en: "A to-do queue sorted by urgency, role permissions, monthly close, revenue share and idle-cost reports." },
          feats: [["d", { zh: "企業內部系統", en: "Internal system" }], ["d", { zh: "管理後台", en: "Admin console" }], ["d", { zh: "報表", en: "Reports" }]],
          where: [{ zh: "匹克球內部營運網頁", en: "Pickleball ops web app" }, { zh: "智財事務所 ERP", en: "Law firm ERP" }],
          shots: [["images/admin.png", { zh: "內部營運網頁・待處理", en: "Ops web app, to-do queue" }]] },
        { title: { zh: "介面設計與易用性（UI／UX）", en: "Interface design and usability (UI/UX)" }, status: "done", project: "pickleball",
          desc: { zh: "依使用回饋調整介面：放大字級、把「你的球面」做成醒目提示；為年長學員做操作教學圖卡；新畫面先出 mockup 給業主確認再開發。", en: "Interfaces tuned from user feedback: larger text, a clear 'your court' callout, step-by-step cards for older members, and mockups approved before building." },
          feats: [["d", { zh: "介面優化", en: "UI improvements" }], ["d", "Mockup"], ["d", { zh: "圖文選單設計", en: "Rich menu design" }]],
          where: [{ zh: "匹克球營運系統", en: "Pickleball platform" }],
          shots: [["images/signup.png", { zh: "報名頁：名額、成班門檻一眼看到", en: "Sign-up: seats and threshold at a glance" }]] },
        { title: { zh: "流程診斷與 SOP", en: "Process review and SOPs" }, status: "done", project: "pickleball",
          desc: { zh: "找出流程裡互相矛盾的規則，決定哪些節點全自動、哪些停下來讓人判斷，寫成操作手冊。", en: "Find rules that contradict each other, decide which steps run on their own and which stop for a person, and write it up as a manual." },
          feats: [["d", { zh: "流程設計", en: "Process design" }], ["d", { zh: "操作手冊", en: "Manuals" }]],
          where: [{ zh: "匹克球營運系統", en: "Pickleball platform" }] },
        { title: { zh: "數據分析與儀表板", en: "Data analysis and dashboards" }, status: "done", project: "pickleball",
          desc: { zh: "月結、分潤與閒置場地成本儀表板；記錄開啟時間與慢請求，用中位數與 P90 決定先優化哪一段。", en: "Dashboards for monthly close, revenue share and idle venue cost; open times and slow requests logged, with median and P90 deciding what to speed up first." },
          feats: [["d", { zh: "報表", en: "Reports" }], ["d", { zh: "儀表板", en: "Dashboards" }], ["d", { zh: "效能量測", en: "Performance logs" }]],
          where: [{ zh: "匹克球營運系統", en: "Pickleball platform" }] },
        { title: { zh: "角色權限與組織分工", en: "Roles and permissions" }, status: "done", project: "pickleball",
          desc: { zh: "把團隊拆成清楚的角色，規劃每個角色能看、能改哪些資料，以及各自看到的選單與工作區。", en: "Split the team into clear roles and set what each can see and change, plus the menus and workspace each one gets." },
          feats: [["d", { zh: "權限表", en: "Permission table" }], ["d", { zh: "角色分工", en: "Role design" }], ["d", { zh: "管理後台", en: "Admin console" }]],
          where: [{ zh: "匹克球營運系統（五角色、8 角色 × 23 項權限表）", en: "Pickleball platform (5 roles; 8 roles × 23 data areas)" }] },
        { title: { zh: "系統維運與 AI 工具導入", en: "Upkeep and AI tooling" }, status: "done", project: "pickleball",
          desc: { zh: "自動化測試、一鍵部署與失敗還原、健康檢查；自製 MCP 與長期脈絡庫（ContextPack），讓 AI 照團隊的方式工作。", en: "Automated tests, one-click deploy with rollback, health checks; my own MCP servers and a long-term context store (ContextPack) so AI works the team's way." },
          feats: [["d", { zh: "測試與部署", en: "Tests and deploys" }], ["d", { zh: "健康檢查", en: "Health checks" }], ["p", { zh: "AI 客服", en: "AI support" }]],
          where: [{ zh: "匹克球營運系統", en: "Pickleball platform" }, { zh: "個人工具", en: "Personal tools" }] }
      ],
      notyet:  [{ zh: "網路商店", en: "Online store" }, { zh: "集點", en: "Loyalty points" }, { zh: "Email 驗證", en: "Email verification" }, { zh: "SEO／GEO／AEO", en: "SEO / GEO / AEO" }],
      planned: [{ zh: "購物車訂單", en: "Cart and orders" }, { zh: "優惠券", en: "Coupons" }]
    },
    admin: {
      title: { zh: "行政文書", en: "Admin and documents" },
      sub:   { zh: "文件自動產生・請款對帳・資料整理・說明文件・日英文", en: "Generated documents · billing · data cleanup · manuals · JP/EN" },
      exp: {
        zh: "做過日英文客服、門市、日商與日文業務助理；2022 年起在智財事務所負責會計營運，從整理社內文書流程開始自學做系統。習慣先和第一線人員確認痛點，再決定哪些交給系統、哪些留給人。",
        en: "Customer service in Japanese and English, retail, a Japanese company and sales support. Since 2022 I have run accounting and operations at an IP law firm, where I taught myself to build systems by fixing our paperwork. I start from the front line's pain points, then decide what goes to the system and what stays with people."
      },
      nums: [["40 h", { zh: "每月省下人工", en: "saved a month" }], ["10", { zh: "每天使用人數", en: "daily users" }], ["10+", { zh: "年舊資料整併", en: "years of data merged" }]],
      items: [
        { title: { zh: "社內文書自動產生", en: "Generated office documents" }, status: "done", open: true, project: "firm",
          desc: { zh: "請款單、通知書、對帳文件從資料直接產生；客戶用專屬連結線上回覆，結果自動回寫。", en: "Bills, notices and reconciliation documents produced straight from the data; clients reply through a private link and answers write back." },
          feats: [["d", { zh: "企業內部系統", en: "Internal system" }], ["d", { zh: "一頁式網頁", en: "Landing page" }], ["d", { zh: "文件自動產生", en: "Document generation" }]],
          where: [{ zh: "智財事務所 ERP", en: "Law firm ERP" }],
          shots: [["images/notice.png", { zh: "專利年費通知・客戶線上回覆", en: "Patent annuity notice, client reply" }]] },
        { title: { zh: "請款、發票與收款對帳", en: "Billing, invoices and reconciliation" }, status: "done", project: "firm",
          desc: { zh: "批次產生發票開立檔；收款以中介明細銷帳，避免多個自動化互相覆蓋；轉帳回報末五碼對帳。", en: "Invoice files in batches; payments matched through an intermediate table so automations never overwrite each other; transfer reports reconciled by the last five digits." },
          feats: [["p", { zh: "電子發票", en: "E-invoices" }], ["p", { zh: "金流", en: "Payments" }], ["d", { zh: "收款對帳・分潤結算", en: "Reconciliation · payouts" }]],
          where: [{ zh: "智財事務所 ERP", en: "Law firm ERP" }, { zh: "匹克球營運系統", en: "Pickleball platform" }],
          shots: [["images/line-host.png", { zh: "主理人每天收到待確認的付款回報", en: "Owner confirms payment reports daily" }]] },
        { title: { zh: "舊資料整理與遷移", en: "Legacy data cleanup and migration" }, status: "done", project: "firm",
          desc: { zh: "盤點欄位、重建表單關聯，把舊資料搬進新系統並逐筆對帳後才上線。", en: "Audit fields, rebuild table relations, move old records into the new system and reconcile them before launch." },
          feats: [["d", { zh: "資料遷移", en: "Data migration" }], ["d", { zh: "報表", en: "Reports" }]],
          where: [{ zh: "事務所十多年資料庫", en: "Law firm's 10+ year database" }, { zh: "匹克球上線前整月資料", en: "A month of pickleball records" }] },
        { title: { zh: "需求文件、教育訓練與知識庫", en: "Specs, training and knowledge base" }, status: "done", project: "pickleball",
          desc: { zh: "需求說明書、資料模組、分階段報價，統一格式的 A4 文件；各角色操作手冊、內部客服知識庫，以及依實際畫面做的教學圖卡。", en: "Specs, data models and phased quotes as consistent A4 documents; role manuals, an internal support knowledge base and teaching cards made from real screens." },
          feats: [["d", { zh: "需求說明書・報價", en: "Specs · quotes" }], ["d", { zh: "操作手冊", en: "Manuals" }], ["d", { zh: "客服知識庫", en: "Knowledge base" }], ["d", { zh: "教學圖卡", en: "Teaching cards" }]],
          where: [{ zh: "匹克球營運系統", en: "Pickleball platform" }] },
        { title: { zh: "日英文對外文件與在地化", en: "Japanese and English correspondence" }, status: "done",
          desc: { zh: "中、英、日三語的對外信件、客戶通知與說明文件；系統畫面與文件可依日本或歐美客戶在地化。", en: "Letters, client notices and documents in Chinese, English and Japanese; screens and documents localized for Japanese or Western clients." },
          feats: [["d", { zh: "日文 JLPT N1・BJT J2", en: "Japanese JLPT N1 · BJT J2" }], ["d", { zh: "英文 TOEIC 850", en: "English TOEIC 850" }], ["d", { zh: "日文信件處理", en: "Japanese business email" }]],
          where: [{ zh: "日商工作經驗", en: "Japanese company" }, { zh: "日文業務助理（國貿）", en: "Japanese-speaking sales assistant" }, { zh: "日英文客服", en: "JP/EN customer service" }] }
      ]
    }
  }
};
