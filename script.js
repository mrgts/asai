//defined animation timeline options
var tmax_opts = {
  delay: 0.3,
  //repeats infinitely
  repeat: -1,
  //between repeats, wait 0.5s
  repeatDelay: 0.5,
  //causes animation to alternate forwards and backwards
  yoyo: true
};
var tmax_t1 = new TimelineMax(tmax_opts),
    shapes = $('path'),
    stagger = 0.05,
    duration = 2;
var staggerFrom = {
  scale: 0,
  opacity: 0,
  transformOrigin: 'center center',
};
var staggerTo = {
  opacity: 1,
  scale: 1,
  ease: Elastic.easeInOut
};
//GSAP animation expression
tmax_t1.staggerFromTo(shapes, duration, staggerFrom, staggerTo, stagger, 0);