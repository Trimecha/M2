/*
 **  PROGRAM: Mandelbrot area
 **
 **  PURPOSE: Program to compute the area of a  Mandelbrot set.
 **           Correct answer should be around 1.510659.
 **           WARNING: this program may contain errors
 **
 **  COMPILATION: gcc -fopenmp pi.c -o pi
 **
 **  USAGE:  ./mandel
 **
 */

#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <omp.h>

# define NPOINTS 1000 
# define MAXITER 1000



struct d_complex
{
  double r;
  double i;
};
int testpoint(struct d_complex c);
struct d_complex c;
int numoutside = 0;
int n=0;
int main()
{
  int i, j;
  double area, error, eps  = 1.0e-5;
  double start_time, run_time;
  double omp_get_wtime();
   
  /* Loop over grid of points in the complex plane which contains
   * the Mandelbrot set, testing each point to see whether
   * it is inside or outside the set.
   */
   start_time = omp_get_wtime();
#pragma omp parallel for default(shared) private(n,c,j)  reduction(+:numoutside) schedule(dynamic)
  for (i=0; i<NPOINTS; i++)
  {
//	printf("i= %d,Thread=%d\n",i,omp_get_thread_num());
    for (j=0; j<NPOINTS; j++)
    {
//	printf("i=%d,j= %d,Thread=%d\n",i,j,omp_get_thread_num());
      c.r = -2.0+2.5*(double)(i)/(double)(NPOINTS)+eps;
      c.i = 1.125*(double)(j)/(double)(NPOINTS)+eps;
      n=testpoint(c);
      numoutside=numoutside+n;
    }
  }

  /* Calculate area of set and error estimate and output the results */

  area=2.0*2.5*1.125*(double)(NPOINTS*NPOINTS-numoutside)/(double)(NPOINTS*NPOINTS);
  error=area/(double)NPOINTS;

  printf("Area of Mandlebrot set = %12.8f +/- %12.8f\n",area,error);
  printf("Correct answer should be around 1.510659\n");
  run_time = omp_get_wtime() - start_time;
  printf("run time %lf seconds\n",run_time);
}

int testpoint( struct d_complex c)
{
  /* Does the iteration z=z*z+c, until |z| > 2 when point is known
   * to be outside set. If loop count reaches MAXITER,
   * point is considered to be inside the set
   */
  struct d_complex z;
  int iter,num;
  double temp;
  num=0;
  z=c;
  for (iter=0; iter<MAXITER; iter++)
  {
    temp = (z.r*z.r)-(z.i*z.i)+c.r;
    z.i = z.r*z.i*2+c.i;
    z.r = temp;
    if ((z.r*z.r+z.i*z.i)>4.0)
    {
      num++;
      break;
    }
  }
   return num;
}

