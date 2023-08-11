/*
 - merupakan binary to text encoding, representasi binary data dlam format string
 - format text data yang aman untuk dikirimkan di web
 - merupakan encoding yang biasanya digunakan ketika perlu mengirim data dari client ke server
 - karena encoding Base64 merupakan text, oleh karena itu sangat aman digunakan pada query param URL atau text body dalam form
*/

const original = "Doni&tatang=udin";
console.info(original);

const encoded = btoa(original);
console.info(encoded);

const decoded = atob(encoded);
console.info(decoded);
