let username = "seyda";
const DOMAIN = "gmail.com";
let email = username + "@" + DOMAIN;

console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email);

//Template Literals -> ``
let info = `
        Merhaba ${username} sitemize hosgeldin..
        mail adresin : ${email}
        kisa ismin : ${username[0]}
        mail adresinin uzunlugu : ${email.length}
        borcunuz : ${(2 + 3) * 5}
        gunu saat bilgisi : ${new Date().getHours()}        
        `
console.log(info)


let email2="seydaacikgoz@gmail.com";
let firstName = "seyda";
let lastName = "ACİKGOZ";

//string karakter sayısını bulmak
console.log(email2.length);

//ilk karakteri bulmak
console.log(firstName[0]);
console.log(firstName.charAt(0));

//buyuk-kucuk harf yapmak
firstName = firstName.toUpperCase();
console.log(firstName);
firstName = firstName.toLowerCase();
console.log(firstName);

//string icinde istenilen bilgiyi aramak ve yerini bulmak
console.log(email2.search("@"));
console.log(email2.search("olmayan"))  //ifade yer almadığı için -1 döner

//belli bir yere kadar olanı al
console.log(email2.slice(0, 10));
let Domain = email2.slice(email2.search("@") + 1);//domain bilgisini al(+1 in sebebi @ i almaması için)
console.log(Domain);
console.log(Domain.slice(0, Domain.indexOf('.')));//sadece gmail i almak

//bilgiyi değiştir
email2 = email2.replace('gmail.com', 'hotmail.com');
console.log(email2);

//istenilen bilginin olup olmadığını kontrol etmek
console.log(email2.includes('gmail'));
console.log(email2.includes('hotmail'));

//istenilen bilgiyle başlayıp-bittiğini kontrol etmek
console.log(email2.endsWith('com'));
console.log(email2.startsWith('seyda'));

//ilk harflerini büyük yapmak
firstName = "firstname";
lastName = "lastName";
let fullNmae = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`;
console.log(fullNmae);
