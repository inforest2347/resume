/* =========================================================
   年費通知・客戶線上回覆（互動範例）
   依事務所實際規格重做的示意版：專屬連結、四階段流程、自動暫存、
   大量案件時只顯示未勾選、搜尋與日期篩選、全選。資料皆為虛構。
   用法：AnnuityDemo.mount(el, lang)
   ========================================================= */
(function () {
  var CSS = "" +
  ".an{--a-ink:#1c232b;--a-mu:#66717c;--a-line:#dfe3e7;--a-bg:#f4f5f6;--a-pri:#1f4e79;--a-ok:#2f8f57;--a-no:#b4432f;--a-y:#f3c94f;" +
  "font-family:'Noto Sans TC','PingFang TC',sans-serif;color:var(--a-ink);background:var(--a-bg);border-radius:12px;overflow:hidden;border:1px solid #cfd4d9;position:relative;font-size:14px;line-height:1.55}" +
  ".an *{box-sizing:border-box}" +
  ".an-top{background:var(--a-pri);color:#fff;padding:10px 16px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap}" +
  ".an-top b{font-size:15px}.an-top small{opacity:.8}" +
  ".an-url{font-family:'IBM Plex Mono',monospace;font-size:11.5px;background:rgba(255,255,255,.15);padding:2px 8px;border-radius:4px}" +
  ".an-body{display:grid;grid-template-columns:minmax(0,1fr) 270px;min-height:560px}" +
  ".an-main{padding:14px;overflow:auto;max-height:620px}" +
  ".an-side{background:#fff;border-left:1px solid var(--a-line);padding:14px;display:flex;flex-direction:column;gap:12px;position:relative}" +
  ".an-side .row{display:flex;gap:6px;align-items:center;justify-content:space-between}" +
  ".an button{font:inherit;cursor:pointer}" +
  ".an .btn{border:1px solid #cfd4d9;background:#fff;color:var(--a-ink);border-radius:8px;padding:6px 10px;font-size:13px;font-weight:700}" +
  ".an .btn.pri{background:var(--a-pri);border-color:var(--a-pri);color:#fff}" +
  ".an .btn.y{background:var(--a-y);border-color:var(--a-y)}" +
  ".an .btn:disabled{opacity:.4;cursor:default}" +
  ".an .mu{color:var(--a-mu);font-size:12px}" +
  ".an input,.an select{font:inherit;font-size:13px;border:1px solid #cfd4d9;border-radius:8px;padding:6px 8px;width:100%;background:#fff;color:var(--a-ink)}" +
  ".an table{width:100%;border-collapse:collapse;background:#fff;border-radius:10px;overflow:hidden;font-size:13px}" +
  ".an th{background:#eef1f4;text-align:left;font-weight:500;color:var(--a-mu);font-size:12px;padding:7px 8px;white-space:nowrap}" +
  ".an td{padding:7px 8px;border-top:1px solid #eef0f2;vertical-align:middle}" +
  ".an td.num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}" +
  ".an td.due{white-space:nowrap}.an td.due.soon{color:var(--a-no);font-weight:700}" +
  ".an .pick{display:flex;gap:4px}.an .pick button{border:1px solid #cfd4d9;background:#fff;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700}" +
  ".an .pick .k{color:var(--a-ok);border-color:#9fd1b2}.an .pick .k:hover{background:#dff1e6}" +
  ".an .pick .x{color:var(--a-no);border-color:#efb5aa}.an .pick .x:hover{background:#fde3df}" +
  ".an .chips{display:flex;gap:6px}.an .chip{flex:1;border:1px solid #cfd4d9;border-radius:8px;padding:6px;text-align:center;background:#fff;font-size:12.5px}" +
  ".an .chip b{display:block;font-size:18px}.an .chip.on{border-color:var(--a-ink);box-shadow:inset 0 -3px 0 var(--a-y)}" +
  ".an .chip.k b{color:var(--a-ok)}.an .chip.x b{color:var(--a-no)}" +
  ".an .prog{height:8px;background:#eceef0;border-radius:99px;overflow:hidden}.an .prog i{display:block;height:100%;background:var(--a-ok)}" +
  ".an .bulk{display:flex;gap:6px;align-items:center;margin-bottom:8px;flex-wrap:wrap}" +
  ".an .empty{background:#fff;border-radius:10px;padding:30px;text-align:center;color:var(--a-mu)}" +
  ".an .tag{display:inline-block;font-size:11px;border-radius:99px;padding:0 7px;background:#eef0f2;color:#4d5863}" +
  ".an .tag.k{background:#dff1e6;color:#1f6b3d}.an .tag.x{background:#fde3df;color:#9b2c1f}" +
  ".an .doc{background:#fff;max-width:640px;margin:0 auto;padding:26px 30px;border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,.08);font-size:13px}" +
  ".an .doc h4{text-align:center;font-size:18px;margin:0 0 4px;letter-spacing:.3em}" +
  ".an .doc .sum{display:flex;justify-content:space-between;border-top:2px solid var(--a-ink);margin-top:8px;padding-top:6px;font-weight:700}" +
  ".an .modal{position:absolute;inset:0;background:rgba(20,26,32,.55);display:flex;align-items:center;justify-content:center;z-index:5;padding:16px}" +
  ".an .dlg{background:#fff;border-radius:12px;padding:20px 22px;width:100%;max-width:400px;display:grid;gap:10px}" +
  ".an .dlg h5{margin:0;font-size:16px}" +
  ".an .note{background:#fff8dc;border:1px solid #f3d77a;border-radius:8px;padding:8px 10px;font-size:12.5px}" +
  ".an .steps{display:flex;gap:4px;font-size:11.5px}.an .steps span{flex:1;text-align:center;padding:3px 0;border-radius:4px;background:#eef0f2;color:var(--a-mu)}.an .steps span.on{background:var(--a-pri);color:#fff}" +
  "@media (max-width:760px){.an-body{grid-template-columns:1fr}.an-side{border-left:0;border-top:1px solid var(--a-line)}.an .hide-sm{display:none}}";

  var CLIENT = "示範科技股份有限公司";
  var NAMES = ["散熱模組", "可摺疊支架", "電源管理方法", "無線充電裝置", "導光板結構", "影像辨識系統", "防水連接器", "電池保護電路", "車用感測器", "風扇葉片", "觸控面板", "智慧插座",
    "記憶體模組", "LED 驅動電路", "折疊式手機殼", "語音辨識方法", "散熱鰭片", "光學鏡頭組", "穿戴式裝置", "天線結構", "馬達控制方法", "顯示面板", "濾波電路", "固態硬碟外殼"];
  var COUNTRIES = [["TW", "發明", 8000], ["TW", "新型", 2500], ["US", "發明", 32000], ["JP", "發明", 18500], ["CN", "發明", 9800], ["EP", "發明", 41000]];
  function pad(n) { return ("0" + n).slice(-2); }
  function cases() {
    var out = [], base = new Date(2027, 0, 5);
    NAMES.forEach(function (n, i) {
      var c = COUNTRIES[i % COUNTRIES.length], d = new Date(base.getTime() + i * 4.3 * 86400000), r = new Date(d.getTime() - 21 * 86400000);
      out.push({ id: "P" + (2301 + i), no: "OP-" + c[0] + "-" + (1100 + i * 7), app: CLIENT, name: n, cty: c[0], kind: c[1], year: 3 + (i % 9),
        due: d.getFullYear() + "/" + pad(d.getMonth() + 1) + "/" + pad(d.getDate()), reply: r.getFullYear() + "/" + pad(r.getMonth() + 1) + "/" + pad(r.getDate()),
        dueT: d.getTime(), fee: c[2] + (i % 3) * 500, svc: c[0] === "TW" ? 1500 : 3000 });
    });
    return out;
  }

  var KEY = "annuity-demo-v1", root, lang = "zh", S;
  function fresh() { return { pick: {}, stage: 1, q: "", view: "todo", from: "", to: "", sel: {}, saved: "", modal: "intro", send: { how: "電子信件", date: "" }, done: [] }; }
  function load() { try { var v = JSON.parse(localStorage.getItem(KEY) || "null"); if (v && v.pick) { v.modal = null; v.stage = 1; v.sel = {}; return v; } } catch (e) {} return fresh(); }
  function save() { var d = new Date(); S.saved = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  var ALL = cases();
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function money(n) { return "NT$" + Number(n).toLocaleString("en-US"); }
  function live() { return ALL.filter(function (c) { return S.done.indexOf(c.id) < 0; }); }
  function count(v) { return live().filter(function (c) { return S.pick[c.id] === v; }).length; }
  function shown() {
    var q = S.q.trim().toLowerCase(), f = S.from ? new Date(S.from).getTime() : 0, t = S.to ? new Date(S.to).getTime() + 86399999 : 0;
    return live().filter(function (c) {
      if (S.view === "todo" ? S.pick[c.id] : S.pick[c.id] !== S.view) return false;
      if (q && (c.no + c.name + c.app + c.id).toLowerCase().indexOf(q) < 0) return false;
      if (f && c.dueT < f) return false; if (t && c.dueT > t) return false;
      return true;
    }).sort(function (a, b) { return a.dueT - b.dueT; });
  }

  function table(rows) {
    if (!rows.length) return '<div class="empty">' + (S.view === "todo" ? (live().length ? "全部案件都勾選好了，按右側「確認」繼續。" : "目前沒有需要回覆的案件。") : "這個清單目前是空的。") + "</div>";
    var soon = new Date(2027, 0, 20).getTime();
    return '<div class="bulk">' + (S.view === "todo"
      ? '<label style="display:flex;gap:6px;align-items:center;font-size:12.5px"><input type="checkbox" data-a="selall" style="width:auto"' + (rows.every(function (c) { return S.sel[c.id]; }) ? " checked" : "") + '> 全選目前畫面（' + rows.length + ' 件）</label>' +
        '<button class="btn" data-a="bulk:k"' + (Object.keys(S.sel).length ? "" : " disabled") + '>勾選的全部委辦</button><button class="btn" data-a="bulk:x"' + (Object.keys(S.sel).length ? "" : " disabled") + ">勾選的全部放棄</button>"
      : '<span class="mu">' + (S.view === "k" ? "已勾選委辦" : "已勾選放棄") + "的案件，可以改回未勾選。</span>") + "</div>" +
      "<table><tr>" + (S.view === "todo" ? "<th></th>" : "") + '<th>本公司檔號</th><th>案件名稱</th><th class="hide-sm">國別／案別</th><th>官方期限</th><th class="hide-sm">回覆期限</th><th class="hide-sm">規費</th><th class="hide-sm">代辦費</th><th></th></tr>' +
      rows.map(function (c) {
        return "<tr>" + (S.view === "todo" ? '<td><input type="checkbox" data-sel="' + c.id + '" style="width:auto"' + (S.sel[c.id] ? " checked" : "") + "></td>" : "") +
          "<td>" + esc(c.no) + "</td><td>" + esc(c.name) + '<div class="mu">第 ' + c.year + ' 年年費</div></td><td class="hide-sm">' + c.cty + "・" + c.kind + '</td><td class="due' + (c.dueT < soon ? " soon" : "") + '">' + c.due + '</td><td class="due hide-sm">' + c.reply + '</td><td class="num hide-sm">' + money(c.fee) + '</td><td class="num hide-sm">' + money(c.svc) + "</td>" +
          "<td>" + (S.view === "todo" ? '<div class="pick"><button class="k" data-a="pick:' + c.id + ':k">委辦</button><button class="x" data-a="pick:' + c.id + ':x">放棄</button></div>' : '<button class="btn" data-a="unpick:' + c.id + '">改回</button>') + "</td></tr>";
      }).join("") + "</table>";
  }

  function preview() {
    var k = live().filter(function (c) { return S.pick[c.id] === "k"; }), x = live().filter(function (c) { return S.pick[c.id] === "x"; });
    var tot = k.reduce(function (a, c) { return a + c.fee + c.svc; }, 0);
    return '<div class="doc"><h4>委 任 書</h4><p class="mu" style="text-align:center;margin:0 0 14px">' + CLIENT + "　年費案件回覆（預覽）</p>" +
      "<p><b>委辦 " + k.length + " 件</b></p><table><tr><th>本公司檔號</th><th>案件名稱</th><th>官方期限</th><th>金額</th></tr>" +
      k.map(function (c) { return "<tr><td>" + c.no + "</td><td>" + esc(c.name) + "</td><td>" + c.due + '</td><td class="num">' + money(c.fee + c.svc) + "</td></tr>"; }).join("") + "</table>" +
      '<div class="sum"><span>委辦合計</span><span>' + money(tot) + "</span></div>" +
      '<p style="margin-top:16px"><b>放棄 ' + x.length + " 件</b></p>" + (x.length ? '<p class="mu">' + x.map(function (c) { return c.no + " " + c.name; }).join("、") + "</p>" : '<p class="mu">無</p>') +
      '<p class="mu" style="margin-top:20px">委任人：' + CLIENT + "　　簽章：＿＿＿＿＿＿</p></div>";
  }

  function render() {
    var L = live(), k = count("k"), x = count("x"), n = L.length, done = k + x;
    var steps = '<div class="steps">' + ["勾選", "預覽", "送出", "完成"].map(function (t, i) { return '<span class="' + (S.stage === i + 1 ? "on" : "") + '">' + (i + 1) + " " + t + "</span>"; }).join("") + "</div>";
    var side, main;
    if (S.stage === 1) {
      main = table(shown());
      side = steps +
        '<div class="row"><button class="btn" data-a="refresh">重新整理</button><button class="btn" data-a="print1">列印</button></div>' +
        '<div class="mu">' + (S.saved ? "✓ " + S.saved + " 已自動儲存" : "勾選後會自動儲存，下次打開會接著上次的進度") + "</div>" +
        '<input data-in="q" placeholder="搜尋檔號、案件名稱" value="' + esc(S.q) + '">' +
        '<div class="chips"><div class="chip' + (S.view === "todo" ? " on" : "") + '" data-a="view:todo" role="button"><b>' + (n - done) + '</b>未勾選</div><div class="chip k' + (S.view === "k" ? " on" : "") + '" data-a="view:k" role="button"><b>' + k + '</b>委辦</div><div class="chip x' + (S.view === "x" ? " on" : "") + '" data-a="view:x" role="button"><b>' + x + "</b>放棄</div></div>" +
        '<div><div class="mu" style="margin-bottom:4px">官方期限範圍</div><div style="display:grid;gap:6px"><input type="date" data-in="from" value="' + S.from + '"><input type="date" data-in="to" value="' + S.to + '"></div></div>' +
        '<div style="margin-top:auto"><div class="row mu"><span>已勾選</span><span>' + done + " / " + n + '</span></div><div class="prog"><i style="width:' + (n ? Math.round(done / n * 100) : 0) + '%"></i></div></div>' +
        '<div class="row"><button class="btn" data-a="stage:2"' + (done ? "" : " disabled") + '>預覽結果</button><button class="btn pri" data-a="stage:2"' + (done && done === n ? "" : " disabled") + ">確認</button></div>" +
        '<div class="mu">' + (done === n ? "" : "全部勾選完才能確認；也可以先預覽。") + "</div>" +
        '<div class="mu" style="border-top:1px solid #eef0f2;padding-top:8px">聯絡電話 02-0000-0000<br>週一至週五 09:00–18:00</div>';
    } else {
      main = preview();
      side = steps + '<div class="note">請確認委辦與放棄的案件。生成委任書後，請依選擇的方式寄回。</div>' +
        '<button class="btn" data-a="stage:1">返回修改</button><button class="btn pri" data-a="gen"' + (done === n ? "" : " disabled") + ">生成委任書</button>" +
        (done === n ? "" : '<div class="mu">目前是預覽，還有 ' + (n - done) + " 件未勾選。</div>");
    }
    var modal = "";
    if (S.modal === "intro") modal = '<div class="modal"><div class="dlg"><h5>注意須知</h5><div class="note">這是您專屬的回覆網址，請勿轉寄。勾選內容會自動儲存，全部勾選後按「確認」，再生成委任書寄回即可。</div><p class="mu" style="margin:0">本頁為示意，案件與金額皆為虛構。</p><button class="btn pri" data-a="close">我知道了</button></div></div>';
    if (S.modal === "send") modal = '<div class="modal"><div class="dlg"><h5>寄回方式</h5><label class="mu">委任書寄回方式<select data-in="how"><option' + (S.send.how === "電子信件" ? " selected" : "") + ">電子信件</option><option" + (S.send.how === "紙本郵寄" ? " selected" : "") + '>紙本郵寄</option></select></label><label class="mu">預計寄回日期<input type="date" data-in="date" value="' + S.send.date + '"></label><div class="row"><button class="btn" data-a="close">取消</button><button class="btn pri" data-a="send"' + (S.send.date ? "" : " disabled") + ">送出</button></div></div></div>";
    if (S.modal === "sent") modal = '<div class="modal"><div class="dlg"><h5>已送出</h5><p style="margin:0">委辦 ' + S.last.k + " 件、放棄 " + S.last.x + " 件已送出。<br>事務所會收到通知信與勾選清單（CSV），委辦案件自動進入開單流程，放棄案件寫入現況紀錄。</p>" +
      '<div class="note">已開啟列印預覽，請依「' + S.send.how + "」方式於 " + S.send.date + ' 前寄回委任書。</div><button class="btn pri" data-a="back">返回主畫面</button></div></div>';
    root.innerHTML = '<div class="an"><div class="an-top"><div><b>○○智慧財產權事務所｜年費案件回覆</b><br><small>' + CLIENT + "　共 " + n + ' 件待回覆</small></div><span class="an-url">…/annuity?token=7f3a…c91</span></div>' +
      '<div class="an-body"><div class="an-main">' + main + '</div><div class="an-side">' + side + "</div></div>" + modal + "</div>";
  }

  function onClick(e) {
    var b = e.target.closest("[data-a],[data-sel]"); if (!b || !root.contains(b)) return;
    if (b.dataset.sel) { var id = b.dataset.sel; if (S.sel[id]) delete S.sel[id]; else S.sel[id] = 1; return render(); }
    var a = b.dataset.a.split(":");
    switch (a[0]) {
      case "pick": S.pick[a[1]] = a[2]; delete S.sel[a[1]]; save(); break;
      case "unpick": delete S.pick[a[1]]; save(); break;
      case "selall": var rows = shown(), all = rows.every(function (c) { return S.sel[c.id]; }); S.sel = {}; if (!all) rows.forEach(function (c) { S.sel[c.id] = 1; }); break;
      case "bulk": Object.keys(S.sel).forEach(function (id) { S.pick[id] = a[1]; }); S.sel = {}; save(); break;
      case "view": S.view = a[1]; S.sel = {}; break;
      case "refresh": save(); break;
      case "print1": S.stage = 2; break;
      case "stage": S.stage = +a[1]; break;
      case "gen": S.modal = "send"; break;
      case "close": S.modal = null; break;
      case "send": S.last = { k: count("k"), x: count("x") }; live().forEach(function (c) { if (S.pick[c.id]) S.done.push(c.id); }); S.stage = 4; S.modal = "sent"; save(); break;
      case "back": var keep = S.done.slice(); S = fresh(); S.modal = null; S.done = []; ALL = cases(); save(); break;
    }
    render();
  }
  function onInput(e) {
    var k = e.target.dataset && e.target.dataset.in; if (!k) return;
    if (k === "how" || k === "date") { S.send[k] = e.target.value; if (k === "date") render(); return; }
    S[k] = e.target.value;
    var pos = e.target.selectionStart; render();
    var el = root.querySelector('[data-in="' + k + '"]'); if (el && k === "q") { el.focus(); try { el.setSelectionRange(pos, pos); } catch (er) {} }
  }

  window.AnnuityDemo = {
    mount: function (el, l) {
      if (!document.getElementById("an-css")) { var st = document.createElement("style"); st.id = "an-css"; st.textContent = CSS; document.head.appendChild(st); }
      if (!S) S = load();
      lang = l || "zh"; root = el;
      el.addEventListener("click", onClick); el.addEventListener("input", onInput); el.addEventListener("change", onInput);
      render();
    },
    reset: function () { S = fresh(); try { localStorage.removeItem(KEY); } catch (e) {} if (root) render(); }
  };
})();
