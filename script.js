var tmax_opts = {
  delay: 0.3,
  repeat: -1,
  repeatDelay: 0.5,
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
tmax_t1.staggerFromTo(shapes, duration, staggerFrom, staggerTo, stagger, 0);