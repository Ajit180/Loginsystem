import { inject, Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router=inject(Router);

  if (token) {
    return true; 
  } else {
    alert('Unauthorized! Please login first.');
    router.navigate(['/login']);
    return false;
  }
};

