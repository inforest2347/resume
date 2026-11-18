/* =========================================================
   個人網站設定檔 config.js
   ---------------------------------------------------------
   填法：
   - 只改引號裡的文字，不要刪掉逗號或大括號。
   - 留空字串 "" 代表還沒填。
   - showMissing: true  → 網站上會用黃色標出所有還沒填的地方，
                           並在頁尾列出待填清單（自己檢查用）。
     showMissing: false → 正式上線用，沒填的項目會自動隱藏。
   - 中英文分開填：zh = 中文版，en = 英文版。
   ========================================================= */

window.SITE_CONFIG = {
  showMissing: true,
  defaultLang: "zh",          // 打開網站時預設語言："zh" 或 "en"

  /* ---------- 基本資料 ---------- */
  person: {
    name:      { zh: "歐瀞璞", en: "OU JING PU" },   // 例：{ zh: "王小明", en: "Hsiao-Ming Wang" }
    email:     "inforest.2347@gmail.com",
    phone:     "0972802829",                   // 只會出現在中文版；不想公開就留空
    github:    "",                   // 完整網址，例 https://github.com/xxx
    portfolio: "",                   // 作品集網址，可留空
    linkedin:  "",                   // 主要給英文版用
    location:  { zh: "台北・可遠端", en: "Taipei, Taiwan (UTC+8) · Remote" }
  },

  /* ---------- 智財事務所 ERP ---------- */
  firm: {
    // 不想公開事務所名稱就留空，網站會顯示「某智慧財產權事務所」
    name:      { zh: "", en: "" },
    start:     { zh: "2022/03", en: "Mar 2022" },   // 到職年月，例 { zh: "2022 年 3 月", en: "Mar 2022" }
    users:     "10",                   // ERP 每天使用人數，例 "25"
    volume:    { zh: "", en: "" },   // 每月處理量，例 { zh: "約 300 筆發票", en: "about 300 invoices" }
    saved:     { zh: "每月省下約 40 小時人工", en: "about 40 staff hours saved a month" },   // 自動化省下的時間或減少的錯誤，例 { zh: "每月省下約 40 小時人工", en: "about 40 staff hours saved a month" }
    // 年費通知原本的做法（請確認或改寫）
    beforeNotice: { zh: "Email 往返確認", en: "back-and-forth email" },
    // 英文版案例開頭的背景描述（請確認是否符合實際）
    before: {
      zh: "專利與商標團隊各自以人工處理客戶通知、請款與對帳。",
      en: "Patent and trademark staff handled client notices, billing and reconciliation by hand, each team on its own schedule."
    }
  },

  /* ---------- 匹克球營運系統 ---------- */
  pickleball: {
    // 需先取得業主同意才填；留空會顯示「匹克球教學與球敘新創」
    clientName: { zh: "", en: "" },
    students:   "380",                  // 系統內學員數，例 "380"
    signups:    "600",                  // 每月報名筆數，例 "600"
    reconcile:  { zh: "對帳從每週半天縮短到 30 分鐘", en: "weekly reconciliation cut from half a day to 30 minutes" },  // 對帳時間的改善，例 { zh: "對帳從每週半天縮短到 30 分鐘", en: "weekly reconciliation cut from half a day to 30 minutes" }
    // 案例開頭的背景描述（請確認是否符合實際）
    before: {
      zh: "客戶原本透過第三方 App 收報名，付款靠人工逐筆追蹤。",
      en: "The client took sign-ups through a third-party app and tracked payments by hand."
    },
    // 業主推薦語（取得同意後填）
    testimonial: { zh: "", en: "", author: { zh: "", en: "" } }
  },

  /* ---------- 學歷與語言 ---------- */
  education: {
    school:  { zh: "國立高雄師範大學", en: "National Kaohsiung Normal University" },     // 例 { zh: "國立○○大學", en: "National ○○ University" }
    year:    "2017",                     // 畢業年份，例 "2017"
    english: { zh: "多益 850", en: "Professional working proficiency" }      // 例 { zh: "多益 850", en: "Professional working proficiency" }
  },

  /* ---------- 系統截圖（去除個資後再放） ----------
     把圖片放在和 index.html 同一層的 images 資料夾，例：
     { src: "images/signup.png", caption: { zh: "學員報名頁", en: "Student sign-up page" } }
  */
  screenshots: []
};
