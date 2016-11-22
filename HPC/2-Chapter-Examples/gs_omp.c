//! ==========================================================================
//!  Computes gaussian elemination.
//!  Compile with gcc -fopenmp -O3 gs_omp.c -o gs_omp
//! ==========================================================================

#include <stdio.h>
#include <stdlib.h>
#include <omp.h>

void initialize( int n, double **A, double *b );
void gs( int p, int n, double **A, double *b,
    double epsilon, int maxit, int *numit, double *x );

int main ( int argc, char *argv[]) {
  int n,p,i;
  if(argc > 1) {
    n = atoi(argv[1]);
    p = (argc > 2) ? atoi(argv[2]) : 1;
  }
  else {
    printf("give the dimension : ");
    scanf("%d",&n);
    printf("Give the number of threads : ");
    scanf("%d",&p);
  }
  double start, stop; ;

  omp_set_num_threads(p);
  {
    double **A; // Linear system
    double *b; // Right hand side
    double *x; // Solution
    A = (double**) calloc(n,sizeof(double*));
    b = (double*) calloc(n,sizeof(double));
    x = (double*) calloc(n,sizeof(double));

    for(i=0; i<n; i++){
      A[i] = (double*) calloc(n,sizeof(double));
    }

    // Initialize problem
    initialize(n,A,b);

    double eps = 1.0e-1;
    int maxit = 2*n*n;
    int cnt = 0;

    // Solve problem using gaussian elimination
    // Start with an array of zeroes
    for(i=0; i<n; i++){
      x[i] = 0.0;
    }
    start = omp_get_wtime();
    gs(p,n,A,b,eps,maxit,&cnt,x);
    stop = omp_get_wtime();
    printf("computed %d iterations in %e\n",cnt, stop - start);
    
    // Compute error
    double sum = 0.0;
    for(i=0; i<n; i++){
      double d = x[i] - 1.0;
      sum += (d >= 0.0) ? d : -d;
    }
    printf("error : %.3e\n",sum);
  }
  return 0;
}

//! \fn void initialize( int n, double **A, double *b ) {
//! @brief Create verification matrix and vector.
//!
//! For a given @n the elements of the right hand side b all equal 2*n,
//! so the exact solution x  to A*x = b is a vector of ones.
//
//! @param n: size of the vector and square matrix
//!
//! @return A: operator of linear system.
//! @return b: right-hand side of linear equation.
void initialize( int n, double **A, double *b ) {
  int i,j;
  for(i=0; i<n; i++) {
    b[i] = 2.0*n;
    for(j=0; j<n; j++){
      A[i][j] = 1.0;
    }
    A[i][i] = n + 1.0;
  }
}

//! \fn void gs ( int p, int n, double **A, double *b,
//!     double epsilon, int maxit, int *numit, double *x ) 
//! @brief Runs the  method of Gauss-Seidel for A*x = b.
//!
//! @param p: number of threads.
//! @param n: dimension of the system.
//! @param A: n-by-n matrix A[i][i] /= 0 
//! @param b: n-dimensional vector 
//! @param epsilon: accuracy requirement 
//! @param maxit: maximal number of iterations 
//! @param x: starting vector for the iteration 
//
//! @return numit: number of iterations used 
//! @return x: approximate solution to A*x = b
void gs( int p, int n, double **A, double *b,
   double epsilon, int maxit, int *numit, double *x )
{
   double *dx;
   dx = (double*) calloc(n,sizeof(double));
   int i,j,k,id,jstart,jstop;

   int dnp = n/p;
   double dxi;

   for(k=0; k<maxit; k++) {
      double sum = 0.0;
      for(i=0; i<n; i++) {
         dx[i] = b[i];
         #pragma omp parallel shared(A,x) \
            private(id,j,jstart,jstop,dxi)
         {
            id = omp_get_thread_num();
            jstart = id*dnp;
            jstop = jstart + dnp;
            dxi = 0.0;
            for(j=jstart; j<jstop; j++)
               dxi += A[i][j]*x[j];
            #pragma omp critical
               dx[i] -= dxi;
         }
         dx[i] /= A[i][i];
         x[i] += dx[i];
         sum += ( (dx[i] >= 0.0) ? dx[i] : -dx[i]);
      }
      printf("%4d : %e\n",k,sum);
      if(sum < epsilon) break;
   }
   *numit = k+1;
   free(dx);
}

