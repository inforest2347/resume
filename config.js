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
      title: { zh: "社內文書與案件管理系統", en: "Document and case management system" },
      org:   { zh: "智財法律事務所", en: "IP law firm, Taipei" },
      meta:  { zh: "2022/03 – 現在・唯一開發者", en: "Mar 2022 – present · sole developer" },
      pains: [
        { zh: "十多年的資料庫，冗餘資料像廢棄倉庫", en: "A 10+ year-old database full of redundant data" },
        { zh: "全公司共用一個大系統，讀取慢、大量寫入常卡住", en: "One big shared app: slow to load, bulk writes stalled" },
        { zh: "資料與實際作業斷軌，重工多、錯誤率高", en: "Data cut off from real work: rework and errors" }
      ],
      approach: [
        { zh: "資料：拆成 6 個資料庫檔、54 張表，從共用參照到財務分層", en: "Data: 6 database files, 54 tables, layered from shared references to finance" },
        { zh: "平台：依部門切成工作台，需要時用連結互相跳轉", en: "Platform: one workspace per department, linked to each other" },
        { zh: "自動化：26 項編號管理，大量寫入改成批次處理並留執行紀錄", en: "Automation: 26 numbered jobs, bulk writes batched with run logs" }
      ],
      results: [
        { zh: "每月省下約 40 小時人工", en: "About 40 staff hours saved a month" },
        { zh: "每天 10 人使用", en: "Used daily by 10 staff" },
        { zh: "400 件年費的大客戶也能線上回覆", en: "Clients with 400 annuities reply online" }
      ],
      stack: ["AppSheet", "Google Apps Script", "Webhooks", "AppSheet API", "Google Docs", "Google Workspace"]
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
     project:  這一類的代表專案（上方 projects 的 firm / pickleball），只顯示一次
     items 裡：
       shots 有圖片 → 當作「重點展示」，圖片右側展示，points 是這個項目的重點
       沒有 shots   → 只列在下方清單
       shots 每張：[圖片路徑, 說明, "phone" 或 "wide"]
       feats：對應的接案項目，[狀態, 名稱]（d = 已做過、p = 部分）
       demo: "line" 或 "annuity" → 顯示「實際操作」按鈕，可以直接操作範例
  */
  services: {
    ops: {
      title: { zh: "營運（SOP／系統）", en: "Operations (SOP / systems)" },
      sub:   { zh: "預約報名・LINE 官方帳號・排班回報・內部系統・數據", en: "Booking · LINE accounts · shifts · internal tools · data" },
      exp: {
        zh: "2026 年 10 月起獨立承接匹克球新創的整套營運系統，從需求訪談、資料模型、三個 LINE 官方帳號到內部營運網頁一個人完成。我把 AI 當工程團隊：規格、程式、測試交給它，規則判斷與驗收留在我手上。",
        en: "Since October 2026 I have built a pickleball startup's whole operations system on my own: interviews, data model, three LINE official accounts and an internal web app. I use AI as my engineering team for specs, code and tests, and keep the rules and sign-off myself."
      },
      nums: [["420+", { zh: "系統內學員", en: "students" }], ["99", { zh: "11 月場次", en: "sessions in Nov" }], ["102", { zh: "自動化測試檔", en: "test files" }]],
      project: "pickleball",
      items: [
        { title: { zh: "LINE 官方帳號整合", en: "LINE official accounts" }, demo: "line",
          desc: { zh: "學員、場主、教練各一個官方帳號，每個角色的圖文選單只放自己會用到的功能。", en: "One account each for students, hosts and coaches; each rich menu holds only what that role uses." },
          points: [
            { zh: "圖文選單打開 LIFF 頁面，在 LINE 裡完成報名、付款回報、請假與簽到", en: "Rich menus open LIFF pages for sign-up, payment reports, leave and check-in inside LINE" },
            { zh: "報名成功、明日提醒、候補遞補、成班通知自動推播", en: "Confirmations, day-before reminders, waitlist and class notices sent automatically" },
            { zh: "未成團時學員直接在訊息裡選改報、抵用金或退款", en: "When a session is cancelled, students pick switch, credit or refund right in the message" }
          ],
          feats: [["d", { zh: "LINE 串接設定", en: "LINE setup" }], ["d", { zh: "LINE 推播", en: "Push messages" }], ["d", { zh: "LINE 機器人", en: "LINE bot" }], ["d", { zh: "LINE 登入", en: "LINE login" }]],
          shots: [["images/line-student.png", { zh: "圖文選單＋明日提醒", en: "Rich menu and reminder" }, "phone"], ["images/line-notices.png", { zh: "遞補、成班、未成團通知", en: "Waitlist and class notices" }, "phone"]] },
        { title: { zh: "預約報名系統", en: "Booking and sign-ups" },
          desc: { zh: "依據點列出課程與球敘，名額、成班門檻一眼看到。", en: "Classes and sessions listed by venue, with seats and minimum headcount at a glance." },
          points: [
            { zh: "名額、候補遞補、成班門檻、付款期限都能在後台設定", en: "Capacity, waitlist, minimum headcount and payment deadlines set in the admin" },
            { zh: "可以幫家人一起報名，費用由同一人付", en: "Family members can be signed up and paid for together" },
            { zh: "取消轉抵用金，下次報名自動折抵", en: "Cancellations become credit that is applied automatically next time" }
          ],
          feats: [["d", { zh: "預約系統", en: "Booking system" }], ["d", { zh: "會員系統", en: "Member accounts" }], ["d", { zh: "儲值金", en: "Stored credit" }]],
          shots: [["images/signup.png", { zh: "學員報名頁", en: "Student sign-up" }, "phone"]] },
        { title: { zh: "排班、打卡與現場回報", en: "Shifts, check-in and on-site reports" },
          desc: { zh: "場主在 LINE 看排班、點名，收班時回報現場收款。", en: "Hosts see shifts, take roll and report on-site cash in LINE." },
          points: [
            { zh: "每一面的人數、已付／未付、候補一目了然", en: "Headcount, paid and unpaid, and waitlist per court" },
            { zh: "收班回報填人數與現金，應交金額即時算好", en: "End-of-session report calculates the amount due as you type" },
            { zh: "排班自動檢查可排時間、請假與衝堂", en: "Scheduling checks availability, leave and clashes" }
          ],
          feats: [["d", { zh: "排班", en: "Scheduling" }], ["d", { zh: "打卡", en: "Check-in" }], ["p", { zh: "庫存", en: "Inventory" }]],
          shots: [["images/host.png", { zh: "場主排班與點名", en: "Host shift and roll call" }, "phone"], ["images/line-report.png", { zh: "收班回報", en: "End-of-session report" }, "phone"]] },
        { title: { zh: "內部系統與管理後台", en: "Internal tools and admin" },
          desc: { zh: "營運人員每天從「待處理」開始，需要人判斷的事情依嚴重度排好。", en: "Staff start each day from a to-do queue of items that need a person, sorted by urgency." },
          points: [
            { zh: "付款回報、場主交付、指派場主等待辦集中處理", en: "Payment reports, host hand-overs and host assignments in one queue" },
            { zh: "依角色顯示不同選單與工作區", en: "Menus and workspaces differ by role" },
            { zh: "每小時系統健康檢查，有異常才通知", en: "Hourly health checks that alert only when something is wrong" }
          ],
          feats: [["d", { zh: "企業內部系統", en: "Internal system" }], ["d", { zh: "管理後台", en: "Admin console" }]],
          shots: [["images/admin.png", { zh: "內部營運網頁・待處理", en: "Ops web app, to-do queue" }, "wide"]] },
        { title: { zh: "數據分析、儀表板與社群來源追蹤", en: "Dashboards and social lead tracking" },
          desc: { zh: "每篇社群貼文帶自己的來源碼，看得到哪一篇帶來報名與營收。", en: "Every social post carries its own source code, so you can see which post brought sign-ups and revenue." },
          points: [
            { zh: "來源碼格式：平台_形式_日期_代號，發布頁自動帶入", en: "Source codes as platform_format_date_id, added by the publishing page" },
            { zh: "月結、各據點營收與分潤、閒置場地成本", en: "Monthly close, revenue and revenue share by venue, idle venue cost" },
            { zh: "記錄開啟時間與慢請求，用中位數與 P90 決定先優化哪裡", en: "Open times and slow requests logged; median and P90 decide what to speed up" }
          ],
          feats: [["d", { zh: "報表", en: "Reports" }], ["d", { zh: "儀表板", en: "Dashboards" }], ["d", { zh: "社群來源追蹤", en: "Lead tracking" }]],
          shots: [["images/dashboard.png", { zh: "管理後台・總覽", en: "Admin overview" }, "wide"]] },

        { title: { zh: "介面設計與易用性（UI／UX）", en: "Interface design and usability (UI/UX)" },
          desc: { zh: "依使用回饋調整介面，新畫面先出 mockup 給業主確認再開發。", en: "Interfaces tuned from user feedback; new screens are approved as mockups before building." },
          feats: [["d", { zh: "介面優化", en: "UI improvements" }], ["d", "Mockup"], ["d", { zh: "圖文選單設計", en: "Rich menu design" }]] },
        { title: { zh: "流程診斷與 SOP", en: "Process review and SOPs" },
          desc: { zh: "找出互相矛盾的規則，決定哪些節點全自動、哪些停下來讓人判斷，寫成操作手冊。", en: "Find conflicting rules, decide which steps run on their own and which stop for a person, and write the manual." },
          feats: [["d", { zh: "流程設計", en: "Process design" }], ["d", { zh: "操作手冊", en: "Manuals" }]] },
        { title: { zh: "角色權限與組織分工", en: "Roles and permissions" },
          desc: { zh: "把團隊拆成清楚的角色，規劃每個角色能看、能改哪些資料。", en: "Split the team into clear roles and set what each can see and change." },
          feats: [["d", { zh: "權限表", en: "Permission table" }], ["d", { zh: "角色分工", en: "Role design" }]] },
        { title: { zh: "系統維運與 AI 工具導入", en: "Upkeep and AI tooling" },
          desc: { zh: "自動化測試、一鍵部署與失敗還原；自製 MCP 與長期脈絡庫，讓 AI 照團隊的方式工作。", en: "Automated tests and one-click deploy with rollback; my own MCP servers and context store so AI works the team's way." },
          feats: [["d", { zh: "測試與部署", en: "Tests and deploys" }], ["p", { zh: "AI 客服", en: "AI support" }]] }
      ],
      notyet:  [{ zh: "網路商店", en: "Online store" }, { zh: "集點", en: "Loyalty points" }, { zh: "Email 驗證", en: "Email verification" }, { zh: "SEO／GEO／AEO", en: "SEO / GEO / AEO" }],
      planned: [{ zh: "購物車訂單", en: "Cart and orders" }, { zh: "優惠券", en: "Coupons" }]
    },
    admin: {
      title: { zh: "行政文書", en: "Admin and documents" },
      sub:   { zh: "年費通知・文件自動生成・部門工作台・知識庫・日英文", en: "Annuity notices · documents · department workspaces · knowledge base · JP/EN" },
      exp: {
        zh: "做過日英文客服、門市、日商與日文業務助理；2022 年起在智財事務所負責會計營運，從整理社內文書流程開始自學做系統，後來重建了整套案件、文件與財務系統。習慣先和第一線人員確認痛點，再決定哪些交給系統、哪些留給人。",
        en: "Customer service in Japanese and English, retail, a Japanese company and sales support. Since 2022 I have run accounting and operations at an IP law firm, where I taught myself to build systems by fixing our paperwork and later rebuilt the whole case, document and finance system. I start from the front line's pain points, then decide what goes to the system and what stays with people."
      },
      nums: [["40 h", { zh: "每月省下人工", en: "saved a month" }], ["10", { zh: "每天使用人數", en: "daily users" }], ["4", { zh: "部門工作台", en: "department apps" }], ["26", { zh: "項自動化", en: "automations" }]],
      project: "firm",
      items: [
        { title: { zh: "年費通知與客戶線上回覆", en: "Annuity notices with online client replies" }, demo: "annuity",
          desc: { zh: "每月整理到期的年費案件，寄給每位客戶專屬網址；客戶逐案勾選委辦或放棄，結果自動回寫系統。", en: "Each month's due annuities go to every client as a private link; clients mark each case renew or abandon, and answers write back to the system." },
          points: [
            { zh: "專屬網址不需登入；勾選會自動暫存，畫面只留下還沒勾選的案件", en: "Private link, no login; choices autosave and only unanswered cases stay on screen" },
            { zh: "搜尋、日期篩選與全選，100～400 件的大客戶也能處理", en: "Search, date filter and select-all handle clients with 100–400 cases" },
            { zh: "送出後事務所收到通知信與清單，委辦自動開單、放棄寫入現況", en: "On submit the firm gets an email and list; renewals open orders, abandons are logged" }
          ],
          feats: [["d", { zh: "一頁式網頁", en: "Landing page" }], ["d", { zh: "客戶專屬連結", en: "Client links" }], ["d", { zh: "自動暫存", en: "Autosave" }], ["d", { zh: "回寫系統", en: "Write-back" }]],
          shots: [["images/notice.png", { zh: "客戶回覆頁（手機）", en: "Client reply page (mobile)" }, "phone"]] },
        { title: { zh: "文件自動生成", en: "Automatic document generation" },
          desc: { zh: "在系統按一下就依範本產生文件，不必再手動複製貼上。", en: "One click in the system produces documents from templates, with no copy and paste." },
          points: [
            { zh: "Webhook 排入待生成清單，產生 PDF 與 Word 兩種格式", en: "A webhook queues the request; PDF and Word are both produced" },
            { zh: "範本：案件副本、案件通知單、年費通知單、委辦單", en: "Templates: case copies, case notices, annuity notices, work orders" },
            { zh: "一段時間內產生的文件整包寄給申請人，也存在暫存資料夾一次下載", en: "Files from a batch are emailed together and kept in one folder to download" }
          ],
          feats: [["d", { zh: "文件自動產生", en: "Document generation" }], ["d", "Webhook"], ["d", { zh: "通知信", en: "Email" }]],
          shots: [["images/docgen.png", { zh: "待生成清單與寄出的通知信", en: "Generation queue and the email sent" }, "wide"]] },
        { title: { zh: "部門工作台與提醒列管", en: "Department workspaces and reminders" },
          desc: { zh: "依部門把系統切成資料作業、行政部、營運部、會計四個工作台，各自只載入需要的資料。", en: "The system split into four workspaces (data entry, admin, operations, accounting), each loading only what it needs." },
          points: [
            { zh: "提醒只在符合條件時出現在選單，處理完就消失", en: "Reminders appear in the menu only when conditions are met, and go away once handled" },
            { zh: "客戶回覆後一鍵執行委辦或放棄流程", en: "After a client replies, one tap runs the renew or abandon flow" },
            { zh: "官期將近、工程師寫稿逾期自動提醒", en: "Alerts for approaching deadlines and overdue drafts" }
          ],
          feats: [["d", { zh: "企業內部系統", en: "Internal system" }], ["d", { zh: "提醒列管", en: "Reminders" }], ["d", { zh: "角色分工", en: "Role design" }]],
          shots: [["images/dept.png", { zh: "行政部工作台・待通知列表", en: "Admin workspace, notice list" }, "wide"]] },
        { title: { zh: "客服知識庫與教育訓練", en: "Support knowledge base and training" },
          desc: { zh: "常見問題整理成可搜尋的知識庫，客服直接複製回覆；搭配各角色操作手冊與教學圖卡。", en: "FAQs in a searchable knowledge base that staff copy replies from, plus role manuals and teaching cards." },
          points: [
            { zh: "業主在試算表更新內容，幾分鐘內同步到內部網頁", en: "The owner edits a spreadsheet; the web app updates within minutes" },
            { zh: "問答、據點資訊、收費規則分頁整理", en: "Tabs for Q&A, venue info and fee rules" },
            { zh: "系統說明文件依部門分章，附操作示範", en: "System guides split by department, with how-to examples" }
          ],
          feats: [["d", { zh: "客服知識庫", en: "Knowledge base" }], ["d", { zh: "操作手冊", en: "Manuals" }], ["d", { zh: "需求說明書・報價", en: "Specs · quotes" }]],
          shots: [["images/kb.png", { zh: "內部營運網頁・客服知識庫", en: "Ops web app, knowledge base" }, "wide"]] },

        { title: { zh: "請款、收款與國外代理人對帳", en: "Billing, payments and foreign-agent reconciliation" },
          desc: { zh: "批次開單與發票開立檔；溢付款登記、折抵與退款；催款通知；國外代理人帳單、對帳單與勞務報酬單自動產生。", en: "Batch orders and invoice files; overpayment logging, offsets and refunds; payment reminders; foreign-agent bills, statements and service-fee slips generated automatically." },
          feats: [["p", { zh: "電子發票", en: "E-invoices" }], ["d", { zh: "收款對帳", en: "Reconciliation" }], ["d", { zh: "催款通知", en: "Payment reminders" }]] },
        { title: { zh: "舊資料整理與遷移", en: "Legacy data cleanup and migration" },
          desc: { zh: "把十多年的單一資料庫拆成 6 個檔、54 張表，新舊系統並行時程式只綁定欄位對應，換資料來源不必改程式。", en: "A 10+ year single database split into 6 files and 54 tables; during the overlap the code binds only to field maps, so the data source can change without rewriting." },
          feats: [["d", { zh: "資料遷移", en: "Data migration" }], ["d", { zh: "資料建模", en: "Data modelling" }]] },
        { title: { zh: "日英文對外文件與在地化", en: "Japanese and English correspondence" },
          desc: { zh: "中、英、日三語的對外信件與文件；有日商工作與日文信件處理經驗。", en: "Letters and documents in Chinese, English and Japanese; experience at a Japanese company handling business email." },
          feats: [["d", { zh: "日文 JLPT N1・BJT J2", en: "JLPT N1 · BJT J2" }], ["d", { zh: "英文 TOEIC 850", en: "TOEIC 850" }], ["d", { zh: "日文信件處理", en: "Japanese email" }]] }
      ]
    }
  }
};
