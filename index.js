function theBeatlesPlay(musicians, instruments) {
 var array = [];
for (var i = 0; i < musicians.length; i++) {
 array.push(musicians[i] + ' plays ' + instruments[i]);
  }
 return array;
 }
 
function johnLennonFacts(facts) {

  while(i < facts.length) {
    facts.push(`${facts[i]}!!!`);
  }
  return facts;
}