import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import $ from 'jquery';

module('Acceptance | application.js', function(hooks) {
  setupApplicationTest(hooks);

  test('selector template-only-component exists', async function(assert) {
    assert.ok($('[data-test-template-component]').length)
  });

  test('selector for div-wrapped-component exists', async function(assert) {
    await visit('/');
    assert.ok($('[data-test-div-component]').length)
  });
});
