// //*!
//  * The main vanilla javascript library for accessing the Air-port-codes API
//  *
//  * @license MIT license
//  * apc library v1.2.0 | (c) 2016 AIR-PORT-CODES | Air-port-codes.com/terms-of-use
//  */
var apc = function (t, e) {
  var n = this,
    o = {},
    r = "https://www.air-port-codes.com/api/v1/",
    c;
  return (
    (n = {
      request: function (e) {
        n[t](e);
      },
      init: function () {
        for (var t in e) "key" !== t && "secret" !== t && (o[t] = e[t]);
      },
      autocomplete: function (t) {
        (o.term = t), n.doAjax();
      },
      multi: function (t) {
        (o.term = t), n.doAjax();
      },
      single: function (t) {
        (o.iata = t), n.doAjax();
      },
      countries: function () {
        n.doAjax();
      },
      states: function () {
        n.doAjax();
      },
      doAjax: function () {
        c.post(r + t, o, function (t) {
          (t = JSON.parse(t)), t.status ? n.onSuccess(t) : n.onError(t);
        });
      },
    }),
    (c = {
      x: function () {
        if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest();
        for (
          var t = [
              "MSXML2.XmlHttp.6.0",
              "MSXML2.XmlHttp.5.0",
              "MSXML2.XmlHttp.4.0",
              "MSXML2.XmlHttp.3.0",
              "MSXML2.XmlHttp.2.0",
              "Microsoft.XmlHttp",
            ],
            e,
            n = 0;
          n < t.length;
          n++
        )
          try {
            e = new ActiveXObject(t[n]);
            break;
          } catch (t) {}
        return e;
      },
      send: function (t, n, o, r, i) {
        void 0 === i && (i = !0);
        var a = c.x();
        a.open(o, t, i),
          (a.onreadystatechange = function () {
            4 === a.readyState && n(a.responseText);
          }),
          "POST" === o &&
            (a.setRequestHeader(
              "Content-type",
              "application/x-www-form-urlencoded"
            ),
            a.setRequestHeader("APC-Auth", e.key),
            e.secret && a.setRequestHeader("APC-Auth-Secret", e.secret)),
          a.send(r);
      },
      post: function (t, e, n, o) {
        var r = [];
        for (var i in e)
          r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
        c.send(t, n, "POST", r.join("&"), o);
      },
    }),
    n.init(),
    n
  );
};
