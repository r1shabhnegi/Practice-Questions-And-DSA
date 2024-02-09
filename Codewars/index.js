// CODEWARS

// 1. Extract the domain name from a URL

function domainName(url) {
  const domain = url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.')[0];

  return domain;
}

console.log(domainName('http://github.com/carbonfive/raygun'));
console.log(domainName('http://www.zombie-bites.com'));
console.log(domainName('https://www.cnet.com'));
