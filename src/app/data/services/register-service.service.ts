import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  constructor() { }

  register(userData: any): Promise<any> {
    // Simulación de un registro exitoso
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.email === 'test@example.com') {
          resolve({ message: 'Registro exitoso' });
        } else {
          reject({ message: 'Error en el registro' });
        }
      }, 2000);
    });
  }

}
