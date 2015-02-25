TestMyCode.run("Testing hello_joe() function", function(assert){
    var result = hello_joe("Joe");
    // is the result as we expected?
    assert.equals("Hello!", result);
});

TestMyCode.run("Testing hello_joe() function", function(assert){
    var result = hello_joe("Bob");
    // is the result as we expected?
    assert.equals("Hello!", result);
});

TestMyCode.run("Testing hello_joe() function", function(assert){
    var result = hello_joe("Emanuel");
    // is the result as we expected?
    assert.equals("Hello, Emanuel!", result);
});
