"use strict";

// ОЗВУЧКА
const hello1 = new Audio("sounds/приветствие1.mp3");
const hello2 = new Audio("sounds/приветствие2.mp3");
const hello3 = new Audio("sounds/приветствие3.mp3");
const hello4 = new Audio("sounds/приветствие4.mp3");
const hello5 = new Audio("sounds/приветствие5.mp3");
const hello6 = new Audio("sounds/приветствие6.mp3");
const hello7 = new Audio("sounds/приветствие7.mp3");

const mystery1 = new Audio("sounds/загадка1.mp3");
const mystery2 = new Audio("sounds/загадка2.mp3");
const mystery3 = new Audio("sounds/загадка3.mp3");

const newMystery1 = new Audio("sounds/новая_загадка1.mp3");
const newMystery2 = new Audio("sounds/новая_загадка2.mp3");
const newMystery3 = new Audio("sounds/новая_загадка3.mp3");

const endNewMystery1 = new Audio("sounds/завершение_блока1.mp3");
const endNewMystery2 = new Audio("sounds/завершение_блока2.mp3");

const sese1 = new Audio("sounds/сесе1.mp3");
const sese2 = new Audio("sounds/сесе2.mp3");
const sese3 = new Audio("sounds/сесе3.mp3");
const sese4 = new Audio("sounds/сесе4.mp3");
const sese5 = new Audio("sounds/сесе5.mp3");
const sese6 = new Audio("sounds/сесе6.mp3");
const sese_cancel = new Audio("sounds/сесе_отказ.mp3");
const sese7 = new Audio("sounds/сесе7.mp3");
const powerActive = new Audio("sounds2/звук_подачи_питания.mp3");

const endSese = new Audio("sounds/блок_сесе_конец.mp3");

const page = document.querySelector(".wrapper");

const callSese = document.querySelectorAll(".call-sese");

let count = 0;

const html = `
    <div class="form">
    <input id='input' type="text">
    <div class="btn-answear">
        <button class="answear-btn">Ответ</button>
    </div>
    </div>
`;

const btn = `<button class="btn-ready ">Я готова</button>`;

const wait = (second) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, second * 1000);
  });
};

function none() {
  const btnReady = document.querySelector(".btn-ready");
  btnReady.classList.add("display-none");
}

// const opacityBtnReady2 = (btn) => {
//     btn.addEventListener("mouseout", () => {
//       btn.classList.remove("opacity-important");
//     }, {"capture": true});
//   };

// Помогает сделать убегающую кнопку
const random = (min, max) => {
  const rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
};

// В функцию передаём параметры для убегающей кнопки
function runBtn() {
  btnStartWay.style.left = `${random(0, 90)}%`;
  btnStartWay.style.top = `${random(0, 90)}%`;
}

// Накладываем обработчик событий, как только наовдим на кнопку
const btnStartWay = document.querySelector(".btn");
btnStartWay.addEventListener("mousemove", runBtn);

const followingChapter = () => {
  let btnReady = document.querySelector(".btn-ready");
  // btnReady.classList.remove('display-show')
  // btnReady.classList.add('display-none')

  document.querySelector(".form").classList.add("display-show");
  btnReady.classList.add("display-none");
};

