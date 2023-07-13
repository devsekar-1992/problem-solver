var finalValueAfterOperations = function(operations) {
    let X=0;
    for (const key of operations) {
        eval(key);
    }
    return X;
};
Input=[ 
    ["--X","X++","X++"]
];
for (const key of Input) { 
const result =finalValueAfterOperations(
    key
    );
    console.log(result);   
}