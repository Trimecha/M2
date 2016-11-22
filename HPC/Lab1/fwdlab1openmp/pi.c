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
static long num_steps = 10000000000;
long double step;

int main ()
{
  int i;
  double x, pi, sum = 0.0;
  double start_time, run_time;
  int omp_get_num_threads();
  int omp_get_thread_num();
  double omp_get_wtime();
  int nthreads,tid; 
  step = 1.0/(double) num_steps;
  printf("step: %Le\n",step);

  start_time = omp_get_wtime();
 // start the thread
  #pragma omp parallel default(shared) private(nthreads,tid,x)
  {
    // get the thread number
    tid =omp_get_thread_num();
    printf("thread number = %d\n",tid);
    // The master thread checks how many there are 
  #pragma omp master
    {
      nthreads = omp_get_num_threads();
      printf("Number of threads = %d\n",nthreads);
    }
//  #pragma omp for reduction(+:sum)
  for (i=1;i<= num_steps; i++)
  {

  printf("i: %d\n",i);
    x = (i-0.5)*step;

    sum = sum + 4.0/(1.0+x*x);
  }
}
  pi = step * sum;
  printf("x: %le",x);
  run_time = omp_get_wtime() - start_time;
  printf("\n pi with %ld steps is %lf in %lf seconds\n",num_steps,pi,run_time);
}