// При нажатии на кнопку делает ёё невидимой и удаляет ёё с экрана
const pressBtn = btnStartWay.addEventListener("click", () => {
  btnStartWay.classList.add("opacity");
  wait(1.2)
    .then(() => {
      btnStartWay.style.display = "none";
      return wait(1.5);
    })
    .then(() => {
      // Первая запись 7с
      hello1.play();
      return wait(8);
    })
    .then(() => {
      // Вторая запись 9с
      hello2.play();
      return wait(9.5);
    })
    .then(() => {
      // Третья запись 10с
      hello3.play();
      return wait(10);
    })
    .then(() => {
      hello4.play();
      return wait(7.9);
    })
    .then(() => {
      hello5.play();
      return wait(5.9);
    })
    .then(() => {
      hello6.play();
      return wait(10.5);
    })
    .then(() => {
      hello7.play();
      return wait(5.5);
    })
    .then(() => {
      page.insertAdjacentHTML("beforeend", html);
      return wait(1);
    })
    .then(() => {
      document.querySelector(".form").classList.add("display-show");
      let input = document.querySelector("#input");
      input.addEventListener("change", (event) => {
        if (event.target.value === "الدولارات") {
          mystery1.play();
          event.target.value = "";
          input.setAttribute("readonly", "readonly");
          wait(5.5).then(() => {
            mystery2.play();
            input.removeAttribute("readonly", "readonly");
            document
              .querySelector("#input")
              .addEventListener("change", (event) => {
                if (event.target.value === "20.05.2023") {
                  mystery3.play();
                  event.target.value = "";
                  return wait(3.9)
                    .then(() => {
                      newMystery1.play();
                      document
                        .querySelector(".form")
                        .classList.remove("display-show");
                      return wait(7);
                    })
                    .then(() => {
                      document.querySelector(".form").style.display = "none";
                      page.insertAdjacentHTML("beforeend", btn);
                      return wait(1);
                    })
                    .then(() => {
                      let btnReady = document.querySelector(".btn-ready");
                      btnReady.classList.add("display-show");
                      return btnReady.addEventListener("mousemove", none);
                    })
                    .then(() => {
                      document.addEventListener("keypress", (event) => {
                        if (event.code === "NumpadAdd") {
                          document
                            .querySelector(".btn-ready")
                            .classList.remove("display-none");
                          let btnReady = document.querySelector(".btn-ready");
                          btnReady.removeEventListener("mousemove", none);
                        }
                      });
                    })
                    .then(() => {
                      let btnReady = document.querySelector(".btn-ready");
                      btnReady.addEventListener("click", () => {
                        // let btnReady = document.querySelector(".btn-ready");
                        btnReady.classList.remove("display-show");
                        newMystery2.play();
                        document.querySelector(".form").style.display = "block";
                        return wait(3).then(() => {
                          btnReady.classList.add('display-none')
                          followingChapter();
                          return wait(1).then(() => {
                            let input = document.querySelector("#input");
                            input.addEventListener("change", (event) => {
                              if (event.target.value === "24") {
                                newMystery3.play();
                                return wait(6).then(() => {
                                  document
                                    .querySelector(".form")
                                    .classList.remove("display-show");
                                  endNewMystery1.play();
                                  wait(9).then(() => {
                                    document.querySelector(
                                      ".form"
                                    ).style.display = "none";
                                    endNewMystery2.play();
                                    wait(7).then(() => {
                                      for (let i of callSese) {
                                        i.classList.remove("opacity");
                                        i.style.left = `${random(0, 90)}%`;
                                        i.style.top = `${random(0, 90)}%`;

                                        i.addEventListener("click", () => {
                                          count = count + 1;
                                          i.classList.add('opacity')
                                          console.log(count);
                                          if (count === 10) {
                                            for (let i of callSese)
                                              i.classList.add("opacity");
                                            wait(0.5).then(() => {
                                              sese1.play();
                                              wait(8).then(() => {
                                                const blockSese =
                                                  document.querySelector(
                                                    ".call-sese"
                                                  );
                                                blockSese.classList.add(
                                                  "display-none"
                                                );
                                                sese2.play();
                                                wait(8).then(() => {
                                                  sese3.play();
                                                  wait(1.5).then(() => {
                                                    const alreadyForm =
                                                      document.querySelector(
                                                        ".form-two"
                                                      );
                                                    alreadyForm.classList.remove(
                                                      "opacity"
                                                    );
                                                    const alreadyBtn =
                                                      document.querySelector(
                                                        ".already-btn"
                                                      );
                                                    alreadyBtn.addEventListener(
                                                      "click",
                                                      () => {
                                                        const formTwo =
                                                          document.querySelector(
                                                            "#input-two"
                                                          );
                                                        if (
                                                          formTwo.value ===
                                                          "ziba 7.6"
                                                        ) {
                                                          sese5.play();
                                                          formTwo.value = "";
                                                        } else if (
                                                          formTwo.value ===
                                                          "ziba 7.5"
                                                        ) {
                                                          sese6.play();
                                                          return wait(8.5).then(
                                                            () => {
                                                              alreadyBtn.classList.add(
                                                                "opacity"
                                                              );
                                                              alreadyForm.classList.add(
                                                                "opacity"
                                                              );
                                                              const yesOrNo =
                                                                document.querySelector(
                                                                  ".yes-or-no"
                                                                );
                                                              yesOrNo.classList.remove(
                                                                "opacity"
                                                              );
                                                              const btnNo =
                                                                document.querySelector(
                                                                  ".btn-no"
                                                                );
                                                              const btnYes =
                                                                document.querySelector(
                                                                  ".btn-yes"
                                                                );
                                                              btnNo.addEventListener(
                                                                "click",
                                                                () => {
                                                                  sese_cancel.play();
                                                                }
                                                              );

                                                              btnYes.addEventListener(
                                                                "click",
                                                                () => {
                                                                  sese7.play();
                                                                  wait(3).then(
                                                                    () => {
                                                                      yesOrNo.classList.add(
                                                                        "opacity"
                                                                      );
                                                                      lastChapter();
                                                                    }
                                                                   );
                                                                }
                                                              );
                                                            }
                                                          );
                                                        } else {
                                                          sese4.play();
                                                          formTwo.value = "";
                                                        }
                                                      }
                                                    );
                                                  });
                                                });
                                              });
                                            });
                                          }
                                        });
                                      }
                                    });
                                  });
                                });
                              }
                            });
                          });
                        });
                      });
                    });
                }
              });
          });
        }
      });
    });
 });

