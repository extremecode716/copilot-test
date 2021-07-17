// Hash Algorithm
// Hashing with a hash table
// Author: Ma Bingyao

var Hash = {
    create: function (size) {
        var table = [];
        for (var i = 0; i < size; i++) {
            table[i] = [];
        }
        return table;
    },
    set: function (table, key, value) {
        var index = key % table.length;
        table[index].push([key, value]);
    },
    get: function (table, key) {
        var index = key % table.length;
        for (var i = 0; i < table[index].length; i++) {
            if (table[index][i][0] == key) {
                return table[index][i][1];
            }
        }
        return null;
    },
    remove: function (table, key) {
        var index = key % table.length;
        for (var i = 0; i < table[index].length; i++) {
            if (table[index][i][0] == key) {
                table[index].splice(i, 1);
                return;
            }
        }
    }
};

var HashTable = Hash.create(1000);
Hash.set(HashTable, 1, 'One');
Hash.set(HashTable, 2, 'Two');
Hash.set(HashTable, 3, 'Three');
Hash.set(HashTable, 4, 'Four');
Hash.set(HashTable, 5, 'Five');
Hash.set(HashTable, 6, 'Six');
Hash.set(HashTable, 7, 'Seven');
Hash.set(HashTable, 8, 'Eight');
Hash.set(HashTable, 9, 'Nine');
Hash.set(HashTable, 10, 'Ten');
Hash.set(HashTable, 11, 'Eleven');
Hash.set(HashTable, 12, 'Twelve');
Hash.set(HashTable, 13, 'Thirteen');
Hash.set(HashTable, 14, 'Fourteen');
Hash.set(HashTable, 15, 'Fifteen');
Hash.set(HashTable, 16, 'Sixteen');
Hash.set(HashTable, 17, 'Seventeen');
Hash.set(HashTable, 18, 'Eighteen');
Hash.set(HashTable, 19, 'Nineteen');
Hash.set(HashTable, 20, 'Twenty');
Hash.set(HashTable, 30, 'Thirty');
Hash.set(HashTable, 40, 'Forty');
Hash.set(HashTable, 50, 'Fifty');
Hash.set(HashTable, 60, 'Sixty');
Hash.set(HashTable, 70, 'Seventy');
Hash.set(HashTable, 80, 'Eighty');
Hash.set(HashTable, 90, 'Ninety');
Hash.set(HashTable, 100, 'Hundred');
Hash.set(HashTable, 1000, 'Thousand');
Hash.set(HashTable, 1000000, 'Million');
Hash.set(HashTable, 1000000000, 'Billion');
Hash.set(HashTable, 1000000000000, 'Trillion');

console.log(Hash.get(HashTable, 4));
