x<-c(200 ,150 ,175 ,100 , rep(0 ,76) )
for ( t in 5:80) x[t] <- x[t-4] * 1.05
x<-ts(x , frequency =4)
ts2.plot(x , las =1 , frame = FALSE , las =1)
text( seq (1 ,21 ,.25) [1:80] , x ,1:4 , col =1:4)
ts2.plot( log ( x ) , frame = FALSE , ylim = c (4.5 ,7) , las =1)
text ( seq (1 ,21 ,.25) [1:80] , log ( x ) ,1:4 , col =1:4)