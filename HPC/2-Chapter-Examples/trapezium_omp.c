//! ==========================================================================
//!  Computes the value of Pi using the trapeziod rule.
//!  Compile with gcc -fopenmp -O3 trapezium.c -o trapezium
//! ==========================================================================

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <math.h>

#include <omp.h>

double f(double x);
void usage(char *s);

int main (int argc, char *argv[]) {
  //! Definition of PI
  const double PI24 = 3.141592653589793238462643;
  int nthreads, tid;
  double d, x, sum=0.0, pi;
  double starttime, stoptime;
  int n=1000, i;
  char c;

  //! Check if we have at least one argument
  if (argc <=1 ) {
    usage(argv[0]);
  }
  else {
    // Parse command line arguments for a -h or -i flag */
    while ((c=getopt(argc, argv, "hi:")) != EOF) {
      switch (c) {
        case 'h':
          usage(argv[0]);
        case 'i':
          n = atoi(optarg);    //get number of intervals
          break;
        default:
          usage(argv[0]);
      }
    }
  }

  //! Size of interval
  d = 1.0/(double) n;

  //! Start parallel region
#pragma omp parallel default(shared) private(nthreads, tid, x)
  {
    //! Get thread id
    tid = omp_get_thread_num();

    //! Master thread get total number of threads
#pragma omp master
    {
      nthreads = omp_get_num_threads();
      printf("Number of threads = %d\n", nthreads);
      starttime = omp_get_wtime();  /* Measure the execution time */
    }

    //! Loop executed in parallel by the threads using reduction
#pragma omp for reduction(+:sum)
    for (i=0; i<n; i++) {
      x = d*(double)i;
      sum += f(x) + f(x+d);
    }
  }
  //! End of parallel region

  //! Multiplication by d and division by 2 to obtained value of integral
  pi = d*sum*0.5;

  //! Final time
  stoptime = omp_get_wtime();

  printf("The computed value of Pi is %2.24f\n", pi);
  printf("The  \"exact\" value of Pi is %2.24f\n", PI24);
  printf("The difference is %e\n", fabs(PI24-pi));
  printf("Time: %2.4f seconds \n", stoptime-starttime);

  exit(0);
}

//! Display program instructions
//!
//! @param char content of command line option
void usage(char *s) {
  printf("Usage: %s -i <nr of intervals>\n", s);
  exit(0);
}

//! Function to integrate
//!
//! @param x - evaluation point
//!
//! @return value of the function at point x 
double f(double x) {
  return (4.0 / (1.0 + x*x));
}


