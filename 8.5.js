// Example 8-5 code with corrected get() and put() methods

load("HashTable.js");
var hTable = new HashTable();
hTable.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
                 "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.showDistro();
//print("this is showDistro:" + hTable.table.length);

function showDistro() {
  var n = 0;
  for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i][0] != undefined) {
      print(i + ": " + this.table[i]);
    }
  }
}

function put(key, data) {
  var pos = this.betterHash(key);
  var index = 0;
  if (this.table[pos][index] == undefined) {
    this.table[pos][index+1] = data;
  }
  //++index;
  else {
    while (this.table[pos][index] != undefined) {
      ++index;
    }
    this.table[pos][index] = data;
  }
}

function get(key) {
  var index = 0;
  var pos = this.betterHash(key);
   // print("pos:" + pos + " index:" + index + " key:" + key + " this:" + this.table[pos][index]);
  if (this.table[pos][index] == key) {
    return this.table[pos][index+1];
  }
  //index += 2;
  else {
    while (this.table[pos][index] != key && index <= this.table[pos].length) {
      index += 2;
    }
    return this.table[pos][index+1];
  }
  //return undefined;
}

print(hTable.table[102]);     // Jennifer
print(hTable.table[102][0]);  // J           <-- WTF!
print(hTable.betterHash(3));
print(hTable.get("David"));
print(hTable.get(3));
print(hTable.betterHash(102));
print(hTable.get("Jennifer"));
print(hTable.get(3));
