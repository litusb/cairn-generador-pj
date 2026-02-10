roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};
const armadura = generate_text("armadura");
const casc = generate_text("casc");
const eina = generate_text("eina");
const material = generate_text("material");
const fotil = generate_text("fotil");
const armes = generate_text("armes");
const addicional = generate_text("addicional");

let totsItems = [];
totsItems.push(armadura, casc, armes, material, eina, fotil, addicional);
let total = 2;
for (let i = 0; i < totsItems.length; i++) {
  let item = totsItems[i];
  if (item.includes("voluminós") || item.includes("i un")) {
    total += 2;
  } else if (total > 10){
    total = 10;
  } else if (!item.includes("sense") && (!item.includes("ni") && (!item.includes("apilable")))) {
    total++;
  }
}

let armaduraTotal = 0;
let armaduraValor = [];
armaduraValor.push(armadura, casc);
armaduraValor.forEach((item) => {
  if (item.includes("1")) {
    armaduraTotal++;
  } else if (item.includes("2")) {
    armaduraTotal += 2;
  } else if (item.includes("3")) {
    armaduraTotal += 3;
  }

  if (armaduraTotal > 3){
    armaduraTotal = 3;
  }
});

// console.log(total);
$("#nom").html(generate_text("nom_addicional"));
$("#cognom").html(generate_text("cognom_addicional"));
$("#nomclassic").html(generate_text("nom"));
$("#cognomclassic").html(generate_text("cognom"));
$("#rerefons").html(generate_text("rerefons"));
$("#rerefons_addicional").html(generate_text("rerefons_addicional"));
$("#personatge").html(generate_text("personatge"));
$("#edat").html(roll(20) + roll(20) + 10);
$("#pd").html(roll(6));
["for", "des", "vol"].forEach((item, i) => {
$("#" + item).html(roll(6) + roll(6) + roll(6));});
$("#armadura").html(armadura);
$("#casc").html(casc);
$("#armes").html(armes);
$("#eina").html(eina);
$("#material").html(material);
$("#fotil").html(fotil);
$("#addicional").html(addicional);
$("#armaduraTotal").html(armaduraTotal);
$("#total").html(total);
$("#or").html(roll(6) + roll(6) + roll(6));
