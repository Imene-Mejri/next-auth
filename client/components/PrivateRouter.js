import { useRouter } from 'next/router';
export const PrivateRoute = (auth) => {

    if(auth === false){
        useRouter().push('/')
    }
}


