function domRangeHighlight(text) {
  var root = document.getElementById('ex3').firstChild;
  var content = root.nodeValue;
  if(~content.indexOf(text)) {
    if(document.createRange) {
      var rng = document.createRange();
      rng.setStart(root, content.indexOf(text));
      rng.setEnd(root, content.indexOf(text) + text.length);
      var highlightDiv = document.createElement('span');
      highlightDiv.style.backgroundColor = "yellow";
      rng.surroundContents(highlightDiv);
    }
      else {console.log('Problem1');} }
      else {console.log('Problem2');}
    }
      domRangeHighlight('emotionally intelligent');
      domRangeHighlight('pertinent');
      domRangeHighlight('interviewers');
      domRangeHighlight('strengths');
      domRangeHighlight('magically transform');
      domRangeHighlight('theoretical');
      domRangeHighlight('weaknesses');
      domRangeHighlight('experience');
      domRangeHighlight('candidate');
      domRangeHighlight('empathetic');
