const showDoc = async function() {
  try {
    // fetch method returns a response object.
    // we then call the json method on that response, which returns another promise
    // which we then have to await again, and in the end we get the data stored in that variable
    const res = await
      fetch('http://localhost:3000/directors');

      const data = await res.json();

      console.log(data);
      console.log('--------------------------------------');
      console.log(data[0].name);

  } catch (err) {
    alert(err);
  }
}
console.log("hello");

showDoc();
