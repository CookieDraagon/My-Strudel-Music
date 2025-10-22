setCpm(140/4)


$: s("bd:2!4").gain(.3)._scope()

$: s("mt:2!3").orbit(5).beat("0, 4, 8, 11, 14", 16).gain(.4)



$: n("0@2 <-7[-5 -2]>@3 <0 -3 2 1>@3".add(7)
     .add("<5 4 0 <0 -2>>"))
  .scale("eb:major") 
  //.vibmod("<.25 .5 1 1.5>:8")
.s("gm_acoustic_bass") 
  .delay(.7).pan(rand).gain(1.8)
.fm(.5).fmwave("white")
gain(slider(0.562))._pianoroll()
$: s("pulse!16").dec(.1).fm(time).orbit(4).gain(.1)
$: s(choose("jazz:4","jazz")).note("e2".add("<0 0 7 12 0>*2")).scrub(rand.seg(16).rib(46, 2))
  .delay(.8)
  .orbit(5)
