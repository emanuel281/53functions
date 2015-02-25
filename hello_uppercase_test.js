TestMyCode.run("Testing hello_uppercase() function", function(assert){
    var result = hello_uppercase("Emanuel");
    // is the result as we expected?
    assert.equals("Hello, Emanuel!", result);
});
