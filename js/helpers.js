import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function(url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]) ;
    const data = await res.json();

    if(!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

// export const sortArrObj = function(array) {
//   array.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
//   return array;
// }

export const sortArrObj = function(array) {
  const sortedArray = array.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  let abcSortedArray = sortedArray.reduce((previous, current) => {
    let k = current['name'][0].toLocaleUpperCase();
    if(previous[k]) previous[k].push(current);
    else previous[k] = [current];
    return previous
  }, {});
    return abcSortedArray;
}







    // export const abcSortDirectors = function(docs) {
    //   let sortedDocs = docs.reduce((previous, current) => {
    //     let k = current['name'][0].toLocaleUpperCase();
    //     if(previous[k]) previous[k].push(current);
    //     else previous[k] = [current];
    //       return previous;
    //   }, {});
    //   return sortedDocs;
    // }