function flick() {
  lamp.classList.add("lamp-light");
  flickLight.play();
  setTimeout(() => {
    lamp.classList.remove("lamp-light");
  }, 1000);
  brokeClick.play();
}

const inputThree = document.querySelector(".input-three");
const yesOrNo = document.querySelector(".yes-or-no");
const formFour = document.querySelector(".form-four");
const gear = document.querySelector(".loadingio-spinner-gear-j71zwwrawv");
const lamp = document.querySelector(".light-lamp");
const clue = document.querySelector(".clue-block");
const btnThree = document.querySelector(".already-btn-three");
const formThree = document.querySelector(".form-three");

const newExercise = new Audio("sounds/новое_задание1.mp3");
const newExercise2 = new Audio("sounds/новое_задание2.mp3");

// ЗВУКИ ПОЛОМКИ
const broke = new Audio("sounds/звук_поломки.mp3");
const brokeClick = new Audio("sounds/звук_поломки_клик.mp3");
const broke1 = new Audio("sounds2/поломка_1.mp3");
const broke2 = new Audio("sounds2/поломка_2.mp3");
const broke3 = new Audio("sounds2/поломка_3.mp3");
const broke4 = new Audio("sounds2/поломка_4.mp3");
const broke5 = new Audio("sounds2/поломка_5.mp3");
const broke6 = new Audio("sounds2/поломка_6.mp3");
const broke7 = new Audio("sounds2/поломка_решение1.mp3");
const robotVoice = new Audio("sounds2/robot_voice.mp3");
const clueSound = new Audio("sounds2/chizburger.mp3");
const flickLight = new Audio("sounds2/мерцание_света");
const end = new Audio("sounds2/завершение.mp3");

// Звуки заключительной части
const endTask1 = new Audio("sounds3/завершение1.mp3");
const endtask2 = new Audio("sounds3/завершение2.mp3");

const trueAnswear = `let controlBlock = false\nfor(let i; i <= 10; i++) {\n    if(i = 10) {\n        console.log('Active')\n        controlBlock = true\n    } else {\n        console.log('--Error--')\n        controlBlock = false\n    }\n};\n`;

