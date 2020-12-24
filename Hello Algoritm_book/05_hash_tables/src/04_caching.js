let cache = {};

function get_page(url) {
  if (cache[url]) {
    return cache[url];
  } else {
    let data = get_data_from_server(url);
    cache[url] = data;
    return data;
  }
}
