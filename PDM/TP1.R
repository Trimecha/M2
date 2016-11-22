set.seed(0)

#A = function(n=100,sig = 1)
#{
n = 100;
X1 = rnorm(n,0,1);
X2 = rnorm(n,0,1);
X3 = -X1 + rnorm(n,0,1);
X4 = -2*X3 + rnorm(n,0,1);
X5 = -X2 + rnorm(n,0,1);
X6 = X1 + 2 * X3 - X2 + rnorm(n,0,1)  ;
A = data.frame(cbind(X1,X2,X3,X4,X5,X6));

bn.s = gs(A);
graphviz.plot(bn.s)