const lastChapter = () => {
  wait(0.5).then(() => {
    yesOrNo.classList.add("display-none");
    endSese.play();
    wait(9.8)
      .then(() => {
        newExercise.play();
        return wait(3.9);
      })
      .then(() => {
        newExercise2.play();
        return wait(2.5);
      })
      .then(() => {
        // Появление формы для ввода, кнопки под ней, лампочки наверху
        
        formThree.classList.remove("opacity");
        lamp.classList.remove("opacity");
        lamp.classList.add("text-shadow");
        // Обработчик событий для кнопки, и её поломка
        btnThree.addEventListener("click", function sound() {
          lamp.classList.remove("text-shadow");
          btnThree.classList.add("broke");
          broke.play();
          inputThree.setAttribute("readonly", "readonly");
          inputThree.value = "";

          // Тут добавляем новый звук к поломанной кнопки, свечение лампочки и звук к ней
          setTimeout(() => {
            btnThree.removeEventListener("click", sound);
            btnThree.addEventListener("click", flick);
            btnThree.classList.remove("broke");
            btnThree.classList.add("state");
          }, 1000);

          return wait(3)
            .then(() => {
              broke1.play();
              return wait(5);
            })
            .then(() => {
              broke2.play();
              return wait(4.8);
            })
            .then(() => {
              broke3.play();
              return wait(9.8);
            })
            .then(() => {
              broke4.play();
              return wait(2.8);
            })
            .then(() => {
              broke5.play();
              formThree.style.left = `${3}%`;
              wait(2).then(() => {
                clue.classList.remove("opacity");
                formFour.classList.remove("opacity");
                gear.classList.remove("opacity");
              });
              return wait(7.8);
            })
            .then(() => {
              broke6.play();

              clue.addEventListener("click", () => {
                clueSound.play();
                wait(5.2).then(() => {
                  clue.classList.add("opacity");
                });
              });

              const btnFour = document.querySelector(".btn-four");
              btnFour.addEventListener("click", () => {
                const inputFour = document.querySelector(".input-four");
                if (
                  inputFour.value ===
                    `let controlBlock = false
for(let i; i <= 10; i++) {
    if(i = 10) {
        console.log('Active')
        controlBlock = true
    } else {
        console.log('--Error--')
        controlBlock = false
    }
};` ||
                  inputFour.value === "gudzon"
                ) {
                  clue.classList.add("opacity");
                  btnFour.classList.add("pointer-events-none");
                  powerActive.play();
                  btnThree.classList.remove("state");
                  lamp.classList.add("text-shadow");
                  btnThree.removeEventListener("click", flick);
                  wait(2).then(() => {
                    broke7.play();
                  });

                  inputFour.classList.add("border-light");
                  return wait(10).then(() => {
                    inputThree.removeAttribute("readonly", "readonly");
                    wait(2).then(() => {
                      formThree.style.left = `${44}%`;
                    });
                    formFour.classList.add("opacity");
                    gear.classList.add("opacity");
                    end.play();
                    btnThree.addEventListener("click", () => {
                      if (inputThree.value === "828") {
                        inputThree.value = "";
                        chapterThree();
                      }
                    });
                  });
                } else {
                  robotVoice.play();
                  gear.classList.add("anim");
                  wait(1.5).then(() => {
                    gear.classList.remove("anim");
                  });
                }
              });
            });
        });
      });
  });
};

const taskSolution = new Audio("sounds3/решение1.mp3");
const newTask10 = new Audio('sounds3/новое_задание1.mp3')

const chapterThree = () => {
  repeatTask();
  wait(38).then(() => {
    const btnRepeat = document.querySelector(".btn-repeat");
    btnRepeat.classList.remove("opacity");
    btnRepeat.addEventListener("click", () => {
      const leftBar = document.querySelector(".selector");
      leftBar.classList.toggle("left-bar-move");
      btnRepeat.classList.toggle("change-color");
      const span = document.querySelectorAll(".selector span");
      for (let i of span) {
        i.addEventListener("click", () => {
          if (i.className === "1") {
            const task1 = new Audio("sounds3/задание1.mp3");
            task1.play();
          } else if (i.className === "2") {
            const task2 = new Audio("sounds3/задание2.mp3");
            task2.play();
          } else if (i.className === "3") {
            const task3 = new Audio("sounds3/задание3.mp3");
            task3.play();
          } else {
            const task4 = new Audio("sounds3/задание4.mp3");
            task4.play();
          }
        });
      }
    });
    btnThree.addEventListener("click", () => {
      if (inputThree.value === "кения" || inputThree.value === "Кения") {
        btnRepeat.classList.add('opacity')
        inputThree.value = '';
        taskSolution.play();
        wait(8.5).then(() => {
          newTask10.play()
          btnThree.addEventListener("click", () => {
            if (inputThree.value === "еврейка)") {
              inputThree.setAttribute("readonly", "readonly")
              lamp.classList.add('opacity')
              endTask1.play()
              wait(7.5).then(() => {
                endtask2.play();
                formThree.classList.add('opacity')
                // ТУТ ВЫЗЫВАЕМ СЛЕД. ФУНКЦИЮ
                wait(5.5)
                .then(() => {
                  endChapter();
                })
              });
            }})
        });
      } else if (inputThree.value === "828") {
        return;
      } else {
        return;
      }
    });
  });
};


const endChapter = () => {
  document.querySelector('.wrapper').classList.add('display-none')
  wait(2).then(() => {
    document.querySelector('.wrapper-2').classList.remove('display-none')
  })
}

