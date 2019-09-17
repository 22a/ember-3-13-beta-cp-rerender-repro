import Component from '@ember/component';
import { and } from '@ember/object/computed';

export default Component.extend({
  x: {
    a: {
      b: {
        c: true
      }
    }
  },
  y: {
    a: {
      b: {
        c: true
      }
    }
  },

  myProp: and('x.a.b.c', 'y.a.b.c'),
});
