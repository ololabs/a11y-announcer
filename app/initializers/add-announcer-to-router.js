import Ember from 'ember';

const { inject, Router, run } = Ember;

export default {
  name: 'add-announcer-to-router',
  initialize(app) {
    Router.reopen({
      announcer: inject.service('announcer'),
      didTransition: function() {
        this._super(...arguments);

        this._timerId = run.later(this, () => {
          if (this.isDestroying || this.isDestroyed) { return; }

          let pageTitle = Ember.$('title').html().trim();
          let serviceMessage = this.get('announcer.message');
          let message = `${pageTitle} ${serviceMessage}`;

          this.get('announcer').announce(message, 'polite');
        }, 100);
      },

      willDestroy() {
        run.cancel(this._timerId);
        this._super();
      },
    });
  }
};
