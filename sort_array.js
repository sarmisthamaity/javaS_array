var lis=[12,3,23,78,9,10];
var i=0;
while (i<lis.length) {
    var j=0;
    while (j<lis.length) {
        if (lis[j+1]<lis[j]) {
            [lis[j],lis[j+1]]=[lis[j+1],lis[j]]
        }
        j++;
    }
    i++;
}
console.log(lis)




