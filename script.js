

function p1Animation(){
    var tl=gsap.timeline();
tl.from(".nav h1,.nav h4, .nav button",{
    y:-40,
    opacity:0,
    delay:.2,
    duration:.4,
    stagger:.15

})
tl.from(".main1 h1",{
    x:-300,
    opacity:0,
    duration:0.5

},"-=.3")
tl.from(".main1 p",{
    x:-100,
    duration:0.4,
    opacity:0
})
tl.from(".main1 button",{
    opacity:0,
    duration:0.4
})
tl.from(".main2 img",{
    opacity:0,
    duration:0.5,
    x:200

},"-=0.7")
tl.from(".bottom-row img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.5
})

}
function p2Animation(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".p2",
            scroller:"body",
           
            start:"top 50%",
            scrub:2,
            end:"top 0"
    
        }
    })
    tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.5
    })
    tl2.from(".elem.l1.left",{
        x:-300,
        opacity:0,
        duration:2
    
    },"one")
    tl2.from(".elem.l1.right",{
        x:300,
        opacity:0,
        duration:2,
    },"one")
    tl2.from(".elem.l2.left",{
        x:-300,
        opacity:0,
        duration:2
    
    },"two")
    tl2.from(".elem.l2.right",{
        x:300,
        opacity:0,
        duration:2,
    },"two")
    
}
function p3Animation(){
    var tl3=gsap.timeline({
        scrollTrigger:{
            trigger:".p3",
            scroller:"body",
            start:"top 50%",
           
        }
    })
    tl3.from(".p3-top .top-left h2,.p3-top .top-left p",{
        x:-300,
        opacity:0,
        
        stagger:.4
    })
    tl3.from(".p3-top .top-right img",{
        y:30,
        opacity:0,
        duration:.6
    },"-=.5")
    tl3.from(".p3-top .top-left button",{
        opacity:0
    })
    gsap.from(".cservices",{
        y:30,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:".p3-bottom",
            scroller:"body",
            start:"top 70%"
        }
    })
    gsap.from(".p3-bottom ",{
        
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".cservices",
            scroller:"body",
            start:"top 70%"
        }
    })
    
}
p1Animation();
p2Animation();
p3Animation();
