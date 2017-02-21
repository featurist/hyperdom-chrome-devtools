chrome.devtools.panels.elements.createSidebarPane(
  'Hyperdom ViewModel',
  function(sidebar) {
    inspect(sidebar);
    chrome.devtools.panels.elements.onSelectionChanged.addListener(function () {
      inspect(sidebar);
    });
  }
);

function inspect(sidebar) {
  sidebar.setExpression('(' + findHyperdomViewModel.toString() + ')($0)');
}

function findHyperdomViewModel(startElement) {
  var element = startElement;

  while(element && !(element._hyperdomMeta && element._hyperdomMeta.viewModel)) {
    element = element.parentNode;
  }

  if (element) {
    var meta = element._hyperdomMeta;
    return meta.viewModel;
  }
}
