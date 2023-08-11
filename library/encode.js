/*
 - saat menulis url, kadang kita ingin menambah infromasi tambahan seperti query parameter
 - url sendiri sudah memiliki standar encoding penulisan url
 - standar encoding dilakukan agar penulisan url aman ketika diterima oleh server
 - aman dalam artian informasi URL tidak berubah

 # contoh masalah jika tidak menggunakan encode
 - misal ada query parameter degan nama data, lalu kita ingin mengirimkan nilai 
 - misal nilainya adalah &tono=tono&, alhasil urlnya akan menjadi:
   http://contoh.com?data=&tono=tono&
 - jika diterima oleh server, parameter data bernilai kosong, karena & dianggap sebagai pemisah antar parameter
 - artinya tanda & dll perlu diencode, agar tidak terjadi kesalahan data yang kita kirm
*/
{
  // Encode uri dan Decode uri

  const url = "http://contoh.com/?name=tono tuno tonu";
  console.info(url);

  const encoded = endocedURI(url);
  console.info(encoded);

  const decoded = decodeURI(encoded);
  console.info(decoded);
}

{
  // Encode uri dan Decode uri

  const value = "tono&supra=x";
  const url = "http://contoh.com/?name=";
  console.info(url + value);

  const encoded = endocedURIComponent(value);
  console.info(url + encoded);

  const decoded = decodeURIComponent(encoded);
  console.info(url + decoded);
}
