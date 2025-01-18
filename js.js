// // gsap.from(".box1", {
// //     x: 300,
// //     duration: 1,
// //     dealay: 1,
// //     repeat: -1,
// //     backgroundColor: "red"
// // })
// // var t = gsap.timeline()
// // t.to(".box2", {
// //     y: 500,
// //     duration: 1,
// //     dealay: 1,
// //     repeat: -1
// // })
// gsap.from("#page1 .box", {
//     scale: 0,
//     dealay: 1,
//     duration: 1,
//     rotate: 360
// })

// // gsap.from("#page2 .box", {
// //     scale: 0,
// //     dealay: 1,
// //     duration: 2,
// //     rotate: 360,
// //     scrollTrigger: {
// //         trigger: "#page2 .box",
// //         scroller: "body",
// //         markers: true,
// //         start: "top 60%"
// //     }
// // })
// gsap.from("#page3 h1", {
//     opacity: 0,
//     duration: 2,
//     x: -500,
//     scrollTrigger: {
//         trigger: "#page3 h1",
//         markers: true,
//         scroller: "body",
//         start: "top 50%",
//         scrub: true

//     }
// })
// gsap.from("#page3 .h2", {
//     opacity: 0,
//     duration: 2,
//     x: 500,
//     scrollTrigger: {
//         trigger: "#page3 .h2",
//         markers: true,
//         scroller: "body",
//         start: "top 50%",

//     }
// })

// gsap.from("#page2 .box", {
//     scale: 0,
//     opacity: 0,
//     duration: 2,
//     dealay: 1,
//     rotate: 360,
//     scrollTrigger: {
//         marker: true,
//         trigger: "#page2 .box",
//         scroller: "body",
//         start: "top 50%",
//         end: "top 30%",
//         scrub: 2,
//         pin: true,
//     }
// })
gsap.to("#page2 h1", {
        overflowX: "visible",
        transform: "translateX(-150%)",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            markers: true,
            start: "top 0%",
            end: "top -150%",
            scrub: 4,
            pin: true

        }
    })
    // gsap.to("#page3 .h1,.h2", {
    //     transform: "translateX(-150%)",
    //     backgroundColor: "red",
    //     // duration: 1,
    //     scrollTrigger: {
    //         trigger: "#page3",
    //         scroller: "body",
    //         markers: true,
    //         start: "top 0%",
    //         end: "top -150%",
    //         scrub: 2,
    //         pin: true

//     }


// })
// gsap.from("#page3 .h2", {
//     transform: "translateX(-100%)",
//     backgroundColor: "red",
//     scrollTrigger: {
//         trigger: "#page3 .h2",
//         scroller: "body",
//         markers: true,
//         start: "top 0%",
//         end: "top -150%",
//         scrub: 2,
//         pin: true

//     }
// })
// gsap.to("#page3", {
//     // transform: "translateX(-100%)",
//     duration: 2,
//     delay: 1,
//     scrollTrigger: {
//         trigger: "#page3",
//         scroller: "body",
//         start: "top 0%",
//         end: "top -150%",
//         scrub: 3,
//         pin: true
//     }
// })
// gsap.from("#page3 .h1", {
//     transform: "translateX(-100%)",
//     duration: 2,
//     scrollTrigger: {
//         trigger: ".h1",
//         scroller: "body",
//         start: "top 0%",
//         end: "top -150%",
//         scrub: 3,
//         pin: true

//     }
// })
// gsap.from("#page3 .h2", {
//         transform: "translateX(200%)",
//         duration: 2,
//         scrollTrigger: {
//             trigger: ".h2",
//             scroller: "body",
//             start: "top 0%",
//             end: "top -150%",
//             scrub: 3,
//             pin: true

//         }
//     })
// gsap.to("#page3 p", {
//     overflowY: "auto",
//     scrollTrigger: {
//         trigger: "#page3 p",
//         scroller: "body",
//         start: "top 0%",
//         end: "top -150%",
//         scrub: 3,
//         pin: true
//     }
// })
// gsap.from("h1", {
//     opacity: 0,
//     duration: 0.5,
//     x: -200,
//     stagger: 0.5,
//     yoyo: true,
//     repeat: -1
// })
// var t = gcap.timeline()
// t.to("#page1 .box", {
//     x: 2000,
//     backgroundColor: "black",
//     duration: 1
// })

// gsap.to("#page3 .h1", {
//     opacity: 0,
//     duration: 2,
//     backgroundColor: "red",
//     x: 5000
// })
gsap.from("#page1 .box1", {
    opacity: 0,

    // transform: "transformX(-150%)",
    x: -150,
    duration: 1,
    backgroundColor: "black"
})
gsap.from("#page1 .box2", {
    opacity: 0,
    // transform: "transformX(200%)",
    x: 200,
    rotate: 360,
    duration: 2,
    backgroundColor: "red",
    scrollTrigger: {
        trigger: "#page1 .box2",
        scroller: "body",
        makers: true,
        start: "top 60%"
    }
})
gsap.from("#page2 .box", {
    rotate: 760,
    duration: 1,
    dealay: 0.5,
    scrollTrigger: {
        trigger: "#page2 .box",
        scroll: "body",
        markers: true,
        scrub: 4,

    }

})