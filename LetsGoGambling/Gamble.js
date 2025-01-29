/*
the 9 selection buttons
const OneSelected = document.getElementById("btn1");
const TwoSelected = document.getElementById("btn2");
const ThreeSelected = document.getElementById("btn3");
const FourSelected = document.getElementById("btn4");
const FiveSelected = document.getElementById("btn5");
const SixSelected = document.getElementById("btn6");
const SevenSelected = document.getElementById("btn7");
const EightSelected = document.getElementById("btn8");
const NineSelected = document.getElementById("btn9");

OneSelected.addEventListener("click", MakeOne);
TwoSelected.addEventListener("click", MakeTwo);
ThreeSelected.addEventListener("click", MakeThree);
FourSelected.addEventListener("click", MakeFour);
FiveSelected.addEventListener("click", MakeFive);
SixSelected.addEventListener("click", MakeSix);
SevenSelected.addEventListener("click", MakeSeven);
EightSelected.addEventListener("click", MakeEight);
NineSelected.addEventListener("click", MakeNine);
*/

/* all the spinners */
const SpinnerOne = document.getElementById("spinner1");
const SpinnerTwo = document.getElementById("spinner2");
const SpinnerThree = document.getElementById("spinner3");

/*spin the wheel*/
const SpinButton = document.getElementById("spinButton");
SpinButton.addEventListener("click", SpinIt);

document.addEventListener("DOMContentLoaded", () => {
  SpinIt();
});

function SpinIt(){
  setTimeout(() => {
    SpinnerOne.textContent = Math.floor(Math.random() * 10);
    setTimeout(() => {
      SpinnerTwo.textContent = Math.floor(Math.random() * 10);
      setTimeout(() => {
        SpinnerThree.textContent = Math.floor(Math.random() * 10);
        // After all spinners update, check for win
        check();
      }, 100); // Delay for Spinner 3
    }, 100); // Delay for Spinner 2
  }, 100); // Delay for Spinner
}
function check(){
  if (Number(SpinnerOne.textContent) === Number(SpinnerTwo.textContent) &&
    Number(SpinnerOne.textContent) === Number(SpinnerThree.textContent)){
    win();
  }
}
function win(){
  setTimeout(() => {
    alert("You Won!");
  }, 10); // performs 10 miliseconds after

}

/* ruin the fun */
const ruinFun = document.getElementById("ruinFun");
ruinFun.addEventListener("click", SpinItGuaranteed);
function SpinItGuaranteed() {
  const OneDigit = Math.floor(Math.random() * 10);
  /* easy and boring */
  /*setTimeout( () => {
    SpinnerOne.textContent = OneDigit;
    setTimeout( () => {
      SpinnerTwo.textContent = OneDigit;
      setTimeout( () => {
        SpinnerThree.textContent = OneDigit;
        check();
      }, 100)
    }, 100)
  }, 100)*/
  /* harder but ait */
  /*
  setTimeout( () => {
    SpinnerOne.textContent = OneDigit - 2;
    setTimeout( () => {
      SpinnerOne.textContent = OneDigit -1;
      setTimeout( () => {
        SpinnerOne.textContent = OneDigit;
        setTimeout( () => {
          SpinnerTwo.textContent = OneDigit - 2;
          setTimeout( () => {
            SpinnerTwo.textContent = OneDigit - 1;
            setTimeout( () => {
              SpinnerTwo.textContent = OneDigit;
              setTimeout( () => {
                SpinnerThree.textContent = OneDigit - 2;
                setTimeout( () => {
                  SpinnerThree.textContent = OneDigit - 1;
                  setTimeout( () => {
                    SpinnerThree.textContent = OneDigit;

                    check();
                  }, 500)
                }, 200)
              }, 100)
            }, 500)
          }, 200)
        }, 100)
      }, 500)
    }, 200)
  }, 100)
   */
  /* ABSOLUTE MASTERPIECE AND TOTALLY NOT WASTE OF MY TIME */
  setTimeout(() => {
    SpinnerOne.textContent = OneDigit - 9;
    setTimeout(() => {
      SpinnerOne.textContent = OneDigit - 8;
      setTimeout(() => {
        SpinnerOne.textContent = OneDigit - 7;
        setTimeout(() => {
          SpinnerOne.textContent = OneDigit - 6;
          setTimeout(() => {
            SpinnerOne.textContent = OneDigit - 5;
            setTimeout(() => {
              SpinnerOne.textContent = OneDigit - 4;
              setTimeout(() => {
                SpinnerOne.textContent = OneDigit - 3;
                setTimeout(() => {
                  SpinnerOne.textContent = OneDigit - 2;
                  setTimeout(() => {
                    SpinnerOne.textContent = OneDigit - 1;
                    setTimeout(() => {
                      SpinnerOne.textContent = OneDigit;
                      setTimeout(() => {
                        SpinnerTwo.textContent = OneDigit - 9;
                        setTimeout(() => {
                          SpinnerTwo.textContent = OneDigit - 8;
                          setTimeout(() => {
                            SpinnerTwo.textContent = OneDigit - 7;
                            setTimeout(() => {
                              SpinnerTwo.textContent = OneDigit - 6;
                              setTimeout(() => {
                                SpinnerTwo.textContent = OneDigit - 5;
                                setTimeout(() => {
                                  SpinnerTwo.textContent = OneDigit - 4;
                                  setTimeout(() => {
                                    SpinnerTwo.textContent = OneDigit - 3;
                                    setTimeout(() => {
                                      SpinnerTwo.textContent = OneDigit - 2;
                                      setTimeout(() => {
                                        SpinnerTwo.textContent = OneDigit - 1;
                                        setTimeout(() => {
                                          SpinnerTwo.textContent = OneDigit;
                                          setTimeout(() => {
                                            SpinnerThree.textContent = OneDigit - 9;
                                            setTimeout(() => {
                                              SpinnerThree.textContent = OneDigit - 8;
                                              setTimeout(() => {
                                                SpinnerThree.textContent = OneDigit - 7;
                                                setTimeout(() => {
                                                  SpinnerThree.textContent = OneDigit - 6;
                                                  setTimeout(() => {
                                                    SpinnerThree.textContent = OneDigit - 5;
                                                    setTimeout(() => {
                                                      SpinnerThree.textContent = OneDigit - 4;
                                                      setTimeout(() => {
                                                        SpinnerThree.textContent = OneDigit - 3;
                                                        setTimeout(() => {
                                                          SpinnerThree.textContent = OneDigit - 2;
                                                          setTimeout(() => {
                                                            SpinnerThree.textContent = OneDigit - 1;
                                                            setTimeout(() => {
                                                              SpinnerThree.textContent = OneDigit;
                                                              check();
                                                            }, 1024)
                                                          }, 512)
                                                        }, 256)
                                                      }, 128)
                                                    }, 64)
                                                  }, 32)
                                                }, 16)
                                              }, 8)
                                            }, 4)
                                          }, 2)
                                        }, 1024)
                                      }, 512)
                                    }, 256)
                                  }, 128)
                                }, 64)
                              }, 32)
                            }, 16)
                          }, 8)
                        }, 4)
                      }, 2)
                    }, 1024)
                  }, 512)
                }, 256)
              }, 128)
            }, 64)
          }, 32)
        }, 16)
      }, 8)
    }, 4)
  }, 2)
  /* ok men sånn fr this did not make the satisfying spin effect so its a fail really */
}
