function CastRandomSpell(){

  const adjectives = [
    "𖤍 Mystic","⟡･ﾟﾟ。Enchanted","𒅌 Arcane","♕ Divine","×͜×༗ Shadow",
    "𖤓 Infernal",".ೃ Celestial","*₊˚❀༉ Ethereal","( ˶• ༝ •˶) Luminous","⚚ Runic"
  ]

  const nouns = [
    "Flame","Frost","Storm","࿔ Whisper","Blade",
    "Phoenix","Dragon","Orb","Crown","Warden"
  ];

  const magicalTerms = [
    "of Power ⁽𐦍⁾","of Eternity ✧˖ ⋆","of the Ancients ⋆ ⋆⁺₊⋆ ",
    "of Shadows ⁽𐦍⁾","of Light .𖥔 ݁","of the Void ✧",
    "of Time ⋆.ೃ࿔*:･","of the Elements ◯☾₊‧⁺˖⋆","of Chaos ⋆ ⋆⁺₊⋆ ","of Harmony ✧˖ ⋆"
  ];

  function generateSpellName() {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const magicalTerm = magicalTerms[Math.floor(Math.random() * magicalTerms.length)];

    return `${adjective} ${noun} ${magicalTerm}`;
  }
/*create new divs*/
  const output = document.getElementById("output");
  const newDiv = document.createElement("div");
  newDiv.textContent = generateSpellName();
/* put them inside output div */
  output.append(newDiv);
}

function closeWindow(){
  setTimeout(() => {
    window.close();
  }, 1000); // Close the window after 1 second

  /* button text change on close */
  const SpellButton = document.getElementById("SpellCastor");
  SpellButton.textContent = "Closing...   𓇢𓆸";
  SpellButton.disabled = true;
}

/* identify the buttons and give them functionality */
document.addEventListener("DOMContentLoaded",() =>{
  const button = document.getElementById("SpellCastor");
  button.addEventListener("click",CastRandomSpell);
  const leave = document.getElementById("x");
  leave.addEventListener("click", closeWindow);
});
