/* =========================================================
   LINE 官方帳號互動示範（圖文選單＋自動通知）
   資料皆為虛構；選單圖片為系統實際使用的圖文選單。
   用法：<div id="line-demo"></div> + LineDemo.mount(el, lang)
   ========================================================= */
(function () {
  var CSS = "" +
  ".ld{display:grid;grid-template-columns:minmax(0,380px) minmax(0,1fr);gap:28px;align-items:start}" +
  ".ld-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px}" +
  ".ld-tabs button{font:inherit;font-size:14px;border:1px solid var(--line);background:var(--panel);color:var(--ink);padding:5px 14px;border-radius:999px;cursor:pointer}" +
  ".ld-tabs button[aria-pressed=true]{background:var(--ink);color:var(--board);border-color:var(--ink)}" +
  ".ld-phone{width:100%;max-width:380px;height:760px;border:10px solid #1c232b;border-radius:38px;overflow:hidden;display:flex;flex-direction:column;background:#8fabd2;position:relative;font-family:'Noto Sans TC','PingFang TC',sans-serif;color:#1c232b;font-size:14px;line-height:1.55}" +
  ".ld-head{background:#2b3a4f;color:#fff;height:50px;display:flex;align-items:center;gap:10px;padding:0 14px;flex:none}" +
  ".ld-head .av{width:30px;height:30px;border-radius:50%;background:#245a46;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700}" +
  ".ld-head b{font-size:15px}.ld-head small{display:block;font-size:11px;opacity:.7;font-weight:400}" +
  ".ld-chat{flex:1;overflow-y:auto;padding:12px 10px 16px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth}" +
  ".ld-day{align-self:center;background:rgba(0,0,0,.18);color:#fff;font-size:11px;padding:1px 10px;border-radius:99px}" +
  ".ld-m{display:flex;gap:6px;align-items:flex-end;max-width:92%}" +
  ".ld-m .av{width:28px;height:28px;border-radius:50%;background:#245a46;flex:none;align-self:flex-start}" +
  ".ld-b{background:#fff;border-radius:16px;padding:9px 12px;white-space:pre-wrap;word-break:break-word}" +
  ".ld-m .t{font-size:10px;color:#eef3fa;flex:none;white-space:nowrap}" +
  ".ld-m.me{align-self:flex-end;flex-direction:row-reverse}.ld-m.me .ld-b{background:#9fe36a}" +
  ".ld-tag{display:block;font-size:10.5px;color:#245a46;background:#e3f1ea;border-radius:6px;padding:1px 7px;margin:-2px 0 6px;width:fit-content}" +
  ".ld-link{color:#2a6fd6;text-decoration:underline;cursor:pointer;background:none;border:0;padding:0;font:inherit}" +
  ".ld-acts{display:flex;gap:6px;margin-top:8px;flex-wrap:wrap}" +
  ".ld-acts button,.ld-btn{font:inherit;font-size:13px;font-weight:700;border-radius:9px;padding:7px 12px;border:1px solid #cfd4d9;background:#fff;color:#1c232b;cursor:pointer}" +
  ".ld-btn.pri,.ld-acts button.pri{background:#245a46;color:#fff;border-color:#245a46}" +
  ".ld-btn.y{background:#f3c94f;border-color:#f3c94f}" +
  ".ld-btn:disabled{opacity:.45;cursor:default}" +
  ".ld-bar{flex:none;background:#fff;border-top:1px solid #dfe3e7;height:38px;display:flex;align-items:center;justify-content:center;gap:6px;font-size:13px;color:#4d5863;cursor:pointer;user-select:none}" +
  ".ld-menu{flex:none;position:relative;line-height:0;background:#eaeceb}" +
  ".ld-menu img{width:100%;height:auto;display:block}" +
  ".ld-menu .hit{position:absolute;background:transparent;border:0;cursor:pointer;border-radius:10px}" +
  ".ld-menu .hit:hover,.ld-menu .hit:focus-visible{background:rgba(36,90,70,.12);outline:2px solid #245a46;outline-offset:-4px}" +
  ".ld-sheet{position:absolute;left:0;right:0;bottom:0;top:50px;background:#f4f5f6;display:flex;flex-direction:column;transform:translateY(100%);transition:transform .22s ease;z-index:3}" +
  ".ld-sheet.on{transform:none}" +
  ".ld-sh{height:46px;flex:none;background:#fff;border-bottom:1px solid #e3e5e8;display:flex;align-items:center;gap:10px;padding:0 14px;font-weight:700;font-size:15px}" +
  ".ld-sh button{font:inherit;font-size:18px;border:0;background:none;color:#8a939c;cursor:pointer;padding:0 4px}" +
  ".ld-sb{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:10px}" +
  ".ld-c{background:#fff;border-radius:12px;padding:12px}" +
  ".ld-c h5{margin:2px 0 2px;font-size:15px}" +
  ".ld-mu{color:#6d7781;font-size:12px}" +
  ".ld-chip{display:inline-block;font-size:11px;padding:1px 8px;border-radius:99px;background:#eef0f2;color:#4d5863;margin:0 4px 4px 0}" +
  ".ld-chip.g{background:#dff1e6;color:#1f6b3d}.ld-chip.y{background:#fbe9a6;color:#6b5200}.ld-chip.r{background:#fde3df;color:#9b2c1f}.ld-chip.b{background:#e1ecf7;color:#234f7d}" +
  ".ld-row{display:flex;justify-content:space-between;align-items:center;gap:8px}" +
  ".ld-bar2{height:6px;background:#eceef0;border-radius:99px;overflow:hidden;margin:6px 0}.ld-bar2 i{display:block;height:100%;background:#f3c94f}" +
  ".ld-rule{background:#fff8dc;border:1px solid #f3d77a;border-radius:10px;padding:8px 10px;font-size:13px}" +
  ".ld-in{font:inherit;font-size:14px;border:1px solid #cfd4d9;border-radius:8px;padding:6px 8px;width:100%;background:#fff;color:#1c232b}" +
  ".ld-kv{display:grid;grid-template-columns:1fr auto;gap:6px 10px;font-size:13px}.ld-kv b{text-align:right}" +
  ".ld-seg{display:inline-flex;border:1px solid #cfd4d9;border-radius:8px;overflow:hidden}.ld-seg button{font:inherit;font-size:12px;border:0;background:#fff;padding:4px 9px;cursor:pointer;color:#4d5863}.ld-seg button.on{background:#245a46;color:#fff}" +
  ".ld-total{background:#1c232b;color:#fff;border-radius:10px;padding:9px 12px;display:flex;justify-content:space-between}" +
  ".ld-done{text-align:center;padding:18px 8px}.ld-done .ok{width:54px;height:54px;border-radius:50%;background:#245a46;color:#fff;font-size:28px;display:inline-flex;align-items:center;justify-content:center}" +
  ".ld-side h3{font-size:17px;margin:0 0 4px}.ld-side p.lead{margin:0 0 14px;color:var(--muted);font-size:14px}" +
  ".ld-notes{display:grid;gap:8px}" +
  ".ld-note{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:10px 12px}" +
  ".ld-note b{display:block;font-size:15px}.ld-note span{display:block;font-size:12.5px;color:var(--muted);line-height:1.5}" +
  ".ld-note button{font:inherit;font-size:13px;border:1px solid var(--ink);background:transparent;color:var(--ink);border-radius:999px;padding:4px 12px;cursor:pointer;white-space:nowrap}" +
  ".ld-note button:hover{background:var(--sun);border-color:var(--sun);color:#1e1f22}" +
  ".ld-note.sent{opacity:.6}" +
  ".ld-hint{margin-top:14px;font-size:13px;color:var(--muted);border-left:3px solid var(--sun);padding-left:10px}" +
  ".ld-reset{font:inherit;font-size:13px;background:none;border:0;color:var(--muted);text-decoration:underline;cursor:pointer;padding:0;margin-top:10px}" +
  "@media (max-width:760px){.ld{grid-template-columns:1fr}.ld-phone{margin:0 auto;height:700px}}" +
  "@media (prefers-reduced-motion:reduce){.ld-sheet{transition:none}.ld-chat{scroll-behavior:auto}}";

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function now() { var d = new Date(); return ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2); }
  function money(n) { return "NT$" + Number(n).toLocaleString("en-US"); }

  /* ---------- accounts ---------- */
  var ACCTS = {
    student: {
      label: "學員", en: "Students", name: "匹克球報名（學員）", av: "學",
      img: "images/richmenu_student.jpg",
      cells: [
        { label: "簽到", page: "checkin" }, { label: "報名", page: "signup" }, { label: "我的報名", page: "my" },
        { label: "我的課程", page: "lessons" }, { label: "我的資料", page: "profile" },
        { label: "聯絡客服", post: "聯絡客服", reply: "您好！客服時間為每天 10:00–22:00。\n請直接留言你的問題（例如想換時段、退款、場地資訊），我們會盡快回覆。" }
      ],
      welcome: "歡迎加入！🎾\n點下方選單可以報名課程與球敘、查看我的報名、到場簽到。\n第一次使用請先到「我的資料」填寫基本資料。",
      notes: [
        { id: "remind", t: "明日提醒", w: "每天 20:00 自動", text: "明天（11/22 六）的行程提醒\n・19:00–21:00　示範國小・一般球敘（球敘）\n　📍 示範國小\n　🎾 你的球面：A 面（到場請到這一面）\n　🏓 已租球拍 1 支，到場找場主拿\n　尚未付款 NT$300，請於 11/22 13:00 前完成\n\n到場後簽到：{checkin|開啟簽到頁}\n不能到請先請假或取消：{my|開啟我的報名}" },
        { id: "pay", t: "付款提醒", w: "付款期限前 6 小時", text: "付款提醒：示範國小・一般球敘\n11/22（六）19:00–21:00\n應繳 NT$300，請於 11/22 13:00 前完成付款。\n轉帳後可到{my|我的報名}回報帳號末五碼。" },
        { id: "promote", t: "候補遞補成功", w: "有人取消時自動遞補", text: "候補遞補成功！\n示範國小・一般球敘\n11/29（六）19:00–21:00\n🎾 你的球面：C 面（當天請到這一面）\n\n應繳 NT$250，請於 11/26 22:00 前完成付款，逾期名額會釋出給下一位候補。\n{my|查看我的報名}" },
        { id: "formed", t: "專項課成班通知", w: "成班決定時間（開課前 3 天 12:00）", text: "成班通知：發球與接發球強化（L1）\n11/22（六）19:00–21:00・示範國小 B 面\n報名 3 人，確定開課！\n3–4 人時教練授課 1 小時，其餘時間自由練習與對打。" },
        { id: "unformed", t: "球敘未成團（三選一）", w: "開打前 24 小時成團檢查", text: "球敘未成團通知：示範國中・女子球敘\n11/23（日）14:00–16:00・示範國中\n報名人數不足，這一場取消。你已付的 NT$350 可以選擇：\n・改報其他球敘：已付款項直接帶過去\n・課程抵用金：之後報名課程或球敘可折抵，不設到期日，也可以申請退現\n・退款：全額退還\n\n3 天內沒有選擇，會自動轉為課程抵用金。",
          acts: [["改報其他球敘", "已改報：示範國小・女子球敘 11/30（日）14:00，已付款項已帶過去。"], ["轉抵用金", "已轉為課程抵用金 NT$350，下次報名會自動折抵。"], ["退款", "已收到退款申請，3 個工作天內退回原帳戶。"]] },
        { id: "move", t: "上課時間異動", w: "行政改期後自動", text: "課程異動通知：兒童班（週六）\n第 6 堂 11/29（六）17:00 改到 12/6（六）17:00\n地點不變：示範國小 B 面\n如果新時間不能上課，請到{lessons|我的課程}請假。" }
      ]
    },
    host: {
      label: "場主", en: "Venue hosts", name: "匹克球場主", av: "場",
      img: "images/richmenu_host.jpg",
      cells: [
        { label: "今日球敘", page: "today" }, { label: "我的排班", page: "shifts" }, { label: "收班回報", page: "report" },
        { label: "我的資料", page: "hprofile" },
        { label: "使用說明", post: "使用說明", reply: "場主使用說明\n1. 開打前到「今日球敘」點名\n2. 點名後產生輪轉，現場記比分，積分榜自動更新\n3. 收班後到「收班回報」填名單外人數與現場收款\n4. 不能到場請提早到「我的資料」登記請假" },
        { label: "聯絡總場主", post: "聯絡總場主", reply: "已通知總場主，請直接留言現場狀況（例如場地問題、人數異常），總場主會盡快回覆。" }
      ],
      welcome: "場主帳號已開通 ✅\n排班、點名、收班回報都在下方選單。",
      notes: [
        { id: "newshift", t: "新排班通知", w: "球敘開放報名後自動排班", text: "新的排班：示範國小・一般球敘\n11/29（六）19:00–21:00・A、C 面\n已依據點預設幫你排上，不能到請到{hprofile|我的資料}登記請假。\n{shifts|查看我的排班}" },
        { id: "tomorrow", t: "明日排班提醒", w: "每天 20:40 自動", text: "明天（11/22 六）的排班\n・19:00–21:00　示範國小・一般球敘\n　報名 14 人（已付 13、未付 1）・候補 2\n　租拍 3 支\n收班後請填{report|收班回報}" },
        { id: "final", t: "成團檢查・最終面數", w: "開打前 24 小時", text: "最終面數：示範國小・一般球敘 11/22（六）19:00\n成團檢查完成，開 2 面（A、C 面），B 面不用開。\n{today|開啟今日球敘}" },
        { id: "paydigest", t: "付款回報待確認（主理人）", w: "每天 10、12、18、22 點", text: "學員付款回報待確認 3 筆\n・小安 NT$300　末五碼 20481\n・小樂 NT$250　末五碼 20481\n・阿哲 NT$1,000　末五碼 66713\n請核對入帳後按下方按鈕。",
          acts: [["已確認", "3 筆收款已確認，學員端狀態改為已付款。"], ["有問題", "已標記有問題，系統會通知客服跟進。"]] }
      ]
    },
    coach: {
      label: "教練", en: "Coaches", name: "匹克球教練", av: "教",
      img: "images/richmenu_coach.jpg",
      cells: [
        { label: "我的課表", page: "schedule" }, { label: "確認上課", page: "confirm" }, { label: "課程日誌", page: "journal" },
        { label: "我的學員", page: "students" }, { label: "可排時間", page: "avail" }, { label: "教練資料", page: "cprofile" }
      ],
      welcome: "教練帳號已開通 ✅\n課表、點名扣堂、課程日誌都在下方選單。",
      notes: [
        { id: "ctomorrow", t: "明日課表", w: "每天 20:00 自動", text: "明天（11/22 六）的課表\n・17:00　兒童班（週六） 第 5 堂\n　示範國小・B 面｜學員 7 人（請假 1）｜🏓 借球拍 2 支\n　{confirm|開啟點名}" },
        { id: "leave", t: "學員請假通知", w: "學員在 LINE 請假後", text: "請假通知：小樂 請假\n兒童班（週六）第 5 堂 11/22（六）17:00\n補課期限：2027/1/31" },
        { id: "journal", t: "未寫日誌提醒", w: "每天 21:00 自動", text: "課程日誌提醒：兒童班（週六）第 4 堂（11/15）還沒有寫日誌。\n{journal|開啟課程日誌}" },
        { id: "swap", t: "代課／換教練", w: "行政換教練後自動", text: "課程異動：L2 底線抽球\n11/27（四）19:00–21:00・示範球館 2 號場\n改由你授課（原教練請假），學員 5 人。\n{schedule|查看我的課表}" }
      ]
    }
  };

  /* ---------- state ---------- */
  var S, root, lang = "zh";
  function fresh() {
    var st = { acct: "student", page: null, menu: true, chats: {}, sent: {}, data: {
      signed: [], myPay: {}, checked: false, leave: false,
      roll: { "小安": true, "小樂": true, "阿哲": false, "Mia": true, "阿德": true, "小魚": false, "Kevin": true, "Joy": true },
      rotated: false, rep: { src: "社群", n: 2, cash: 500, rk: 1 },
      att: { "小安": "出席", "小樂": "請假", "阿哲": "出席", "小魚": "出席", "Mia": "出席", "阿德": "缺席", "Kevin": "出席" },
      confirmed: false, journal: "", jsaved: false, slots: { "示範國小 週六 17:00": true, "示範國小 週六 19:00": false, "示範球館 週四 19:00": true, "示範球館 週日 10:00": false },
      sstep: {} } };
    Object.keys(ACCTS).forEach(function (k) { st.chats[k] = [{ who: "bot", text: ACCTS[k].welcome, t: "09:00", tag: "加入好友時" }]; st.sent[k] = {}; });
    return st;
  }

  function linkify(text) {
    return esc(text).replace(/\{(\w+)\|([^}]+)\}/g, function (_, p, l) { return '<button type="button" class="ld-link" data-open="' + p + '">' + l + "</button>"; });
  }
  function msgHtml(m, i) {
    if (m.who === "me") return '<div class="ld-m me"><div class="ld-b">' + esc(m.text) + '</div><span class="t">' + m.t + "</span></div>";
    var acts = m.acts && !m.done ? '<div class="ld-acts">' + m.acts.map(function (a, j) { return '<button type="button" class="' + (j === 0 ? "pri" : "") + '" data-act="' + i + ":" + j + '">' + esc(a[0]) + "</button>"; }).join("") + "</div>" : "";
    return '<div class="ld-m"><span class="av"></span><div class="ld-b">' + (m.tag ? '<span class="ld-tag">' + esc(m.tag) + "</span>" : "") + linkify(m.text) + acts + '</div><span class="t">' + m.t + "</span></div>";
  }
  function push(acct, m) { m.t = m.t || now(); S.chats[acct].push(m); }

  /* ---------- LIFF pages ---------- */
  var SIGN_ITEMS = [
    { id: "s1", kind: "專項課", chip: "y", lvl: "建議 L1", title: "發球與接發球強化", when: "11/22（六）19:00–21:00", place: "示範國小 B 面", fee: 1000, n: 2, cap: 6, rule: "3 人成班。3–4 人時教練授課 1 小時，其餘時間自由練習；5 人以上授課 2 小時。", court: "" },
    { id: "s2", kind: "球敘", chip: "g", lvl: "建議 2.5+", title: "示範國小・一般球敘", when: "11/29（六）19:00–21:00", place: "示範國小 A、C 面", fee: 250, n: 11, cap: 16, rule: "每面 4 人成團，開打前 24 小時檢查。已付款 24 小時前取消可轉抵用金。", court: "A 面" }
  ];
  function page(p) {
    var d = S.data, h = "";
    switch (p) {
      case "checkin":
        return ["簽到", '<div class="ld-c"><span class="ld-chip g">今天</span><h5>示範國小・一般球敘</h5><div class="ld-mu">11/22（六）19:00–21:00</div>' +
          '<div class="ld-rule" style="margin:10px 0">🎾 你的球面：<b>A 面</b>　🏓 租拍 1 支，找場主拿</div>' +
          (d.checked ? '<div class="ld-done" style="padding:6px"><div class="ok">✓</div><div style="margin-top:6px;font-weight:700">已簽到 ' + d.checked + "</div></div>"
            : '<label style="display:flex;gap:8px;font-size:13px;margin-bottom:10px"><input type="checkbox" checked> 小安（本人）</label><button type="button" class="ld-btn pri" style="width:100%" data-do="checkin">簽到</button>') +
          '</div><div class="ld-mu" style="text-align:center">開打前 30 分鐘開放簽到，會一起確認家人</div>'];
      case "signup":
        var step = d.sstep.item ? SIGN_ITEMS.filter(function (x) { return x.id === d.sstep.item; })[0] : null;
        if (step && d.sstep.done) return ["報名成功", '<div class="ld-c ld-done"><div class="ok">✓</div><h5 style="margin-top:10px">報名成功</h5><div>' + esc(step.title) + "</div><div class=\"ld-mu\">" + esc(step.when) + "</div>" +
          (step.court ? '<div class="ld-rule" style="margin-top:10px">🎾 你的球面：<b>' + step.court + "</b></div>" : "") +
          '<p class="ld-mu">應繳 ' + money(step.fee) + "，付款期限 11/20 22:00。<br>轉帳後到「我的報名」回報末五碼。</p>" +
          '<button type="button" class="ld-btn" data-do="close">回到聊天室</button></div>'];
        if (step) return ["確認報名", '<div class="ld-c"><span class="ld-chip ' + step.chip + '">' + step.kind + "</span><h5>" + esc(step.title) + '</h5><div class="ld-mu">' + esc(step.when) + "・" + esc(step.place) + "</div>" +
          '<div class="ld-rule" style="margin:10px 0">' + esc(step.rule) + "</div>" +
          '<div class="ld-kv"><span>費用</span><b>' + money(step.fee) + "</b><span>報名人</span><b>小安（本人）</b></div>" +
          '<label style="display:flex;gap:8px;font-size:13px;margin:10px 0"><input type="checkbox"> ' + (step.kind === "球敘" ? "租球拍 NT$50／支" : "借球拍（免費）") + "</label>" +
          '<div class="ld-row"><button type="button" class="ld-btn" data-do="back">返回</button><button type="button" class="ld-btn y" data-do="confirm">確認報名</button></div></div>'];
        h = '<div class="ld-rule">🔥 <b>即將成班・差一點就開</b><div class="ld-mu">發球與接發球強化　還差 1 人成班</div></div>';
        SIGN_ITEMS.forEach(function (x) {
          var mine = d.signed.indexOf(x.id) >= 0, n = x.n + (mine ? 1 : 0);
          h += '<div class="ld-c"><span class="ld-chip ' + x.chip + '">' + x.kind + '</span><span class="ld-chip">' + x.lvl + "</span><h5>" + esc(x.title) + '</h5><div class="ld-mu">' + esc(x.when) + "・" + money(x.fee) + "</div>" +
            '<div class="ld-row" style="margin-top:8px;font-size:13px"><span>目前 <b>' + n + "／" + x.cap + "</b> 人・剩 " + (x.cap - n) + " 位</span></div>" +
            '<div class="ld-bar2"><i style="width:' + Math.round(n / x.cap * 100) + '%"></i></div>' +
            '<div class="ld-row"><span></span>' + (mine ? '<span class="ld-chip g">已報名</span>' : '<button type="button" class="ld-btn y" data-do="pick:' + x.id + '">報名</button>') + "</div></div>";
        });
        return ["報名・示範國小", h];
      case "my":
        var mine = SIGN_ITEMS.filter(function (x) { return d.signed.indexOf(x.id) >= 0; });
        if (!mine.length) h = '<div class="ld-c ld-mu" style="text-align:center">目前沒有報名。<br><button type="button" class="ld-link" data-open="signup">去報名</button></div>';
        mine.forEach(function (x) {
          var st = d.myPay[x.id];
          h += '<div class="ld-c"><div class="ld-row"><h5>' + esc(x.title) + "</h5>" + (st === "wait" ? '<span class="ld-chip b">待確認</span>' : '<span class="ld-chip r">未付款</span>') + "</div>" +
            '<div class="ld-mu">' + esc(x.when) + "・" + money(x.fee) + "</div>" +
            (x.court ? '<div style="font-size:13px;margin-top:6px">🎾 你的球面：<b>' + x.court + "</b></div>" : "") +
            (st === "wait" ? '<p class="ld-mu">已回報付款，等待確認入帳。</p>' :
              '<div style="display:flex;gap:6px;margin-top:10px"><input class="ld-in" id="ld-five-' + x.id + '" inputmode="numeric" maxlength="5" placeholder="帳號末五碼"><button type="button" class="ld-btn pri" data-do="pay:' + x.id + '">回報付款</button></div>' +
              '<button type="button" class="ld-link" style="margin-top:8px;font-size:12px" data-do="cancel:' + x.id + '">取消報名</button>') + "</div>";
        });
        return ["我的報名", h];
      case "lessons":
        return ["我的課程", '<div class="ld-c"><span class="ld-chip b">期制課</span><h5>兒童班（週六）</h5><div class="ld-mu">示範國小 B 面・17:00–18:30</div><div class="ld-kv" style="margin-top:8px"><span>剩餘堂數</span><b>4 / 8</b></div></div>' +
          '<div class="ld-c"><div class="ld-row"><div><b>第 5 堂</b><div class="ld-mu">11/22（六）17:00</div></div>' + (d.leave ? '<span class="ld-chip y">已請假・待補課</span>' : '<button type="button" class="ld-btn" data-do="leave">請假</button>') + "</div>" +
          (d.leave ? '<p class="ld-mu">補課期限 2027/1/31，客服會幫你安排補課。</p>' : '<p class="ld-mu">上課前 8 小時前可在這裡請假。</p>') + "</div>" +
          '<div class="ld-c"><div class="ld-row"><div><b>第 6 堂</b><div class="ld-mu">11/29（六）17:00</div></div><span class="ld-chip">未開始</span></div></div>'];
      case "profile":
        return ["我的資料", '<div class="ld-c"><div class="ld-kv"><span>姓名</span><b>小安</b><span>性別</span><b>女</b><span>程度</span><b>L1 基礎</b><span>常去據點</span><b>示範國小、示範球館</b><span>抵用金</span><b>NT$350</b></div></div>' +
          '<div class="ld-c"><h5>家人</h5><div class="ld-row" style="font-size:13px"><span>小樂（兒子）</span><span class="ld-chip">由你付款</span></div><button type="button" class="ld-btn" style="margin-top:10px">＋ 加入家人</button></div>'];
      case "today":
        var names = Object.keys(d.roll), here = names.filter(function (n) { return d.roll[n]; });
        h = '<div class="ld-c"><div class="ld-row"><h5>示範國小・一般球敘</h5><span class="ld-chip g">進行中</span></div><div class="ld-mu">A 面・19:00–21:00・點名 ' + here.length + "／" + names.length + "</div>" +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px">' + names.map(function (n) { return '<label style="display:flex;gap:6px;font-size:13px;align-items:center"><input type="checkbox" data-roll="' + esc(n) + '"' + (d.roll[n] ? " checked" : "") + "> " + esc(n) + "</label>"; }).join("") + "</div>" +
          '<button type="button" class="ld-btn pri" style="width:100%;margin-top:10px" data-do="rotate">依點名產生輪轉</button></div>';
        if (d.rotated) {
          var p = here.slice(), r = [];
          for (var k = 0; k + 3 < p.length; k += 4) r.push(p.slice(k, k + 4));
          h += '<div class="ld-c"><h5>第 1 輪</h5>' + r.map(function (g, i) { return '<div class="ld-row" style="font-size:13px;padding:4px 0;border-bottom:1px solid #eef0f2"><span>' + esc(g[0]) + "＋" + esc(g[1]) + "</span><b>vs</b><span>" + esc(g[2]) + "＋" + esc(g[3]) + "</span></div>"; }).join("") +
            (p.length % 4 ? '<div class="ld-mu" style="margin-top:6px">休息：' + esc(p.slice(p.length - p.length % 4).join("、")) + "</div>" : "") + '<div class="ld-mu" style="margin-top:6px">記比分後積分榜自動更新</div></div>';
        }
        return ["今日球敘", h];
      case "shifts":
        return ["我的排班", [["11/22（六）", "示範國小・一般球敘", "14／16", "已付 13・未付 1"], ["11/27（四）", "示範球館・女子球敘", "6／8", "已付 6"], ["11/29（六）", "示範國小・一般球敘", "9／16", "已付 7・未付 2"]].map(function (r, i) {
          return '<div class="ld-c">' + (i === 0 ? '<span class="ld-chip g">明天</span>' : "") + "<h5>" + r[1] + '</h5><div class="ld-mu">' + r[0] + " 19:00–21:00</div><div class=\"ld-kv\" style=\"margin-top:6px\"><span>報名</span><b>" + r[2] + "</b><span>付款</span><b>" + r[3] + "</b></div></div>";
        }).join("")];
      case "report":
        var R = d.rep, fee = 250, due = R.cash + R.rk * 50;
        if (R.sent) return ["收班回報", '<div class="ld-c ld-done"><div class="ok">✓</div><h5 style="margin-top:10px">已送出</h5><p class="ld-mu">本場應交 ' + money(due) + "，月底前繳回公司即可。</p><button type=\"button\" class=\"ld-btn\" data-do=\"close\">回到聊天室</button></div>"];
        return ["收班回報", '<div class="ld-c"><h5>示範國小・一般球敘</h5><div class="ld-mu">11/22（六）19:00–21:00</div></div>' +
          '<div class="ld-c" style="display:grid;gap:10px"><div class="ld-row"><span>名單外來源</span><span class="ld-seg">' + ["社群", "IG", "其他"].map(function (s) { return '<button type="button" class="' + (R.src === s ? "on" : "") + '" data-do="src:' + s + '">' + s + "</button>"; }).join("") + "</span></div>" +
          '<div class="ld-row"><span>名單外人數</span><span class="ld-seg"><button type="button" data-do="n:-1">−</button><button type="button" class="on">' + R.n + ' 人</button><button type="button" data-do="n:1">＋</button></span></div>' +
          '<div class="ld-row"><span>應收（自動）</span><b>' + money(R.n * fee) + "</b></div>" +
          '<div class="ld-row"><span>實收現金</span><input class="ld-in" style="width:110px;text-align:right" id="ld-cash" inputmode="numeric" value="' + R.cash + '"></div>' +
          '<div class="ld-row"><span>臨時租拍</span><span class="ld-seg"><button type="button" data-do="rk:-1">−</button><button type="button" class="on">' + R.rk + ' 支</button><button type="button" data-do="rk:1">＋</button></span></div>' +
          (R.cash < R.n * fee ? '<div class="ld-mu" style="color:#9b2c1f">實收少於應收，差額會列為未收交給營運追蹤</div>' : "") +
          '<div class="ld-total"><span>本場應交</span><b>' + money(due) + "</b></div>" +
          '<button type="button" class="ld-btn y" data-do="report">送出收班回報</button></div>'];
      case "hprofile":
        return ["我的資料", '<div class="ld-c"><h5>請款資料</h5><div class="ld-kv"><span>銀行</span><b>示範銀行</b><span>帳號</span><b>＊＊＊＊＊＊20481</b></div></div>' +
          '<div class="ld-c"><h5>可排時間</h5><div>' + ["示範國小 週六 19:00", "示範球館 週四 19:00", "示範國中 週日 14:00"].map(function (x, i) { return '<span class="ld-chip ' + (i < 2 ? "g" : "") + '">' + x + "</span>"; }).join("") + '</div><div class="ld-mu">請假日期：12/6</div></div>'];
      case "schedule":
        return ["我的課表", [["11/22（六）17:00", "兒童班（週六）第 5 堂", "示範國小 B 面・7 人"], ["11/22（六）19:00", "發球與接發球強化（L1）", "示範國小 B 面・3 人"], ["11/27（四）19:00", "L2 底線抽球（代課）", "示範球館 2 號場・5 人"]].map(function (r) {
          return '<div class="ld-c"><div class="ld-mu">' + r[0] + "</div><h5>" + r[1] + '</h5><div class="ld-mu">' + r[2] + "</div></div>";
        }).join("")];
      case "confirm":
        var A = d.att, cnt = Object.keys(A).filter(function (n) { return A[n] === "出席"; }).length;
        if (d.confirmed) return ["確認上課", '<div class="ld-c ld-done"><div class="ok">✓</div><h5 style="margin-top:10px">已確認上課</h5><p class="ld-mu">出席 ' + cnt + " 人已扣 1 堂；請假的學員已轉為待補課。</p><button type=\"button\" class=\"ld-btn\" data-do=\"close\">回到聊天室</button></div>"];
        return ["確認上課", '<div class="ld-c"><h5>兒童班（週六）第 5 堂</h5><div class="ld-mu">11/22（六）17:00・示範國小 B 面</div></div><div class="ld-c" style="display:grid;gap:8px">' +
          Object.keys(A).map(function (n) { return '<div class="ld-row"><span>' + esc(n) + '</span><span class="ld-seg">' + ["出席", "請假", "缺席"].map(function (s) { return '<button type="button" class="' + (A[n] === s ? "on" : "") + '" data-do="att:' + esc(n) + ":" + s + '">' + s + "</button>"; }).join("") + "</span></div>"; }).join("") +
          '<button type="button" class="ld-btn pri" data-do="confirm2">確認上課（出席 ' + cnt + " 人扣堂）</button></div>"];
      case "journal":
        return ["課程日誌", '<div class="ld-c"><h5>兒童班（週六）第 4 堂</h5><div class="ld-mu">11/15（六）</div></div><div class="ld-c" style="display:grid;gap:8px"><label class="ld-mu" for="ld-j">班級紀錄</label><textarea class="ld-in" id="ld-j" rows="4" placeholder="今天練了什麼、整體狀況">' + esc(d.journal) + "</textarea>" +
          '<label class="ld-mu">個別學員</label><div class="ld-row" style="font-size:13px"><span>小樂</span><span class="ld-chip y">反手需加強</span></div>' +
          (d.jsaved ? '<div class="ld-chip g">已儲存</div>' : '<button type="button" class="ld-btn pri" data-do="jsave">儲存日誌</button>') + "</div>"];
      case "students":
        return ["我的學員", [["小安", "L1", "4 堂"], ["小樂", "L1", "4 堂"], ["阿哲", "L2", "6 堂"], ["Mia", "L2", "2 堂"]].map(function (r) {
          return '<div class="ld-c ld-row"><div><b>' + r[0] + '</b><div class="ld-mu">程度 ' + r[1] + "</div></div><span class=\"ld-chip\">剩 " + r[2] + "</span></div>";
        }).join("")];
      case "avail":
        return ["可排時間", '<div class="ld-c"><h5>可排時段</h5><div class="ld-mu" style="margin-bottom:8px">點選切換，排課時系統會檢查</div><div>' +
          Object.keys(d.slots).map(function (s) { return '<button type="button" class="ld-btn" style="margin:0 6px 6px 0;font-weight:500;' + (d.slots[s] ? "background:#dff1e6;border-color:#9fd1b2" : "") + '" data-do="slot:' + esc(s) + '">' + (d.slots[s] ? "✓ " : "") + esc(s) + "</button>"; }).join("") +
          '</div></div><div class="ld-c"><h5>請假日期</h5><input class="ld-in" type="date" value="2026-12-06"></div>'];
      case "cprofile":
        return ["教練資料", '<div class="ld-c"><div class="ld-kv"><span>姓名</span><b>教練 A</b><span>證照</span><b>示範協會 C 級</b><span>擅長</span><b>兒童、新手入門</b></div></div>'];
    }
    return ["", ""];
  }

  /* ---------- render ---------- */
  function render() {
    var A = ACCTS[S.acct], en = lang === "en";
    var cells = A.cells.map(function (c, i) {
      var col = i % 3, row = Math.floor(i / 3);
      return '<button type="button" class="hit" style="left:' + (col * 33.333) + "%;top:" + (row * 50) + '%;width:33.333%;height:50%" data-cell="' + i + '" aria-label="' + esc(c.label) + '"></button>';
    }).join("");
    var pg = S.page ? page(S.page) : null;
    var notes = A.notes.map(function (n) {
      return '<div class="ld-note' + (S.sent[S.acct][n.id] ? " sent" : "") + '"><div><b>' + esc(n.t) + "</b><span>" + esc(n.w) + '</span></div><button type="button" data-note="' + n.id + '">' + (S.sent[S.acct][n.id] ? (en ? "Send again" : "再送一次") : (en ? "Send" : "觸發")) + "</button></div>";
    }).join("");
    root.innerHTML = '<div class="ld"><div>' +
      '<div class="ld-phone"><div class="ld-head"><span class="av">' + A.av + "</span><div><b>" + esc(A.name) + "</b><small>" + (en ? "Official account (demo)" : "官方帳號・示意") + "</small></div></div>" +
      '<div class="ld-chat" id="ld-chat"><span class="ld-day">' + (en ? "Today" : "今天") + "</span>" + S.chats[S.acct].map(msgHtml).join("") + "</div>" +
      '<div class="ld-bar" data-do="menu">' + (en ? "Menu" : "選單") + " " + (S.menu ? "▾" : "▴") + "</div>" +
      (S.menu ? '<div class="ld-menu"><img src="' + A.img + '" alt="' + esc(A.label) + '圖文選單" width="1000" height="674">' + cells + "</div>" : "") +
      '<div class="ld-sheet' + (pg ? " on" : "") + '">' + (pg ? '<div class="ld-sh"><button type="button" data-do="close" aria-label="關閉">✕</button>' + esc(pg[0]) + '</div><div class="ld-sb">' + pg[1] + "</div>" : "") + "</div>" +
      "</div></div>" +
      '<div class="ld-side"><div class="ld-tabs" role="group">' + Object.keys(ACCTS).map(function (k) { return '<button type="button" data-acct="' + k + '" aria-pressed="' + (S.acct === k) + '">' + (en ? ACCTS[k].en : ACCTS[k].label + "帳號") + "</button>"; }).join("") + "</div>" +
      "<h3>" + (en ? "Try it" : "試試看") + '</h3><p class="lead">' + (en
        ? "Tap the rich menu at the bottom of the phone to open each page. Sign up, report a payment or file a cash report, and the account replies in the chat. The buttons below fire the automatic messages the system sends."
        : "點手機下方的圖文選單打開各個頁面；報名、回報付款、送出收班回報後，聊天室會收到對應的訊息。下面的按鈕可以觸發系統自動發送的通知。") + "</p>" +
      "<h3>" + (en ? "Automatic messages" : "自動通知") + '</h3><div class="ld-notes">' + notes + "</div>" +
      '<p class="ld-hint">' + (en ? "Menu images are the ones used in production. Interface in Traditional Chinese; names and numbers are fictional." : "圖文選單為系統實際使用的圖片；人名、場地與金額皆為虛構。") + "</p>" +
      '<button type="button" class="ld-reset" data-do="reset">' + (en ? "Reset demo" : "重設示範") + "</button></div></div>";
    var c = document.getElementById("ld-chat"); if (c) c.scrollTop = c.scrollHeight;
  }

  /* ---------- actions ---------- */
  function onClick(e) {
    var b = e.target.closest("[data-cell],[data-note],[data-acct],[data-open],[data-act],[data-do]");
    if (!b || !root.contains(b)) return;
    var A = ACCTS[S.acct], d = S.data;
    if (b.dataset.acct) { S.acct = b.dataset.acct; S.page = null; S.menu = true; return render(); }
    if (b.dataset.cell) {
      var c = A.cells[+b.dataset.cell];
      if (c.page) { S.page = c.page; d.sstep = {}; }
      else { push(S.acct, { who: "me", text: c.post }); push(S.acct, { who: "bot", text: c.reply, tag: "自動回覆" }); }
      return render();
    }
    if (b.dataset.open) { S.page = b.dataset.open; d.sstep = {}; return render(); }
    if (b.dataset.note) {
      var n = A.notes.filter(function (x) { return x.id === b.dataset.note; })[0];
      S.page = null; S.sent[S.acct][n.id] = true;
      push(S.acct, { who: "bot", text: n.text, tag: n.t + "・" + n.w, acts: n.acts });
      return render();
    }
    if (b.dataset.act) {
      var ij = b.dataset.act.split(":"), m = S.chats[S.acct][+ij[0]], a = m.acts[+ij[1]];
      m.done = true; push(S.acct, { who: "me", text: a[0] }); push(S.acct, { who: "bot", text: a[1] });
      return render();
    }
    var x = b.dataset.do.split(":"), k = x[0];
    if (k === "close") { S.page = null; d.sstep = {}; if (d.rep.sent) d.rep = { src: "社群", n: 2, cash: 500, rk: 1 }; d.confirmed = false; }
    else if (k === "menu") S.menu = !S.menu;
    else if (k === "reset") { S = fresh(); }
    else if (k === "checkin") d.checked = now();
    else if (k === "pick") d.sstep = { item: x[1] };
    else if (k === "back") d.sstep = {};
    else if (k === "confirm") {
      var it = SIGN_ITEMS.filter(function (y) { return y.id === d.sstep.item; })[0];
      if (d.signed.indexOf(it.id) < 0) d.signed.push(it.id);
      d.sstep.done = true;
      push("student", { who: "bot", tag: "報名成功・送出後立即", text: "報名成功！\n" + it.title + "\n" + it.when + "・" + it.place + (it.court ? "\n🎾 你的球面：" + it.court + "（當天請到這一面）" : "") + "\n\n應繳 " + money(it.fee) + "，請於 11/20 22:00 前完成付款。\n轉帳後到{my|我的報名}回報帳號末五碼。" });
    }
    else if (k === "pay") {
      var five = (document.getElementById("ld-five-" + x[1]) || {}).value || "";
      if (!/^\d{5}$/.test(five)) { var inp = document.getElementById("ld-five-" + x[1]); if (inp) { inp.style.borderColor = "#d9534f"; inp.placeholder = "請輸入 5 位數字"; inp.focus(); } return; }
      d.myPay[x[1]] = "wait";
      push("student", { who: "bot", tag: "回報付款後立即", text: "已收到付款回報（末五碼 " + five + "）。\n確認入帳後狀態會改為已付款；確認前不能自行取消這筆報名。" });
    }
    else if (k === "cancel") {
      var it2 = SIGN_ITEMS.filter(function (y) { return y.id === x[1]; })[0];
      d.signed = d.signed.filter(function (y) { return y !== x[1]; }); delete d.myPay[x[1]];
      push("student", { who: "bot", tag: "取消報名後立即", text: "已取消報名：" + it2.title + "\n" + it2.when + "\n尚未付款，不會產生費用。名額已釋出給候補。" });
    }
    else if (k === "leave") d.leave = true;
    else if (k === "rotate") d.rotated = true;
    else if (k === "src") d.rep.src = x[1];
    else if (k === "n") d.rep.n = Math.max(0, d.rep.n + +x[1]);
    else if (k === "rk") d.rep.rk = Math.max(0, d.rep.rk + +x[1]);
    else if (k === "report") {
      var cash = parseInt((document.getElementById("ld-cash") || {}).value, 10) || 0; d.rep.cash = cash;
      d.rep.sent = true;
      push("host", { who: "bot", tag: "收班回報後立即", text: "收班回報已送出：示範國小・一般球敘 11/22\n名單外 " + d.rep.n + " 人（" + d.rep.src + "）・實收 " + money(cash) + "・租拍 " + d.rep.rk + " 支\n本場應交 " + money(cash + d.rep.rk * 50) + "，可到{hprofile|我的資料}查看本月應交與已交付。" });
    }
    else if (k === "att") d.att[x[1]] = x[2];
    else if (k === "confirm2") {
      d.confirmed = true;
      var cn = Object.keys(d.att).filter(function (n) { return d.att[n] === "出席"; }).length;
      push("coach", { who: "bot", tag: "確認上課後立即", text: "已確認上課：兒童班（週六）第 5 堂\n出席 " + cn + " 人已扣堂，請假學員已轉待補課。\n記得 24 小時內寫{journal|課程日誌}。" });
    }
    else if (k === "jsave") { d.journal = (document.getElementById("ld-j") || {}).value || ""; d.jsaved = true; }
    else if (k === "slot") d.slots[b.dataset.do.slice(5)] = !d.slots[b.dataset.do.slice(5)];
    render();
  }
  function onChange(e) {
    var r = e.target.getAttribute && e.target.getAttribute("data-roll");
    if (r) { S.data.roll[r] = e.target.checked; S.data.rotated = false; render(); }
  }

  window.LineDemo = {
    mount: function (el, l) {
      if (!document.getElementById("ld-css")) { var st = document.createElement("style"); st.id = "ld-css"; st.textContent = CSS; document.head.appendChild(st); }
      if (!S) S = fresh();
      lang = l || "zh"; root = el;
      el.addEventListener("click", onClick); el.addEventListener("change", onChange);
      render();
    },
    // 產生靜態截圖用
    preset: function (acct, noteIds, pageName) {
      S = fresh(); S.acct = acct; S.chats[acct] = []; if (noteIds[0] === "m=0") { S.menu = false; noteIds = noteIds.slice(1); }
      noteIds.forEach(function (id) { var n = ACCTS[acct].notes.filter(function (x) { return x.id === id; })[0]; S.sent[acct][id] = true; push(acct, { who: "bot", text: n.text, tag: n.t + "・" + n.w, acts: n.acts, t: n.time || "20:00" }); });
      S.page = pageName || null; render();
    }
  };
})();
