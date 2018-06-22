class Http {
  static fetchData(url) {
    const errorMessage = 'This is broken :(';
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open('GET', url);
      http.onreadystatechange = () => {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
          const responseData = JSON.parse(http.responseText);
          resolve(responseData);
        } else if (http.readyState === XMLHttpRequest.DONE) {
          reject(errorMessage);
        }
      };
      http.send();
    });
  }
}

export default Http;
