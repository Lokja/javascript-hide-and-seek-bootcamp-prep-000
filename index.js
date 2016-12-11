function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  //const id = document.getElementById('nested');
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
   var numdiv = document.getElementById('grand-node').querySelectorAll('div').length;
   var divStringA = [];
   for (var i = 0; i < numdiv; i++) {
     divStringA[i] = 'div';
   }
   var divString = divStringA.join(' ');
   return document.querySelector(`#grand-node ${divString}`)
}