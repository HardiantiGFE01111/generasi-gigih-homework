const fungsi = () => {
    alert('Song added!');
}
function start() { 
 const url = "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json";
console.log("Sudah Masuk") 
fetch(url)
    .then((response) => {
      // if there is a typo on the request url, it will still get resolved so we need to check the status
      if (!response.ok) {
        return Promise.reject("there is an error fetching the data");
      }
      console.log("status ok", response);
      return response.json(); // returns a Promise
    })
    .then((data) => {
      console.log("resolved:", data);
    })
    .catch((err) => {
      console.log("rejected:", err);
      alert('song gagal');
    });
//const fetchPromise = fetch(url, {method: 'Get'});

// fetchPromise.then(res => {
//     console.log(res);
//     console.log(res.json());
//     return res.json();
// }).then(res => {
//     // console log res
//     console.log(res);
//     //Get image, title, artist, album and button element
//     let image-document.getElementById('image');
//     let title-document.getElementById('title');
//     let artist-document.getElementById('artists');
//     let album-document.getElementById('album');
//     let spotifyBtn-document.getElementById('spotifyBtn');
//     // set attributs related to element
//     image.setAttribute('src',res.album.image[0].url);
//     image.setAttribut('width',res.album.images[0].width);
//     title.innerText = res.name;
//     artists.innerText = res.artists[0].name;
//     album.innerText = res.album.name;
//     spotifyBtn.setAttribute('href',res.album.external_urls.spotify);
// }).catch(err => {
//     alert(err.message);
// })
}