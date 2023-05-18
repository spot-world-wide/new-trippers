const apc = (t, e) => {
  let o = {};
  const r = "https://www.air-port-codes.com/api/v1/";

  const request = (endpoint) => {
    return doAjax(endpoint);
  };

  const init = () => {
    for (let t in e) {
      if (t !== "key" && t !== "secret") {
        o[t] = e[t];
      }
    }
  };

  const autocomplete = (term) => {
    o.term = term;
    return doAjax("autocomplete");
  };

  const multi = (term) => {
    o.term = term;
    return doAjax("multi");
  };

  const single = (iata) => {
    o.iata = iata;
    return doAjax("single");
  };

  const countries = () => {
    return doAjax("countries");
  };

  const states = () => {
    return doAjax("states");
  };

  const doAjax = (endpoint) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            response.status ? resolve(response) : reject(response);
          } else {
            reject(xhr.statusText);
          }
        }
      };

      let url = r + endpoint;
      if (
        endpoint !== "single" &&
        endpoint !== "countries" &&
        endpoint !== "states"
      ) {
        url += `/${t}`;
      }

      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("APC-Auth", e.key);
      if (e.secret) {
        xhr.setRequestHeader("APC-Auth-Secret", e.secret);
      }

      let data = "";
      for (let key in o) {
        data += `${encodeURIComponent(key)}=${encodeURIComponent(o[key])}&`;
      }
      data = data.slice(0, -1);
      xhr.send(data);
    });
  };

  init();

  return {
    request,
    autocomplete,
    multi,
    single,
    countries,
    states,
  };
};

export default apc;
