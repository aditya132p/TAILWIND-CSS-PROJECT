const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)



function ani(){
var tl = gsap.timeline();
tl.from("nav", {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 1,
  yoyo:true,

});
tl.to("nav", {
  backgroundColor: "#00000032",
  duration: 1,
  stagger: 1,
  yoyo:true,
  
  scrollTrigger:{
    start:"80% 50%",
    scrub:true,
    
  }
});
tl.from(".hero img", {
  opacity: 0,
  scale:0.8,
  duration: 0.9,
  stagger: 1,
  yoyo:true,
});



tl.from(".quote-container ", {
    opacity: 0,
    
    duration: 0.9,
    stagger: 1,
    yoyo:true,
    scrollTrigger:{
       
        start:"50% 50%",
        end:"110% 50%",
        scrub:true,
    },
  });

  tl.from(" .quote-container h1 span", {
    opacity: 0.04,
    
    duration: 0.8,
    stagger: 0.4,
    yoyo:true,
    scrollTrigger:{
        start:"90% 50%",
        end:"110% 50%",
        scrub:true,
    },
    y:-600,
    
    
  });
  tl.from(".quote-container h1",{
    x:1,
    y:1,
    
    duration: 0.5,
    stagger: 0.4,
    yoyo:true,
    repeat:-1,
  })

  
  tl.from(".card-container ", {
    opacity: 0,
    y:200,
    duration: 0.9,
    stagger: 1,
    yoyo:true,
    scrollTrigger:{
       markers:false,
        start:"130% 50%",
        end:"170% 50%",
        scrub:true,
    },
  });
}
ani()
  