const repeatTask = () => {
  const task1 = new Audio("sounds3/задание1.mp3");
  task1.play();
  wait(10).then(() => {
    const task2 = new Audio("sounds3/задание2.mp3");
    task2.play();
    wait(7).then(() => {
      const task3 = new Audio("sounds3/задание3.mp3");
      task3.play();
      wait(9).then(() => {
        const task4 = new Audio("sounds3/задание4.mp3");
        task4.play();
      });
    });
  });
};

// Тут при нажатии на ПРОБЕЛ делаем так, что бы кнопка больше не убегала
const listenerSpace = document.addEventListener("keypress", (event) => {
  if (event.code === "Space") {
    btnStartWay.removeEventListener("mousemove", runBtn);
  }
});

const inputFour = document.querySelector(".input-four");

// const leftBarMove = () => {
//   btnRepeat.classList.remove('opacity')
//   btnRepeat.addEventListener('click', () => {
//     const leftBar = document.querySelector('.selector')
//     leftBar.classList.toggle('left-bar-move')
//     btnRepeat.classList.toggle('change-color')
//   })
// }

const areaInternet = document.querySelector('.area-internet')
const areaFolder = document.querySelector('.area-folder_1')
const areaPhotoshop = document.querySelector('.area-photoshop')
const areaSims = document.querySelector('.area-sims-4')
const areaBasket = document.querySelector('.area-basket')
const areaClose = document.querySelectorAll('.close')
const imgVideo = document.querySelector('.video>img')
const simsIcon = document.querySelector('.area-sims-4 .sims-4')
const photoBtn = document.querySelector('.area-photoshop button')



photoBtn.addEventListener('click', () => {
  photoBtn.classList.add('photo-btn')
  wait(0.5).then(() => {photoBtn.classList.remove('photo-btn')})
})




function addClass(elem, classAdd) {
  elem.classList.add(`${classAdd}`)
}

function removeClass(elem, classRem) {
  elem.classList.remove(`${classRem}`)
}

const allImg = document.querySelectorAll('.img-all img')

for(let img of allImg) {
  for(let btn of areaClose)
  btn.addEventListener('click', () => {
    addClass(areaInternet, 'opacity-new')
    removeClass(areaInternet, 'anim-open-window')
    addClass(areaFolder, 'opacity-new')
    removeClass(areaFolder, 'anim-open-window')
    addClass(areaPhotoshop, 'opacity-new')
    removeClass(areaPhotoshop, 'anim-open-window')
    addClass(areaSims, 'opacity-new')
    removeClass(areaSims, 'anim-open-window')
    addClass(areaBasket, 'opacity-new')
    removeClass(areaBasket, 'anim-open-window')
    addClass(simsIcon, 'opacity')
  })
  img.addEventListener('dblclick', () => {
    if(img.id === '1') {
      removeClass(areaInternet, 'opacity-new')
      addClass(areaInternet, 'anim-open-window')
    } else if (img.id === '2') {
      removeClass(areaFolder, 'opacity-new')
      addClass(areaFolder, 'anim-open-window')
    } else if (img.id === '3') {
      removeClass(areaPhotoshop, 'opacity-new')
      addClass(areaPhotoshop, 'anim-open-window')
    } else if(img.id === '4') {
      wait(0.3).then(() => {removeClass(simsIcon, 'opacity')})
      removeClass(areaSims, 'opacity-new')
      addClass(areaSims, 'anim-open-window')
    } else {
      removeClass(areaBasket, 'opacity-new')
      addClass(areaBasket, 'anim-open-window')
    }
  })
}

const videoArea = document.querySelector('.video')

const video = document.getElementById('vid-0')
video.addEventListener('dblclick', () => {
  removeClass(videoArea, 'opacity-new')
  addClass(videoArea, 'anim-open-window')
  document.querySelector('.close-video').addEventListener('click', () => {
    addClass(videoArea, 'opacity-new')
    removeClass(videoArea, 'anim-open-window')
  })

  imgVideo.addEventListener('dblclick', () => {
    const videoZele = document.querySelector('.video video')
    videoZele.src = 'img/zele.MP4'
    removeClass(videoZele, 'opacity-new')
    wait(7.5)
    .then(() => {
      addClass(videoZele, 'opacity-new')
    })
  })
})

