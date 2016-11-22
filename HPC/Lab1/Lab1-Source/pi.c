/*
 **  PROGRAM: Approximation of pi
 **
 **  PURPOSE: This program will numerically compute the integral of
 **           4/(1+x*x)
 **
 **           from 0 to 1. The value of this integral is pi.
 **           The is the original sequential program. It uses the timer
 **           from the OpenMP runtime library
 **
 **  COMPILATION: gcc -fopenmp pi.c -o pi
 **               The openmp option is needed because of the omp timer.
 **
 **  USAGE: ./pi
 **
 */

#include <stdio.h>
#include <omp.h>
static long num_steps = 100000000;
double step;

int main ()
{
  


  int i;
  double x, pi, sum = 0.0;
  double start_time, run_time;

  int tid,chunk,nthreads;
  tid = omp_get_thread_num();
  run_time = omp_get_wtime();
  omp_set_num_threads(8) ; // export OMP_NUM_THREADS=8
  
  #pragma omp parallel default(shared) private(tid,nthreads,x)
  //#pragma omp parallel num_threads(8)
 
 {
 	#pragma omp master
 	{
	 	nthreads = omp_get_num_threads();//omp_get_thread_num() ;
 		printf("%d \n", nthreads ); 		
 	}

    //nthreads = omp_get_num_threads();

    step = 1.0/(double) num_steps;


    start_time = omp_get_wtime();

    #pragma omp for reduction(+:sum)
    
      for (i=1;i<= num_steps; i++)
      {
        x = (i-0.5)*step;
        sum = sum + 4.0/(1.0+x*x);
      }
  }
  pi = step * sum;
  run_time = omp_get_wtime() - start_time;
  printf("\n pi with %ld steps is %lf in %lf seconds\n",num_steps,pi,run_time);
}
