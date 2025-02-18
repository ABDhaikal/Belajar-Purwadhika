/*
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085211155555"
    output = "(6285)-2111-55555"
*/
function phoneNumber(input: string) {
  if (input.length != 12) return "Invalid phone number.";
  if (isNaN(Number(input)) || Number(input) < 0) return "Invalid phone number.";
  if (input[0] === "0") {
    return (
      "(62" +
      input.slice(1, 3) +
      ")-" +
      input.slice(3, 7) +
      "-" +
      input.slice(7, 12)
    );
  }
  return (
    "(" +
    input.slice(0, 4) +
    ")-" +
    input.slice(4, 6) +
    "-" +
    input.slice(7, 11)
  );
}

console.log(phoneNumber("085211155555"));

console.log("==============nomor2==============");

/*
    ========================================================
    
    # buat parent class Product
    constructor = nama, berat, price,stok

    # buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 

    # buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart user
*/

class Product {
  nama: string;
  berat: number;
  price: number;
  stock: number;
  constructor(nama: string, berat: number, price: number, stock: number) {
    this.nama = nama;
    this.berat = berat;
    this.price = price;
    this.stock = stock;
  }

  public get Data(): object {
    return {
      nama: this.nama,
      berat: this.berat,
      price: this.price,
      stock: this.stock,
    };
  }
}

class Buku extends Product {
  penerbit: string;
  penulis: string;
  constructor(
    nama: string,
    berat: number,
    price: number,
    stock: number,
    penerbit: string,
    penulis: string
  ) {
    super(nama, berat, price, stock);
    this.penerbit = penerbit;
    this.penulis = penulis;
  }
  public get Data(): object {
    return {
      nama: this.nama,
      berat: this.berat,
      price: this.price,
      stock: this.stock,
      penulis: this.penulis,
      penerbit: this.penerbit,
    };
  }
}

class Pakaian extends Product {
  merek: string;
  bahan: string;
  constructor(
    nama: string,
    berat: number,
    price: number,
    stock: number,
    merek: string,
    bahan: string
  ) {
    super(nama, berat, price, stock);
    this.merek = merek;
    this.bahan = bahan;
  }

  public get Data(): object {
    return {
      nama: this.nama,
      berat: this.berat,
      price: this.price,
      stock: this.stock,
      merek: this.merek,
      bahan: this.bahan,
    };
  }
}

class OnlineShop {
  produckStock: any[] = [];
  produckChart: any[] = [];
  ongkir: number = 2000;

  /**
   *
   * @param input product that want to search
   * @returns the product in the catalog
   */
  private getProduct(input: any) {
    if (input instanceof Product) {
      return this.produckStock.find((value) => value.nama === input.nama);
    }
    return this.produckStock.find((value) => value.nama === input);
  }

  /**
   *
   * @param input product that need to add into store
   * @returns status of adding product
   */
  tambahProduk(input: Product) {
    if (this.getProduct(input) === undefined) {
      this.produckStock.push(input);
      return "Successly Added";
    }
    return "produk sudah ada dalam toko";
  }

  /**
   *
   * @param input : Product that want to be buy
   * @param jumlah : Number of product that want to but
   * @returns status of adding product
   */

  tambahKeKeranjang(input: any, jumlah: number) {
    let check = this.getProduct(input);
    if (check === undefined) return "Produk tidak ada dalam katalog";
    if (check.stock < jumlah) {
      return "Jumlah produk yang tersedia tidak mencukupi";
    }
    let addchart = structuredClone(input);
    if (input instanceof Product) {
      check.stock -= input.stock;
      this.produckChart.push(input);
    } else {
      addchart.stock = jumlah;
      check.stock -= jumlah;
      this.produckChart.push(addchart);
    }
    return "Berhasil ditambahkan";
  }

  /**
   *
   * @param uangUser :number money of user want to use to buy
   * @param jarak : range of shipment
   * @returns do transaction and clearance chart if success
   */
  transaksi(uangUser: number, jarak: number) {
    let produckCost = 0;
    let shipmentCost = 0;
    this.produckChart.forEach((element) => {
      produckCost += element.stock * element.price;
      shipmentCost += element.berat;
    });

    shipmentCost = shipmentCost * jarak * this.ongkir;
    console.log(`product Cost: ${produckCost}`);
    console.log(`shipmentCost: Cost ${shipmentCost}`);
    if (uangUser <= produckCost + shipmentCost) {
      console.log("uang tidak cukup");
      return false;
    }
    this.produckChart = [];
    console.log(`kembali : ${uangUser - (produckCost + shipmentCost)}`);

    return true;
  }

  /**
   * @method showing catalog
   */
  public showCatalog() {
    console.log("catalog");
    console.table(this.produckStock)
    for (const element of this.produckStock) {
      console.log(element);
    }
  }
  /**
   * @method showing chart
   */
  public showChart() {
    console.log("chart");

    for (const element of this.produckChart) {
      console.log(element);
    }
  }
}

const shop = new OnlineShop();
const product = new Product("test product", 1, 100, 10);
const product2 = new Product("test product", 1, 100, 10);
const kaos = new Pakaian("test p2roduct", 1, 100, 10, "uniqlo", "Kain");

console.log(shop.tambahProduk(product));
console.log(shop.tambahProduk(kaos));
shop.showCatalog();
console.log(shop.tambahKeKeranjang(kaos, 10));
shop.showCatalog();
shop.showChart()

console.log(shop.transaksi(10000000, 20));


