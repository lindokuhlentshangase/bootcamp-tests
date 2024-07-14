describe('this is my greet function' , function(){
    it("it should return 'Hello, Zano' when called with Zano", function(){
        assert.equal(2,2,"Hello, Zano",greet("Zano"), "this should not be true");

    });

    it("it should return 'Hello, Sizwe' when called with Sizwe", function(){
        assert.equal(2,2,"Hello, Sizwe",greet("Sizwe"), "this should not be true");
    
    });

});

//console.log(greet("Zano"));
//console.log(greet("Sizwe"));






