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

export const sendJSON = async function(url, uploadData) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(uploadData)
    });
    const data = await res.json();
    if(!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch(err) {
    throw(err);
  }
}

export const deleteJSON = async function(url) {
  try {
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    return res;
  } catch(err) {
    throw err;
  }
}

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

export const fieldsInArray = function(array, keyword) {
  const returnArr = [];
    Object.keys(array).forEach(key => {
      if (key.includes(keyword))  returnArr.push(array[key])
    });
    return returnArr;
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
