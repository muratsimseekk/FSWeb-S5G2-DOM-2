import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

// * [ ] `mouseover` ++
// * [ ] `keydown` ++
// * [ ] `wheel` ++
// * [ ] `load` --
// * [ ] `focus` --
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick` ++
// * [ ] `drag / drop`

const bb = document.querySelectorAll(
  ".main-navigation>.container>.nav>.nav-link"
);

for (let i = 0; i < bb.length; i++) {
  bb[i].addEventListener("mouseover", (ev) => {
    ev.target.style.color = "red";
    ev.target.style.border = "2px solid black";
    ev.target.style.padding = "0.4rem";
    ev.target.style.borderRadius = "1rem";
    ev.target.style.transition = "0.2s";
  });

  bb[i].addEventListener("mouseout", (ev) => {
    ev.target.style.transition = "0.2s";
    ev.target.style.color = "";
    ev.target.style.border = "";
    ev.target.style.padding = "";
  });
}

const im = document.querySelector(".container > .intro > img");
document.addEventListener("keydown", (a) => {
  if (a.key == "Escape") {
    im.style.width = "200px";
  }
  console.log("basıldı", a);
});

document.addEventListener("keyup", (b) => {
  if (b.key == "Escape") {
    im.style.width = "";
  }
});

document.addEventListener(
  "wheel",
  (x) => {
    x.preventDefault();
  },
  { passive: false }
);

document.addEventListener("load",(eve) => {
    alert("Sayfa tamamıyla yüklendi gezinebilirsiniz .");
})

document.querySelector(".content-section>.img-content>img").addEventListener("dblclick",(x) => {
    document.querySelector(".content-section>.text-content").style.color = "red";
})


const ii = document.getElementsByClassName("img-fluid");

ii[0].addEventListener("dblclick",(xx) => {
    ii[0].style.width= "200px";
})

let i = document.querySelectorAll("img");

for(let j=0 ; j<i.length;j++){
    i[j].addEventListener("mouseover",(even)=>{
        even.target.style.opacity = "0.8";
    });
    i[j].addEventListener("mouseleave",(even)=>{
        even.target.style.opacity = "";
    });

}

const abc = document.querySelector("header");

abc.style.zIndex="100";


const genelP = document.querySelectorAll("p");

genelP.forEach(a=> {
    a.addEventListener("mouseover" , (evet) => {
        evet.target.style.fontSize = "25px";
        evet.target.style.transition = "0.5s"
    });
    a.addEventListener("mouseout",(tata)=>{
        tata.target.style.fontSize="";
    })
})




