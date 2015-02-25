TestMyCode.run("Testing hello() function", function(assert){
    var result = hello();
    // is the result as we expected?
    assert.equals("hello world", result);
});