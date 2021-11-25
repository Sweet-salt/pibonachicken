int fibo_re(int n){
	if( n ==0 ){
		return 0;
	}
	else if( n == 1 ){
		return 1;
	}
	return fibo_re(n - 1) + fibo_re(n - 2);
}
