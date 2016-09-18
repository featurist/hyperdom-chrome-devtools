chrome.devtools.panels.elements.createSidebarPane(
  'Plastiq ViewModel',
  function(sidebar) {
    inspect(sidebar);
    chrome.devtools.panels.elements.onSelectionChanged.addListener(function () {
      inspect(sidebar);
    });
  }
);

function inspect(sidebar) {
  sidebar.setExpression('(' + findPlastiqViewModel.toString() + ')($0)');
}

function findPlastiqViewModel(startElement) {
  var element = startElement;

  while(element && !element._plastiqViewModel) {
    element = element.parentNode;
  }

  if (element) {
    return element._plastiqViewModel;
  }
}
