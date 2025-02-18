class foodQueue {
  order: string[] = [];
  process: any[] = [];
  constructor(...paramter: string[]) {
    for (const element of paramter) {
      this.order.push(element);
    }
  }

  private resoveRejectChecker(resolve, reject) {
    const success = true;
    let ordername = this.order.shift();
    const timeprocess = (Math.random() + 1) * 50;
    setTimeout(() => {
      if (success) {
        resolve(`pesanan ${ordername} selesai dalam waktu ${timeprocess}`);
      } else {
        reject("Terjadi Kesalahan");
      }
    }, timeprocess);
  }

  buatpromise= async()=>{
    return new Promise((resolve, reject)=> {
      const success = true;
      let ordername = this.order.shift();
      const timeprocess = (Math.random() + 1) * 50;
      setTimeout(() => {
        if (success) {
          resolve(`pesanan ${ordername} selesai dalam waktu ${Math.round(timeprocess)} second`);
        } else {
          reject("Terjadi Kesalahan");
        }}
      , timeprocess)})
      }



  processOrder=async()=> {
    while(this.order.length>0) {      
      const output = this.buatpromise();
      this.process.push(output);
    }
    
    while(this.process.length>0) { 
      const output = await this.process.shift()
      console.log(output);
      ;
    }
  }
}

const KFC = new foodQueue("ayam", "Paha","dada");
KFC.processOrder();
