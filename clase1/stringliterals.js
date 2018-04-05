let template = function(to, from, subject, body){
    return "\t Sr " + to + " queremos saludarlo desde \n" + from + " por el motivo:" +
        subject + " y el mensaje es:" + " \n \t" + body
};

console.log(template("Juan", "Fravega", "Oferta", "Tiene un 10% de descuento en Heladeras"));

let template2 = function(to, from, subject, body){
    return `
        Sr ${to} queremos saludarlo desde  ${from} por el motivo: 
        ${subject}  y el mensaje es:
        ${body}
        `
};

console.log(template2("Juan", "Fravega", "Oferta", "Tiene un 10% de descuento en Heladeras"));

let template3 = (to, from, subject, body) => {
    return `
        Sr ${to} queremos saludarlo desde  ${from} por el motivo: 
        ${subject}  y el mensaje es:
        ${body}
        `
};

console.log(template3("Juan", "Fravega", "Oferta", "Tiene un 10% de descuento en Heladeras"));

let template4 = (to, from, subject, body) => `
        Sr ${to} queremos saludarlo desde  ${from} por el motivo: 
        ${subject}  y el mensaje es:
        ${body}
        `;

console.log(template4("Juan", "Fravega", "Oferta", "Tiene un 10% de descuento en Heladeras"));