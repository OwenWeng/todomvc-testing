(function() {

  var $container = document.getElementById('jasmine-fixture'),
    template,
    store,
    model,
    view;

  beforeEach(function () {
    if(!$container) {
      $container = document.createElement('div');
      $container.id = 'jasmine-fixture';
      document.body.appendChild($container);
    }

    $container.innerHTML = '' +
      '<div id="todo-list"></div>' +
      '<div id="todo-count"></div>';
    template = new app.Template();
    store = new mocks.Store('_STORE_');
    model = new app.Model(store);
    view = new app.View(template);
  });

  afterEach(function () {
    $container.innerHTML = '';
  });

  describe('View', function () {

    it('showEntries displays all todos', function() {
      model.create('_MODEL1_');
      model.create('_MODEL2_');
      model.create('_MODEL3_');
      model.read(function (data) { view.render('showEntries', data); });

      expect(document.querySelectorAll('#todo-list > *').length).toEqual(3);
      expect(document.querySelector('#todo-list > :nth-child(1)').innerText.trim()).toEqual('_MODEL1_');
      expect(document.querySelector('#todo-list > :nth-child(2)').innerText.trim()).toEqual('_MODEL2_');
      expect(document.querySelector('#todo-list > :nth-child(3)').innerText.trim()).toEqual('_MODEL3_');
    });

    it('updateElementCount displays todos count', function() {
      model.create('_MODEL1_');
      model.read(function (data) { view.render('updateElementCount', data.length); });
      expect(document.querySelector('#todo-count').innerText.trim()).toEqual('1 item left');

      model.create('_MODEL2_');
      model.create('_MODEL3_');
      model.read(function (data) { view.render('updateElementCount', data.length); });
      expect(document.querySelector('#todo-count').innerText.trim()).toEqual('3 items left');
    });

  });
})();
