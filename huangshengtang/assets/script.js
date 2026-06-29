const SITE_CONFIG = {
  whatsappNumber: "00000000000",
  email: "hello@example.com",
  socialLinks: { tiktok: "#", facebook: "#", instagram: "#", youtube: "#" }
};
var currentLang = "en";
var rtlLangs = ["ar","ur","fa","he"];
function getText(key) {
  var dict = I18N[currentLang] || I18N.en;
  return dict[key] || I18N.en[key] || key;
}
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = rtlLangs.indexOf(lang) >= 0 ? "rtl" : "ltr";
  var els = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    var key = el.getAttribute("data-i18n");
    var text = getText(key);
    if (text != null && text !== undefined) {
      if (el.querySelector("*") != null) {
        var cns = el.childNodes;
        for (var j = 0; j < cns.length; j++) {
          if (cns[j].nodeType === 3) { cns[j].textContent = text; break; }
        }
      } else { el.textContent = text; }
    }
  }
  var wa = document.getElementById("whatsappBtn");
  if (wa) { var sp = wa.querySelector("span"); if(sp) sp.textContent = getText("contact.whatsapp"); }
  var fw = document.getElementById("footerWhatsapp");
  if (fw) { var sp = fw.querySelector("span"); if(sp) sp.textContent = getText("footer.whatsapp"); }
  var fe = document.getElementById("footerEmail");
  if (fe) { var sp = fe.querySelector("span"); if(sp) sp.textContent = getText("footer.email"); }
}
function loadLanguage() {
  var saved = localStorage.getItem("tdici_lang");
  var lang = saved || "en";
  document.getElementById("languageSelect").value = lang;
  applyLanguage(lang);
}
(function() {
  var n = document.getElementById("navToggle");
  var m = document.getElementById("mainNav");
  if (n && m) {
    n.addEventListener("click", function() { m.classList.toggle("open"); });document.addEventListener("click",function(e){if(m&&m.classList.contains("open")&&!m.contains(e.target)&&!n.contains(e.target)){m.classList.remove("open")}});document.addEventListener("keydown",function(e){if(e.key==="Escape"&&m&&m.classList.contains("open")){m.classList.remove("open")}});
    document.querySelectorAll("#mainNav a").forEach(function(l) { l.addEventListener("click", function() { m.classList.remove("open"); }); });
  }
  var ls = document.getElementById("languageSelect");
  if (ls) {
    ls.addEventListener("change", function() {
      var lang = this.value;
      localStorage.setItem("tdici_lang", lang);
      applyLanguage(lang);
    });
  }
  loadLanguage();
  function getWAUrl() {
    var msg = encodeURIComponent(getText("whatsapp.message"));
    return "https://wa.me/" + SITE_CONFIG.whatsappNumber + "?text=" + msg;
  }
  var wb = document.getElementById("whatsappBtn");
  if (wb) { wb.addEventListener("click", function(e) { e.preventDefault(); window.open(getWAUrl(), "_blank"); }); }
  var fw = document.getElementById("footerWhatsapp");
  if (fw) { fw.addEventListener("click", function(e) { e.preventDefault(); window.open(getWAUrl(), "_blank"); }); }
  function getEmailUrl() {
    var subj = encodeURIComponent("Inquiry about Huangshengtang Kugan Plant Drink");
    var body = encodeURIComponent("Hello, I would like to know more about Huangshengtang Kugan Plant Drink.");
    return "mailto:" + SITE_CONFIG.email + "?subject=" + subj + "&body=" + body;
  }
  var eb = document.getElementById("emailBtn");
  if (eb) { eb.addEventListener("click", function(e) { e.preventDefault(); window.location.href = getEmailUrl(); }); }
  var fe = document.getElementById("footerEmail");
  if (fe) { fe.addEventListener("click", function(e) { e.preventDefault(); window.location.href = getEmailUrl(); }); }
  var sk = ["tiktok","facebook","instagram","youtube"];
  sk.forEach(function(k) {
    document.querySelectorAll('[data-social="' + k + '"]').forEach(function(l) { l.href = SITE_CONFIG.socialLinks[k] || "#"; });
  });
})();
